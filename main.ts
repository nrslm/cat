controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    hops_and_pows.vy = -150
})
let hops_and_pows: Sprite = null
scene.setBackgroundColor(9)
hops_and_pows = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . . . 
    . . . . . . . . . . . . f f f . 
    . . . . . . . . . . . . f f 5 f 
    f f f f f f f f f f f f f f f f 
    . . . . f f f f f f f f f f . . 
    . . . . f f f f f f f f f . . . 
    . . . . f . . . . . f . f . . . 
    . . . . f . . . . . f . f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(hops_and_pows, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
hops_and_pows.ay = 350
scene.cameraFollowSprite(hops_and_pows)
