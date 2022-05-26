import React from "react";
import commonStyle from "../style.module.css"
import OrderList from "../../components/orders";

export default function Order() {
    return ( < > <
        h1 className = { commonStyle.heading } > Orders List < /h1> <
        div className = { commonStyle.container } > Orders: - < /div> 

        <
        OrderList > orderId = {
            Math.floor(Math.random() * (999999 - 100000) + 100000)
        } <
        br / >
        restName = Dominos <
        br / >
        custName = Krashank <
        br / >
        amount = 999 < /OrderList> <
        br / > <
        OrderList > orderId = { Math.floor(Math.random() * (999999 - 100000) + 100000) } <
        br / >
        restName = KFC <
        br / >
        custName = Anshu <
        br / >
        amount = 1290 < /OrderList> < br / > <
        OrderList > orderId = { Math.floor(Math.random() * (999999 - 100000) + 100000) } < br / >
        restName = Indian Coffee House < br / >
        custName = Dhawal < br / >
        amount = 498 < br / > <
        /OrderList> <br/ > <
        OrderList > orderId = { Math.floor(Math.random() * (999999 - 100000) + 100000) } < br / >
        restName = Axis Juice Bar < br / >
        custName = Sanya < br / >
        amount = 450 < br / > < /OrderList > < / >
    )
}