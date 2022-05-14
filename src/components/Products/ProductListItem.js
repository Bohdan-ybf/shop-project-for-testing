import React from 'react'
import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'

const ProductsListItem = ({ name, description, type, color, price }) => {
    return (
        <Card>
            <CardContent>
                <h4>{name}</h4>
                <p>{description}</p>
                <div>Type: {type}</div>
                <div>Color: {color}</div>
                <div>{price} $</div>
            </CardContent>
            <CardActions>
                <Button>Add to cart</Button>
            </CardActions>
        </Card>
    )
}
ProductsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    color: PropTypes.isRequired,
    price: PropTypes.number,
}
export default ProductsListItem
