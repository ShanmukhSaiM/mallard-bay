import { StarIcon } from '@chakra-ui/icons'
import { Badge, Box, HStack, Image, Text } from '@chakra-ui/react'
import listingCardImg from '../assets/listingCardImg.jpg'

function OtherListingCard() {
    const property = {
        imageUrl: listingCardImg,
        imageAlt: 'Fishing',
        type: 'Hunting',
        location: 'Bastrop, Louisiana',
        title: 'Full Day private Charter',
        formattedPrice: '$2600',
        rating: 4.5,
      }
  return (
    <Box maxW='sm' border='none' overflow='hidden'>
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box py='5px'>
        <Box display='flex' alignItems='baseline'>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='sm'
          >
            {property.type} &bull; {property.location}
          </Box>
        </Box>

        <HStack>
            <StarIcon /> <Text fontWeight={700}  color='#444' fontSize='xl'>{property.rating} &bull;</Text> <Text fontWeight={700} color='#444' fontSize='xl'>{property.title}</Text>
        </HStack>

        <Text fontSize='lg'>
            Starting at <Text as='span' fontWeight='bold'>{property.formattedPrice}</Text>
        </Text>
      </Box>
    </Box>
  )
}

export default OtherListingCard