import PropTypes from 'prop-types';
// import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// assets
import {
  // EditOutlined,
  ProfileOutlined,
  LogoutOutlined
  // UserOutlined
} from '@ant-design/icons';

// ==============================|| HEADER PROFILE - PROFILE TAB ||============================== //

const ProfileTab = ({ handleLogout }) => {
  const theme = useTheme();

  // const [selectedIndex, setSelectedIndex] = useState(0);
  // const handleListItemClick = (event, index) => {
  //   setSelectedIndex(index);
  // };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const role = capitalizeFirstLetter(localStorage.getItem('userRole') || '');

  return (
    <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32, color: theme.palette.grey[500] } }}>
      {/* <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
        <ListItemIcon>
          <EditOutlined />
        </ListItemIcon>
        <ListItemText primary="Edit Profile" />
      </ListItemButton>
      <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
        <ListItemIcon>
          <UserOutlined />
        </ListItemIcon>
        <ListItemText primary="View Profile" />
      </ListItemButton> */}

      <ListItemButton>
        <ListItemIcon>
          <ProfileOutlined />
        </ListItemIcon>
        <ListItemText primary={`Role : ${role}`} />
      </ListItemButton>

      <ListItemButton onClick={handleLogout}>
        <ListItemIcon>
          <LogoutOutlined />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </List>
  );
};

ProfileTab.propTypes = {
  handleLogout: PropTypes.func
};

export default ProfileTab;
