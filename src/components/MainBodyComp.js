import { Box, Flex, Heading, HStack, Spacer, Stack, StackDivider, Text } from '@chakra-ui/react'
import { IoBoat, IoNewspaper, IoLocationSharp } from 'react-icons/io5';
import { IoIosShareAlt, IoIosHeartEmpty } from 'react-icons/io';
import ImageGridComp from './ImageGridComp';
import GuideInfoComp from './GuideInfoComp';
import OutfitterComp from './OutfitterComp';
import OtherListingComp from './OtherListingComp';


function MainBodyComp() {
  return (
    <Box mt='2.5rem' px='7rem' >
        <Flex>
            <Stack direction='column'>
                <Heading fontSize='1.8rem'>
                    Minnesota Regular Season Duck & Goose Hunts
                </Heading>
                <HStack>
                    {[[<IoBoat color='#fb6c0e' />, 'Fishing'], [<IoNewspaper color='#fb6c0e' />, 'License Required'], [<IoLocationSharp color='#fb6c0e' />, 'Mancato, Minnesota, United States']].map((e,i) => (
                        <HStack>
                            {e[0]}
                            <Text fontSize='1rem' fontWeight={600}>
                                {e[1]}
                            </Text>
                    </HStack>
                    ))}
                </HStack>
            </Stack>
            <Spacer />
            <Stack direction='row'>
                {[[<IoIosShareAlt color='#fb6c0e' />, 'Share'], [<IoIosHeartEmpty color='#fb6c0e' />, 'Save']].map((e,i) => (
                    <HStack fontSize='2rem'>
                        {e[0]}
                        <Text fontSize='1rem' fontWeight={600}>
                            {e[1]}
                        </Text>
                    </HStack>
                ))}
            </Stack>
        </Flex>
        <Box my='2rem'>
            <ImageGridComp />
        </Box>
        <GuideInfoComp />
        <Stack py='1.5rem' divider={<StackDivider w='60%' />}>
            <OutfitterComp />
            <OtherListingComp />
        </Stack>
    </Box>
  )
}

export default MainBodyComp