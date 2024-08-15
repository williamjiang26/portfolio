import { Box, Typography } from "@mui/material"
import { useTheme } from "@mui/material"
import { tokens } from "../../theme"
import Header from "../global/Header"

const Skills = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
    <Box
        m='20px'
    >
        <Header title='Skills' />
    </Box>)
}

export default Skills