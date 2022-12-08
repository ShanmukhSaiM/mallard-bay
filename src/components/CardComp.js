import { Button, ButtonGroup, Card, Heading, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react'

function CardComp() {
  return (
    <Card variant={'elevated'} p='3rem 2rem' w='100%' boxShadow= 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' >
        <Stack gap={3}>
            <Input placeholder='Select dates' size='lg' bgColor='#EEEEEE'  _placeholder={{ fontWeight: '500' }} />
            <Text align='center' fontWeight={500} color='gray.500' fontSize={'lg'}>Please select a start and end date.</Text>
            {
                [['Price per Adult Hunter, 1-3 Hunters', '$200/day'], ['Price per Adult Hunter, 4+ Hunters', '$175/day'], ['Price per Youth Hunter (16 and under)', '$100/day']].map((e,i) => (
                    <HStack key={i} gap={5}>
                        <Stack spacing={0}>
                            <Heading fontSize='1.3rem'>{e[0]}</Heading>
                            <Text color='gray.500'>{e[1]}</Text>
                        </Stack>
                        <ButtonGroup spacing='6' alignItems='center'>
                            <Button fontSize='1.5rem' bgColor='#F6F6F6' borderRadius='50%' >-</Button>
                            <Text fontSize='1.2rem'>0</Text>
                            <Button fontSize='1.5rem' bgColor='#000' color='#fff' alignItems='center' borderRadius='50%' >+</Button>
                        </ButtonGroup>
                    </HStack>
                ))
            }
            <Button size='lg' bgColor='#f3886b' color='#fff' fontWeight={500}>Reserve</Button>
            <Text align='center' fontWeight={500} color='gray.500' fontSize={'lg'}>You won't be charged yet</Text>
        </Stack>
    </Card>
  )
}

export default CardComp