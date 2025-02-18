import React, { useState } from 'react'

export default function Component1(props) {

    return (
        <div>
            <h2>This is a component using props!</h2>
            <p>Welcome, {props.name}!</p>
        </div>
    );
}