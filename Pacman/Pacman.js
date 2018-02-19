class Pacman {
  constructor() {
    // [x,y]
    this.velocity = {
      x:0,
      y:0
    }
    this.x = 1
    this.y = 1
  }

  update() {
    switch (keyCode) {
      case LEFT_ARROW:
      if(map[this.y][this.x-1] === 0)
        break
      this.velocity.x = -vel
      this.velocity.y = 0
      break;
      case RIGHT_ARROW:
      if(map[this.y][this.x+1] === 0)
        break
      this.velocity.x = vel
      this.velocity.y = 0
      break;
      case UP_ARROW:
      if(map[this.y-1][this.x] === 0)
        break
      this.velocity.x = 0
      this.velocity.y = -vel
      break;
      case DOWN_ARROW:
      if(map[this.y+1][this.x] === 0)
        break
      this.velocity.x = 0
      this.velocity.y = vel
      default:
    }
    if(this.x <= 0 ){ this.x = map.length; }
    if(this.y <= 0 ){ this.y = map.length; }
    if(this.x > map.length ){ this.x = 0; }
    if(this.y > map.length ){ this.y = 0; }

    let newX = this.x + this.velocity.x
    let newY = this.y + this.velocity.y
    // Colliding with wall stops velocity
    if(map[newY][newX] !== 0) {
      this.x = newX
      this.y = newY
    } else {
      this.velocity.x = 0
      this.velocity.y = 0
    }
  }

  draw() {
    fill('yellow');
    ellipse(
      this.x * tileSize + 12.5, //12.5 center the pacman
      this.y * tileSize + 12.5,
      20, 20);
  }
}
