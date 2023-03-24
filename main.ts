let list = [tilemap`first map`, tilemap`first map`]
tiles.setCurrentTilemap(list[randint(0,2)])
let p1 = sprites.create(assets.image`p1WalkRight`, SpriteKind.Player)
tiles.placeOnTile(p1, tiles.getTileLocation(1, 3))
let p2 = sprites.create(assets.image`p2WalkLeft`, SpriteKind.Enemy)
tiles.placeOnTile(p2, tiles.getTileLocation(8, 3))
let p1Status = statusbars.create(20,2,5)
p1Status.attachToSprite(p1, 5, 0)
controller.player1.moveSprite(p1, 0, 50)
controller.player2.moveSprite(p2, 0, 50)
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function (){
    sprites.createProjectileFromSprite(assets.image`p1Arrow`, p1, 50, 0)
    pause(1000)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    sprites.createProjectileFromSprite(assets.image`p2Arrow`, p2, -50, 0)
    pause(1000)
})