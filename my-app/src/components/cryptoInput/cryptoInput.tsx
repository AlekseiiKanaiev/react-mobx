import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import appState from '../../models/app.model';
import inputState from '../../models/inputs.model';

import { observer } from 'mobx-react';

const CryptoInput = observer(() => {

    const handleCryptoCurrencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        inputState.setSelectedCurrency(event.target.value);
    };

    const handleCryptoValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        inputState.setCryptoInput(event.target.value);
        const price = appState.data.find(item => item.name === inputState.selectedCurrency)?.price;
        if (price) inputState.setMoneyInput((+event.target.value * +price).toFixed(3));
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
                value={inputState.cryptoInput}
                onChange={handleCryptoValueChange}
            />
            <TextField
                id="standard-select-currency"
                select
                value={inputState.selectedCurrency}
                onChange={handleCryptoCurrencyChange}
                label='Валюта'
                className='select'
            >
            {appState.currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
            </TextField>
        </div>
    )
})

export default CryptoInput;
