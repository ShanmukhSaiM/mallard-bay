import { Grid, GridItem, Image } from "@chakra-ui/react"
import img1 from '../assets/img1.webp'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'
import img4 from '../assets/img4.webp'
import img5 from '../assets/img5.webp'


function ImageGridComp() {
  return (
    <Grid
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(4, 1fr)'
        gap={2}
        borderRadius='2rem'
    >
        <GridItem rowSpan={2} colSpan={2} >
            <Image w='100%' h='30rem' src={img1} borderRadius='10px 0 0 10px' />
        </GridItem>
        {[img2, img3, img4, img5].map((e,i) => (
            e === img3 ? 
            <GridItem key={i} colSpan={1}>
                <Image w='100%' h='14.5rem' src={e} borderRadius='0 10px 0 0' />
            </GridItem> : e === img5 ? 
            <GridItem key={i} colSpan={1}>
             <Image w='100%' h='14.5rem' src={e} borderRadius='0 0 10px 0' />
            </GridItem> :
            <GridItem key={i} colSpan={1}>
                <Image w='100%' h='14.5rem' src={e} />
            </GridItem>
        ))}
    </Grid>
  )
}

export default ImageGridComp