input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
})
basic.showLeds(`
    . . . . .
    # # . # #
    . . . . .
    . # # # .
    # . . . #
    `)
