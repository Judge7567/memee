let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . . f . . d d . . . . . . . 
    . . . . . . 6 d d . f f . . . . 
    . . . . . . f f f f f f f f f f 
    . . . . . . 6 f f 6 6 f . . . . 
    . . . . . . 6 6 6 f 6 6 . . . . 
    . . . . . . 6 6 f f . . . . . . 
    . . . . . . f f 6 6 . . . . . . 
    . . . . . 6 f 6 6 f . . . . . . 
    . . . . . 6 6 . . 6 . . . . . . 
    . . . . . 6 . . . 6 . . . . . . 
    . . . f f 6 . . . f . . . . . . 
    . . . f . . . . . f f . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
forever(function () {
    if (controller.up.isPressed()) {
        mySprite.vy = -70
    } else if (controller.down.isPressed()) {
        mySprite.vy = 70
    } else if (controller.left.isPressed()) {
        mySprite.vx = -70
    } else if (controller.right.isPressed()) {
        mySprite.vx = 70
    } else {
        mySprite.vx = 0
        mySprite.vy = 0
    }
})
