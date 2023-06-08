import { Link } from "@/components/primitives/Link";
import { Box, Container, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Social from "./Social";

export default function Header() {
  const headerConfigs = [
    {
      id: 0,
      title: "Shop",
      link: "/shop",
    },
    {
      id: 1,
      title: "Our Story",
      link: "/our-story",
    },
    {
      id: 2,
      title: "Journal",
      link: "/journal",
    },
    {
      id: 3,
      title: "Contact",
      link: "/contact-us",
    },
  ];

  const [hide, setHide] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const scrollYRef = useRef<number>(
    typeof window !== "undefined" ? window.scrollY : 0
  );

  useEffect(() => {
    const scrollHandler = () => {
      if (headerRef.current) {
        const isScrollDown = Boolean(window.scrollY - scrollYRef.current > 0);
        scrollYRef.current = window.scrollY;
        if (isScrollDown && window.scrollY > headerRef.current.clientHeight) {
          setHide(true);
        } else {
          setHide(false);
        }
      }
    };
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Box
      ref={headerRef}
      component="header"
      sx={{
        position: "fixed",
        bgcolor: "background.default",
        py: 1,
        top: 0,
        left: 0,
        right: 0,
        zIndex: "1000",
        transition: "top 250ms ease-in-out",
        "&.up": {
          top: -70,
        },
      }}
      className={hide ? "up" : undefined}
    >
      <Container
        sx={{
          display: "flex",
          alignItem: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h2">Crosby</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {headerConfigs.map((item) => (
            <Link href={item.link} key={item.id}>
              <Typography
                variant="body1"
                sx={{ color: "text.primary", p: 2, cursor: "pointer" }}
              >
                {item.title}
              </Typography>
            </Link>
          ))}
        </Box>
        <Social />
      </Container>
    </Box>
  );
}
