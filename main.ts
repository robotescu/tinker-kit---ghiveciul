input.onButtonPressed(Button.A, function () {
    activare = 1
})
let activare = 0
OLED.init(128, 64)
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    if (pins.analogReadPin(AnalogPin.P1) < 400) {
        OLED.writeStringNewLine("Uda-ma!")
        for (let index = 0; index < 4; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            tinkercademy.LED(DigitalPin.P2, OnOff.On)
            pins.servoWritePin(AnalogPin.P3, 0)
            basic.pause(500)
            tinkercademy.LED(DigitalPin.P2, OnOff.Off)
            pins.servoWritePin(AnalogPin.P3, 45)
        }
    } else {
        OLED.writeStringNewLine("Sunt bine, multumesc")
        tinkercademy.LED(DigitalPin.P2, OnOff.Off)
        pins.servoWritePin(AnalogPin.P3, 0)
    }
    OLED.clear()
})
