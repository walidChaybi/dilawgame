import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useEffect, useState } from "react";

function PlatformSelector({ onSelectPlatform, selectedPlatform }) {
  const [platforms, setPlatforms] = useState([]);
  const [error, setError] = useState(false);
  function fetchData() {
    // https://api.rawg.io/api/games?key=e2948cfac9e64a5ba426e4d3a233587c
    let url =
      "https://api.rawg.io/api/platforms/lists/parents?key=e2948cfac9e64a5ba426e4d3a233587c";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPlatforms(data.results);
      })
      .catch((error) => {
        setError(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (error) return;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
