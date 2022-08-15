import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#4E8397'
        },
        boxtodo: {
            main: '#296073'
        },
        secondary: {
            main: '#ADC5CF'
        },
        pending: {
            main: '#00C9A7'
        },
        released: {
            main: '#F9F871'
        },
        addtodo: {
            main: '#009EFA'
        },
        error: {
            main: red.A400
        }
    }
})