import React, { useState } from "react";
import Plate from "../Plate/Plate";
import style from './styles.module.scss';
import { IsWinner, IsDraw } from "./utils.jsx";
import clsx from 'clsx';

export default function Field() {

    const [player, setPlayer] = useState('X');
    const [plates, setPlates] = useState(Array(3).fill(null).map(() => Array(3).fill(null)));

    const togglePlayer = () => {
        setPlayer(player === 'X' ? 'O' : 'X');
    };

    const handlePlateClick = (row, col) => {
        const winner = IsWinner(plates);
        if (winner || plates[row][col] !== null) {
            return;
        }
        const newPlates = plates.map(r => r.slice());
        newPlates[row][col] = player;
        setPlates(newPlates);
        togglePlayer();
    };

    const windowReload = () => {
        window.location.reload();
    }

    console.log(plates);
    console.log(IsWinner(plates));

    const winner = IsWinner(plates);
    const isDraw = !winner && IsDraw(plates);
    
    return (
        <div className={style.field}>
            <h1 className={winner || isDraw ? style.winner : ''}>
                {winner ? `Победил ${winner}` : isDraw ? "Ничья!" : "Крестики нолики"}
            </h1>
            <div className={style.container}>
                {plates.map((row, rowIndex) => (
                    <div key={rowIndex} className={style.row}>
                        {row.map((value, colIndex) => (
                            <Plate
                                key={`${rowIndex}-${colIndex}`}
                                row={rowIndex}
                                col={colIndex}
                                value={value}
                                onClick={() => handlePlateClick(rowIndex, colIndex)}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <button onClick={windowReload} disabled={!winner && !isDraw} className={clsx(style.restartButton, {
                [style.disabled]: !winner && !isDraw
            })}>Начать заново</button>
        </div>);
}