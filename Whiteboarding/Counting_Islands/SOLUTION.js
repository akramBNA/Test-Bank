var numIslands = function(grid) {
	if(grid.length < 1) return 0;
	const xBound = grid[0].length-1
	const yBound = grid.length-1
	let count = 0;
	const destroy = (x, y) => {
		if(grid[y][x] === '1'){
			grid[y][x] = 0;
			//recurse
			//left
			if(x-1 >= 0) destroy(x-1,y);
			//right
			if(x+1 <= xBound) destroy(x+1, y);
			//down
			if(y+1 <= yBound) destroy(x, y+1);
			//up
			if(y-1 >= 0) destroy(x, y-1);
		}
		//recursive function that would check right,left,down,up
		//if current point is a 1 -> change to a 0 and continue if not return
	}
	for(var y=0;y<=yBound;y++){
		for(var x=0;x<=xBound;x++){
			if(grid[y][x] === '1'){
				count += 1
				destroy(x, y)
			}
		}
	}
	return count;
};