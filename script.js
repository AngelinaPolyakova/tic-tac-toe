let cells = document.querySelectorAll('#field td');



function isVictory(cells) {

    let combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8],
    ];

    for (let combo of combinations) {
        if (cells[combo[0]].innerHTML == cells[combo[1]].innerHTML && 
            cells[combo[1]].innerHTML == cells[combo[2]].innerHTML && 
            cells[combo[0]].innerHTML != '') {
            return true;
        }   
    }
    return false;    
}


function start(cells) {

    let i = 0;

    for (let cell of cells) {
        cell.addEventListener('click', function func() {
            
            this.innerHTML = ['X', 'O'][i % 2];
            this.removeEventListener('click', func)
            i++;      
            

            if (isVictory(cells)) {
                alert('Победил ' + this.innerHTML + '!' )
            } else if (i == 8) {
                alert('Ничья!')
            }
        })
    }
}

start(cells)