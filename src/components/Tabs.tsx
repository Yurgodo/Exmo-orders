import React from 'react';
import Tab from './Tab'
interface ITabsProps{
    data: any;
    currentPair: string;
    priceLength: number;
    ordersCount: number;
}

interface ITabsState{
}

export default class Tabs extends React.Component<ITabsProps, ITabsState> {
    render() {
        if (this.props && this.props.data) {
            return (<div className={"tabs"} style={{display: "flex"}}>
                <Tab header={"Покупка"} data={this.props.data[this.props.currentPair].bid} priceLength={this.props.priceLength} ordersCount={this.props.ordersCount} isBTC={this.props.currentPair === "BTC_USD"}/>
                <Tab header={"Продажа"} data={this.props.data[this.props.currentPair].ask} priceLength={this.props.priceLength} ordersCount={this.props.ordersCount} isBTC={this.props.currentPair === "BTC_USD"}/>
        </div>)} else {
            return (<div></div>)
        }
    }
}