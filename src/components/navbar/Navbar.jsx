import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import logo from "../../assets/logo.png";
function Navbar() {
  return (
    <HStack bg="rgb(20,15,55)" padding="10px" justifyContent="space-between">
      <Image boxSize="150px" objectFit="contain" src={logo} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
