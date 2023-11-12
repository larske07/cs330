import requests
from flask import Flask, request, render_template, send_from_directory
from flask import redirect, url_for
import sqlite3

app = Flask(__name__)


def get_data_from_db(query: str) -> list:
    """retrieve data from the database and return to the user"""
    conn = sqlite3.connect('world.sqlite3')
    c = conn.cursor()
    print(query)
    c.execute(query)
    results = c.fetchall()
    conn.close()
    return results


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "GET":
        print('Inside GET method')
        # display links to 3 options (country / region / continent)
        return render_template("index.html")

@app.route("/<string:scope>", methods=["POST"])
def populateTable(scope: str):
    if request.method == "POST":
        print('Inside POST method')
        if scope == 'country':
            country = request.form.get('country')
            result = get_data_from_db(f"SELECT c.name, c.continent, c.region, ci.name, c.surfacearea, c.population, c.governmentform, c.headofstate FROM country c JOIN city ci ON c.capital=ci.id WHERE c.name='{country}'")
            return render_template("country.html", result=result, form=False)
            

        elif scope == 'region':  
            region = request.form.get('region')
            result = get_data_from_db(f"SELECT c.name, c.continent, c.region, ci.name, c.surfacearea, c.population, c.governmentform, c.headofstate FROM country c JOIN city ci ON c.capital=ci.id WHERE c.region='{region}'")
            return render_template("region.html", result=result, form=False)

        elif scope == 'continent':
            continent = request.form.get('continent')
            result = get_data_from_db(f"SELECT c.name, c.continent, c.region, ci.name, c.surfacearea, c.population, c.governmentform, c.headofstate FROM country c JOIN city ci ON c.capital=ci.id WHERE c.continent='{continent}'")
            return render_template("continent.html", result=result, form=False)



@app.route("/<string:scope>")
def search(scope: str):
    if scope == "country":
        # get countries from the database and populate options of the drop-down menu
        countries = get_data_from_db("SELECT name FROM country") 
        return render_template("country.html", countries=countries, form=True)
    elif scope == "region":
        # get regions from the database and populate options of the drop-down menu
        regions = get_data_from_db("SELECT DISTINCT region FROM country") 
        return render_template("region.html", regions=regions, form=True)
    elif scope == "continent":
        # get continents from the database and populate options of the drop-down menu
        continents = get_data_from_db("SELECT DISTINCT continent FROM country") 
        return render_template("continent.html", continents=continents, form=True)
    else:
        return 'E'
