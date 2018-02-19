class Biscuit {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  draw() {
    //Mark it as eaten
    if(player.x === this.x && player.y === this.y) {
      this.eaten = true
      score++
      //add the score if there is one
    }
    if(this.eaten) {
      return
    }
    noStroke()
    fill('yellow')
    ellipse(
      this.x * tileSize + (tileSize/2),
      this.y * tileSize + (tileSize/2),
      4,
      4
    )
  }
}
