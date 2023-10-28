#!/usr/bin/env python3
"""Flask application to use `pyjokes`"""

import random
from typing import List

import pyjokes
from flask import Flask, render_template, request, abort

app = Flask(__name__)


@app.route("/", methods=["GET"])
def index():
    return render_template("base.html")


@app.route("/", methods=["POST"])
def index_jokes():
    """Render the template with jokes"""
    language = request.form.get("language")
    category = request.form.get("category")
    number = int(request.form.get("number"))

    try:
        jokes = send_joke(language, category, number)
    except ValueError:
        abort(404)
    
    return render_template("jokes.html", jokes=jokes, language=language, category=category, number=number)


def send_joke(
    language: str = "en", category: str = "all", number: int = 1
) -> List[str]:
    try:
        if number == 1:
            joke = pyjokes.get_joke(language=language, category=category)
            return [joke]
        else:
            jokes = pyjokes.get_jokes(language=language, category=category)
            if not jokes:
                raise ValueError
        return jokes
    except Exception as e:
        print(e)
        return [-1]
