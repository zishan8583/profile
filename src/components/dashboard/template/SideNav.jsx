import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Avatar, Typography } from '@mui/material';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Button, ListItemButton } from '@mui/material';
import { Folder as FolderIcon, DoneAll as DoneAllIcon, AccessTime as AccessTimeIcon, ExitToApp } from '@mui/icons-material';
import { ContactPhone, AccountBalanceWallet, StickyNote2, MapOutlined, Dashboard } from '@mui/icons-material';
import { useAuth } from '../../../store/authContext';

const SideNav = () => {

  const { name } = useAuth();
  const { pathname } = location;

  const SelectedCSS = {
    "&.Mui-selected": {
      backgroundColor: "#fff",
      fontWeight: 'bold !important',
      color: 'black !important',
      borderRadius: '8px'
    },
  }


  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{
      background: 'rgb(7,134,150)',
      background: 'linear-gradient(0deg, rgba(0,46,69,1) 0%, rgba(0,212,255,1) 100%)'
    }}>


      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-5 pb-3 d-flex">
          <div className="image">
            {/* Text instead of image */}
            <Avatar className="elevation-2">{name[0]}</Avatar>
          </div>
          <div className="info" style={{ marginLeft: '8px' }}>
            <Typography variant="body1" color="white">
              Hello, {name}
            </Typography>
          </div>
        </div>


        <List style={{ color: '#fff' }}> {/* Setting color to white */}
          {/* dashboard */}
          <ListItemButton
            component={Link}
            to="/"
            selected={pathname === '/' || pathname === 'dashboard'}
            onClick={{}}
            sx={SelectedCSS}>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="DASHBOARD" primaryTypographyProps={{ fontWeight: 'bold' }} />
          </ListItemButton>
          <Divider />


          {/* Projects */}

          <ListItem style={{ fontWeight: 'bold' }}>
            <ListItemText primary="PROJECTS" primaryTypographyProps={{ fontWeight: 'bold' }} />
          </ListItem>
          <Divider />

          {/* Subcategory items */}
          <ListItemButton
            component={Link}
            to="/projects"
            selected={pathname.startsWith('/projects')}
            sx={SelectedCSS}
          >
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="All Projects" />
          </ListItemButton>
          <ListItemButton
            component={Link}
            to="/ongoingprojects"
            selected={pathname === '/ongoingprojects'}
            sx={SelectedCSS}
          >
            <ListItemIcon>
              <AccessTimeIcon />
            </ListItemIcon>
            <ListItemText primary="Ongoing Projects" />
          </ListItemButton>
          <ListItemButton
            component={Link}
            to="/completedprojects"
            selected={pathname === '/completedprojects'}
            sx={SelectedCSS}
          >
            <ListItemIcon>
              <DoneAllIcon />
            </ListItemIcon>
            <ListItemText primary="Completed Projects" />
          </ListItemButton>

          {/* Feedback */}
          <Divider />

          <ListItem >
            <ListItemText primary="FEEDBACK" primaryTypographyProps={{ fontWeight: 'bold' }} />
          </ListItem>
          <ListItemButton
            component={Link}
            to="/feedback"
            selected={pathname === '/feedback'}
            sx={SelectedCSS}
          >
            <ListItemIcon>
              <ContactPhone />
            </ListItemIcon>
            <ListItemText primary="Give Feedback" />
          </ListItemButton>

          <Divider />

          {/* Other */}
          <ListItem>
            <ListItemText primary="OTHER" primaryTypographyProps={{ fontWeight: 'bold' }} />
          </ListItem>
          <ListItemButton
            component={Link}
            to="/fundreceived"
            selected={pathname === '/fundreceived'}
            sx={SelectedCSS}>
            <ListItemIcon>
              <AccountBalanceWallet />
            </ListItemIcon>
            <ListItemText
              primary="Fund Received"
            />
          </ListItemButton>
          <ListItemButton component={Link}
            to="/documents"
            selected={pathname === '/documents'}
            sx={SelectedCSS}
          >
            <ListItemIcon>
              <StickyNote2 />
            </ListItemIcon>
            <ListItemText primary="Documents Repository" />
          </ListItemButton>
          {/* <ListItemButton component={Link} 
          to="/assembly-questions"
          selected={pathname === '/assembly-questions'}
          sx={SelectedCSS}
          >
            <ListItemIcon>
              <MapOutlined />
            </ListItemIcon>
            <ListItemText primary="Assembly Questions" />
          </ListItemButton> */}
          <Divider />

        </List>


      </div>
      {/* /.sidebar */}
    </aside>

  )
}

export default SideNav


