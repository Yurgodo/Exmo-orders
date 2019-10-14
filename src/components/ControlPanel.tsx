import React, {MouseEventHandler} from 'react';

interface IControlPanelProps{
    currentPair: string;
    handleCurrencyPairChange(pair: string): void;
    handleOrdersCountChange(count: number): void;
    ordersCount: number;
}

interface IControlPanelState{
    currentOrdersCount: number;
}

export default class ControlPanel extends React.Component<IControlPanelProps, IControlPanelState> {
    private currencyPairs = ["BTC_USD", "EOS_USD", "DASH_USD", "ETH_USD", "ETC_USD", "LTC_USD", "XRP_USD", "XMR_USD"];

    constructor(props: any) {
        super(props);
        this.state = {
            currentOrdersCount: this.props.ordersCount
        };
        this.onSelectChange = this.onSelectChange.bind(this);
        this.onOrdersCountBlur = this.onOrdersCountBlur.bind(this);
        this.onOrdersCountChange = this.onOrdersCountChange.bind(this);
    }

    private onSelectChange(event: any) {
        this.props.handleCurrencyPairChange(event.target.value);
    }

    private onOrdersCountBlur(event: any) {
        this.props.handleOrdersCountChange(event.target.value);
    }

    private onOrdersCountChange(event: any) {
        let currentValue = event.target.value;
        this.setState({currentOrdersCount: currentValue > 1000 ? 1000 : currentValue});
    }

    render() {
            return (<div>
                <select value={this.props.currentPair} onChange={this.onSelectChange}>{this.currencyPairs.map((option, idx) => <option key={idx}>{option}</option>)}</select>
                <input onBlur={this.onOrdersCountBlur} onChange={this.onOrdersCountChange} value={this.state.currentOrdersCount} className={"orders-count"}></input>
            </div>)
        }
}