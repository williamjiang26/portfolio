import { Box, Typography } from "@mui/material"
import { useTheme } from "@mui/material"
import { tokens } from "../../theme"
import Header from "../global/Header"
const Blog = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box
            m='20px'
        >
            <Header title='Blog'/>
            <Typography variant= 'h6' color={colors.blueAccent[500]}>
                A place where I write about topics including small business, personal finance, investing in stocks and real estate,
                budgeting and saving, tech industry news, and more.
            
            </Typography>
        </Box>
    )
}

export default Blog