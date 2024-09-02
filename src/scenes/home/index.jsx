import { Box, Typography, CardMedia, Card, CardContent } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../global/Header";
const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      {/* // title page */}
      <Box m="20px" sx={{ textAlign: "center" }} height='75vh'>
        <Header
          title="Hi, I'm William,"
          subtitle="Systems Engineer, Solutions Architect, Software Engineer"
        />
        AWS, GCP, Kubernetes, React, Spring, Python, C, Node
      </Box>
      {/* projects */}
      <Box m="20px" height="75vh">
        <Header title="Projects" />
        <Card sx={{ display: "flex", maxWidth: 600 }}>
          <CardMedia
            component="img"
            sx={{ width: 200 }}
            image="/api/placeholder/200/200"
            alt="Project Image"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="h5" variant="h5">
                Small Business Dashboard
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="p"
              >
                A dashboard for small businesses.
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Box>
      {/* Blog */}
      <Box m="20px"  height='75vh'>
        <Header title="Blog" subtitle="This is where I write content" />
      </Box>
      {/* Contact */}
      <Box m="20px"  height='75vh'>
        <Header title="Contact" subtitle="Contact me" />
      </Box>
    </Box>
  );
};

export default Home;
