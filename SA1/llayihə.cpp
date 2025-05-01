int pirPin = 2;    // PIR sensorun çıxışı
int ledPin = 9;    // LED çıxışı

void setup() {
  pinMode(pirPin, INPUT);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int hareket = digitalRead(pirPin);  
  if (hareket == HIGH) {  // Hərəkət aşkar edildikdə
    digitalWrite(ledPin, HIGH);  
    delay(1000);  // 1 saniyə yansın
    digitalWrite(ledPin, LOW);   
    delay(500);   // 0.5 saniyə sönsün
  }
}