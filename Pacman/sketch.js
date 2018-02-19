var player;
var tileMap;
const tileSize = 500/map.length
const vel = 1 //500/map.length / 6
const ghosts = []
var biscuits = []
var score = 0

function setup() {
  createCanvas(500, 500);
  player = new Pacman()
  tileMap = new Tilemap()
  ghosts.push(new Ghost())
  frameRate(6)
  //Making biscuits
  map.forEach((line, y) => {
    line.forEach((value, x) => {
      if(value === 1) {
        biscuits.push(new Biscuit(x,y))
      }
    })
  })
}

function draw() {
  background('#000000');
  noStroke()
  tileMap.draw()
  player.update()
  player.draw()
  // Update and draw every ghost
  ghosts.forEach((ghost) => {
    ghost.update()
    ghost.draw()
  })
  biscuits.forEach((biscuit) => {
    biscuit.draw()
  })
  //Removing biscuits that have been eaten
  biscuits = biscuits.filter(biscuit => !biscuit.eaten)
}
