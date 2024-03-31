import React from 'react';
import s from './counterSetter.module.css'
import {Button} from "../Button/Button";

export const CounterSetter = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.valuesWrapper}>
                <div className={s.valuesBlock}>
                    <span className={s.title}>max value: </span>
                    <input className={s.input}/>
                </div>
                <div className={s.valuesBlock}>
                    <span className={s.title}>start value: </span>
                    <input className={s.input}/>
                </div>
            </div>
            <div className={s.buttons_wrapper}>
                <Button name={'set'} callBack={() => {}} disabled={false}/>
            </div>
        </div>
    );
};