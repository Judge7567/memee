// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000280001060606060606060606060606060601010606060606060606060606060606010106060606060606060606060606060101060606060606060606060606060601010606060606060606060606060606010106060606060606060606060606060101060606060606060606060404040401010404040404040404040404040404040106060606060606060606060606060101060606060606060606060606060601010606060606060606060606060606010106060606060606060606060606060101060606060606060606060606060601010606060606060606060606060606010106060606060606060606060606050101060606060606060606060606060601010606060606060606060606060606010106060606060606060606060606060101060606060606060606060606060601010606060606060606060606060606010106060606060606060606060606060101060606060606060606060606060601010606060606060606060606060606010106060606060606060606060606060101060606060606060606060606060601010606060606060606060606060606010106060606060606060606060606060101060606060606060606060606060601010302030203020302030203020302010105050606060606060706060607060101050505060606060609060606090601010505050505050606070203020706010105050505050505060906060609060101050505050505050507060606070601010505050505050505050606060906010105050505050505050404040607050101050505050505050507030706050501010703030705090303090607050505010109060609060706060705050505050101050505050505050505050505050501`, img`
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
222............2
22.2...........2
22..222........2
222....2.......2
222.....2......2
222......2.....2
222222222222..22
222222222....2.2
2....2......2..2
2.........222..2
2222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile6,myTiles.tile8,myTiles.tile9,myTiles.tile7,myTiles.tile10], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "BrokColm":
            case "tile1":return tile1;
            case "myTi":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile":
            case "tile6":return tile6;
            case "purp":
            case "tile8":return tile8;
            case "myTile0":
            case "tile7":return tile7;
            case "myTile2":
            case "tile10":return tile10;
            case "myTile1":
            case "tile9":return tile9;
            case "Scaf1":
            case "tile2":return tile2;
            case "Scaf2":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
