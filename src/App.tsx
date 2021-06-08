import {Button, Flex, Grid, Text, Image, Input, } from '@chakra-ui/react'
import logo from './assets/Logo.png'

function App() {
  return (
    <Flex justifyContent='center' alignItems='center' width='100vw' padding='3rem'>

        <Grid templateColumns="repeat(2, 1fr)" gap={3} height='70vh'>
        <Flex bg='rgba(255,255,255,0.1)' 
          flexDirection='column' 
          justifyContent='center' 
          align='center' 
          borderRadius={7}
          width='50vw'
          
          >
          <Image src={logo} boxSize='120px' mb='2rem'/>
          <Text textAlign='center' fontSize='2rem' >Encute Seus links <br /> Com apenas um toque</Text>
          <Input placeholder='Cole seu link aqui' width='50%'/>
          <Button mt='1rem' bg='white' color='blue.900' >Encurtar</Button>
        </Flex>
        <Flex bg='white'
        flexDirection='column' 
        
        borderRadius={7}
        overflow='scroll'
        overflowX='hidden'
        
        >
          <Button p='0.5rem' margin='5px 10px' bg='green.300' width='90%' justifyContent='start' textOverflow='ellipsis' >https://www.lopesit.comhttps://www.lopesit.comhttps://www.lopesit.comhttps://www.lopesit.comhttps://www.lopesit.comhttps://www.lopesit.com</Button>
          <Button p='0.5rem' margin='5px 10px' bg='green.300' width='90%' justifyContent='start' textOverflow='ellipsis' >https://www.lopesit.comhttps://www.lopesit.comhttps://www.lopesit.comhttps://www.lopesit.comhttps://www.lopesit.comhttps://www.lopesit.com</Button>
    
          
        </Flex>
      </Grid>
    </Flex>
  );
}

export default App;
