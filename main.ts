controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (user.vy == 0) {
        user.vy = -175
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖1`, function (sprite, location) {
    game.over(true, effects.starField)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖0`, function (sprite, location) {
    game.over(false, effects.melt)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    user.vy = -175
})
let user: Sprite = null
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
