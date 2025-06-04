import random
import string
from flask import Flask
 
app = Flask(__name__)
 
@app.route('/')
def random_letter():
    return random.choice(string.ascii_lowercase)
 
if __name__ == '__main__':
    app.run(debug=True)
 