import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import useStyles from './style';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useDispatch, useSelector } from "react-redux";
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

export default function Header() {
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.firebase.user);
    console.log('User info', userInfo);

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [stateMenuPhone, setSatetMenuPhone] = useState({ left: false });
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setSatetMenuPhone({ ...stateMenuPhone, [anchor]: open });
    };

    const list = (anchor) => (
        <div role="presentation"
            className={classes.draw}
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}>
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    const renderUserInfo = (user) => {
        if (user) {
            return (<>
                <img src={user.photoURL} height='20' width='20' ></img>
                {/* <Tooltip interactive="false" className={classes.login} title="????ng xu???t" enterDelay={500} leaveDelay={200}>
                    <NavLink className={classes.login} to="/login">{user.displayName}</NavLink> 
                </Tooltip> */}
                <NavLink className={classes.login} to="/login">{user.displayName}</NavLink> 
            </>)
        }

        return (<>
            <AccountCircle />
            <NavLink className={classes.login} to="/login">????ng nh???p</NavLink>
        </>)
    }

    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <img src='./images/web-logo.png' className={classes.logo}></img>
                    <div className={classes.sectionMenuCenter}>
                        <ul>
                            <li>
                                <a>L???ch chi???u</a>
                            </li>
                            <li>
                                <a>C???m r???p</a>
                            </li>
                            <li>
                                <a>Tin t???c</a>
                            </li>
                            <li>
                                <a>???ng d???ng</a>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <ul>
                            <li>
                                {/* {renderPictureUser(userInfo)}
                                <NavLink className={classes.login} to="/login">{renderUserInfo(userInfo)}</NavLink> */}
                                {renderUserInfo(userInfo)}
                            </li>
                            <li className="location">
                                <LocationOnIcon />
                                <div >
                                    <a className="dropdown-toggle" aria-haspopup="true" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">H??? Ch?? Minh</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">H??? Ch?? Minh</a>
                                        <a className="dropdown-item" href="#">H??? Long</a>
                                        <a className="dropdown-item" href="#">H?? N???i</a>
                                        <a className="dropdown-item" href="#">Phan Thi???t</a>
                                        <a className="dropdown-item" href="#">Hu???</a>
                                        <a className="dropdown-item" href="#">Quy Nh??n</a>
                                        <a className="dropdown-item" href="#">H???i Ph??ng</a>
                                        <a className="dropdown-item" href="#">H?? N???i</a>
                                        <a className="dropdown-item" href="#">Phan Thi???t</a>
                                        <a className="dropdown-item" href="#">Hu???</a>
                                        <a className="dropdown-item" href="#">Quy Nh??n</a>
                                        <a className="dropdown-item" href="#">Dat lat</a>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>

                    <div className={classes.sectionMobile}>
                        <img
                            //  onClick={handleMobileMenuOpen}
                            onClick={toggleDrawer('right', true)}
                            aria-controls={mobileMenuId}
                            src={'./images/menu-options.png'} height='20' width='20'>
                        </img>
                        <Drawer className={classes.draw} anchor={'right'} open={stateMenuPhone['right']} onClose={toggleDrawer('right', false)}>
                            {list('right')}
                        </Drawer>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
