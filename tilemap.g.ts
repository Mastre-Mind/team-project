// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "first map":
            case "level1":return tiles.createTilemap(hex`0a0007000203030d03030d0303040b010a01010a010a01050f0a010a01010a010a0e09010101010a010a01050f010a010a01010a010e090a01010a0101010a050708080c08080c080806`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass3,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterWest0,sprites.castle.tileDarkGrass1,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2], TileScale.Sixteen);
            case "first map0":
            case "first map1":return tiles.createTilemap(hex`0a0007000b0c0c0c0d0c0c0c0c0a0c01060606060606030c0c05090909090909070c0c05090909090909070c0c05090909090909070c0d04080808080808020c0a0c0c0d0c0c0c0c0c0a`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath9,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.floorLight2,sprites.dungeon.floorLight5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "darkGrass2Attack":
            case "tile4":return tile4;
            case "darkGrass1Attack":
            case "tile3":return tile3;
            case "darkGrass1Move":
            case "tile2":return tile2;
            case "darkGrass2Move":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
