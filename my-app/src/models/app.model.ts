import { action, observable } from 'mobx';
import IData from '../interfaces/idata';
import ICryptoData from '../interfaces/icryptostate';
import IOption from '../interfaces/ioption';
import axios from 'axios';

const createData = (item: any): IData => {
    return {
        id: item.CoinInfo.Id,
        imgURL: `https://www.cryptocompare.com${item.CoinInfo.ImageUrl}`,
        fullName: item.CoinInfo.FullName,
        name: item.CoinInfo.Name,
        price: item.RAW.USD.PRICE.toFixed(3),
        volume24Hours: item.DISPLAY.USD.VOLUME24HOUR
    }
};

const createOption = (value: string): IOption => {
    return {value: value, label: value}
};

const appState = observable<ICryptoData>({
    data: [],
    currencies: [],
    error: null,
    loaded: false,
    // selectedCurrency: '',
    setData(data: IData[]){
        this.data = data;
    },
    setCurrencies(currencies: IOption[]){
        this.currencies = currencies;
    },
    setError(error: any){
        this.error = error;
    },
    setLoaded(state: boolean){
        this.loaded = state;
    },
    // setSelectedCurrency(value: string){
    //     this.selectedCurrency = value;
    // },
    getData(){
        try {
            axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
            .then(res => {
                console.log(res);
                if (res.data && res.data.Data){
                    const dataSet: IData[] = [];
                    const currenciesSet: IOption[] = [];
                    res.data.Data.forEach((item: any) => {
                    dataSet.push(createData(item));
                    currenciesSet.push(createOption(item.CoinInfo.Name));
                    })
                    this.setData(dataSet);
                    this.setCurrencies(currenciesSet);
                    this.setLoaded(true);
                }
                });
        } catch (error) {
            this.setError(error);
            this.setLoaded(true);
        }
    },
}, {
    data: observable,
    currencies: observable,
    error: observable,
    loaded: observable,
    // selectedCurrency: observable,
    setData: action,
    setError: action,
    setCurrencies: action,
    getData: action,
    setLoaded: action,
    // setSelectedCurrency: action,
});

export default appState;
