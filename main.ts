basic.forever(function () {
    if (100 <= pins.analogReadPin(AnalogPin.P2) && pins.analogReadPin(AnalogPin.P2) < 200) {
        music.ringTone(262)
    }
})
