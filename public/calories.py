from flask import Flask, jsonify, request
from flask_cors import CORS
from fatsecret import Fatsecret
from fuzzywuzzy import fuzz
from icrawler import ImageDownloader
from icrawler.builtin import BingImageCrawler

app = Flask(__name__)
CORS(app)

fs = Fatsecret('40472b4c09414602bd0780b358134319', 'a91b753f0a5441bbae1e9ed508885980')

class UrlCollector(ImageDownloader):
    def download(self, task, default_ext, req_timeout=None, **kwargs):
        self.signal.urls.append(task['file_url'])

@app.route('/calories')
def get_calories():
    food = request.args.get('food')
    restaurant = request.args.get('restaurant')
    search = restaurant + " " + food

    # Get calories
    foods = fs.foods_search(search)
    food_result = None
    similarity = 0
    for f in foods:
        if fuzz.partial_ratio(search, f) > similarity:
            similarity = fuzz.partial_ratio(search, f)
            food_result = f

    food_info = fs.food_get(food_result['food_id'])
    calories = food_info['servings']['serving']['calories']

    # Get image URL
    crawler = BingImageCrawler(downloader_cls=UrlCollector)
    crawler.downloader.signal.urls = []
    image = crawler.crawl(keyword=search, max_num=1)
    urls = crawler.downloader.signal.urls
    image_url = urls[0] if urls else None

    return jsonify({'calories': calories, 'image': image_url})

if __name__ == '__main__':
    app.run(port=5000)
