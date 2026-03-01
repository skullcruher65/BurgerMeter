from fatsecret import Fatsecret
from fuzzywuzzy import fuzz

#For authentication
fs = Fatsecret('40472b4c09414602bd0780b358134319', 'a91b753f0a5441bbae1e9ed508885980')

#Name of food and restaurant
test_food = "quesarito"
test_restaurant = "taco bell"

#Search database for restaurant
foods = fs.foods_search(test_restaurant)

print(foods)

#Get most similar food to user's food name from restaurant items
food_result = ""
similarity = 0
for food in foods:
    name = food.get('food_name')

    if (fuzz.partial_ratio(test_food, food) > similarity):
        similarity = fuzz.partial_ratio(test_food, food)
        food_result = food

print(food_result)

food_id = food_result['food_id']

#Info about the food (Nutrition, Serving size)
food_info = fs.food_get(food_id)

calories = food_info['servings']['serving']['calories']
print(calories)
