import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {CounterSetter} from "./components/CounterSetter/CounterSetter";

function App() {

    const [maxValue, setMaxValue] = useState(0);
    const [startValue, setStartValue] = useState(0)
    const [btnStatus, setBtnStatus] = useState<boolean>(false);

    return (
        <div className={'appWrapper'}>
            <div className={'container'}>
                <div>
                    <CounterSetter
                        maxValue={maxValue}
                        setMaxValue={setMaxValue}
                        startValue={startValue}
                        setStartValue={setStartValue}
                        btnStatus={btnStatus}
                        setBtnStatus={setBtnStatus}
                    />
                </div>
                <div>
                    <Counter
                        maxValue={maxValue}
                        setMaxValue={setMaxValue}
                        startValue={startValue}
                        setStartValue={setStartValue}
                        btnStatus={btnStatus}
                        setBtnStatus={setBtnStatus}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
