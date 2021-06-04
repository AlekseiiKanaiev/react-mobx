import { action, observable } from "mobx";
import IInputsState from '../interfaces/iinputstate';
import appState from './app.model';

const inputState = observable<IInputsState>({
    cryptoInput: '',
    moneyInput: '',
    selectedCurrency: '',
    setSelectedCurrency(value: string){
        this.selectedCurrency = value;
        if (!this.cryptoInput) this.setCryptoInput('1');
        else this.setCryptoInput(this.cryptoInput);
        const price = appState.data.find(item => item.name === this.selectedCurrency)?.price;
        if (price) this.setMoneyInput((+this.cryptoInput * +price).toFixed(3));
    },
    setCryptoInput(value: string){
        this.cryptoInput = value;
    },
    setMoneyInput(value: string){
        this.moneyInput = value;
    },

}, {
    cryptoInput: observable,
    moneyInput: observable,
    selectedCurrency: observable,
    setSelectedCurrency: action,
    setCryptoInput: action,
    setMoneyInput: action,
});

export default inputState;
