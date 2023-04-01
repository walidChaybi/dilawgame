import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
function SearchInput() {
  return (
    <InputGroup>
      <InputLeftElement paddingLeft={15} children={<BsSearch />} />
      <Input
        variant="filled"
        placeholder="Search games..."
        borderRadius={20}
        paddingLeft={20}
      />
    </InputGroup>
  );
}

export default SearchInput;
