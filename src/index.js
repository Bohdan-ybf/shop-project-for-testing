/* eslint-disable react/prop-types */
import React from 'react'
import ReactDom from 'react-dom'

function Title() {
    return <h1>Hello World</h1>
}

const el = (
    <div>
        <Title />
    </div>
)

ReactDom.render(el, document.getElementById('root'))
