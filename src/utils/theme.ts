import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    ditto: {
      blue: "#1e40af",
      lightBlue: "#456ced",
      veryLightBlue: "#99e6ff",
      purple: "#9c1092",
      lighterPurple: "#d618c9",
      lightPurple: "#f08be9",
      veryLightPurple: "#f2d2f7",
    },
  },
  fonts: {
    heading: "DM Sans, sans-serif",
    body: "DM Sans, sans-serif",
  },
  styles: {
    global: {
      "*": {
        boxSizing: "border-box",
      },
      "html, body": {
        padding: 0,
        margin: 0,
        height: "100%",
        width: "100%",
      },
      a: {
        color: "inherit",
        textDecoration: "none",
      },
    },
  },
  components: {
    Box: {
      baseStyle: {
        overflowWrap: "anywhere",
      },
    },
    Text: {
      baseStyle: {
        overflowWrap: "anywhere",
      },
    },
    Button: {
      variants: {
        blue: {
          bg: "ditto.purple",
          borderRadius: "20",
          color: "white",
          _hover: {
            bg: "ditto.lighterPurple",
            _active: {
              bg: "ditto.veryLightPurple",
            },
          },
        },
      },
    },
  },
});
