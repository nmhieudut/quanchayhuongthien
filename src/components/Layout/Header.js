import {
  Box,
  Button,
  Collapse,
  Flex,
  Stack,
  Tooltip,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaMoon, FaRegLightbulb } from "react-icons/fa";
import { navs } from "src/constants/navbar";
import { color } from "src/constants/color";
export default function Header() {
  const bg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue(color.primary, color.primary);
  const { colorMode, toggleColorMode } = useColorMode();
  const borderColor = useColorModeValue(
    "1px solid rgba(229,231,235,1)",
    "1px solid rgb(31, 41, 55)"
  );
  const [showLinks, setShowLinks] = useState(false);
  const [showBg, setShowBg] = useState(false);
  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (!wrapperRef.current.contains(event.target)) {
        setShowLinks(false);
      }
    }
    if (showLinks) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [wrapperRef, showLinks]);

  function handleShowBg() {
    if (window.scrollY >= 80) {
      setShowBg(true);
    } else setShowBg(false);
  }
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleShowBg);
  }

  const Logo = () => {
    return (
      <div className="flex justify-center items-center">
        <Link href="/">
          <a className="duration-300 transform hover:scale-110 transition">
            <Image src="/images/logo.png" width={60} height={60} alt="logo" />
          </a>
        </Link>
      </div>
    );
  };

  const MenuToggle = () => {
    return (
      <Box
        ref={wrapperRef}
        display={{ base: "block", md: "none" }}
        onClick={() => setShowLinks(!showLinks)}
      >
        <Hamburger toggled={showLinks} direction="left" />
      </Box>
    );
  };

  const MenuItem = ({ href, label }) => {
    return (
      <Link href={href}>
        <a className="text-sm duration-500 hover:-translate-y-1 hover:bg-green-900 hover:text-white transition rounded-xl px-8 py-2">
          {label}
        </a>
      </Link>
    );
  };

  const NavBarContainer = ({ children }) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        className="container"
      >
        {children}
      </Flex>
    );
  };

  return (
    <Box
      className="fixed top-0 left-0 z-50 w-full"
      color={textColor}
      bg={showBg ? bg : "transparent"}
      borderBottom={showBg && borderColor}
      boxShadow="0 .5rem 1.5rem rgba(0,0,0,.1)"
    >
      <NavBarContainer>
        <Logo />
        <MenuToggle />
        <Box
          display={{ base: showLinks ? "block" : "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <Stack
            align="center"
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
          >
            {navs.map((n, i) => (
              <MenuItem key={i} href={n.to} label={n.label} />
            ))}
            <Tooltip
              hasArrow
              placement="bottom-end"
              label={colorMode === "light" ? "N????n t????i" : "N????n sa??ng"}
            >
              <Button
                border="2px"
                borderColor={color.primary}
                color={color.primary}
                onClick={toggleColorMode}
              >
                <span>
                  {colorMode === "light" ? <FaMoon /> : <FaRegLightbulb />}
                </span>
              </Button>
            </Tooltip>
          </Stack>
        </Box>
      </NavBarContainer>
    </Box>
  );
}
