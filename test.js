export default function isWin(map, row, column) {
	let r = row,
		c = column,
		currentPoint = map[r][c],
		count1 = 0,
		count2 = 0,
		count3 = 0,
		count4 = 0
	for (let i = 1; i < 5; i++) {
		//横向
		if ((c - i >= 0 && map[r][c - i] == currentPoint) || (c + i < map[0].length && map[r][c + i] == currentPoint)) {
			++count1
		}
		//纵向
		if ((r - i >= 0 && map[r - i][c] == currentPoint) || (r + i < map.length && map[r + i][c] == currentPoint)) {
			++count2
		}
		//左上方和右下方
		if ((r - i >= 0 && c - i >= 0 && map[r - i][c - i] == currentPoint) || (r + i < map.length && c + i < map[0].length && map[r + i][c + i])) {
			++count3
		}
		//右上方和左下方
		if ((r - i >= 0 && map[r - i][c + i] == currentPoint) || (r + i < map.length && c - i >= 0 && map[r + i][c - i] == currentPoint)) {
			++count4
		}
	}
	console.log('横：',count1, '纵', count2, '左上右下：', count3, '右上左下：',count4)
	if (count1 == 4 || count2 == 4 || count3 == 4 || count4 == 4) {
		return true
	}
	return false
}

var map1 = [
	[1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1],
	[0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1],
	[1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1],
	[0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
	[1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1],
	[0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1],
	[1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1],
	[0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
	[1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1],
	[1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
	[1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1],
	[1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
	[1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
	[1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1],
]
