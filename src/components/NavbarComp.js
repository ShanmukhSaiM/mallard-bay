import { Box, Button, Card, Divider, Flex, HStack, IconButton, Image, Spacer } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import { SearchIcon } from '@chakra-ui/icons'
import { HiMenu } from 'react-icons/hi';
import { IoPersonCircle } from 'react-icons/io5';

function NavbarComp() {
  return (
    <Flex p='2rem 7rem'>
        <Image 
            w='8rem'
            src={logo} 
            alt='logo'
        />
        <Spacer />
        <Card 
            variant={'outline'}
            ml='3rem'
            pl='2rem' 
            pr='1rem' 
            py='0.5rem' 
            borderRadius='2.5rem' 
            boxShadow= 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' 
        >
            <HStack gap={2}>
                {['States', 'Species', 'Start', 'End'].map((e,i) => (
                    e != 'End' ? 
                    <>
                        <Button key={i} variant='ghost' fontWeight={600} >
                            {e}
                        </Button>
                        <Divider orientation='vertical' />
                    </>
                    : <Button key={i} variant='ghost' fontWeight={600}>
                    {e}
                    </Button>
                ))}

                <IconButton
                    bgColor='#f7743a'
                    color='#fff'
                    borderRadius='50%'
                    icon={<SearchIcon />}
                />
            </HStack>
        </Card>
        <Spacer />
        <HStack>
            <Button variant='ghost' fontWeight={700} fontSize='lg' >
                Become a Guide
            </Button>
            <Card variant='outline' direction='row' p='5px 10px' borderRadius='1.5rem'>
                {
                    [<HiMenu />, <IoPersonCircle />].map((e,i) => (
                        <IconButton
                            key={i}
                            fontSize='2rem'
                            bgColor='transparent'
                            icon={e}
                        />
                    ))
                }
            </Card>
        </HStack>
    </Flex>
  )
}

export default NavbarComp