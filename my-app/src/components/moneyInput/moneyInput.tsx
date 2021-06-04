import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import appState from '../../models/app.model';
import inputState from '../../models/inputs.model';

import { observer } from 'mobx-react';

const MoneyInput = observer(() => {

    const currencies = [
        {
            value: 'USD',
            label: '$',
        },
    ];

    const handleMoneyValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        inputState.setMoneyInput(event.target.value);
        const price = appState.data.find(item => item.name === inputState.selectedCurrency)?.price;
        if (price) inputState.setCryptoInput((+event.target.value / +price).toFixed(3));
    };

    return (
        <div className='input-box'>
            <TextField
                id="filled-number"
                label="Сумма"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                value={inputState.moneyInput}
                onChange={handleMoneyValueChange}
            />
            <TextField
                id="standard-select-currency"
                select
                value={currencies[0].value}
                // onChange={handleChange}
                label='Валюта'
                className='select'
            >
            {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
            </TextField>
        </div>
    )
})

export default MoneyInput;
