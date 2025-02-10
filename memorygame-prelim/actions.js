// Memory array
var memory_array = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;

// New Board
function newBoard() {
    tiles_flipped = 0;
    var output = '';
    memory_array = _.shuffle(memory_array);
    _.forEach(memory_array, function(value, index) {
        output += '<div id="tile_' + index + '" onclick="memoryFlipTile(this,\'' + value + '\')" class="card"></div>';
    });
    document.getElementById('memory_board').innerHTML = output;
}

// Flip Tile
function memoryFlipTile(tile, value) {
    if (tile.innerHTML === "" && memory_values.length < 2) {
        tile.classList.add('flipped');
        tile.innerHTML = value;
        if (memory_values.length === 0) {
            memory_values.push(value);
            memory_tile_ids.push(tile.id);
        } else if (memory_values.length === 1) {
            memory_values.push(value);
            memory_tile_ids.push(tile.id);
            if (memory_values[0] === memory_values[1]) {
                tiles_flipped += 2;
                document.getElementById(memory_tile_ids[0]).classList.add('matched');
                document.getElementById(memory_tile_ids[1]).classList.add('matched');
                memory_values = [];
                memory_tile_ids = [];
                if (tiles_flipped === memory_array.length) {
                    setTimeout(function() {
                        alert("Board cleared... generating new board");
                        document.getElementById('memory_board').innerHTML = "";
                        newBoard();
                    }, 500);
                }
            } else {
                setTimeout(flip2Back, 700);
            }
        }
    }
}

function flip2Back() {
    var tile_1 = document.getElementById(memory_tile_ids[0]);
    var tile_2 = document.getElementById(memory_tile_ids[1]);
    tile_1.classList.remove('flipped');
    tile_1.innerHTML = "";
    tile_2.classList.remove('flipped');
    tile_2.innerHTML = "";
    memory_values = [];
    memory_tile_ids = [];
}
