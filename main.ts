namespace SpriteKind {
    export const LIFE = SpriteKind.create()
}
let projectile2: Sprite = null
let projectile: Sprite = null
let HEALTH = 3
let sNAKE = sprites.create(assets.image`SS`, SpriteKind.Player)
let gURAD = sprites.create(assets.image`GURD`, SpriteKind.Enemy)
let bULLET = sprites.create(img`
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
    `, SpriteKind.Projectile)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(sNAKE)
tiles.placeOnTile(sNAKE, tiles.getTileLocation(1, 38))
tiles.placeOnTile(gURAD, tiles.getTileLocation(4, 30))
forever(function () {
    sNAKE.vy = 70
    if (controller.up.isPressed() && (sNAKE.tileKindAt(TileDirection.Bottom, assets.tile`myTile`) || (sNAKE.tileKindAt(TileDirection.Bottom, assets.tile`myTi`) || false))) {
        sNAKE.vy = -150
        pause(150)
        sNAKE.vy = 70
    } else if (controller.down.isPressed()) {
        sNAKE.vy = 70
    } else if (controller.left.isPressed()) {
        sNAKE.setImage(assets.image`SS0`)
        sNAKE.vx = -70
    } else if (controller.right.isPressed()) {
        sNAKE.setImage(assets.image`SS`)
        sNAKE.vx = 70
    } else if (controller.A.isPressed() && sNAKE.image.equals(assets.image`SS`)) {
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
            `, sNAKE, 150, 0)
    } else if (controller.A.isPressed() && sNAKE.image.equals(assets.image`SS0`)) {
        projectile2 = sprites.createProjectileFromSprite(img`
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
            `, sNAKE, -150, 0)
    } else {
        sNAKE.vx = 0
    }
})
forever(function () {
    if (sNAKE.overlapsWith(bULLET)) {
        console.log("HIT!")
        HEALTH += -1
        pause(500)
    }
    if (HEALTH == 0) {
        game.over(false, effects.dissolve)
    }
})
forever(function () {
    if (projectile2.overlapsWith(gURAD) || projectile.overlapsWith(gURAD)) {
        let mySprite: Sprite = null
        mySprite.destroy()
    }
})
forever(function () {
    if (true) {
        bULLET.setPosition(gURAD.x, gURAD.y)
        pause(500)
        bULLET.setVelocity(50, 0)
    }
})
