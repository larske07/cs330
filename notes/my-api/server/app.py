"""Fake Data API"""

import random
import json
from flask import Flask, Response

app = Flask(__name__)

@app.route("/api/v1/number")
def send_number() :
    """Return a random number"""
    resp = Response(json.dumps({"data": random.randint(1, 100)}))
    resp.headers["Access-Control-Allow-Origin"] = "*"
    resp.headers["Content-Type"] = "application/json"
    return resp

if (__name__ == "__main__") :
    app.run(debug=True)