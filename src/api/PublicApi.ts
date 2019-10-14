import axios from 'axios'

export default class PublicApi {

    public static trades() {
        return axios.get("https://api.exmo.com/v1/trades/?pair=XRP_USD");
    }

    public static orderBook(pair: string, limit: number) {
        return axios.get(`https://api.exmo.com/v1/order_book/?pair=${pair}&limit=${limit}`);
    }

}