import React from 'react';

type ButtonPropsType = {
    name: string
    defaultValue?: number
    disabled: boolean
    reset?: number
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {

        const enable = {
            padding: '5px',
            color: 'gray',
            fontWeight: 'bold',
            fontSize: '14px',
            backgroundColor: 'aqua',
            width: '60px',
            border: 'none',
            borderRadius: '5px',
        }
        const disable = {
            padding: '5px',
            color: 'gray',
            fontWeight: 'bold',
            fontSize: '14px',
            backgroundColor: '#3a6060',
            width: '60px',
            border: 'none',
            borderRadius: '5px',
        }

        return (
            <button
                onClick={props.callBack}
                disabled={props.disabled}
                // style={!!props.disabled ? enable : disable}
            >{props.name}</button>
        );
    }
;