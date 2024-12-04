input.onButtonPressed(Button.A, function () {
    ESP8266_IoT.publishMqttMessage("hello from MicroBit via MQTT", "button_state", ESP8266_IoT.QosList.Qos2)
})
input.onButtonPressed(Button.B, function () {
    ESP8266_IoT.breakMQTT()
})
ESP8266_IoT.setMQTT(
ESP8266_IoT.SchemeList.TCP,
"MicroBit",
"mqtt_user",
"emiliano!",
""
)
ESP8266_IoT.connectMQTT("raspberrypi", 1883, false)
