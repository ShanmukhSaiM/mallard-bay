import { Heading, HStack, Image, Link, Stack, Text } from '@chakra-ui/react'
import chasingFowl from '../assets/ChasingFowl.jpg'
import map from '../assets/map.png'

function OutfitterComp() {
  return (
    <HStack pb='2rem' gap={10}>
        <Stack gap={5}>
            <Heading fontSize='1.8rem'>Outfitter</Heading>
            <HStack gap={7}>
                <Image 
                    w='8rem'
                    bgColor='#fbf7f3'
                    borderRadius='50%'
                    src={chasingFowl}
                    boxShadow= 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                />
                <Stack direction='column'>
                        <Text fontWeight={600} fontSize='xl'>
                            Guided by Chasing Fowl Outfitters
                        </Text>
                        <Text color={'gray.500'} fontSize='1rem' fontWeight={600}>
                            Joined in March 2022
                        </Text>
                    </Stack>
            </HStack>
            <Text color='gray.500' fontWeight='lg'>
                Chasing Fowl Outfitters was born from few guys that are addicted to waterfowl hunting. Hunting season is on their mind 365 days a year. They currently are running guided waterfowl hunts out of the Mankato area hunting all privately owned land. They consider their hunts to be the most premier in the state of Minnesota, by saying that they have more than 10+ years of experience getting guests on hunts of a lifetime. They are looking to get you and your group on hunts that will have a long-lasting memory for the rest of your hunting career. They also pride themselves on taking professional photos for you to keep as well as short films. We pride ourselves in showing first-time hunters the ins and outs to be more successful on their hunts in the future!
            </Text>
            <Link textDecoration='underline' fontWeight={600}>Read more</Link>
        </Stack>
        <Image 
            w='50%'
            src={map}
        />
    </HStack>
  )
}

export default OutfitterComp