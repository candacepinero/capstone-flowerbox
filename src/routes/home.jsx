import { Link } from "react-router-dom";
import Data from "../Data"
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Container from "@mui/material/Container";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';




const Home = () => {
    return (

        <Container>
            <ImageList cols={3} gap={30}>
                {Data.map((flower) => {
                    const { name, price, tags, image } = flower
                    return (


                        <ImageListItem key={image}>
                            <img src={image}
                                srcSet={image}
                                alt={name}
                                loading="lazy"

                            />

                            <ImageListItemBar

                                title={name}
                                subtitle={tags.join(" ")}
                                actionIcon={
                                    <IconButton

                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${price}`}
                                    >
                                        <InfoIcon />
                                    </IconButton>

                                }

                            />
                        </ImageListItem>
                    )
                })}
            </ImageList>
        </Container>



    )
}
export default Home;