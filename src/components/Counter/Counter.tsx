import React, {useEffect, useState} from 'react';
import {Button} from "../Button/Button";
import s from './counter.module.css'
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {incrementAC, resetAC} from "../../redux/actionCreators/actionCreator";

type CounterPropsType = {
    maxValue: number
    setMaxValue: (val: number) => void
    startValue: number
    setStartValue: (val: number) => void
    btnStatus: boolean
    setBtnStatus: (val: boolean) => void
}

export const Counter = (props: CounterPropsType) => {

    const dispatch = useAppDispatch()

    const defaultValue = props.startValue;
    const maxValue = props.maxValue;

    const counter = useAppSelector((state) => state.counter.num)

    // useEffect(() => {
    //     setCounter(props.startValue)
    // }, [counter])

    const increment = () => {
        if (counter < maxValue) {
        dispatch(incrementAC())
        }

    }

    const resetCounter = () => {
        dispatch(resetAC())
        props.setMaxValue(0)
        props.setStartValue(0)

    }

    console.log(counter)

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