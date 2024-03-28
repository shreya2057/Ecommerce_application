import { colors } from "@/themes/colors";
import { DropDownItemProps, DropDownMenuProps } from "@/types/props";

import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

export default function DropDownMenu({
  buttonIcon,
  buttonText,
  itemGroup1,
  itemGroup2,
}: DropDownMenuProps<DropDownItemProps>) {
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant={"primaryButtonOutlined"}
        color={colors.brand[1000]}
        fontWeight={"bold"}
        leftIcon={buttonIcon}
        px={5}
        fontSize={{ base: "2xl", sm: "md" }}
      >
        <Text display={{ base: "none", sm: "flex" }} fontSize={"15px"}>
          {buttonText}
        </Text>
      </MenuButton>
      <MenuList>
        <MenuGroup>
          {itemGroup1.length !== 0 &&
            itemGroup1.map((item) => (
              <MenuItem
                key={item.icon + item.text}
                color={colors.brand[800]}
                fontSize={"15px"}
                fontWeight={700}
                fontFamily={"inherit"}
                icon={item.icon}
                _hover={{
                  background: colors.brand[300],
                }}
                _focus={{
                  background: colors.brand[300],
                }}
                onClick={item.onClickFunction}
              >
                {item.text}
              </MenuItem>
            ))}
        </MenuGroup>
        {itemGroup2?.length !== 0 && <MenuDivider />}

        <MenuGroup>
          {itemGroup2?.length !== 0 &&
            itemGroup2?.map((item) => (
              <MenuItem
                key={item.icon + item.text}
                color={colors.brand[800]}
                fontSize={"15px"}
                fontWeight={700}
                fontFamily={"inherit"}
                icon={item.icon}
                _hover={{
                  background: colors.brand[300],
                }}
                _focus={{
                  background: colors.brand[300],
                }}
                onClick={item.onClickFunction}
              >
                {item.text}
              </MenuItem>
            ))}
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}
