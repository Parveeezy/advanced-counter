import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {CounterSetter} from "./components/CounterSetter/CounterSetter";

function App() {

    return (
        <div className={'appWrapper'}>
            <div className={'container'}>
                <div>
                    <CounterSetter/>
                </div>
                <div>
                    <Counter/>
                </div>
            </div>
        </div>
    );
}

export default App;
