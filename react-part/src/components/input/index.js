import React from "react";

export default function Input(props) {
    return ( <
        input placeholder = { props.placeholder }
        onChange = { props.onChange }
        value = { props.value }
        type = { props.type }
        required = { true }
        / >
    )
}