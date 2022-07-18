import './App.css';
import Home from "./routes/home"
import Nav from "./components/Nav"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./style.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: "#ebe9e9]",
    },
    secondary: {
      main: '#ffdce0',
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
    
   
    <Header/>
    <Home/>
    
    
    </ThemeProvider>
  );
}

export default App;