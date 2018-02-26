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

  // Return the list of tiles that the ghost can move to from `x` and `y`
  possiblenodeTiles(x, y) {
    var positions = [
    { x: x-1, y },
    { x: x+1, y },
    { x, y: y-1 },
    { x, y: y+1 }
    ]
    .filter(p => p.x >= 0 && p.y >= 0)
    .filter(p => p.x < map[0].length && p.y < map.length )
    .filter(p => map[p.y][p.x] != 0)

    return positions;
  }

  // Return the node position that the ghost should move to based on A Star search
  performAStar(x, y) {

    var heuristic = (x1, y1, x2, y2) => {
      return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }

    var queue = this.possiblenodeTiles(this.x, this.y).map(t => {
      t.history = [];
      return t;
    });

    while(queue.length) {
      queue = queue
      .map(n => {
        n.score = n.history.length + heuristic(n.x, n.y, player.x, player.y)
        return n;
      })
      .sort((a, b) => a.score - b.score);

      var node = queue.shift();
      if (node.x == x && node.y == y) {
        return node.history[0];
      } else {
        var newTiles = this.possiblenodeTiles(node.x, node.y).map(t => {
          t.history = JSON.parse(JSON.stringify(node.history));
          t.history.push({ x: node.x, y: node.y });
          return t;
        });

        queue = queue.concat(newTiles);
      }
    }

  }

  update() {
    const newPos = this.performAStar(player.x, player.y);
    if (newPos) {
      this.x = newPos.x;
      this.y = newPos.y;
    } else {
      alert("you dead")
      throw new Error()
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
