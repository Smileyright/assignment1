import React, { useState } from 'react'

//Fairly simple, just showing I can use props
export default function Component1(props) {

    return (
        <div>
            <h2>This is a component using props!</h2>
            <p>Welcome, {props.name}!</p>
        </div>
    );
}