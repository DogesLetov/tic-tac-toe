export function IsWinner(plates) {
    for (let i = 0; i < 3; i++) {
        if (plates[i][0] === plates[i][1] && plates[i][0] === plates[i][2] && plates[i][0] !== null) {
            return plates[i][0];
        }
        if (plates[0][i] === plates[1][i] && plates[0][i] === plates[2][i] && plates[0][i] !== null) {
            return plates[0][i];
        }   
        if (plates[0][0] === plates[1][1] && plates[0][0] === plates[2][2] && plates[0][0] !== null) {
            return plates[0][0];
        }
        if (plates[0][2] === plates[1][1] && plates[0][2] === plates[2][0] && plates[0][2] !== null) {
            return plates[0][2];
        }
    }
    return false;
}

export function IsDraw(plates) {
    return plates.every(row => row.every(cell => cell !== null));
}