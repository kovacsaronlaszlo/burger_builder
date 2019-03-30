import React from 'react';

import classes from './Backdrop.css';

const backdrops = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrops;