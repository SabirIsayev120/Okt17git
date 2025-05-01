from microbit import *
import radio

radio.on()  # Micro:bit radio modunu aktiv edir
radio.config(channel=7)  # Kanalı seçirik (hər iki cihazda eyni olmalıdır)

PIR_PIN = pin1  # Hərəkət sensoru pin1-ə qoşulur

while True:
    if PIR_PIN.read_digital():  # Hərəkət aşkar edilərsə
        display.show(Image.HAPPY)  # Micro:bit ekranında gülüş göstər
        radio.send("MOTION_DETECTED")  # Dron idarəetmə cihazına siqnal göndər
        sleep(1000)
    else:
        display.show(Image.SAD)
        import network


SSID = "WiFi_Adı"
PASSWORD = "WiFi_Şifrəsi"

def connect_wifi():
    sta_if = network.WLAN(network.STA_IF)
    sta_if.active(True)
    sta_if.connect(SSID, PASSWORD)
    while not sta_if.isconnected():
        pass
    print("WiFi bağlantısı uğurla tamamlandı!")

connect_wifi()

def send_image():
    url = "https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/sendPhoto"
    image_path = "/photo.jpg"  # ESP32-CAM çəkdiyi şəkil
    with open(image_path, "rb") as image_file:
        files = {"photo": image_file}
        response = urequests.post(url, files=files)
        print(response.text)

send_image()

SSID = "WiFi_Adı"
PASSWORD = "WiFi_Şifrəsi"

def connect_wifi():
    sta_if = network.WLAN(network.STA_IF)
    sta_if.active(True)
    sta_if.connect(SSID, PASSWORD)
    while not sta_if.isconnected():
        pass
    print("WiFi bağlantısı uğurla tamamlandı!")

connect_wifi()

def send_image():
    url = "https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/sendPhoto"
    image_path = "/photo.jpg"  # ESP32-CAM çəkdiyi şəkil
    with open(image_path, "rb") as image_file:
        files = {"photo": image_file}
        response = urequests.post(url, files=files)
        print(response.text)

send_image()