import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import s from './counterSetter.module.css'
import {Button} from "../Button/Button";

type CounterSetterPropsType = {
    setMaxValue: (e: number) => void
    setStartValue: (e: number) => void
    btnStatus: boolean
    setBtnStatus: (val: boolean) => void
}

export const CounterSetter = (props: CounterSetterPropsType) => {

    const [valueMax, setValueMax] = useState<number>(0)
    const [valueStart, setValueStart] = useState<number>(0)



    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValueMax(Number(e.currentTarget.value))
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValueStart(Number(e.currentTarget.value))
    }


    const setValuesHandler = () => {
        props.setMaxValue(valueMax);
        props.setStartValue(valueStart);
        // setValueMax(0);
        // setValueStart(0)
        props.setBtnStatus(true)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.valuesWrapper}>
                <div className={s.valuesBlock}>
                    <span className={s.title}>max value: </span>
                    <input
                        className={s.input}
                        onChange={onChangeMaxValueHandler}
                        value={valueMax}
                    />
                </div>
                <div className={s.valuesBlock}>
                    <span className={s.title}>start value: </span>
                    <input
                        className={s.input}
                        onChange={onChangeStartValueHandler}
                        value={valueStart}
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