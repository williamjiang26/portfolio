import { useState } from "react";
import { useTheme, Box, IconButton, Typography, Icon } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens, useMode } from "../../theme";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import ConstructionIcon from '@mui/icons-material/Construction';
import CreateIcon from '@mui/icons-material/Create';
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import { hover } from "@testing-library/user-event/dist/hover";

const Sidebar2 = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [collapsed, setCollapsed] = useState(false);
    return (
    <Sidebar
        collapsed={collapsed}
        image=''
        backgroundColor= {colors.primary[900]}
        width="175px"
    >
        <Menu
          menuItemStyles={{
            button: {
                color: colors.primary[100], 
                '&:hover': {
                  backgroundColor: colors.redAccent[400],
                  color: colors.primary[500]
              },  
            },
          }}
          
          
        >
            <MenuItem icon={<HomeRoundedIcon/>} component={<Link to="/" />} onClick={() => setCollapsed(!collapsed)}>Home</MenuItem>
            <MenuItem icon={<ConstructionIcon/>} component={<Link to="/projects" />}> Projects</MenuItem>
            <MenuItem icon={<CreateIcon/>} component={<Link to="/blog" />}> Blog</MenuItem> 
            <MenuItem icon={<ContactsOutlinedIcon/>} component={<Link to="/contact" />}> Contact</MenuItem> 
        </Menu>
      </Sidebar>
    )
}
export default Sidebar2