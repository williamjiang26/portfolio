import { Box, Typography } from "@mui/material"
import { useTheme } from "@mui/material"
import { Link } from "react-router-dom"
import { tokens } from "../../theme"
import Header from "../global/Header"


const Article = ({link, text}) => {
    return (
        <Typography variant="h4" component="span">
            <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
            {text}
            </Link>
        </Typography>
    )
}
const Blog = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box m='20px'>
            <Header title='Blog' subtitle='A place where I write about topics including small business, personal finance, investing in stocks and real estate,
                budgeting and saving, tech industry news, and more.'/>
            <Box m='20px'>
             <Article link='/blog1' text='article1'/>   
            </Box>
            
            
        </Box>
    )
}

export default Blog