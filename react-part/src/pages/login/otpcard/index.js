import React from "react"
import style from "./style.module.css"
import Heading from "../../../components/typography/heading"
import Input from "../../../components/input"
import Button from "../../../components/button"
import AddIcon from "@mui/icons-material/Check"
import LoadingIcon from "@mui/material/CircularProgress"


export default function OtpCard(props) {


    return ( <
        div className = { style.container } >

        <
        Heading >
        Enter OTP <
        /Heading> <
        Input placeholder = "Enter OTP"
        value = { props.value }
        onChange = { props.onChange }
        type = { "number" }
        / > <
        Button onClick = { props.onOtpSubmit }
        variant = "filled" > {
            props.isLoading ? < LoadingIcon / > : < > <
                AddIcon / >
                Submit <
                />
        } <
        /Button>< /
        div >
    );
}