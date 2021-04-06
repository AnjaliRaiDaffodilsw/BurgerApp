import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;
// import React from 'react';

// import classes from './Toolbar.module.css';
// import Logo from '../../Logo/Logo';
// import NavigationItems from '../NavigationItems/NavigationItems';
// import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

// const toolbar = (props) => (
//         <header className = {classes.Toolbar}>
//             <DrawerToggle 
//             clicked = {props.drawerToggleClicked}/>

//             {/* <Logo height  = "80%"/> */}
//             {/* one more way */}
//             <div className = {classes.Logo}>
//                 <Logo/>
//                 </div>
//             <nav className = {classes.DesktopOnly}>
//             <NavigationItems/>
//             </nav>
//         </header>
// );

// export default toolbar;
// // import classes from './Toolbar.module.css';
// // import Logo from '../../Logo/Logo';
// // import NavigationItems from '../NavigationItems/NavigationItems';

// // const toolbar = (props) => (
// //     <header className = {classes.Toolbar}>
// //         <div>MENU</div>
// //         <Logo />
// //         <nav>
// //         <NavigationItems/>
// //         </nav>
// //     </header>

// // );

// // export default toolbar;