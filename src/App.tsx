import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {CounterSetter} from "./components/CounterSetter/CounterSetter";

function App() {
    const [btnStatus, setBtnStatus] = useState<boolean>(false);

    return (
        <div className={'appWrapper'}>
            <div className={'container'}>
                <div>
                    <CounterSetter
                        btnStatus={btnStatus}
                        setBtnStatus={setBtnStatus}
                    />
                </div>
                <div>
                    <Counter
                        btnStatus={btnStatus}
                        setBtnStatus={setBtnStatus}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
