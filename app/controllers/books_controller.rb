class BooksController < ApplicationController
  before_action :set_book, only: :show
  before_action :authorize_request, only: [:index, :create, :update, :destroy]

  # GET / Books
  def index
    @books = Book.all

    render json: @books
  end
  
    # GET / Show
  def show
    render json: @book, include: :category
  end

   # POST / a Book
   def create
    @book = Book.create(book_params)
    puts "BOOK #{@book}"
    puts "currentUser #{@current_user}"
    puts "BOOKUSERS #{@book.users}"
    # @book.users = @current_user
    @book.users.push(@current_user)

    if @book.save
      render json: @book, status: :created, location: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

    # PATCH/PUT /books/1
    def update
      @book = Book.find(params[:id])
  
      if @current_user && @book.update(book_params)
        render json: @book
      else
        render json: @book.errors, status: :unprocessable_entity
      end
    end

     # DELETE /books/1
  def destroy
    @book = Book.find(params[:id])
    @book.destroy
  end

  def filters
    books = Book.all
    books = books.where('title ILIKE ?', book_params[:title]) if book_params[:title].present?
    books = books.where('condition ILIKE ?', book_params[:condition]) if book_params[:condition].present?
    books = books.where('author_name ILIKE ?', book_params[:author_name]) if book_params[:author_name].present?

    if params["book"][:price_to].present? && params["book"][:price_from].present?
      books = books.where('price BETWEEN ? AND ?', params["book"][:price_from], params["book"][:price_to])
    elsif params["book"][:price_from].present?
      books = books.where('price >= ?', params["book"][:price_from])  
    elsif params["book"][:price_to].present?
      books = books.where('price >= ?', params["book"][:price_from]) 
    end
    render json: books
  end
    
  
  private
  def set_book
    @book = Book.find(params[:id])
  end
  
  def book_params
    params.require(:book).permit(:title,:condition,:isbn,:image_url,:price,:category_id,:author_name)
  end
end
