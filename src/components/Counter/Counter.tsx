import React from 'react';
import {Button} from "../Button/Button";
import s from './counter.module.css'
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {incrementAC, maxValueAC, resetAC, startValueAC} from "../../redux/actionCreators/actionCreator";

type CounterPropsType = {
    btnStatus: boolean
    setBtnStatus: (val: boolean) => void
}

export const Counter = (props: CounterPropsType) => {

    const counter = useAppSelector((state) => state.counter.num)
    const maxValue = useAppSelector((state) => state.counter.max)
    const startValue = useAppSelector((state) => state.counter.start)

    const dispatch = useAppDispatch()

    const defaultValue = startValue;

    const increment = () => {
        if (counter < maxValue) {
        dispatch(incrementAC())
        }
    }

    const resetCounter = () => {
        dispatch(resetAC())
        dispatch(maxValueAC(0))
        dispatch(startValueAC(0))
        props.setBtnStatus(false)
    }

    return (
        <div className={s.wrapper}>
            {(maxValue === defaultValue)
                ? (
                    <div
                        className={s.error}
                        style={counter === maxValue || startValue > maxValue
                            ? {color: 'red'} : {}}
                    >
                        Введите правильные значения!
                    </div>
                ) : (
                <div
                    className={s.counter}
                    style={counter === maxValue || startValue > maxValue
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