["Java", "React", "Ruby", "Rails"].each do |item|
  Item.create(text: item)
end

["Language", "Framework"].each do |category|
  Category.create(text: category)
end

User.create(email: "user@example.com", password: "password")

game = Game.create(items: Item.all)

