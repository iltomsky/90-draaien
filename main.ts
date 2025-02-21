input.onButtonPressed(Button.A, function () {
    Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 30)
    Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CCW, 30)
    basic.pause(1000)
    Maqueen_V5.motorStop(Maqueen_V5.Motors.All)
})
