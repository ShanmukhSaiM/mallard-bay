import { Box } from '@chakra-ui/react';
import NavbarComp from './components/NavbarComp';
import MainBodyComp from './components/MainBodyComp';
import FooterComp from './components/FooterComp';

function App() {
  return (
    <Box>
      <NavbarComp />
      <MainBodyComp />
      <FooterComp />
    </Box>
  );
}

export default App;
