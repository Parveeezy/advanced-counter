import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './counterSetter.module.css'
import {Button} from "../Button/Button";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {maxValueAC, startValueAC} from "../../redux/actionCreators/actionCreator";

type CounterSetterPropsType = {
    btnStatus: boolean
    setBtnStatus: (val: boolean) => void
}

export const CounterSetter = (props: CounterSetterPropsType) => {

    const maxValue = useAppSelector(state => state.counter.max)
    const startValue = useAppSelector(state => state.counter?.start)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (maxValue === 0 && startValue === 0) {
            props.setBtnStatus(false)
        }
        setStart(startValue)
    }, [maxValue, props, startValue])

    let [start, setStart] = useState(0);

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        Number(e.currentTarget.value) >= 0 &&
        dispatch(maxValueAC(Number(e.currentTarget.value)))
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        Number(e.currentTarget.value) >= 0 &&
        setStart(Number(e.currentTarget.value))
    }

    const setValuesHandler = () => {
        if (maxValue > startValue) {
            dispatch(maxValueAC(maxValue))
            dispatch(startValueAC(start))
            props.setBtnStatus(true)
        }
    }

    return (
        <div className={s.wrapper}>
            <div className={s.valuesWrapper}>
                <div className={s.valuesBlock}>
                    <span className={s.title}>max value: </span>
                    <input
                        className={s.input}
                        onChange={onChangeMaxValueHandler}
                        value={maxValue}
                        style={maxValue <= startValue ? {borderColor: 'red'} : {}}
                    />
                </div>
                <div className={s.valuesBlock}>
                    <span className={s.title}>start value: </span>
                    <input
                        className={s.input}
                        onChange={onChangeStartValueHandler}
                        value={start}
                        style={maxValue <= startValue ? {borderColor: 'red'} : {}}
                    />
                </div>
            </div>
            <div className={s.buttons_wrapper}>
                <Button
                    name={'set'}
                    callBack={setValuesHandler}
                    disabled={props.btnStatus}
                />
            </div>
        </div>
    );
};