import React from 'react';

interface ITabProps{
    data: Array<any>;
    header: string;
    priceLength: number;
    ordersCount: number;
}

interface ITabState{
}

export default class Tab extends React.Component<ITabProps, ITabState> {
    render() {
        if (this.props && this.props.data) {
            return (<div className={"tab"}>
                <h2>{this.props.header}</h2>
                {this.props.data.filter( elem => elem[0].length < this.props.priceLength + 1).slice(0, this.props.ordersCount).map( (elem, index) => {
                    return <div className={`row ${elem[2] > 1000 ? "bold-price" : ""}`} key={index}>
                        <div>{elem[0]}</div>
                        <div>{elem[1]}</div>
                        <div>{elem[2]}</div>
                    </div>
                })}
            </div>)
        } else {
            return (<div></div>)
        }
    }
}