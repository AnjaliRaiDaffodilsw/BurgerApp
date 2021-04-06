import React, { Component } from 'react';

import Auxo from '../../hoc/Auxo';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <Auxo>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxo>
        )
    }
}

export default Layout;
// import React,{ Component} from 'react';
// //Create a normal function component
// import Auxo from '../../hoc/Auxo';
// import classes from './Layout.module.css';
// import Toolbar from '../Navigation/Toolbar/Toolbar';
// import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
// class Layout extends Component {
//     state = {
//         showSideDrawer : false
//     }
//   sideDrawerClosedHandler = () =>{ 
//         this.setState( { showSideDrawer: false } );
//     }
// // Clean way when it is dependent on previous state
// sideDrawerToggleHandler = () => {
//     this.setState( ( prevState ) => {
//         return { showSideDrawer: !prevState.showSideDrawer };
//     } );
// }

// render () {
//     return (
//         <Auxo>
//             <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
//             <SideDrawer
//                 open={this.state.showSideDrawer}
//                 closed={this.sideDrawerClosedHandler} />
//             <main className={classes.Content}>
//                 {this.props.children}
//             </main>
//         </Auxo>
//     )
// }
// }


// export default Layout;