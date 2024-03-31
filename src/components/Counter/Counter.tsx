import React, {useState} from 'react';
import {Button} from "../Button/Button";
import s from './counter.module.css'

export const Counter = () => {

    const defaultValue = 0;
    const maxValue = 5;

    const [counter, setCounter] = useState<number>(defaultValue);

    const increment = () => {
        if(counter < maxValue) {
            setCounter((prev)=> prev + 1)
        }
    }

    const resetCounter = () => {
        setCounter(defaultValue)
    }

    return (
        <div className={s.wrapper}>
            <div
                className={s.counter}
                style={counter === maxValue ? {color: 'red'} : {}}
            >
                {counter}
            </div>
            <div className={s.buttons_wrapper}>
                {counter !== maxValue ? (
                    <Button
                        name={'inc'}
                        callBack={increment}
                        disabled={false}
                        defaultValue={defaultValue}
                    />
                ) : (
                    <Button
                        name={'inc'}
                        callBack={increment}
                        disabled={true}
                    />
                )}
                <Button
                    name={'reset'}
                    callBack={resetCounter}
                    disabled={false}
                    reset={counter}
                    defaultValue={defaultValue}
                />
            </div>
        </div>
    );
};