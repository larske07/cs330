#!/usr/bin/env python3
"""
jokes api
"""

import pyjokes
import json
import random
from flask import Flask, Response

app = Flask(__name__)

@app.route("/api/v1/jokes/<lang>/<category>/<int:num>")
def send_joke(lang, category, num) :
    resp = Response(json.dumps({"data": get_joke(lang, category, num)}))
    resp.headers["Access-Control-Allow-Origin"] = "*"
    resp.headers["Content-Type"] = "application/json"
    return resp

    
def get_joke(lang, category, num) :
    """Return a joke"""
    try:
        if num == 1:
            joke = pyjokes.get_joke(language=lang, category=category)
            return [joke]
        else:
            jokes = pyjokes.get_jokes(language=lang, category=category)
            if num > len(jokes):
                raise Exception
            jokes_to_return = random.sample(jokes, k=num)
            if not jokes:
                raise ValueError
        return jokes_to_return
    except Exception as e:
        print(e)
        return [-1]
    
if (__name__ == "__main__") :
    app.run(debug=True)