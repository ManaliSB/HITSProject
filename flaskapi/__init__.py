

from flask import Flask



def create_app():
    app = Flask(__name__)

    from .view import main
    app.register_blueprint(main)

    from .dboperations import write_table 
    write_table();
    return app