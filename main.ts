tiles.setCurrentTilemap(tilemap`first map`)
let p1 = sprites.create(assets.image`p1WalkRight`, SpriteKind.Player)
tiles.placeOnTile(p1, tiles.getTileLocation(1, 3))
let p2 = sprites.create(assets.image`p2WalkLeft`, SpriteKind.Enemy)
tiles.placeOnTile(p2, tiles.getTileLocation(8, 3))
let p1Turn= true