import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
function SearchInput({ onSearch }) {
  const ref = useRef(null);
  return (
    <Box width="100%">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement paddingLeft={15} children={<BsSearch />} />
          <Input
            ref={ref}
            variant="filled"
            placeholder="Search games..."
            borderRadius={20}
            paddingLeft={20}
          />
        </InputGroup>
      </form>
    </Box>
  );
}

export default SearchInput;
