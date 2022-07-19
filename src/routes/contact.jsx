import { Container, Typography, Card, ImageList, ImageListItem, CardContent } from "@mui/material";

const Contact = (props) => {
    return (
        <Container>
           <Card>
              <ImageList>
                    <ImageListItem>
                        
                        <img src="https://i.imgur.com/3QFysA5_d.jpg?maxwidth=520&shape=thumb&fidelity=high" alt="dev-img"/>
                    </ImageListItem>
            <CardContent>
                        <Typography variant="h4" >
                            Meet the developer
                        </Typography>
                        <Typography 
                         variant="body"


                        
                        >
                            
            <Typography variant="subtitle1" mt={3} >
                Hello, My name is Candace and I'm a software engineer in Chattanooga TN, I attended General Assembly's 12 week Full Stack Immersive program in April 2022 and started my journey to becoming a software engineer. Languages and technologies I've used include: HTML, CSS, JavaScript, React, Python, jQuery, Express, django, PostgreSQL, MongoDB, Node.js, Material-UI, and Materialize. I created this application using react and material-ui. 
            </Typography>
                        </Typography>
              </CardContent>
              </ImageList>
            </Card>

        </Container>
    )
} 

export default Contact;