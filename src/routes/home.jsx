import Data from "../Data"
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Container from "@mui/material/Container";
import IconButton from '@mui/material/IconButton';
import LocalOffer from '@mui/icons-material/LocalOffer';
import Tooltip from "@mui/material/Tooltip";




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
                                 />

                            <ImageListItemBar

                                title={name}
                                subtitle={tags.join(" ")}
                                actionIcon={
                                    <Tooltip title={`$ ${price}`}>
                                    <IconButton>
                                        <LocalOffer sx={{color: "#fe5e9b"}}/>
                                    </IconButton>
                                    </Tooltip>

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