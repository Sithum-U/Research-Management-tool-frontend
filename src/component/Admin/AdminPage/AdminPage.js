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
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import StorageIcon from "@mui/icons-material/Storage";
import Footer from "../../Layout/Footer";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import ListIcon from "@mui/icons-material/List";

const drawerWidth = 260;

export default function ClippedDrawer() {
  return (
    <div>
      <div class="topnav">
        <a className="name" href="#home">
          Research Tool
        </a>
        <a href="/login">Logout</a>
        <Link to="/signup">Sign In</Link>
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
          <Box
            sx={{
              overflow: "auto",
              bgcolor: "text.disabled",
              margin: "-64px",
              // marginLeft: "0px",
            }}
          >
            <center>
              <img
                src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                alt="Avatar"
                className="rounded-circle"
              />

              <List>
                {["Admin Page", "Starred", "Send email", "Drafts"].map(
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
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <Link
                      to="/supervisorDetails"
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="contained">Supervisor DB</Button>
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Link
                      to="/co-supervisorDetails"
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="contained">Co-Supervisor DB</Button>
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Link
                      to="/studentDetails"
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="contained">Student DB</Button>
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Link
                      to="/panelMemberDetails"
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="contained">Panel Member DB</Button>
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                      {(popupState) => (
                        <React.Fragment>
                          <Button
                            variant="contained"
                            {...bindTrigger(popupState)}
                          >
                            Submission Types <ArrowDropDownCircleIcon />
                          </Button>
                          <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}>
                              Document Submission Evaluation
                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                              Presentation Evaluation
                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                              Final Thesis Evaluation
                            </MenuItem>
                          </Menu>
                        </React.Fragment>
                      )}
                    </PopupState>
                  </Grid>

                  <br />
                  <Grid item xs={12}>
                    <Link
                      to="/viewUserRoles"
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="contained">
                        {" "}
                        <SupervisedUserCircleIcon />
                        _View User Roles
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Link
                      to="/uploadDocuments"
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="contained">
                        <DriveFolderUploadIcon /> _Upload Documents
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Link to="/documentlist" style={{ textDecoration: "none" }}>
                      <Button variant="contained">
                        <ListIcon />_ Document List
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </center>
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
