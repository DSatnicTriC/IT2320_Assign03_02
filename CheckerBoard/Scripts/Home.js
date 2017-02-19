var HighlightedCell = null;

$(document).ready(function () {
    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++) {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }

    $(".cell").click(function () {
        if (!HighlightedCell) {
            if (IsCellOccupied(this)) {
                HighlightOn(this);
            }
        }
        else {
            if (IsCellHighlighted(this)) {
                HighlightOff(this);
            }
            else {
                MoveFromCellToCell(HighlightedCell, this);
            }
        }
    });
});

function IsCellOccupied(cellToCheck) {
    if ($(cellToCheck).hasClass("piece")) {
        return true;
    }
    return false;
}

function IsCellHighlighted(cellToCheck) {
    if ($(cellToCheck).hasClass("highlight")) {
        return true;
    }
    return false;
}

function HighlightOn(cellToAlter) {
    $(cellToAlter).addClass("highlight");
    $(cellToAlter).removeClass("cell");
    HighlightedCell = cellToAlter;
}

function HighlightOff(cellToAlter) {
    $(cellToAlter).addClass("cell");
    $(cellToAlter).removeClass("highlight");
    HighlightedCell = null;
}

function MoveFromCellToCell(originalCell, newCell) {
    $(newCell).attr('class', $(originalCell).attr('class'));
    HighlightedCell = newCell;
    ApplyBlankStateToCell(originalCell);
}

function ApplyBlankStateToCell(cellToAlter) {
    $(cellToAlter).removeClass();
    $(cellToAlter).addClass("cell");
}