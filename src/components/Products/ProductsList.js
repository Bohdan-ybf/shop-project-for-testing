import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import React from 'react'
import productsArray from './productsArray'

import ProductsListItem from './ProductListItem'

const ProductsList = () => {
    return (
        <>
            <Typography variant="h4" component="h1" align="center">
                Products List
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={3}
            >
                {productsArray.map(
                    ({ id, name, description, type, color, price, image }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                name={name}
                                description={description}
                                type={type}
                                color={color}
                                price={price}
                                image={image}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
