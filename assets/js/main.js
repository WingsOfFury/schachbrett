const knight = document.createElement('div');
const board = document.getElementById('board');
const squares = [];

// Funktion, die die möglichen Ziele des Springers berechnet und hervorhebt
function highlightTargets(squareId) {
    // Zurücksetzen der vorherigen Hervorhebungen
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.remove('target');
    }

    // Berechnen der möglichen Ziele
    const x = squareId % 8;
    const y = Math.floor(squareId / 8);
    const targets = [
        [x - 1, y - 2],
        [x + 1, y - 2],
        [x + 2, y - 1],
        [x + 2, y + 1],
        [x + 1, y + 2],
        [x - 1, y + 2],
        [x - 2, y + 1],
        [x - 2, y - 1]
    ];

    // Hervorheben der Ziele
    for (let i = 0; i < targets.length; i++) {
        const targetX = targets[i][0];
        const targetY = targets[i][1];
        if (targetX >= 0 && targetX <= 7 && targetY >= 0 && targetY <= 7) {
            const targetId = targetY * 8 + targetX;
            const targetSquare = document.getElementById(targetId);
            targetSquare.classList.add('target');
        }
    }
}




// Event-Listener für alle Schachbrettfelder hinzufügen
for (let i = 0; i < 64; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    if ((i + Math.floor(i / 8)) % 2 === 0) {
        square.classList.add('white');
    } else {
        square.classList.add('black');
    }
    square.id = i;
    squares.push(square);
    board.appendChild(square);

    // Event-Listener für jedes Feld hinzufügen
    square.addEventListener('click', function () {
        highlightTargets(i);
    });
}

knight.classList.add('piece', 'knight');
knight.style.backgroundColor = 'orange';

const row = 4;
const col = 4;
const squareIndex = row * 8 + col;
const square = document.getElementById(squareIndex);
square.appendChild(knight);





// Ich habe es leider nicht mehr geschafft die Buchstaben und Zahlen 
// zu implementieren !

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function addLabels() {
    const board = document.querySelector('.board');

    // Add letters
    for (let i = 0; i < letters.length; i++) {
        const letterLabel = document.createElement('div');
        letterLabel.textContent = letters[i];
        letterLabel.classList.add('label', 'letter');
        board.appendChild(letterLabel);
    }

    // Add numbers
    for (let i = numbers.length - 1; i >= 0; i--) {
        const numberLabel = document.createElement('div');
        numberLabel.textContent = numbers[i];
        numberLabel.classList.add('label', 'number');
        board.appendChild(numberLabel);
    }
}

addLabels();








// URL Query Parameter ändern //

// Extrahieren des aktuellen Query-Strings aus der URL
const urlParams = new URLSearchParams(window.location.search);

// Hinzufügen des neuen Parameters
urlParams.set('start', 'e4');

// Aktualisieren der URL mit dem neuen Parameter
const newUrl = window.location.origin + window.location.pathname + '?' + urlParams.toString();
window.history.replaceState(null, null, newUrl);

// Ausgabe des neuen Query-Strings
console.log(urlParams.toString());

