import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import logo from "../../assets/logo.png";
import SearchInput from "../SearchInput/SearchInput";
function Navbar() {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Image boxSize="150px" objectFit="contain" src={logo} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
