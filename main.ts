let projectile: Sprite = null
let mySprite = sprites.create(assets.image`SS`, SpriteKind.Player)
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
    } else if (controller.A.isPressed()) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 100, 0)
    } else {
        mySprite.vx = 0
        mySprite.vy = 0
    }
})
