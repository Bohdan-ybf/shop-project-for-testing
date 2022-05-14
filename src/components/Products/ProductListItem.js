import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import './ProductListItem.css'
import TextField from '@mui/material/TextField'

const ProductsListItem = ({ name, description, type, color, price, image }) => {
    // eslint-disable-next-line no-unused-vars
    const [count, setCount] = useState(1)
    return (
        <Card>
            <CardContent>
                <div className="product-img">
                    <img src={image} alt="iPhone" />
                </div>
                <h4>{name}</h4>
                <p>{description}</p>
                <div>Type: {type}</div>
                <div>Color: {color}</div>
                <div className="product-price">{price} $</div>
                <div className="product-quantity">
                    <Button
                        variant="outlined"
                        onClick={() => setCount(count - 1)}
                    >
                        -
                    </Button>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        value={count}
                    />
                    <Button
                        variant="outlined"
                        onClick={() => setCount(count + 1)}
                    >
                        +
                    </Button>
                </div>
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
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
}

ProductsListItem.defaultProps = {
    description: 'No description ...',
}
export default ProductsListItem
