import Styled from "@mui/material/styles"
import { Container, ImageList, ImageListItem, Box, Grid } from "@mui/material";

const Footer = () => {

    return (
        <footer>
                <Container maxWidth="lg">
            <Box bgcolor={"#ebe9e9"} mt={6}>
                    <Grid container spacing={5}>
                        <Grid item sx={12} sm={4}>
                            <Box color={"#73b2ba"} borderBottom={1}>Customer Service</Box>
                            <Box>
                               <a href="">Satisfaction Commitment</a>
                            </Box>
                            <Box>
                                <a href="">Delivery Policies</a>
                            </Box>
                            <Box>
                                <a href="">Cancellations</a>
                            </Box>
                            <Box>
                                <a href="">Return Policy</a>
                            </Box>
                        </Grid>
                        <Grid item sx={12} sm={4}>
                            <Box  color={"#73b2ba"} borderBottom={1}> Flowerbox</Box>

                            <Box>
                                <a href="">Terms of service</a>
                            </Box>

                            <Box>
                               <a href="">Privacy Policy</a>
                            </Box>
                            <Box>
                                <a href="">Career Opportunities</a>
                            </Box>
                            <Box>
                                <a href="">More Information</a>
                            </Box>

                        </Grid>
                       
                        <Grid item sx={12} sm={4}>
                           <Box>
                           <img  height="80" src="https://i.imgur.com/KxfWH9J.png"></img>
                           </Box>
                            
                            <Box color={"#fe5e9b"} mt={1} ml={-3}>
                              Flowerbox/Est.2019
                            </Box>
                        </Grid>


                    </Grid>
            </Box>
                </Container>
        </footer>
    );
}

export default Footer;