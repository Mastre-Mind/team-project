namespace SpriteKind {
    export const OtherProjectile = SpriteKind.create()
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    p2Projectile = sprites.createProjectileFromSprite(assets.image`p2Arrow`, p2, -70, 0)
    p2Projectile.setKind(SpriteKind.OtherProjectile)
    pause(1000)
})
sprites.onOverlap(SpriteKind.OtherProjectile, SpriteKind.Player, function (sprite, otherSprite) {
	sprite.destroy()
    p1Status.value -= 25
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    p2Status.value -= 25
})
statusbars.onZero(1, function() {
    game.setGameOverMessage(true, "Player 1 Wins!")
    game.gameOver(true)
})
statusbars.onZero(5, function () {
    game.setGameOverMessage(true, "Player 2 Wins!")
    game.gameOver(true)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    p1Projectile = sprites.createProjectileFromSprite(assets.image`p1Arrow`, p1, 70, 0)
    pause(1000)
})

let p2Projectile: Sprite = null
let p1Projectile: Sprite = null
let p2: Sprite = null
let p1: Sprite = null
let statusbar = null
let list = [tilemap`first map`, tilemap`first map0`]
tiles.setCurrentTilemap(list[randint(0, 1)])
p1 = sprites.create(assets.image`p1WalkRight`, SpriteKind.Player)
tiles.placeOnTile(p1, tiles.getTileLocation(1, 3))
p2 = sprites.create(assets.image`p2WalkLeft`, SpriteKind.Enemy)
tiles.placeOnTile(p2, tiles.getTileLocation(8, 3))
let p1Status = statusbars.create(20, 4, 5)
p1Status.setBarBorder(1, 15)
p1Status.attachToSprite(p1, 3, 0)
let p2Status = statusbars.create(20, 4, 1)
p2Status.setBarBorder(1, 15)
p2Status.attachToSprite(p2, 3, 0)
controller.player1.moveSprite(p1, 0, 50)
controller.player2.moveSprite(p2, 0, 50)
