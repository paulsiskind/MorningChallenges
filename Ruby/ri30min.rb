email = "paulsiskind@gmail.com"
username, domain = email.split('@')
puts username
puts domain
print domain
p domain



ints = (1..10).to_a
p ints

p ints *3
p ints * 4

p ints.select{ |int| int%2==0}
p "Odd"
p ints.select{ |int| int.odd?}

isOdd = ->(int){int.odd?}
p isOdd.call(ints[1])


puts "\n\n Moar! \n\n Array space delimiter \n"

words = %w{one two three}

print words

puts "\n\n Array space delimiter"

p words * '||||||||||||'


puts "\n\n  even moars \n\n"

letters = ('a'..'f').to_a

p letters

letters.map! do |letter|
  letter.upcase
end

p letters

puts "\n\n Money"
money = 205
p "%.2f" % money

puts "\n\n moars \n"

toys = {toy: 't-rex', ages: '2-3', price: 2000}
p toys[:toy]
p toys[:ages]



puts "\n\n\n"

def create_variables(args)
  args.each{|name| instance_variable_set "@"+ name, "#{name.capitalize}'s are delicious!"}
end

create_variables(['apple','peach','cherry'])

p @apple
p @peach
p @cherry

puts "\n\n\n making an array"

def something(*array)
  p array
end

something(213,"tacos","Burritoes")


