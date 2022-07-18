
import {AppBar, Toolbar, Icon, Typography, Stack, Container} from "@mui/material"
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import {Link} from "react-router-dom"



const Nav = () => {


    return (
        <Container>
        <AppBar position='static' style={{background: "#ebe9e9", color:"#fe5e9b"}}>
            <Toolbar>
                <Icon size="large" edge="start" color="inherit" aria-label="lego">
                    <LocalFloristIcon/>
                </Icon>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Flower Box
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Link to="/">Home</Link>
                    <Link to="/about"> About</Link>
                    <Link to="/contact"> Contact</Link>

                </Stack>


    


        
      
            </Toolbar>
        </AppBar>
        </Container>
    );
}

export default Nav;