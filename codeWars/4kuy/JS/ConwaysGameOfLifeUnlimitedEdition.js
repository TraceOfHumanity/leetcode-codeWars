// Given a 2D array and a number of generations, compute n timesteps of Conway's Game of Life.

// The rules of the game are:

// Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
// Any live cell with more than three live neighbours dies, as if by overcrowding.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any dead cell with exactly three live neighbours becomes a live cell.
// Each cell's neighborhood is the 8 cells immediately around it (i.e. Moore Neighborhood). The universe is infinite in both the x and y dimensions and all cells are initially dead - except for those specified in the arguments. The return value should be a 2d array cropped around all of the living cells. (If there are no living cells, then return [[]].)

// For illustration purposes, 0 and 1 will be represented as ░░ and ▓▓ blocks respectively (PHP: plain black and white squares). You can take advantage of the htmlize function to get a text representation of the universe, e.g.:

// console.log(htmlize(cells));

function getGeneration(cells, generations) {
  const cloneArray = arr => arr.map(row => row.slice());

  const countLiveNeighbors = (grid, x, y) => {
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],         [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];
    let liveNeighbors = 0;
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < grid.length && ny >= 0 && ny < grid[0].length) {
        liveNeighbors += grid[nx][ny];
      }
    }
    return liveNeighbors;
  };

  const cropGrid = grid => {
    let minRow = grid.length, maxRow = -1, minCol = grid[0].length, maxCol = -1;
    
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === 1) {
          minRow = Math.min(minRow, i);
          maxRow = Math.max(maxRow, i);
          minCol = Math.min(minCol, j);
          maxCol = Math.max(maxCol, j);
        }
      }
    }
    
    if (minRow === grid.length) return [[]]; 
    const cropped = [];
    for (let i = minRow; i <= maxRow; i++) {
      cropped.push(grid[i].slice(minCol, maxCol + 1));
    }
    return cropped;
  };

  const extendGrid = grid => {
    const rows = grid.length;
    const cols = grid[0].length;
    const extended = Array.from({ length: rows + 2 }, () => Array(cols + 2).fill(0));
    
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        extended[i + 1][j + 1] = grid[i][j];
      }
    }
    
    return extended;
  };

  let grid = cells;
  for (let gen = 0; gen < generations; gen++) {
    grid = extendGrid(grid);
    const newGrid = cloneArray(grid);
    
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        const liveNeighbors = countLiveNeighbors(grid, i, j);
        
        if (grid[i][j] === 1) { 
          if (liveNeighbors < 2 || liveNeighbors > 3) {
            newGrid[i][j] = 0;  
          }
        } else { 
          if (liveNeighbors === 3) {
            newGrid[i][j] = 1; 
          }
        }
      }
    }
    
    grid = cropGrid(newGrid);
  }

  return grid;
}

console.log(getGeneration([[0, 1, 0], [0, 0, 1], [1, 1, 1]], 1));
// Expected output: [[1, 0, 1], [0, 1, 1], [0, 1, 0]]

console.log(getGeneration([[0, 1, 0], [0, 0, 1], [1, 1, 1]], 2));
// Expected output: [[1, 0, 1], [0, 1, 1], [0, 1, 0]]

console.log(getGeneration([[0, 1, 0], [0, 0, 1], [1, 1, 1]], 3));
// Expected output: [[0, 1, 0], [0, 0, 1], [1, 1, 1]]

console.log(getGeneration([[0, 1, 0], [0, 0, 1], [1, 1, 1]], 1));
console.log(getGeneration([[0, 1, 0], [0, 0, 1], [1, 1, 1]], 2));
console.log(getGeneration([[0, 1, 0], [0, 0, 1], [1, 1, 1]], 3));