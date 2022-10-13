controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (user.vy == 0) {
        user.vy = -175
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖1`, function (sprite, location) {
    leval += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖10`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖0`, function (sprite, location) {
    tiles.placeOnRandomTile(user, sprites.dungeon.collectibleInsignia)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    leval += 1
})
let user: Sprite = null
let leval = 0
scene.setBackgroundColor(9)
user = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . 2 1 1 1 1 1 1 2 . . . . 
    . . . . 2 1 1 1 1 1 1 2 . . . . 
    . . . . 2 1 1 1 1 1 1 2 . . . . 
    . . . . 2 1 1 1 1 1 1 2 . . . . 
    . . . . 2 1 1 1 1 1 1 2 . . . . 
    . . . . 2 1 1 1 1 1 1 2 . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . 2 2 . . 2 2 . . . . . 
    . . . . 2 2 . . . . 2 2 . . . . 
    . . . . 2 . . . . . . 2 . . . . 
    `, SpriteKind.Player)
controller.moveSprite(user, 100, 0)
tiles.setCurrentTilemap(tilemap`層級1`)
scene.cameraFollowSprite(user)
tiles.placeOnRandomTile(user, sprites.dungeon.collectibleInsignia)
user.ay = 350
forever(function () {
    if (leval == 1) {
        leval = 2
        tiles.placeOnRandomTile(user, sprites.dungeon.collectibleInsignia)
        scene.setBackgroundColor(10)
        tiles.setCurrentTilemap(tilemap`層級3`)
    }
})
