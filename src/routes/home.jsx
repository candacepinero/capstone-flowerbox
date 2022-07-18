import Data from "../Data"
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Container from "@mui/material/Container";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';





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
                                sx={{
                                    background:
                                        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                }}
                                title={`$ ${price}`}
                                position="top" />

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