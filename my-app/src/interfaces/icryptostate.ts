import IData from './idata';
import IOption from './ioption';

export default interface ICryptoData{
    data: IData[],
    currencies: IOption[],
    error: any,
    loaded: boolean,
    setData: (data: IData[]) => void,
    setCurrencies: (currencies: IOption[]) => void,
    getData: () => void,
    setError: (error: any) => void,
    setLoaded: (state: boolean) => void,
}
