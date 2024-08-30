import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../global/Header";
const Projects = () => {
 const theme = useTheme();
 const colors = tokens(theme.palette.mode);

 return (
  <Box m="20px">
   <Header title="Projects" />
  </Box>
 );
};

export default Projects;
