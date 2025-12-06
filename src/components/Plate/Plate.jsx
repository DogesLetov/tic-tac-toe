import clsx from 'clsx';
import style from './styles.module.scss';

export default function Plate({row, col, value, onClick}) {
    return (
        <div onClick={onClick} className={clsx(style.plate, {
            [style.x]: value === 'X',
            [style.o]: value === 'O',
        })}>
            <p>{value}</p>
        </div>
    );
}