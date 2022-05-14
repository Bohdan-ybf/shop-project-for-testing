import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import Menu from './Menu/Menu'
import Cart from './Cart/Cart'

// import { makeStyles } from '@mui/material'

// const useStyles = makeStyles(() => ({
//     menuButton: {
//         marginRight: 5,
//     },
//     title: {
//         flexGrow: 1,
//     },
// }))

const Header = () => {
    // const classes = useStyles()
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        // className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        // className={classes.title}
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Fake Shop
                    </Typography>
                    <Menu />
                    <Cart />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
