import mysql.connector
from mysql.connector import errorcode
from .csvimport import getCSVdata

from .db import cursor

DB_Name = 'HITSGroup'

TABLES = {}

TABLES['authors'] = (
	"CREATE TABLE `authors` ("
	" `ID` int(11) NOT NULL AUTO_INCREMENT,"
	" `First_Name` varchar(250),"
	" `Last_Name` varchar(250),"
	" `Email` varchar(250),"
	" `DateOfBirth` DATE NOT NULL,"
	" `JoinDate` DATE NOT NULL,"
	" PRIMARY KEY (`ID`)"
	")"
)

def create_db():
	cursor.execute("CREATE DATABASE IF NOT EXISTS {} DEFAULT CHARACTER SET 'utf8'".format(DB_Name))
	print("Database {} created".format(DB_Name))


def create_table():
	cursor.execute("USE {}".format(DB_Name))

	for table_name in TABLES:
		table_details = TABLES[table_name]

	try:
		print("Creating table ({}) ".format('authors'),end="")
		cursor.execute(table_details)
	except mysql.connector.Error as err:
		if err.errno == errorcode.ER_TABLE_EXISTS_ERROR:
			print("Already Exists")
		else:
			print(err.msg)
	else:
		pass
	finally:
		pass

def write_table():
	q = ("SELECT COUNT(*) FROM authors")
	cursor.execute(q)
	count = cursor.fetchall()
	recCount = (count[0])
	print(recCount)
	if recCount[0] >= 40:
		print("Record exist")
	else:
		print((recCount[0]))
		getCSVdata();



def read_table():
	sql = ("SELECT * FROM authors")
	cursor.execute(sql)
	result = cursor.fetchall()

	
	return result


create_db()
create_table()
