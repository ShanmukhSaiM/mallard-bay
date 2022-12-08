import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Box, Button, Heading, HStack } from '@chakra-ui/react'

function DatePickerComp() {
    const [value] = useState(new Date(2022, 12, 19));

  return (
    <Box>
        <Heading fontSize='1.8rem'>Hunting trip on December 19th - December 20th</Heading>
        <HStack gap={5} pt='3rem' pl='2rem'>
            <Calendar  />
            <Calendar value={value} />
        </HStack>
        <Button 
            variant='solid' 
            bgColor='#000' 
            borderRadius='1.5rem' 
            color='#fff' 
            ml='2rem'
            my='2rem'
        >
            Clear dates
        </Button>
    </Box>
  )
}

export default DatePickerComp