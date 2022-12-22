serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    USB_response = serial.readLine()
    if (USB_response.includes("ok")) {
        basic.showIcon(IconNames.Square)
    }
})
radio.onReceivedStringDeprecated(function (receivedString) {
    if (receivedString.includes("&")) {
        point = receivedString.indexOf("&")
        newstring = receivedString.substr(0, point)
        serial.writeString(newstring)
    } else {
        serial.writeLine(receivedString)
        if (receivedString.includes("takeoff")) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                # # # # #
                `)
        } else if (receivedString.includes("land")) {
            basic.showLeds(`
                # # # # #
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        } else if (receivedString.includes("left")) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # . # # #
                . # . . .
                . . # . .
                `)
        } else if (receivedString.includes("right")) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        } else if (receivedString.includes("ccw")) {
            basic.showLeds(`
                . # # # #
                . # . . #
                . # . . #
                # . # . #
                . # . . #
                `)
        } else if (receivedString.includes("cw")) {
            basic.showLeds(`
                # # # # .
                # . . # .
                # . . # .
                # . # . #
                # . . # .
                `)
        } else if (receivedString.includes("forward")) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        } else if (receivedString.includes("back")) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        } else if (receivedString.includes("flip")) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . # # # .
                `)
        } else if (receivedString.includes("speed")) {
            basic.showLeds(`
                # . # . .
                # # # # .
                # # # # #
                # # # # .
                # . # . .
                `)
        } else if (receivedString.includes("up")) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . # # # .
                . # # # .
                `)
        } else if (receivedString.includes("down")) {
            basic.showLeds(`
                . # # # .
                . # # # .
                # # # # #
                . # # # .
                . . # . .
                `)
        } else if (receivedString.includes("RC")) {
            basic.showIcon(IconNames.Duck)
        } else if (receivedString.includes("emergency")) {
            basic.showIcon(IconNames.Angry)
        } else {
            basic.showIcon(IconNames.Confused)
        }
    }
})
let newstring = ""
let point = 0
let USB_response = ""
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
radio.setGroup(20)
basic.showIcon(IconNames.Square)
