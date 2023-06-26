import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    List,
    Menu,
    MenuItem,
    ListItem,
    ListItemText,
    Box,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MessageIcon from '@mui/icons-material/Message';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import BuildIcon from '@mui/icons-material/Build';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Img from '../../Assets/cmd_logo_03.29.2022.png'
import { useState } from 'react';


const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState({
        menu1: null,
        menu2: null,
        menu3: null,
        menu4: null
    });

    const handleClose = () => {
        setAnchorEl((st) => ({
            ...st,
            menu1: null,
            menu2: null,
            menu3: null,
            menu4: null
        }))
    };
    return (
        <>
            <div>
                <AppBar position="relative" style={{ backgroundColor: '#32363f' }} 
                    sx={{
                        overflowX:{
                            md:'hidden',
                            sm:'scroll',
                            xs:'scroll'
                        },
                        width:{
                            md:'100%',
                            sm:'112%',
                            xs:'112%'
                        }
                    }}            
            >
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <img src={Img} alt="Logo" style={{ height: 50, marginRight: 16 }} />
                        </Typography>
                        <IconButton edge="end" color="inherit" aria-label="menu">
                        </IconButton>
                        <List sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ textAlign: 'center' }}>
                                <MessageIcon />
                                <ListItem style={{ Padding: '0' }}>
                                    <ListItemText primary="Messages" style={{ Padding: '0' }} />
                                </ListItem>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <FormatListBulletedIcon />
                                <ListItem >
                                    <ListItemText primary="Tasks" />
                                </ListItem>
                            </div>
                            <ListItem >
                                <div style={{ textAlign: 'center' }}>
                                    <Box>
                                        <BuildIcon sx={{ marginRight: '8px' }} />
                                    </Box>
                                    <Box>
                                        <Button aria-controls="dropdown-menu" aria-haspopup="true" sx={{ textTransform: 'none' }}
                                            onClick={(e) => {
                                                setAnchorEl((st) => ({
                                                    ...st,
                                                    menu1: e.currentTarget
                                                }))
                                            }}
                                            endIcon={<ArrowDropDownIcon />}
                                            style={{ color: 'white' }}
                                        >
                                            Shortcuts
                                        </Button>
                                    </Box>

                                    <div >
                                        <Menu sx={{
                                            '& .MuiList-root': {
                                                padding: '0px'
                                            }
                                        }}
                                            id="dropdown-menu"
                                            anchorEl={anchorEl?.menu1}
                                            keepMounted
                                            open={Boolean(anchorEl?.menu1)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem
                                                style={{ color: 'white', backgroundColor: '#32363f' }}
                                            >

                                                Start Chat
                                            </MenuItem>
                                            <MenuItem
                                                style={{ color: 'white', backgroundColor: '#32363f' }}
                                            >
                                                Start Chat
                                            </MenuItem>
                                            <MenuItem
                                                style={{ color: 'white', backgroundColor: '#32363f' }}
                                            >
                                                Start Chat
                                            </MenuItem>
                                            <MenuItem
                                                style={{ color: 'white', backgroundColor: '#32363f' }}
                                            >
                                                Start Chat
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                </div>
                            </ListItem>
                            <ListItem >
                                <div style={{ textAlign: 'center' }}>
                                    <Box>


                                        <QuestionMarkIcon sx={{ marginRight: '8px' }} />
                                    </Box>
                                    <Box>
                                        <Button sx={{
                                            width: '50%',
                                            textTransform: 'none',
                                            '& .MuiListItem-button': {
                                                width: '50%'
                                            },
                                            '& .MuiListItem-root': {
                                                width: '50%'
                                            },
                                            '& .MuiButtonBase-root': {
                                                width: '50%'
                                            },
                                        }}
                                            aria-controls="dropdown-menu" aria-haspopup="true"
                                            onClick={(e) => {
                                                setAnchorEl((st) => ({
                                                    ...st,
                                                    menu2: e.currentTarget
                                                }))
                                            }}
                                            endIcon={<ArrowDropDownIcon />}
                                            style={{ color: 'white' }}
                                        >
                                            Help
                                        </Button>
                                    </Box>
                                    <div >

                                        <Menu
                                            sx={{
                                                '& .MuiList-root': {
                                                    padding: '0px'
                                                }
                                            }}
                                            anchorEl={anchorEl?.menu2}
                                            keepMounted
                                            open={Boolean(anchorEl?.menu2)}
                                            onClose={handleClose}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right'
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right'
                                            }}
                                        >
                                            <MenuItem
                                                style={{ color: 'white', backgroundColor: '#32363f' }}
                                            >

                                                Start Chat
                                            </MenuItem>
                                            <MenuItem
                                                style={{ color: 'white', backgroundColor: '#32363f' }}
                                            >
                                                Start Chat
                                            </MenuItem>
                                            <MenuItem
                                                style={{ color: 'white', backgroundColor: '#32363f' }}
                                            >
                                                Start Chat
                                            </MenuItem>
                                            <MenuItem
                                                style={{ color: 'white', backgroundColor: '#32363f' }}
                                            >
                                                Start Chat
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                </div>
                            </ListItem>
                            <ListItem>
                                <div style={{ textAlign: 'center' }}>
                                    <Box>
                                        <LightbulbIcon sx={{ marginRight: '8px' }} />
                                    </Box>
                                    <Box>
                                        <Button aria-controls="dropdown-menu"
                                            sx={{ textTransform: 'none' }}
                                            aria-haspopup="true"
                                            onClick={(e) => {
                                                setAnchorEl((st) => ({
                                                    ...st,
                                                    menu3: e.currentTarget
                                                }))
                                            }}
                                            endIcon={<ArrowDropDownIcon />}
                                            style={{ color: 'white' }}
                                        >
                                            Whats'sNew
                                        </Button>
                                    </Box>
                                    <div >
                                        <Menu sx={{
                                            '& .MuiList-root': {
                                                padding: '0px'
                                            }
                                        }}
                                            id="dropdown-menu"
                                            anchorEl={anchorEl?.menu3}
                                            keepMounted
                                            open={Boolean(anchorEl?.menu3)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem
                                                style={{ color: 'white', backgroundColor: '#32363f' }}
                                            >

                                                Start Chat
                                            </MenuItem>
                                            <MenuItem
                                                style={{ color: 'white', backgroundColor: '#32363f' }}
                                            >
                                                Start Chat
                                            </MenuItem>
                                            <MenuItem
                                                style={{ color: 'white', backgroundColor: '#32363f' }}
                                            >
                                                Start Chat
                                            </MenuItem>
                                            <MenuItem
                                                style={{ color: 'white', backgroundColor: '#32363f' }}
                                            >
                                                Start Chat
                                            </MenuItem>
                                        </Menu>
                                    </div >
                                </div>
                            </ListItem>
                            <ListItem>
                                <AccountCircleIcon style={{ fontSize: '39px' }} />
                                <div style={{ textAlign: 'center' }}>
                                    <Button aria-controls="dropdown-menu"
                                        sx={{ textTransform: 'none' }}
                                        aria-haspopup="true"
                                        onClick={(e) => {
                                            setAnchorEl((st) => ({
                                                ...st,
                                                menu4: e.currentTarget
                                            }))
                                        }}
                                        endIcon={<ArrowDropDownIcon />}
                                        style={{ color: 'white' }}
                                    >
                                        Usman
                                        10007
                                    </Button>

                                    <Menu sx={{
                                        '& .MuiList-root': {
                                            padding: '0px'
                                        }
                                    }}
                                        id="dropdown-menu"
                                        anchorEl={anchorEl?.menu4}
                                        keepMounted
                                        open={Boolean(anchorEl?.menu4)}
                                        onClose={handleClose} >
                                        <MenuItem
                                            style={{ color: 'white', backgroundColor: '#32363f' }}
                                        >
                                            Start Chat
                                        </MenuItem>
                                        <MenuItem
                                            style={{ color: 'white', backgroundColor: '#32363f' }}
                                        >
                                            Start Chat
                                        </MenuItem>
                                        <MenuItem
                                            style={{ color: 'white', backgroundColor: '#32363f' }}
                                        >
                                            Start Chat
                                        </MenuItem>
                                        <MenuItem
                                            style={{ color: 'white', backgroundColor: '#32363f' }}
                                        >
                                            Start Chat
                                        </MenuItem>
                                    </Menu>
                                </div>
                            </ListItem>
                        </List>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}
export default Navbar;