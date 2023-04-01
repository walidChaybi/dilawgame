import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import logo from "../../assets/logo.png";
import SearchInput from "../SearchInput/SearchInput";
function Navbar({ onSearch }) {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Image boxSize="150px" objectFit="contain" src={logo} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
