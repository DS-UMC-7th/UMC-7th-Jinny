import React from "react";

export default function Input(props) {
  return <input defaultValue={props.defaultValue} value={props.value} onChange={props.onChange}></input>;
}
