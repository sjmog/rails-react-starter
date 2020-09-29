["Java", "React", "Ruby", "Rails"].each do |item|
  Item.create(text: item)
end

["This", "That"].each do |category|
  Category.create(text: category)
end