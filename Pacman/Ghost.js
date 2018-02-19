class Ghost {
  constructor() {
    // [x,y]
    this.velocity = {
      x:0,
      y:0
    }
    this.x = 10
    this.y = 10
  }

  update() {
    //MAD AI GOES HERE SON
    if(this.x > player.x)
      this.velocity.x = -vel
    else
      this.velocity.x = +vel
    if(this.y > player.y)
      this.velocity.y = -vel
    else
      this.velocity.y = +vel

    // This should be useless if the AI is properly done but im gonna leave it here
    let newX = this.x + this.velocity.x
    let newY = this.y + this.velocity.y
    if(map[newY][newX] !== 0) {
      this.x = newX
      this.y = newY
    } else {
      this.velocity.x = 0
      this.velocity.y = 0
    }
  }

  draw() {
    fill('red');
    ellipse(
      this.x * tileSize + 12.5, //12.5 center the pacman
      this.y * tileSize + 12.5,
      20, 20);
    }
  }
