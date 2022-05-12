/* eslint-disable react/prop-types */
import React from 'react'
import ReactDom from 'react-dom'

const Title = (props) => {
    return <h1>Hello {props.text}</h1>
}

const List = () => {
    return (
        <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    )
}

const el = (
    <div>
        <Title text="Jack" />
        <Title text="John" />
        <List />
    </div>
)

ReactDom.render(el, document.getElementById('root'))
