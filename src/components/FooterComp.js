import { Box, Flex, HStack, IconButton, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import { AiFillHeart } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function FooterComp() {
  return (
    <Box bgColor='#F6F6F6' p='2rem 7rem'>
        <VStack gap={5}>
            <Image 
                w='8rem'
                src={logo} 
                alt='logo'
            />
            <Text color='gray' fontWeight={600} fontSize='lg'>The quickest way for a sportsman to book with reputable guides and outfitters.</Text>
            <HStack gap='3rem'>
                {
                    ['List on Mallard Bay', 'About', 'Press', 'privacy', 'Terms', 'Sitemap'].map((e,i) => (
                        <Text fontSize='1.6rem' fontWeight={700} color='#444' key={i}>{e}</Text>
                    ))
                } 
            </HStack>
        </VStack>
        <Flex pt='4rem'>
            <HStack fontSize='lg' fontWeight={600} color='#444'>
                <Text color='#444'>© 2022 Mallard Bay, Inc. &bull; Made with</Text><AiFillHeart color='#F65E38' /><Text color='#444'>in Baton Rouge, LA</Text>
            </HStack>
            <Spacer />
            <HStack>
                {[<FaFacebookF />, <FaTwitter />, <FaInstagram />].map((e,i) => (
                    <IconButton variant='ghost' fontSize='xl' key={i} icon={e} />
                ))}
            </HStack>
        </Flex>
    </Box>

  )
}

export default FooterComp