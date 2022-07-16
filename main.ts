namespace SpriteKind {
    export const LIFE = SpriteKind.create()
}
function GURDshoot () {
    if (true) {
        bULLET.setPosition(gURAD.x, gURAD.y)
        pause(500)
        bULLET.setVelocity(150, 0)
    }
}
function Shoot () {
    if (sNAKE.image.equals(assets.image`SS`)) {
        projectile = sprites.createProjectileFromSprite(assets.image`Project`, sNAKE, 150, 0)
        pause(500)
    }
    if (sNAKE.image.equals(assets.image`SS0`)) {
        projectile2 = sprites.createProjectileFromSprite(assets.image`Project`, sNAKE, -150, 0)
        pause(500)
    }
}
let projectile2: Sprite = null
let projectile: Sprite = null
let bULLET: Sprite = null
let gURAD: Sprite = null
let sNAKE: Sprite = null
let HEALTH = 3
sNAKE = sprites.create(assets.image`SS`, SpriteKind.Player)
gURAD = sprites.create(assets.image`GURD`, SpriteKind.Enemy)
let bullet2 = sprites.create(assets.image`Project`, SpriteKind.Player)
bULLET = sprites.create(assets.image`Project`, SpriteKind.Projectile)
projectile = sprites.create(assets.image`Project`, SpriteKind.Projectile)
projectile2 = sprites.create(assets.image`Project`, SpriteKind.Projectile)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(sNAKE)
tiles.placeOnTile(sNAKE, tiles.getTileLocation(1, 38))
tiles.placeOnTile(gURAD, tiles.getTileLocation(4, 30))
forever(function () {
    sNAKE.vy = 70
    if (controller.up.isPressed() && (sNAKE.tileKindAt(TileDirection.Bottom, assets.tile`myTile`) || sNAKE.tileKindAt(TileDirection.Bottom, assets.tile`myTi`))) {
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
    } else if (controller.A.isPressed()) {
        Shoot()
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
        game.over(false, effects.confetti)
    }
})
forever(function () {
    if (projectile2.overlapsWith(gURAD) || projectile.overlapsWith(gURAD)) {
        gURAD.destroy(effects.spray, 500)
        bULLET.destroy()
    }
})
forever(function () {
    GURDshoot()
})
forever(function () {
    if (sNAKE.overlapsWith(bULLET)) {
        console.log("HIT!")
        HEALTH += -1
        pause(500)
    }
    if (HEALTH <= 0) {
        game.over(false, effects.confetti)
    }
})
forever(function () {
    if (projectile2.overlapsWith(gURAD)) {
        bULLET.destroy()
        gURAD.destroy(effects.spray, 500)
    }
})