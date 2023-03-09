import { createTheme, ThemeOptions } from "@mui/material";
import { Link } from "./components/primitives/Link";

const round = (value: number): number => Math.round(value * 1e5) / 1e5;
const pxToRem = (size: number): string => `${size / 16}rem`;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const buildVariant = (
  fontWeight: number,
  size: number,
  lineHeight: number,
  letterSpacing?: number
) => ({
  fontWeight,
  fontSize: pxToRem(size),
  lineHeight: `${round(lineHeight / size)}`,
  ...(letterSpacing !== undefined
    ? { letterSpacing: `${round(letterSpacing / size)}em` }
    : {}),
});

export function getThemeConfig(): ThemeOptions {
  const theme = createTheme();

  return {
    breakpoints: {
      keys: ["xs", "xsm", "sm", "md", "lg", "xl", "xxl"],
      values: {
        xs: 0,
        xsm: 520,
        sm: 760,
        md: 960,
        lg: 1280,
        xl: 1400,
        xxl: 1800,
      },
    },
    palette: {
      mode: "dark",
      common: {
        border: "#0E1C32",
      },
      background: {
        default: "#38383b",
        // paper: "#0B1119",
        // primary: "#1A232F",
      },
      // primary: {
      //   main: "#2992F5",
      // },
      // secondary: {
      //   main: "#091C34",
      //   light: "#FFFFFF",
      //   dark: "#0D171F",
      // },
      text: {
        primary: "#ffffff",
        secondary: "#a8a6a1",
      },
      action: {
        hoverOpacity: 0.14,
        hover: "rgba(255, 255, 255, 0.1)",
      },
      divider: "#172C46",
    },
    typography: {
      h1: buildVariant(700, 50, 60, 0),
      h2: buildVariant(500, 30, 35, 0),
      h3: buildVariant(500, 26, 35, 0),
      h4: buildVariant(500, 20, 24, 0),
      subtitle1: buildVariant(500, 20, 24, 0),
      subtitle2: buildVariant(500, 18, 22, 0),
      body1: buildVariant(400, 16, 20, 0),
      body2: buildVariant(400, 14, 18, 0),
      small: buildVariant(400, 12, 16, 0),
      button: {
        ...buildVariant(500, 14, 18, 0),
        textTransform: "none",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ".babapro": {
            fontFamily: "babapro, san-serif !important",
          },
          ".roboto-mono": {
            // eslint-disable-next-line quotes
            fontFamily: "'Roboto Mono', monospace !important",
          },
          // disable arrow from input number
          // Chrome, Safari, Edge, Opera
          "input::-webkit-outer-spin-button,input::-webkit-inner-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
          // Firefox
          "input[type=number]": {
            MozAppearance: "textfield",
          },
          ".hide-scrollbar::-webkit-scrollbar": {
            display: "none",
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          ".hide-scrollbar": {
            msOverflowStyle: "none" /* IE and Edge */,
            scrollbarWidth: "none" /* Firefox */,
          },
          ".custom-scrollbar": {
            // firefox
            scrollbarWidth: "thin",
            scrollbarColor: "#424242 transparent",

            "&:hover": {
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#424242",
              },
            },

            // chrome, safari
            "&::-webkit-scrollbar": {
              width: 4,
              height: 4,
              backgroundColor: "transparent",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: 10,
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "#757575",
              },
            },
            "&::-webkit-scrollbar-corner": {
              display: "none",
            },
          },
          ".text-truncate": {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          },
          ".hexagon": {
            clipPath: 'url("#hexagon")',
          },
          body: {
            overflowX: "hidden",
          },
        },
      },

      // typography
      MuiTypography: {
        defaultProps: {
          variant: "body1",
          variantMapping: {
            h1: "h1",
            h2: "h2",
            h3: "h3",
            h4: "p",
            body1: "p",
            body2: "p",
            subtitle1: "p",
            subtitle2: "p",
            small: "p",
            button: "p",
          },
        },
      },

      // button
      MuiButton: {
        defaultProps: {
          disableElevation: true,
          LinkComponent: Link,
        },
        styleOverrides: {
          root: {
            textTransform: "capitalize",
            borderRadius: 8,
          },
          sizeMedium: {
            padding: theme.spacing(1, 2),
          },
          sizeSmall: {
            padding: theme.spacing(0.75, 1.5),
          },
        },
      },

      // link
      MuiLink: {
        defaultProps: {
          underline: "hover",
        },
        styleOverrides: {
          root: {
            cursor: "pointer",
          },
        },
      },

      // dialog
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundColor: "#0B1119",
            backgroundImage: "none",
          },
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            padding: theme.spacing(2, 2.5),
            backgroundColor: "#101822",
            "&.MuiDialogTitle-root+.MuiDialogContent-root": {
              paddingTop: theme.spacing(2.5),
            },
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            padding: theme.spacing(2, 3),
            ">:not(:first-of-type)": {
              marginLeft: theme.spacing(2),
            },
          },
        },
      },

      // svg
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            fontSize: pxToRem(20),
          },
          fontSizeSmall: {
            fontSize: pxToRem(16),
          },
          fontSizeLarge: {
            fontSize: pxToRem(24),
          },
        },
      },

      // backdrop
      // MuiBackdrop: {
      //   styleOverrides: {
      //     root: {
      //       backgroundColor: 'rgba(0, 0, 0, 0.3)',
      //     },
      //   },
      // },

      // paper
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            borderRadius: 14,
            ...(ownerState.variant === "border"
              ? {
                  border: "1px solid",
                  borderColor: theme.palette.common.border,
                }
              : {}),
          }),
        },
      },

      // table
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: "none",
            whiteSpace: "nowrap",
          },
          head: {
            padding: "8px 16px 24px",
          },
          body: {
            padding: "10px 16px",
          },
        },
      },

      // accordion
      MuiAccordion: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          expandIconWrapper: {
            color: "#002A52",
            marginLeft: 8,
            "&.Mui-expanded": {
              color: "#7994C1",
            },
          },
        },
      },

      // input
      MuiOutlinedInput: {
        styleOverrides: {
          // root: {
          //   backgroundColor: '#F5F7F8',
          // },
          // notchedOutline: {
          //   borderRadius: 4,
          //   borderColor: '#00569599',
          // },
        },
      },

      // skeleton
      MuiSkeleton: {
        defaultProps: {
          animation: "wave",
        },
      },

      // container
      MuiContainer: {
        defaultProps: {
          maxWidth: "xl",
        },
        styleOverrides: {
          root: {
            "@media (min-width: 1280px)": {
              paddingLeft: theme.spacing(4),
              paddingRight: theme.spacing(4),
            },
          },
        },
      },
    },
  };
}
