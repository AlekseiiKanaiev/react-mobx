export default interface IInputsState{
    cryptoInput: string,
    moneyInput: string,
    selectedCurrency: string,
    setSelectedCurrency: (value: string) => void,
    setCryptoInput: (value: string) => void,
    setMoneyInput: (value: string) => void,
}
