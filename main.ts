let IZQUIERDA = false
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.showIcon(IconNames.Happy)
basic.pause(2000)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 20 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        IZQUIERDA = Math.randomBoolean()
        if (IZQUIERDA == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(500)
        }
        if (IZQUIERDA == false) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            basic.pause(500)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
basic.forever(function () {
    basic.showString("EMILIO")
})
basic.forever(function () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    basic.pause(100)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    basic.pause(100)
})
basic.forever(function () {
    strip.showRainbow(1, 360)
})
basic.forever(function () {
    music.playMelody("G B A G C5 B A B ", 120)
})
