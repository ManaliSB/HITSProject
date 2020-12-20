from flask import Blueprint, jsonify

from .dboperations import read_table

main = Blueprint('main', __name__)



@main.route('/authors')
def authors():
    author_list = read_table();
    authors = []
    
    for a in author_list:
    	authors.append({'FName': a[1], 'LName': a[2], 'email':a[3], 'dob':a[4], 'joinDate':a[5]})
    
   
    return jsonify({'authors' : authors})
