import { Link } from "@/components/primitives/Link";
import { DiscordIcon, LinkedinIcon, TwitterIcon } from "@/icons";
import { Box, Tooltip } from "@mui/material";

export default function Social() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        ".social-btn": {
          color: "text.secondary",
          transition: "color 250ms ease-in-out",
          "&:hover": {
            color: "text.primary",
          },
        },
      }}
    >
      <Tooltip title="Crosby Twitter">
        <Link
          href={"#"}
          className="social-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon className="social-icon" />
        </Link>
      </Tooltip>
      <Tooltip title="Crosby Linkedin">
        <Link
          href={"#"}
          className="social-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className="social-icon" />
        </Link>
      </Tooltip>
      <Tooltip title="Crosby Discord">
        <Link
          href={"#"}
          className="social-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiscordIcon className="social-icon" />
        </Link>
      </Tooltip>
    </Box>
  );
}
