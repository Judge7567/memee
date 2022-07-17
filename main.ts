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
function Ded1 () {
    if (projectile2.overlapsWith(gURAD)) {
        bULLET.destroy()
        gURAD.destroy(effects.spray, 500)
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
function GURDshoot2 () {
    if (true) {
        bullet2.setPosition(sniper.x, sniper.y)
        pause(1000)
        bullet2.setVelocity(-500, 0)
    }
}
function ded2 () {
    if (projectile.overlapsWith(sniper)) {
        bullet2.destroy()
        sniper.destroy(effects.spray, 500)
    }
}
let list: Sprite[] = []
let projectile2: Sprite = null
let projectile: Sprite = null
let bULLET: Sprite = null
let bullet2: Sprite = null
let sniper: Sprite = null
let gURAD: Sprite = null
let sNAKE: Sprite = null
let HEALTH = 7
sNAKE = sprites.create(assets.image`SS`, SpriteKind.Player)
gURAD = sprites.create(assets.image`GURD`, SpriteKind.Enemy)
sniper = sprites.create(assets.image`sniper`, SpriteKind.Enemy)
bullet2 = sprites.create(assets.image`Project`, SpriteKind.Projectile)
bULLET = sprites.create(assets.image`Project`, SpriteKind.Projectile)
projectile = sprites.create(assets.image`Project`, SpriteKind.Projectile)
projectile2 = sprites.create(assets.image`Project`, SpriteKind.Projectile)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(sNAKE)
tiles.placeOnTile(sniper, tiles.getTileLocation(13, 27))
tiles.placeOnTile(sNAKE, tiles.getTileLocation(1, 38))
tiles.placeOnTile(gURAD, tiles.getTileLocation(4, 30))
forever(function () {
    sNAKE.vy = 70
    if (controller.up.isPressed() && (sNAKE.tileKindAt(TileDirection.Bottom, assets.tile`whatathrill1`) || sNAKE.tileKindAt(TileDirection.Bottom, assets.tile`whatathrill2`))) {
        sNAKE.vy = -150
    }
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
    GURDshoot()
    GURDshoot2()
})
forever(function () {
    Ded1()
    ded2()
})
forever(function () {
    if (sNAKE.overlapsWith(bULLET) || sNAKE.overlapsWith(bullet2)) {
        console.log("HIT!")
        HEALTH += -1
        pause(500)
    }
    if (HEALTH <= 0) {
        game.over(false, effects.confetti)
    }
})
forever(function () {
    list = [gURAD]
    for (let value of list) {
    	
    }
})
