import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { colors, CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar2 from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";

import Home from "./scenes/home";

function App() {
 const [theme, colorMode] = useMode();
 return (
  <ColorModeContext.Provider value={colorMode}>
   <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="app">
     <Sidebar2 />
     <main className="content">
      <Topbar />
      <Routes>
       <Route path="/" element={<Home />} />
      </Routes>
     </main>
    </div>
   </ThemeProvider>
  </ColorModeContext.Provider>
 );
}

export default App;
