import { Box, Heading, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function FeaturesComp(props) {
  return (
    <Box>
        <Heading fontSize='1.8rem'>{props.name}</Heading>
        <SimpleGrid rows={3} columns={2} spacingX={10} spacingY = {6} p='3rem 2rem 0 2rem'>
            {
                props.data.map((e,i) => (
                    <HStack key={i}>
                        {e[0]}
                        <Text>{e[1]}</Text>
                    </HStack>
                ))
            }
        </SimpleGrid>
    </Box>
  )
}

export default FeaturesComp