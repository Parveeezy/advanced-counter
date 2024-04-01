import React, {useState} from 'react';
import {Button} from "../Button/Button";
import s from './counter.module.css'

type CounterPropsType = {
    maxValue: number
    startValue: number
    btnStatus: boolean
    setBtnStatus: (val: boolean) => void
}

export const Counter = (props: CounterPropsType) => {

    const defaultValue = props.startValue;
    const maxValue = props.maxValue;

    const [counter, setCounter] = useState<number>(defaultValue);

    const increment = () => {
        if (counter < maxValue) {
            setCounter((prev) => prev + 1)
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