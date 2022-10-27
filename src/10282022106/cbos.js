let CALCNUM1 = 0
let CALCNUM2 = 0
brick.buttonEnter.onEvent(ButtonEvent.Pressed, function () {
    brick.showNumber(CALCNUM1 + CALCNUM2, 7)
})
brick.buttonUp.onEvent(ButtonEvent.Pressed, function () {
    CALCNUM1 += 1
    brick.showNumber(CALCNUM1, 2)
})
brick.buttonDown.onEvent(ButtonEvent.Bumped, function () {
    CALCNUM1 += -1
    brick.showNumber(CALCNUM1, 2)
})
brick.buttonRight.onEvent(ButtonEvent.Pressed, function () {
	
})
brick.buttonLeft.onEvent(ButtonEvent.Pressed, function () {
    CALCNUM2 += -1
    brick.showNumber(CALCNUM2, 5)
})
brick.showString("Welcome to CBOS !", 1)
brick.showString("Now going to the ", 2)
brick.showString("Calc DEMO", 3)
brick.showString("For more information,", 4)
brick.showString("look at ", 5)
brick.showString("k1zana.github.io/cbos/", 6)
brick.showString("PLEASE DO NOT PRESS", 8)
brick.showString("ANYTHING !!!", 9)
brick.showString("BAT: " + brick.batteryInfo(BatteryProperty.Level) + " " + "|" + " " + "S/N: " + control.deviceSerialNumber(), 10)
pause(15000)
brick.showImage(images.progressBar0)
control.waitMicros(0.5)
brick.showImage(images.progressBar1)
control.waitMicros(0.5)
brick.showImage(images.progressBar2)
control.waitMicros(0.5)
brick.showImage(images.progressBar3)
control.waitMicros(0.5)
brick.showImage(images.progressBar4)
control.waitMicros(0.5)
brick.showString("Number 1:" + "     BAT:" + " " + brick.batteryInfo(BatteryProperty.Level) + "%", 1)
brick.showString("Number 2:", 4)
brick.showString("Numbers can be changed", 9)
brick.showString("with the buttons !", 10)
brick.showString("To calc, press enter", 7)
