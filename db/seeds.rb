["Java", "React", "Ruby", "Rails"].each do |item|
  Item.create(text: item)
end

["Remember", "Explain", "Apply", "Analyse", "Evaluate", "Create"].each do |stage|
  Stage.create(text: stage)
end