import React from "react";
import commonStyle from "../style.module.css"
import image from "./k.jpg"
import style from "./style.module.css"
import Button from "../../components/button";
import LoadingIcon from "@mui/material/CircularProgress"
import LogoutIcon from "@mui/icons-material/Logout"
import { textAlign } from "@mui/system";



export default function Profile(props) {
    return ( < >
        <
        h1 className = { commonStyle.heading } > { props.username }
        's Profile < /h1>  <
        div className = { commonStyle.container } >
        This is your Profile < /div> 

        <
        div className = { style.image } >
        <
        h1 className = { commonStyle.heading } > { props.username[0] } < /h1> < /
        div >
        <
        h2 className = { style.name } > { props.username } < /h2>

        <
        Button onClick = { props.userLogout }
        variant = "filled" > {
            props.isLoading ? < LoadingIcon / > : < > <
                LogoutIcon / >
                Logout <
                />
        } <
        /Button> < / >
    )
}