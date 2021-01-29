# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.destroy_all
User.destroy_all
Category.destroy_all

@science = Category.create!(name:"science")
@adventure = Category.create!(name:"adventure")
@literature = Category.create!(name:"literature")

puts "#{Category.count} categories created"

@algebra = Book.create!(title:"Algebra",condition:"used",isbn:"12365837",image_url:"https://images-na.ssl-images-amazon.com/images/I/51iRx7fDT0L._SX384_BO1,204,203,200_.jpg",price:67,category_id:@science,author_name:"Arnold")
@physics = Book.create!(title:"Physics",condition:"new",isbn:"678765",image_url:"https://images-na.ssl-images-amazon.com/images/I/512yEu6OOPL._SX346_BO1,204,203,200_.jpg",price:34,category_id:@literature,author_name:"Steph")
@good_old_days = Book.create!(title:"good old days",condition:"new",isbn:"678347",image_url:"https://images-na.ssl-images-amazon.com/images/I/41As-GUKFyL._AC_SY1000_.jpg",price:10,category_id:@adventure,author_name:"Mary")
@MyBook = Book.create!(title:"MyBOOK",condition:"new",isbn:"678347",image_url:"https://images-na.ssl-images-amazon.com/images/I/41As-GUKFyL._AC_SY1000_.jpg",price:10,category_id:@adventure,author_name:"Mary")

puts "#{Book.count}  created"


@Jack = User.create(name:"Jack",email:"jack.com",password_digest:"123")
@Jenn = User.create(name:"Jenn",email:"Jenn.com",password_digest:"123")
@Mary = User.create(name:"Mary",email:"Mary.com",password_digest:"123")

@Jenn.books.push(@physics)
@Gary.books.push(@physics)
@Mary.books.push(@good_old_days)
