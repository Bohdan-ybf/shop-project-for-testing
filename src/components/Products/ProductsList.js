import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import React from 'react'

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
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        name="iPhone XS"
                        description="This is iPhone XS"
                        type="phone"
                        color="red"
                        price={500}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        name="iPhone 12"
                        description="This is iPhone 12"
                        type="phone"
                        color="gold"
                        price={1500}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        name="iPhone 12"
                        description="This is iPhone 12"
                        type="phone"
                        color="gold"
                        price={1500}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsList
