import React from "react";
import commonStyle from "../style.module.css"


export default function Logout(props) {
    return ( < > {

            props.logout()
        } < />)
    }