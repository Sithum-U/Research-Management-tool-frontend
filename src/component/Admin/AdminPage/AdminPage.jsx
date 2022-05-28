import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <div>
      <div class="topnav">
        <a className="name" href="#home">
          Hotel.lk
        </a>
        <a href="/login">Logout</a>
        <Link to="/login">Sign In</Link>
        <Link to="/">Register</Link>
        <Link to="/upload">Reserve</Link>
        <Link to="/taxi">Taxis</Link>
        <Link to="/Payment">RP Management</Link>

        <a class="active" href="#home">
          {" "}
          Home{" "}
        </a>
      </div>
      <Box sx={{ display: "flex" }}>
        //side Pane
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <center>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAPlAD2qUdnIjsdA7teiIQYuBq2arEkAhVBiQhkTClKun34iJ7VhM22ZYO277RirTV0qw&usqp=CAU"
                alt="Avatar"
                className="rounded-circle"
              />

              <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map(
                  (text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          {index % 2 === 0 ? (
                            <Link to="/upload">
                              <InboxIcon />
                            </Link>
                          ) : (
                            <MailIcon />
                          )}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  )
                )}
              </List>
            </center>

            <Divider />
            <List>
              <center>
                <Button variant="contained">Contained</Button>
              </center>
              {["Marking Schemas", "Presentation/Doc Templates", "Spam"].map(
                (text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </div>
  );
}
