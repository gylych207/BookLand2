# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.destroy_all
User.destroy_all
Author.destroy_all

@mathew = Author.create!(name:"Mathew G")
@gary = Author.create!(name:"Gary A")
@peter = Author.create!(name:"Peter C")

puts "#{Author.count} Authors created"

@algebra = Book.create!(title:"Algebra",category:"science",condition:"used",isbn:"12365837",image_url:"https://images-na.ssl-images-amazon.com/images/I/51iRx7fDT0L._SX384_BO1,204,203,200_.jpg",price:67,author:@mathew)
@physics = Book.create!(title:"Physics",category:"science",condition:"new",isbn:"678765",image_url:"https://images-na.ssl-images-amazon.com/images/I/512yEu6OOPL._SX346_BO1,204,203,200_.jpg",price:34,author:@gary)
@good_old_days = Book.create!(title:"good old days",category:"roman",condition:"new",isbn:"678347",image_url:"https://images-na.ssl-images-amazon.com/images/I/41As-GUKFyL._AC_SY1000_.jpg",price:10,author:@peter)

puts "#{Book.count} Books created"


@Jack = User.create(name:"Jack",email:"jack.com",password_digest:"123")
@Jenn = User.create(name:"Jenn",email:"Jenn.com",password_digest:"123")
@Mary = User.create(name:"Mary",email:"Mary.com",password_digest:"123")

@Jenn.books.push(@algebra)
@Jenn.books.push(@physics)
@Mary.books.push(@good_old_days)
