import React from "react"
import style from "./style.module.css"
import Heading from "../../../components/typography/heading"
import Input from "../../../components/input"
import Button from "../../../components/button"
import AddIcon from "@mui/icons-material/Add"
import LoadingIcon from "@mui/material/CircularProgress"

export default function LoginCard(props) {
    const { onNumberChange, onNameChange, onEmailChange, valueEmail, valueNumber, valueName, onSubmit, isLoading } = props;

    return ( <
        div className = { style.container } >

        <
        Heading >
        Enter Mobile Number <
        /Heading> <
        Input placeholder = "Enter Your Name"
        value = { valueName }
        onChange = { onNameChange }
        type = { "text" }

        / > <
        Input placeholder = "Enter Your Email Id"
        value = { valueEmail }
        onChange = { onEmailChange }
        type = { "email" }

        / > <
        Input placeholder = "Enter Your Mobile Number"
        value = { valueNumber }
        onChange = { onNumberChange }
        type = { "number" }


        / > <
        Button onClick = { onSubmit }
        variant = "outlined" > {
            isLoading ? < LoadingIcon / > : < > < AddIcon / > Submit < />
        } <
        /Button>< /
        div >
    );
}