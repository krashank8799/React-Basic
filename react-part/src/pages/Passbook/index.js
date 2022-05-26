import React from "react";
import commonStyle from "../style.module.css"
import OrderList from "../../components/orders";


export default function Passbook() {
    return ( < > <
        h1 className = { commonStyle.heading } > Passbook < /h1> <
        div className = { commonStyle.container } > This is Passbook < /div> 

        <
        OrderList >
        <
        h3 > Today 's Net Profit: < /h3> <
        p > { Math.floor(Math.random() * 1000) } < /p> < /
        OrderList >
        <
        br / >

        <
        OrderList >
        <
        h3 > Last Week Net Profit: < /h3> <
        p > { Math.floor(Math.random() * 10000) } < /p> < /
        OrderList >
        <
        br / >
        <
        OrderList >
        <
        h3 > Last Month Net Profit: < /h3> <
        p > { Math.floor(Math.random() * 99999) } < /p> < /
        OrderList >
        <
        / >
    )
}