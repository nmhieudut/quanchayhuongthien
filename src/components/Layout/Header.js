import {
  Box,
  Collapse,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  useMediaQuery
} from "@chakra-ui/react";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navs } from "src/constants/navbar";

export default function Header() {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("teal", "teal");
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
    if (window.scrollY >= 200) {
      setShowBg(true);
    } else setShowBg(false);
  }
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleShowBg);
  }

  const Logo = () => {
    return (
      <div className="flex justify-center items-center text-3xl">QCHT</div>
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
        <a className="opacity-60 duration-500 hover:opacity-100 transform hover:scale-110 transition">
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
      color={color}
      bg={showBg ? bg : "transparent"}
    >
      <NavBarContainer>
        <Logo />
        <MenuToggle />
        <Box
          display={{ base: showLinks ? "block" : "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <Stack
            spacing={14}
            align="center"
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            p={[4, 4, 4, 4]}
          >
            {navs.map((n, i) => (
              <MenuItem key={i} href={n.to} label={n.label} />
            ))}
          </Stack>
        </Box>
      </NavBarContainer>
      <Collapse in={showLinks} animateOpacity></Collapse>
    </Box>
  );
}
