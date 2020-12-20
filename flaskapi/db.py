import mysql.connector

config = {
	'user':'root', 
	'password':'admin123',
    'host':'127.0.0.1',
    'database':'HITSGroup'
}

db = mysql.connector.connect(**config)
cursor = db.cursor()