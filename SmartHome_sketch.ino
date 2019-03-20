/******************************************************************
Created with PROGRAMINO IDE for Arduino - 18.03.2019 10:11:18
Project     : SmartHome
Libraries   : ESP8266WiFi ESP8266WebServer OneWire DallasTemperature DHT Servo
Author      : LeoSanders
Description : Home automation program for WeMos D1 microcontroller
******************************************************************/

#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <OneWire.h>
#include <DallasTemperature.h>
#include <DHT.h>
#include <Servo.h>

#define PIN_DSSENSOR 4
#define PIN_SERVO 16
#define PIN_DHT 0
#define TYPE_DHT DHT11
#define PIN_PIR 12
#define PIN_LED 13
#define SERVER_PORT 80

//const char* ssid = "FREE-NTI";
//const char* password = "123000321";
const char* ssid = "LYO-L21_564E";
const char* password = "a270bb5b";

String html="<html><head><title>Control</title></head><body>SEND ME SOMETHING, DUDE</body></html>";

int pirVal = 0;
int guard = 0;
int alarm = 0;

Servo servo;
OneWire oneWire(PIN_DSSENSOR);
DallasTemperature ds(&oneWire);
DHT dht(PIN_DHT,TYPE_DHT);
ESP8266WebServer server(SERVER_PORT);


void setup() {

  // Настройка последовательного соединения
  Serial.begin(115200);
  delay(10);

  // Установка режима пинов
  pinMode(PIN_PIR, INPUT_PULLUP);
  pinMode(PIN_LED, OUTPUT);

  // Запуск сенсоров и исполнительных устройств
  ds.begin();
  dht.begin();
  servo.attach(PIN_SERVO);

  // Подключение к сети WiFi
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");

  // Запуск обработчиков запросов
  server.on("/", handleRoot);
  server.on("/get_data", handleGetData);
  server.on("/get_alarm", handleGetAlarm);
  server.on("/set_window", handleSetWindow);
  server.on("/set_light", handleSetLight);
  server.on("/set_guard", handleSetGuard);
  Serial.println("Server started");
  server.begin();

  // Вывод IP-адреса сервера
  Serial.print("Use this URL: ");
  Serial.print("http://");
  Serial.print(WiFi.localIP());
  Serial.println("/");
}

void handleRoot() { 
  // Обработчик пустого запроса
  server.send(200, "text/html", html); 
}

void handleSetWindow() { 
  // Обработчик установки параметров окна
  int rotate_angle = server.arg("Rotate").toInt();
  servo.write(rotate_angle);
  server.send(200, "text/html", "ok");
}

void handleSetLight() { 
  // Обработчик установки параметров света
  int light = server.arg("Light").toInt();
  if(light == 1){
    digitalWrite(PIN_LED, HIGH);
  }
  else if(light == 0){
    digitalWrite(PIN_LED, LOW);
  }
  server.send(200, "text/html", "ok");
}

void handleSetGuard() { 
  // Обработчик установки параметров охраны
  guard = server.arg("Guard").toInt();
  if (guard == 0) {
    alarm = 0;
  }
  server.send(200, "text/html", "ok");
}

void handleGetData() { 
  // Обработчик запроса данных датчиков
  ds.requestTemperatures();
  float temp_out = ds.getTempCByIndex(0);
  float humidity = dht.readHumidity();
  float temp_in = dht.readTemperature();
  server.send(200, "text/html", "Temp_out="+String(temp_out)+"&Temp_in="+String(temp_in)+"&Humidity="+String(humidity)+"&Moving="+"zaglushka"+"&Pressure="+"zaglushka"+"&Light="+"zaglushka"+"&Jalousie="+"zaglushka"+"&Guard="+String(guard));
}

void handleGetAlarm() { 
  // Обработчик запроса данных тревоги
  server.send(200, "text/html", "Alarm="+String(alarm));
}

void loop() {
  server.handleClient();

  // Рабочий цикл отслеживания движения
  if(guard == 1 && alarm == 0){
    pirVal = digitalRead(PIN_PIR);
    if (pirVal == 1) {
      alarm = 1;
      Serial.println("Motion!");
      delay(2000);
    }
  }
}
