import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import List from '@mui/material/List';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
const drawerWidth = 340;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});
const rows = Array.from({ length: 70 }, (_, index) => {
  const hour = Math.floor(index / 4) % 12;
  const minute = (index % 4) * 15;
  const amPm = Math.floor(index / 48) === 0 ? 'am' : 'pm';
  const time = `${hour === 0 ? 12 : hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${amPm}`;
  return {
    time,
  };
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
export default function MiniDrawer() {
  const theme = useTheme();
  const [dropdownMenu, setDropDownMenu] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', top: '44px' }}>
      <Drawer variant="permanent" open={open} sx={{
        '& .MuiPaper-root': {
          top: '95px',
          backgroundColor: '#32363f',
          color: 'white',
        },
        '& .MuiDrawer-root': {
          backgroundColor: '#32363f',
        }
      }} >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ color: 'white' }}>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton sx={{ cursor: 'pointer',color: 'white', }} onClick={() => handleDrawerOpen()}>
          <ChevronRightIcon  />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItemButton >
            <ListItemIcon sx={{ color: 'white' }}>
              <SearchIcon sx={{
                backgroundColor: '#515151',
                padding: '5px 3px 5px',
                border: '2px solid #515151',
                minWidth: '33px',
                borderTopLeftRadius: '4px',
                borderBottomLeftRadius: '4px',
                '& .MuiListItemIcon-root': {
                  minWidth: '33px',
                }
              }}
              />
            </ListItemIcon>
            <InputBase sx={{
              backgroundColor: '#3b3b3b',
              color: '#efefef',
              border: '1px solid #515151',
              padding: '2px 3px 2px',
              borderRadius: '4px'
            }}
              placeholder="Find a Section"
            />
          </ListItemButton>
          {['Home', 'Reports'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 0,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: 'white',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                <ArrowForwardIosIcon />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List >
          <ListItem disablePadding >
            <ListItemButton aria-controls="dropdown-menu" aria-haspopup="true" sx={{ textTransform: 'none' }}
              onClick={(e) => setDropDownMenu(!dropdownMenu)}
              endIcon={<ArrowForwardIosIcon />}
              style={{ color: 'white' }}
            >
              <ListItemIcon sx={{ color: 'white' }}>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={"Appointments"} />
              {dropdownMenu ?
                <KeyboardArrowDownIcon /> :
                <ArrowForwardIosIcon />
              }
            </ListItemButton >
          </ListItem>
        </List>
        {dropdownMenu &&
          <>
            <List >
              <ListItem disablePadding sx={{ width: '85%' }}>
                <ListItemButton aria-controls="dropdown-menu" aria-haspopup="true" sx={{ textTransform: 'none' }}
                  endIcon={<ArrowForwardIosIcon />}
                  style={{ color: 'white' }}
                >

                  <ListItemIcon sx={{ color: 'white' }}>
                    <CalendarTodayIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Scheduler"}
                    sx={{
                      '& .MuiTypography-root': {
                        fontSize: '14px'
                      }
                    }}
                  />
                </ListItemButton >
              </ListItem>
            </List>
            <List >
              <ListItem disablePadding sx={{ width: '85%' }}>
                <ListItemButton aria-controls="dropdown-menu" aria-haspopup="true" sx={{ textTransform: 'none' }}
                  endIcon={<ArrowForwardIosIcon />}
                  style={{ color: 'white' }}
                >
                  <ListItemIcon sx={{ color: 'white' }}>
                    <FactCheckIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Manage Waiting List"}
                    sx={{
                      '& .MuiTypography-root': {
                        fontSize: '14px'
                      }
                    }}
                  />
                </ListItemButton >
              </ListItem>
            </List>
          </>
        }
        <Divider />
        <List>
          {['Patient', 'Claim', 'Pyment', 'Documents', 'Interface', 'Customer Setup', 'Account Administration'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 0,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: 'white',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                <ArrowForwardIosIcon />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, height: '800px' }}>
        <div style={{ backgroundColor: '#222222', padding: '6px', display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained"
            sx={{
              backgroundColor: '#636363',
              marginLeft: '14px'
            }}>
            Today
          </Button>
          <div style={{ display: "flex", gap: '25px' }}>
            <KeyboardBackspaceIcon sx={{
              backgroundColor: '#0976be',
              padding: '5px',
              paddingLeft: '8px',
              color: 'white',
              borderTopLeftRadius: '5px',
              borderBottomLeftRadius: '5px',
              cursor: 'pointer'

            }} />
            <Typography variant="h6" color="white">Week of June 18, 2023</Typography>
            <ArrowForwardIcon sx={{
              backgroundColor: '#0976be',
              padding: '5px',
              color: 'white',
              paddingRight: '8px',
              borderTopRightRadius: '5px',
              borderBottomRightRadius: '5px',
              cursor: 'pointer'
            }} />
          </div>
          <div>
            <Button variant="contained"
              sx={{
                backgroundColor: '#636363',
                marginLeft: '14px'
              }}>
              Day
            </Button>
            <Button variant="contained"
              sx={{
                backgroundColor: '#636363',
                marginLeft: '14px'
              }}>
              Week
            </Button>
          </div>
        </div>
        <Table sx={{ backgroundColor: '#222222', color: 'white' }}>
          <TableHead>
            <TableRow >
              <TableCell style={{
                flex: '0 0 4%',
                border: '1px solid #495057',
                color: 'white',
                fontWeight: '800',
                padding: '8px'
              }}
              ></TableCell>
              <TableCell style={{ flex: '0 0 16%', border: '1px solid #495057', color: 'white', fontWeight: '800', }}>Monday, June 19</TableCell>
              <TableCell style={{ flex: '0 0 16%', border: '1px solid #495057', color: 'white', fontWeight: '800' }}>Tuesday, June 20</TableCell>
              <TableCell style={{ flex: '0 0 16%', border: '1px solid #495057', color: 'white', fontWeight: '800' }}>Wednesday, June 21</TableCell>
              <TableCell style={{ flex: '0 0 16%', border: '1px solid #495057', color: 'white', fontWeight: '800' }}>Thursday, June 22</TableCell>
              <TableCell style={{ flex: '0 0 16%', border: '1px solid #495057', color: 'white', fontWeight: '800' }}>Friday, June 23</TableCell>
              <TableCell style={{ flex: '0 0 16%', border: '1px solid #495057', color: 'white', fontWeight: '800' }}>Saturday, June 24</TableCell>
              <TableCell style={{ flex: '0 0 16%', border: '1px solid #495057', color: 'white', fontWeight: '800' }}>Sunday, June 25</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.time}>
                <TableCell style={{ border: '1px solid #495057', color: 'white', padding: '8px' }}>{row.time}</TableCell>
                <TableCell style={{ border: '1px solid #495057', color: 'white', padding: '8px' }}>{row.column2}</TableCell>
                <TableCell style={{ border: '1px solid #495057', color: 'white', padding: '8px' }}>{row.column3}</TableCell>
                <TableCell style={{ border: '1px solid #495057', color: 'white', padding: '8px' }}>{row.column4}</TableCell>
                <TableCell style={{ border: '1px solid #495057', color: 'white', padding: '8px' }}>{row.column5}</TableCell>
                <TableCell style={{ border: '1px solid #495057', color: 'white', padding: '8px' }}>{row.column6}</TableCell>
                <TableCell style={{ border: '1px solid #495057', color: 'white', padding: '8px' }}>{row.column7}</TableCell>
                <TableCell style={{ border: '1px solid #495057', color: 'white', padding: '8px' }}>{row.column7}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}