import base64
from fatsecret import Fatsecret
from fuzzywuzzy import fuzz
from icrawler.builtin import BingImageCrawler
from icrawler.storage import BaseStorage

#For authentication
fs = Fatsecret('40472b4c09414602bd0780b358134319', 'a91b753f0a5441bbae1e9ed508885980')

#Name of food and restaurant
test_food = "big mac"
test_restaurant = "mcdonalds"

#Search database for food from restaurant
search = test_restaurant + " " + test_food
foods = fs.foods_search(search)

#Get most similar food to user's food name from restaurant items
food_result = ""
similarity = 0
for food in foods:
    name = food.get('food_name')

    if (fuzz.partial_ratio(search, food) > similarity):
        similarity = fuzz.partial_ratio(search, food)
        food_result = food

print(food_result)

food_id = food_result['food_id']

#Info about the food (Nutrition, Serving size)
food_info = fs.food_get(food_id)

calories = food_info['servings']['serving']['calories']
print("Calories: " + calories)

crawler = BingImageCrawler(storage={'root_dir':'images/bing'})

crawler.crawl(keyword=search, max_num=1)


