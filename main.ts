input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(180)
    basic.showIcon(IconNames.Happy)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.InBackground)
    servos.P0.setAngle(90)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    servos.P0.setAngle(180)
    basic.showIcon(IconNames.Happy)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
    servos.P0.setAngle(90)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
})
/**
 * Hecho por IkrlegidO
 */
/**
 * ===================
 */
/**
 * Chatarra Colector
 */
/**
 * Moneditas
 */
/**
 * ===================
 */
/**
 * I.E.S. Bahía de Algeciras
 */
music.setBuiltInSpeakerEnabled(true)
servos.P0.setAngle(90)
basic.showLeds(`
    . . . . .
    # # . # #
    . . . . .
    . # # # .
    # . . . #
    `)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
