import { Container, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";
import { display, margin } from "@mui/system";

const Contact = (props) => {
    return (
        <Container>
            <Card>
                <CardMedia>

<img style={{height: 300}} src="https://i.imgur.com/cZzWjTJ.png" alt="dev-img" />
                    
                </CardMedia>

                <CardContent>
                    <Typography variant="h4" >
                        Meet the developer
                    </Typography>


                    <Typography mb={4} variant="subtitle1">
                        Hello, My name is Candace and I'm a software engineer in Chattanooga TN, I attended General Assembly's 12 week Full Stack Immersive program in April 2022 and started my journey to becoming a software engineer. Languages and technologies I've used include: HTML, CSS, JavaScript, React, Python, jQuery, Express, django, PostgreSQL, MongoDB, Node.js, Material-UI, and Materialize. I created this application using react and material-ui.
                    </Typography>
                <a  href="https://github.com/candacepinero"><Button sx={{bgcolor:"#fc70a5" }}variant="contained">GitHub</Button></a>
                <a style={{ margin: 10}} href="https://www.linkedin.com/in/candace-pinero/"><Button sx={{bgcolor:"#fc70a5" }} variant="contained">Linkedin</Button></a>

                </CardContent>

            </Card>

        </Container>
    )
}

export default Contact;