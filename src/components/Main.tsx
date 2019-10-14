import React from 'react';
import Tabs from '../components/Tabs'
import ControlPanel from "../components/ControlPanel";
import PublicApi from "../api/PublicApi";

interface IMainProps{
}

interface IMainState{
    data: any;
    currentPair: string;
    ordersCount: number;
}

export default class Main extends React.Component<IMainProps, IMainState> {
    constructor(props: any) {
        super(props);
        this.state = {
            currentPair: 'BTC_USD',
            data: null,
            ordersCount: 100
        };

        this.handleCurrencyPairChange = this.handleCurrencyPairChange.bind(this);
        this.handleOrdersCountChange = this.handleOrdersCountChange.bind(this);
    }

    componentDidMount() {
        PublicApi.orderBook(this.state.currentPair, 1000).then( res => {
            this.setState({data: res.data});
        });
    }

    private handleCurrencyPairChange(pair: string) {
        PublicApi.orderBook(pair, 1000).then( res => {
            this.setState({currentPair: pair, data: res.data});
        });
    }

    private handleOrdersCountChange(count: number) {
        if (count) {
            PublicApi.orderBook(this.state.currentPair, 1000).then( res => {
                this.setState({ordersCount: count, data: res.data});
            });
        }
    }

    render() { return (<div>
        <ControlPanel currentPair={this.state.currentPair}
                      handleCurrencyPairChange={this.handleCurrencyPairChange}
                      handleOrdersCountChange={this.handleOrdersCountChange}
                      ordersCount={this.state.ordersCount}/>
        <Tabs data={this.state.data} currentPair={this.state.currentPair} priceLength={6} ordersCount={this.state.ordersCount}/>
    </div>)

    }
}