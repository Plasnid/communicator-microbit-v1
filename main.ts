input.onButtonPressed(Button.A, function () {
    radio.sendString("You know what?")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Chicken Butt")
})
radio.setGroup(1)
basic.forever(function () {
	
})
