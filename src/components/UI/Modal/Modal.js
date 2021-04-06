import React from 'react';

import classes from './Modal.module.css';
import Auxo from '../../../hoc/Auxo';
import Backdrop from '../Backdrop/Backdrop';

const modal = ( props ) => (
    <Auxo>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Auxo>
);

export default modal;