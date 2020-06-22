import React from 'react'
import PropTypes from 'prop-types'
import {

    Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    button: {
        color: 'white',
        backgroundColor: "#00695c",
        "&:hover": {
            backgroundColor: "#004d40"
        }
    }
}));


function PositiveButton({ onClick, label, href, style }) {
    const classes = useStyles();
    return (
        <Button className={`${classes.button}`} style={style}  href={href} onClick={onClick}>
            {label}
        </Button>
    )
}

PositiveButton.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string,
    href: PropTypes.string,
    style: PropTypes.object
}

export default PositiveButton

