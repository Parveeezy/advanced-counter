import React, {ChangeEvent, useEffect} from 'react';
import s from './counterSetter.module.css'
import {Button} from "../Button/Button";

type CounterSetterPropsType = {
    maxValue: number
    setMaxValue: (e: number) => void
    startValue: number
    setStartValue: (e: number) => void
    btnStatus: boolean
    setBtnStatus: (val: boolean) => void
}

export const CounterSetter = (props: CounterSetterPropsType) => {

    useEffect(() => {
        if (props.maxValue === 0 && props.startValue === 0) {
            props.setBtnStatus(false)
        }
    }, [props.maxValue, props.startValue])

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        Number(e.currentTarget.value) >= 0 &&
        props.setMaxValue(Number(e.currentTarget.value))
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        Number(e.currentTarget.value) >= 0 &&
            props.setStartValue(Number(e.currentTarget.value))
    }
    
    const setValuesHandler = () => {
        if(props.maxValue > props.startValue) {
            props.setMaxValue(props.maxValue);
            props.setStartValue(props.startValue);
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
                        value={props.maxValue}
                        style={props.maxValue <= props.startValue ? {borderColor: 'red'} : {}}
                    />
                </div>
                <div className={s.valuesBlock}>
                    <span className={s.title}>start value: </span>
                    <input
                        className={s.input}
                        onChange={onChangeStartValueHandler}
                        value={props.startValue}
                        style={props.maxValue <= props.startValue ? {borderColor: 'red'} : {}}
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