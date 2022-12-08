import { Box, Divider, Grid, GridItem, Heading, HStack, Image, Link, Spacer, Stack, StackDivider, Text, VStack } from '@chakra-ui/react'
import chasingFowl from '../assets/ChasingFowl.jpg'
import { AiOutlineCalendar, AiOutlineWifi } from 'react-icons/ai';
import { TbBed, TbGps,TbBus } from 'react-icons/tb';
import { BiDish,BiFirstAid } from 'react-icons/bi';
import { BsExclamationTriangle, BsFlagFill } from 'react-icons/bs';
import TargetSpecies from './TargetSpecies';
import FeaturesComp from './FeaturesComp';
import { FiBluetooth } from 'react-icons/fi';
import { GiBeltArmor, GiFishingPole, GiSpearfishing, GiFishingLure } from 'react-icons/gi';
import { FaToilet } from 'react-icons/fa';
import { IoFastFoodOutline } from 'react-icons/io5';
import DatePickerComp from './DatePickerComp';
import CardComp from './CardComp';

function GuideInfoComp() {

    const amenitiesData = [
        [<FiBluetooth fontSize='2rem' />,'Bluetooth music'],
        [<GiBeltArmor fontSize='2rem' />,'Fighting belt'],
        [<TbGps fontSize='2rem' />,'GPS'],
        [<TbBus fontSize='2rem' />,'RV hookups'],
        [<FaToilet fontSize='2rem' />,'Toilet'],
        [<AiOutlineWifi fontSize='2rem' />,'Wifi']
    ]

    const tripData = [
        [<GiFishingPole fontSize='2rem' />,'Rods, reels & tackle'],
        [<GiSpearfishing fontSize='2rem' />,'Catch cleaning & filleting'],
        [<IoFastFoodOutline fontSize='2rem' />,'Snacks'],
        [<GiFishingLure fontSize='2rem' />,'Lures'],
        [<BiFirstAid fontSize='2rem' />,'First mate']
    ]

  return (
    <Grid
        templateColumns='repeat(5, 1fr)'
        gap={6}
    >
        <GridItem colSpan={3}>
            <Stack divider={<StackDivider />} gap={5}>
                <Stack direction='row' align='center'>
                    <Stack direction='column'>
                        <Heading fontSize='1.8rem'>
                            Hunting adventure guided by 
                            <Link pl={'10px'} textDecoration={'underline'}>Chasing Fowl Outfitters</Link>
                        </Heading>
                        <HStack>
                            <Text color={'gray.500'} fontSize='1rem' fontWeight={600}>
                                4 sportsmen &bull; Up to 10 guests &bull; Lodging included &bull;
                            </Text>
                            <Link color='#000' fontWeight={600} textDecoration={'underline'}>Contact us</Link>
                        </HStack>
                    </Stack>
                    <Spacer />
                    <Image 
                        w='8rem'
                        bgColor='#fbf7f3'
                        borderRadius='50%'
                        src={chasingFowl}
                        boxShadow= 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                    />
                </Stack>
                <Stack gap={3} px='1rem' fontSize='xl'>
                    {
                        [[<AiOutlineCalendar fontSize='2rem' />, 'Free cancellation before Sep 23'], [<TbBed fontSize='2rem' color='' />, 'Lodging included'], [<BiDish fontSize='2rem' color='' />, 'Meals included']].map((e,i) => (
                            <HStack gap={2}>
                                {e[0]}
                                <Text fontWeight={700}>{e[1]}</Text>
                            </HStack>
                        ))
                    }
                    <Stack direction='row' gap={2}>
                        <BsExclamationTriangle fontSize='3rem' color='#fd761f' />
                        <Stack>
                            <Text fontWeight={700}>License required</Text>
                            <Text color='gray.400' fontWeight={500}>This trip requires a fishing license from Louisiana, USA. View <Link textDecoration='underline'>the regulations.</Link></Text>
                            <Link fontWeight={700} textDecoration='underline'>Obtain license here</Link>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack gap={3} fontSize='xl' fontWeight={500}>
                    <Text color='gray.500'>
                        Our goal at Chasing Fowl is to provide the best waterfowl experience for our guests in Minnesota.
                        Everyone on our team has a strong passion for chasing waterfowl all year round from early honkers in September to late-season lessers in Texas come February. This allows us to be able to learn the bird's patterns and have tricks up ourselves from across the country that we bring back home to Minnesota. 
                    </Text>
                    <Link textDecoration='underline'>Read more</Link>
                </Stack>
                <TargetSpecies />
                <Box>
                    <FeaturesComp name='Amenities' data={amenitiesData}  />
                    <Link p='1.5rem 2rem' textDecoration='underline' fontSize='xl' fontWeight={500}>Show all 20 amenities</Link>
                </Box>

                <Box>
                    <FeaturesComp name='Trip includes' data={tripData}  />
                </Box>
                <DatePickerComp />
                <></>
            </Stack>
        </GridItem>

        <GridItem colSpan={2} ml='8rem'>
            <Stack align='center' w='100%' gap={4}>
                <Text fontSize='xl'>Starting at <Text as='span' fontWeight='bold'>$2600</Text></Text>
                <CardComp />
                <HStack fontSize='xl' py='1rem' color='#666'>
                    <BsFlagFill />
                    <Link textDecoration='underline'>Report this listing</Link>
                </HStack>
            </Stack>
        </GridItem>
  </Grid>
  )
}

export default GuideInfoComp