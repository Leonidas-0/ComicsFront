import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { SwipeableDrawer } from '@mui/material';
import { NavLink, useNavigate } from "react-router-dom";
import { ClickAwayListener } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
export default function Altnavbar() {
    const [skipCount, setSkipCount] = useState(true);
    const navigate = useNavigate();
    const [data, setData] = useState("");
    const [search, setSearch] = useState(false);
    const [searchresult, setSearchresult] = useState("");
    const [name, setName] = useState('');
    // const [searchvalue, setSearchvalue] = useState(null)
    // function opensearch () {
    // if (search) {
    //     useEffect(() => {
    //     if (searchresult !== "") {
    //     // setTimeout(function(){
    //         document.querySelector(".MuiAutocomplete-popper").onclick = function() { 
    //             // setTimeout(function(){
    //                 setSearch(false);
    //                 setSearchresult(document.querySelector(".MuiInputBase-root > input").value)
    //                 navigate(`/Openmanga/${searchresult.id}`)
    //             // }, 1000);
    //             // if (searchresult != "" && searchresult != null) {
    //             // }
    //         }
    //     // }, 100);
    // }
    // }, [search]);
    // }
    function Handleclick(value) {
        setSearchresult("")
        setSearch(false)
        setSearchresult(value)
        navigate(`/Openmanga/${value.id}`)
        setName("")
    }

    function Handlesearch(query) {
        if (query == "") {
            setData("")
        }
        else {
            fetch(`https://mangaworld.herokuapp.com/searchresponse/${query}`).then(response => response.json()).then((result) => {
                // setData(JSON.stringify(result)) 
                setData(result)
            })
        }
    }

    return (
        <header id="nav-wrapper">
            <nav id="nav">
                <div className="nav left">
                    <span className="gradient skew"><h1 className="logo un-skew"><a href="#home"><img id="logo" src={"/logo.png"}></img></a></h1></span>
                    <button id="menu" class="btn-nav">
                        <span className="fas fa-bars">
                        </span></button>
                </div>
                <ClickAwayListener onClickAway={() => {setSearch(false)}}>
                    <div>
                        <div className="nav right">
                            <div style={{ marginRight: '20px', marginLeft: '10px', cursor: 'pointer' }}>
                                <a onClick={() => setSearch(!search)}><SearchIcon /></a>
                            </div>
                            <NavLink
                            onClick={() =>{setSearch(false)}}
                                className={"nav-link"}
                                to="/"
                                activeClassName="nav-link active"
                            ><span className="nav-link-span"><span className="u-nav">Home</span></span></NavLink>
                            <NavLink
                            onClick={() => {setSearch(false)}}
                                className={"nav-link"}
                                to="/Genres"
                                activeClassName="nav-link active"
                            ><span className="nav-link-span"><span className="u-nav">Genres</span></span></NavLink>
                            <NavLink
                            onClick={() => {setSearch(false)} }
                                className={"nav-link"}
                                to="/About"
                                activeClassName="nav-link active"
                            ><span className="nav-link-span"><span className="u-nav">About</span></span></NavLink>
                            {/* <a href="#contact" className="nav-link"><span className="nav-link-span"><span className="u-nav">Contact</span></span></a> */}
                        </div>
                        <div id="autocomplete" style={{ display: search ? 'block' : 'none', }}>
                            <Autocomplete 
                            // onChange={(result) => }      
                          // style={{  height: '0 !important', animation: 'open !important', animationDuration: '0.1s !important', animationFillMode:'forwards', animationPlayState:search ? 'running !important':'paused !important'}}
                                zIndex={11}
                                defaultValue={""}
                                value={name}
                                open={search}
                                onKeyUp={(e, result) => { Handlesearch(e.target.value) }}
                                // disablePortal
                                id="combo-box-demo"
                                options={!data ? [{ label: "", id: 0 }] : data}
                                sx={{ width: 300, marginLeft: '20px' }}
                                renderInput={(params) => <TextField {...params} />}
                                onChange={(e, value)=>{if (e.target.value!=="") {Handleclick(value)}}}
                            />
                        </div>
                    </div>
                </ClickAwayListener>
            </nav>
        </header>
    )
}
 function PrimarySearchAppBar() {
    // const filteredList = list.filter((element) => {
    //     if (searchstring === '') {
    //         return element;
    //     }
    //     else {
    //         return element.title.toLowerCase().includes(searchstring)
    //     }
    //  }
    const [data, setData] = useState("");
    const [search, setSearch] = useState(false);
    const [openmodal, setOpenmodal] = useState(false);
    function Handlesearch(query) {
        fetch(`http://127.0.0.1:8000/searchresponse/${query}`).then(response => response.json()).then((result) => {
            // setData(JSON.stringify(result)) 
            setData(result)
        })
    }
    //   .then(() => setImage(data.map(item => {
    //     return <img src={`http://127.0.0.1:8000/media/${item.cover}`}></img>;
    //   }))
    //   )
    const [anchorEl, setAnchorEl] = React.useState(null);
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
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
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
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
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

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon onClick={() => setOpenmodal(!openmodal)} />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        MangaW
                    </Typography>
                    {/* <Typography variant='h4' component={'h1'}>React Search Bar</Typography> */}
                    <Autocomplete
                        defaultValue={""}
                        open={search}
                        // onKeyUp={(e) => { Handlesearch(e.target.value) }}
                        // disablePortal
                        id="combo-box-demo"
                        options={!data ? [{ label: "Loading...", id: 0 }] : data}
                        sx={{ width: 300, marginLeft: '20px' }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    {/* <Box>
                        <Stack spacing={2}
                            sx={{
                                overflow: 'auto',
                                maxHeight: 500,

                            }}
                        >
                            {data.map((item) => (
                                <Paper key={item.title}
                                    sx={{
                                        textAlign: 'left'
                                    }}  >
                                    <Typography><strong>Title:</strong> {item.title}</Typography>
                                </Paper>
                            ))}

                        </Stack>
                    </Box> */}
                    {/* <Search> */}
                    {/* <SearchIconWrapper> */}
                    <SearchIcon onCLick={() => setSearch(true)} />
                    {/* </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                    </Search> */}
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        {/* <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton> */}
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            <div>
                <SwipeableDrawer
                    PaperProps={{
                        sx: { width: "50%", backgroundColor: '#00004d' },
                    }}
                    anchor={'left'}
                    open={openmodal}
                    onClose={() => setOpenmodal(false)}
                // onOpen={toggleDrawer(anchor, true)}
                >
                    <Box sx={{ width: 1 }}>
                        Hello
                    </Box>
                </SwipeableDrawer>
            </div>
        </Box>
    );
}