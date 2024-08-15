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
    >
        <Header title="Hi, I'm William," subtitle='Systems Engineer, Solutions Architect, Software Engineer' />
        
    </Box>)
}

export default Home