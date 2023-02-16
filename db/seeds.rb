CoffeeType.destroy_all
Review.destroy_all
Roaster.destroy_all

puts "seeding begun"

# Define constants
muffin_types = ["Blueberry", "Chocolate Chip", "Apple Cinnamon", "Banana Nut", "Lemon Poppy Seed", "Carrot Cake", "Cream Cheese", "Bran"]
coffee_images = ["https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/773958/pexels-photo-773958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/4109743/pexels-photo-4109743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/4109748/pexels-photo-4109748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]

# Create Roasters
Roaster.create(name: "Corvus Coffee Roasters", img_url: "https://testedcoffee.com/wp-content/uploads/2021/03/corvus-coffee-picture-for-denver-coffee-roasters.jpg", website_url: "https://www.corvuscoffee.com/")
Roaster.create(name: "Kaladi Coffee Roasters", img_url: "https://testedcoffee.com/wp-content/uploads/2021/03/kaladis-coffee-roaster.jpg", website_url: "https://kaladicoffee.com/")
Roaster.create(name: "Huckleberry Coffee Roasters", img_url: "https://s3-media0.fl.yelpcdn.com/bphoto/SUP3uukMOvxSYzbO3ESQkg/o.jpg", website_url: "https://huckleberryroasters.com/")
Roaster.create(name: "MiddleState Coffee Roasters", img_url: "https://testedcoffee.com/wp-content/uploads/2021/03/middlestate-coffe.jpg", website_url: "https://www.middlestatecoffee.com/" )


# Create CoffeeTypes
20.times { CoffeeType.create(
    blend_name: Faker::Coffee.blend_name, 
    roaster_id: Roaster.all.sample.id,
    intensifier: Faker::Coffee.intensifier,
    origin: Faker::Coffee.origin,
    notes: Faker::Coffee.notes,
    muffin_pairing: muffin_types.sample,
    img_url: coffee_images.sample
) }

# Create Reviews
50.times { Review.create(
    reviewer_name: Faker::FunnyName.name,
    review_body: Faker::Quotes::Shakespeare.romeo_and_juliet,
    rating: [1, 2, 3, 4, 5].sample,
    coffee_type_id: CoffeeType.all.sample.id
)}

puts "seeding finished"