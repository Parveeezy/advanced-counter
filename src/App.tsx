import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {CounterSetter} from "./components/CounterSetter/CounterSetter";

function App() {

    const [maxValue, setMaxValue] = useState(0);
    const [startValue, setStartValue] = useState(0)

    return (
        <div className={'appWrapper'}>
            <div className={'container'}>
                <div>
                    {/*<CounterSetter*/}
                    {/*    setMaxValue={setMaxValue}*/}
                    {/*    setStartValue={setStartValue}*/}
                    {/*/>*/}
                </div>
                <div>
                    <Counter
                        maxValue={maxValue}
                        startValue={startValue}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
