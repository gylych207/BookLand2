class BooksController < ApplicationController
  before_action :set_book, only: :show
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET / Books
  def index
    @books = Book.all

    render json: @books
  end
  
  def show
    render json: @book, include: :author
  end

   # POST / a Book
   def create
    @book = Book.new(book_params)
    @book.user = @current_user

    if @book.save
      render json: @book, status: :created, location: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

    # PATCH/PUT /books/1
    def update
      @book = @current_user.books.find(params[:id])
  
      if @book.update(book_params)
        render json: @book
      else
        render json: @book.errors, status: :unprocessable_entity
      end
    end

     # DELETE /books/1
  def destroy
    @book = @current_user.books.find(params[:id])
    @book.destroy
  end

  
  private
  def set_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:title,:category,:condition,:isbn,:image_url,:price)
  end
end
