import requests
import time

url = 'http://192.168.43.177/get_alarm'
url2="http://localhost/bot/alarm.php"
#url3="http://localhost/bot/alarmST.php" 
data = ({"Language": "ru"}, {"Params": [None, None, 1, None, None]}, {"V": 1}, {"Adult": False})    
#requests.post(url3,json=data)
while(1!=0):
	try:
		res = requests.post(url, json=data) 
		print(str(res.content))
		if(str(res.content) == "b'Alarm=1'"):
			print("ТРЕВОГА!!!")
			requests.post(url2,json=data)
			time.sleep(60)
		time.sleep(10)
	except:
		print("Ошибка")