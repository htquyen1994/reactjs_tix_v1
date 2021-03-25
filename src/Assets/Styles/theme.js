import { createMuiTheme } from '@material-ui/core';

const themeMain = createMuiTheme({
    palette: {
        primary: {
            light: "#fff",
            main: "#fff",
            dark: "#fff",
        },
        secondary: {
            light: "#FEC739",
            main: "#FEE637",
            dark: "#FEC799",
        },
        background: {
            timLim: "purple",
        },
    },
});

export default themeMain;