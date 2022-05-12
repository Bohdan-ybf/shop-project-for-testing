import PropTypes from 'prop-types'
import React from 'react'
import ReactDom from 'react-dom'

// Реакт КОМПОНЕНТ

const Title = ({ text, id }) => {
    return (
        <h1>
            Hello {text}, {id}
        </h1>
    )
}

Title.propTypes = {
    text: PropTypes.string,
    id: PropTypes.number,
}

// Реакт ФРАГМЕНТ
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
    <>
        <Title text="Jack" id={1} />
        <Title text="John" />
        <List />
    </>
)

ReactDom.render(el, document.getElementById('root'))
