import { Box, ButtonGroup, Flex, Heading, HStack, IconButton, Spacer } from '@chakra-ui/react'
import { ChevronLeftIcon,ChevronRightIcon } from '@chakra-ui/icons'
import OtherListingCard from './OtherListingCard'

function OtherListingComp() {
  return (
    <Box pt='2rem'>
        <Flex>
            <Heading fontSize='1.8rem'>Other listing by this outfitter</Heading>
            <Spacer />
            <ButtonGroup >
                <IconButton fontSize='1.5rem' variant='ghost' icon={<ChevronLeftIcon />} />
                <IconButton fontSize='1.5rem' borderRadius='50%' icon={<ChevronRightIcon />} />
            </ButtonGroup>
        </Flex>
        <HStack py='3rem' gap={8}>
            <OtherListingCard />
            <OtherListingCard />
            <OtherListingCard />
            <OtherListingCard />
        </HStack>
    </Box>
  )
}

export default OtherListingComp