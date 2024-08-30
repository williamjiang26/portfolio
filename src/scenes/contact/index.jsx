import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../global/Header";

const Contact = () => {
 const theme = useTheme();
 const colors = tokens(theme.palette.mode);

 return (
  <Box m="20px">
   <Header title="Contact" subtitle="Contact me" />
  </Box>
 );
};

export default Contact;
