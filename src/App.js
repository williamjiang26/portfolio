import { Routes, Route } from "react-router-dom";
import {ColorModeContext, useMode} from './theme';
import { colors, CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar2 from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import Projects from "./scenes/projects";
import Skills from "./scenes/skills";
import Blog from "./scenes/blog";
import Contact from "./scenes/contact";
import Home from './scenes/home';
import Blog1 from "./scenes/blog/articles/8.15";

function App() {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme= {theme}>
        <CssBaseline/>
        <div className="app">
          <Sidebar2/>
          <main className="content" >
            <Topbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog1" element={<Blog1 />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
