function isSolvable(maze, startingpoint){
  var y = startingpoint[0];
  var x = startingpoint[1];

  var neighbors = []
  if(maze[y][x+1] !== undefined){
    neighbors.push([y,x+1])
  }
   if(maze[y][x-1] !== undefined){
    neighbors.push([y,x-1])
  }
     if(maze[y-1] !== undefined){
    neighbors.push([y-1,x])
  }
     if(maze[y][x-1]){
    neighbors.push([y+1,x])
  }
}







function isSolvable(maze, startingpoint){
  for(var i=0; i<maze[0].length;i++){
  if(maze[startingpoint[0]][startingpoint[1]+i]===0) return false;
    
  }
  for(var i= maze[0].length-1; i>=0; i--){
  if(maze[startingpoint[0]][startingpoint[1]-i]===0) return false;
}
  for(var i=0; i<maze.length;i++){
  if(maze[startingpoint[0]+i][startingpoint[1]]===0) return false;
    
  }
  for(var i= maze.length-1; i>=0; i--){
  if(maze[startingpoint[0]-i][startingpoint[1]-i]===0) return false;
}
  return true;
}

console.log(isSolvable([
[0,0,0,0,0,0,0],
[1,1,1,0,0,0,0],
[0,1,0,0,0,0,0],
], [0,6] ));

console.log(isSolvable([
[1,1,1,1,1,1,1],
[0,1,0,0,0,0,0],
[1,1,1,0,0,0,0],
], [0,6] ));

console.log(isSolvable([
[0,1,0],
[0,1,0],
[0,1,0],
], [1,0] ));
