class RentsController < ApplicationController
	before_action :set_book, only: [:create]
  	before_action :authorize_request, only: [:index, :create, :update, :destroy]

  	def index
		@rents = @current_user.rents
		render json: @rents, status: 200
	end
  	
  	def create
	    @rent = Rent.new(rent_params)
	    @rent.user_id = @current_user.id
	    @rent.book_id = @book.id 
	    if @rent.save
  			@rents = @current_user.rents
	      render json: @rents, status: :created
	    else
	      render json: @rent.errors, status: :unprocessable_entity
	    end
  	end

  	def update
  		rent = Rent.find_by(id: params[:id])
  		rent.update(rating: params[:rent])
  		update_book_rating(rent)
  		@rents = @current_user.rents
  		render json: @rents, status: 200
  	end

  	def destroy
  		@rent = Rent.find_by(id: params[:id]).destroy
  		@rents = @current_user.rents
  		render json: @rents, status: 200
  	end
  	private
  	def rent_params
    	params.require(:rent).permit(:description, :days)
  	end

  	def set_book
	   @book = Book.find(params[:book_id])
	end

	def update_book_rating(rent)
		book = rent.book
  		rating = book.rents.sum(:rating)
	    count = book.rents.count
	    result = count > 0 ? (rating/count).to_f : 0
	    book.update(rating: result)
	end
end