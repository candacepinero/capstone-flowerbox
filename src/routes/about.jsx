import {Card, CardActions, CardContent, CardMedia, Typography, Container, ImageList, ImageListItem } from "@mui/material";
import Flower from "../flower"


const About = (props) => {
    return (
        <Container>
        <Card>
          
        <CardContent>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit aliquet sagittis id consectetur purus. Sagittis orci a scelerisque purus semper eget. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Amet consectetur adipiscing elit duis tristique. Cursus eget nunc scelerisque viverra mauris. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Odio euismod lacinia at quis. Euismod quis viverra nibh cras. Egestas dui id ornare arcu odio ut. Quis lectus nulla at volutpat diam. Vel risus commodo viverra maecenas accumsan lacus. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Habitant morbi tristique senectus et netus. Nunc pulvinar sapien et ligula ullamcorper.
            </Typography>
            <ImageList sx={{width: 1100, height: 450, }} cols={3} rowHeight={200} >
               {Flower.map((images) => {
                const {img} = images
                return (
                    <ImageListItem>
                        <img src={img} 
                        alt="flower images" 
                        loading="lazy"
                        />
                    </ImageListItem>
                )
               })}
            </ImageList>
            
        </CardContent>
        </Card>
        
        </Container>
    )
} 

export default About;