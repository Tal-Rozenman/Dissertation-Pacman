class Tilemap {
  constructor() {
    this.tileSize = 500/map[0].length
  }
  draw() {
    for(var y = 0; y < map.length; y++) {
      for(var x = 0; x < map[y].length; x++) {
        if(map[y][x] == 0) {
          fill('lightblue')
          rect(x*this.tileSize, y*this.tileSize, this.tileSize, this.tileSize)
        }
      }
    }
  }
}
