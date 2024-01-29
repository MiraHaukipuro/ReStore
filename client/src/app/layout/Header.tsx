import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
    {title: 'tuotteet', path: '/catalog'},
    {title: 'yritys', path: '/about'},
    {title: 'yhteydenotto', path: '/contact'},
]

const rightLinks = [
    {title: 'kirjaudu', path: '/login'},
    {title: 'rekisteröidy', path: '/register'}, 
]

const navStyles = {
        color: 'inherit', 
        typography: 'h6',
        textDecoration:'none',
    '&:hover':{
        color:'grey.500'
    },
    '&.active':{
        color:'text.secondary'
    }
     }


interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({darkMode, handleThemeChange}: Props){
    return (
        <AppBar position='static' sx={{mb: 4}}>
           <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

           <Box display='flex' alignItems='center'>
                <Typography variant='h6' component={NavLink} 
                to='/'
                sx={{navStyles}}>
                    VERKKOKAUPPA
                </Typography>
                <Switch checked={darkMode} onChange={handleThemeChange}/>
            </Box>
                <List sx= {{display: 'flex'}}>
                    {midLinks.map(({title, path})=>(
                        <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={navStyles} >

                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

                <Box display='flex' alignItems='center'>

                <IconButton size='large' edge='start' color='inherit' sx={{mr: 2}}>
                    <Badge badgeContent='4' color="secondary">
                        <ShoppingCart/>

                    </Badge>
                </IconButton>
                <List sx= {{display: 'flex'}}>
                    {rightLinks.map(({title, path})=>(
                        <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={navStyles} >


                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                </Box>

            </Toolbar>

        </AppBar>
    )
}