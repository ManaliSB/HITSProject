import re
import datetime
import csv

from .db import db
from .db import cursor





def add_log(fname, lname,email,dob,joindate):
    sql = ("INSERT INTO authors(First_Name,Last_Name,Email,DateOfBirth,JoinDate) VALUES (%s,%s,%s,%s,%s)")
    cursor.execute(sql, (fname, lname,email,dob,joindate))
    db.commit()
    log_id = cursor.lastrowid
    print("Added log {}".format(log_id))


def getCSVdata():
	f= open('authors.csv')
	csv_f = csv.reader(f)
	cleanFname = ""
	cleanLname = ""
	cleanEmail = ""
	cleanDOB = ""
	cleanJoinDate = ""
	regex = '^[a-z0-9]+[\._\']?[a-z0-9]+[@]\w+[.]\w{2,3}$'
	lineCnt=0
	for row in csv_f:
		if lineCnt == 0:
			pass
		else:	
			name = row[1]
			l = name.split();
			
			if len(l) > 1:
					cleanFname = re.sub('\W+','', l[0])
					cleanLname = re.sub('\W+','', l[1])
					
			if (re.search(regex,row[2])):
					cleanEmail = row[2]
					
			else:
				print(row[2])

			cleanDOB = datetime.datetime.strftime(datetime.datetime.strptime(row[3],'%m/%d/%Y'),'%Y-%m-%d')
			print(cleanDOB)
			
			cleanJoinDate = datetime.datetime.strftime(datetime.datetime.strptime(row[4],'%m/%d/%Y'),'%Y-%m-%d')
			add_log(cleanFname,cleanLname,cleanEmail,(cleanDOB),(cleanJoinDate))
		lineCnt += lineCnt+1;
		

	f.close()