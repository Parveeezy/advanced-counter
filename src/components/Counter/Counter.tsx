import React, {useEffect, useState} from 'react';
import {Button} from "../Button/Button";
import s from './counter.module.css'

type CounterPropsType = {
    maxValue: number
    setMaxValue: (val: number) => void
    startValue: number
    setStartValue: (val: number) => void
    btnStatus: boolean
    setBtnStatus: (val: boolean) => void
}

export const Counter = (props: CounterPropsType) => {

    const defaultValue = props.startValue;
    const maxValue = props.maxValue;

    const [counter, setCounter] = useState<number>(defaultValue);

    useEffect(() => {
        setCounter(props.startValue)
    }, [props.startValue])

    const increment = () => {
        if (counter < maxValue) {
            setCounter((prev) => prev + 1)
        }
    }

    const resetCounter = () => {
        setCounter(0)
        props.setMaxValue(0)
        props.setStartValue(0)
        props.setBtnStatus(false)
    }

    return (
        <div className={s.wrapper}>
            {(maxValue === defaultValue)
                ? (
                    <div
                        className={s.error}
                        style={counter === maxValue || props.startValue > props.maxValue
                            ? {color: 'red'} : {}}
                    >
                        Введите правильные значения!
                    </div>
                ) : (
                <div
                    className={s.counter}
                    style={counter === maxValue || props.startValue > props.maxValue
                        ? {color: 'red'} : {}}
                >
                    {counter}
                </div>
            )}

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