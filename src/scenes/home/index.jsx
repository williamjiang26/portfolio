import { Box, Typography } from "@mui/material"
import { useTheme } from "@mui/material"
import { tokens } from "../../theme"
import Header from '../global/Header'
const Home = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
    <Box
        m='20px'
        sx={{textAlign: 'center'}}
    >
        <Header title="Hi, I'm William," subtitle='Systems Engineer, Solutions Architect, Software Engineer' />
        AWS, GCP, Kubernetes, React, Spring, Python, C, Node
    </Box>)
}

export default Home