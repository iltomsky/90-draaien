basic.forever(function () {
    Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 40)
    Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CCW, 40)
    basic.pause(1000)
    Maqueen_V5.motorStop(Maqueen_V5.Motors.All)
})
