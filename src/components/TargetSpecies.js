import { Heading, HStack, Image, Link, Stack, Text, VStack } from '@chakra-ui/react'
import grouper from '../assets/grouper.jpg'
import fishingCharter from '../assets/fishingCharter.jpg'
import yellowFin from  '../assets/yellowFin.jpg'
import tuna from '../assets/tuna.jpg'
import queen from '../assets/queen.jpg'

function TargetSpecies() {
  return (
    <Stack gap={2}>
        <Heading fontSize='1.8rem'>Target species</Heading>
        <Text fontSize='xl' fontWeight={500}>Fishing</Text>
        <HStack gap={2}>
            {
                [[grouper, 'Grouper'], [fishingCharter, 'Fishing charter'], [yellowFin, 'Yellowfin tuna'], [tuna, 'Tuna'], [queen, 'Queen snapper']].map((e,i) => (
                    <VStack>
                        <Image src={e[0]} w='10rem' h='8rem' />
                        <Text color='gray.500' fontWeight={500}>{e[1]}</Text>
                    </VStack>
                ))
            }
        </HStack>
        <Link textDecoration='underline' fontSize='xl' fontWeight={500}>Show all 12 species</Link>
    </Stack>
  )
}

export default TargetSpecies