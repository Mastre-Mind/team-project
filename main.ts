let list = [tilemap`first map`, tilemap`first map`]
tiles.setCurrentTilemap(list[randint(0,2)])
let p1 = sprites.create(assets.image`p1WalkRight`, SpriteKind.Player)
tiles.placeOnTile(p1, tiles.getTileLocation(1, 3))
let p2 = sprites.create(assets.image`p2WalkLeft`, SpriteKind.Enemy)
tiles.placeOnTile(p2, tiles.getTileLocation(8, 3))
controller.player1.moveSprite(p1, 0, 50)
controller.player2.moveSprite(p2, 0, 50)
