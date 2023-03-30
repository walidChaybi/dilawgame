import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
function Navbar() {
  return (
    <HStack>
      <Image boxSize="150px" objectFit="contain" src={logo} />
    </HStack>
  );
}

export default Navbar;
