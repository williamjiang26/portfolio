import { Box, IconButton, useTheme } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext, tokens } from "../../theme"
import InputBase from "@mui/material/InputBase";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import SearchIcon from "@mui/icons-material/Search";


const Topbar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return (
        <Box display='flex' justifyContent='space-between' p={2}>
            <Box
                display="flex"
                backgroundColor={colors.primary[600]}
                borderRadius="3px"
            >
                <InputBase sx={{ml: 2, flex: 1}} placeholder="Search" />
                <IconButton type="button" sx={{p: 1}}>
                    <SearchIcon/>
                </IconButton>
            </Box>
            <Box display='flex' >
                <IconButton onClick={colorMode.toggleColorMode} sx={{color: colors.blueAccent[500]}}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlinedIcon/> 
                    ) : (
                        <LightModeOutlinedIcon/>
                    )}
                </IconButton>
            </Box>
        </Box>
    )
}
export default Topbar
