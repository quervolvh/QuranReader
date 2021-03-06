import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import '../css/header.css';
import {
    useRouteMatch, useHistory
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));

function a() {
    switch (a) {
        case 1:
    }
}
function Backstyle(pather) {
    const path = pather;
    if (path !== '/' && path !== '/login' && path !== '/register' && path !== '/home') {
        return { display: 'block', position: 'absolute', right: 0 };
    } else {
        return { display: 'none', position: 'absolute', right: 0 };
    }
}

export function Header(props) {
    const classes = useStyles();
    let { path } = useRouteMatch();
    var style;
    path !== '/' ? style = { justifyContent: 'space-between' } : style = { placeContent: 'center' };
    if (path === '/login') style = { placeContent: 'center' };
    if (path === '/register') style = { placeContent: 'center' };
    let history = useHistory();

    const searchStyle = (part) =>{
        if (part === "/home"){
            return {display: 'flex'};
        }else{
            return {display: 'none'};
        }
    };

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [mode, setMode] = React.useState({
        icon: <Brightness4Icon />,
        theme: 'light'
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [side]: open });
    };
    const Linklist = [`/home`,`/juzPage`,`/ayahPage`];
    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {['Chapters', 'Juzs', 'Ayahs',].map((text, index) => (
                    <Link to={`${Linklist[index]}`}>
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
        </div>
    );

    const handleMode = (event) => {

        if (mode.theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            setMode({ theme: 'dark', icon: <Brightness5Icon /> });
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            setMode({ theme: 'light', icon: <Brightness4Icon /> });
        }
    }



    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        QuranReader
                </Typography>

                    <div id='search' onChange={props.onChange} style={searchStyle(path)}>
                        <div id='search_icon'></div>
                        <input id='count_search' type='class' placeholder='search for a Surah' />
                    </div>

                    <div className='back' style={Backstyle(path)}>
                        <div className='backButton' onClick={history.goBack} />
                    </div>

                    <div id='mode' onClick={handleMode}>
                        <div id='mode_icon'></div>
                        <p> {mode.icon} </p>
                    </div>




                </Toolbar>
            </AppBar>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
        </div>
    );
}
export default Header;