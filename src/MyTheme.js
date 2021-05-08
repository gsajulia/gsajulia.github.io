import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        primary: {
            light: '#f2f2f2',
            main: '#5CE1E6',
            dark: '#fff',
            contrastText: '#fff',
        },
        secondary: {
            light: '#fff350',
            main: '#ff6922',
            dark: '#ff5722',
            contrastText: '#fff',
        },
    },
    typography: {
        "fontFamily": "\"Noto Sans JP\", sans-serif",
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    }
});
