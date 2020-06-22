import React from 'react'
import PropTypes from 'prop-types'
import OutlinedButton from './OutlinedButton'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({

    button: {
        height: "54px",
        fontSize: "15px",
        padding: "0 28px",
    },
}));
function OutlinedPositiveButton({ onClick, label, href }) {
    const classes = useStyles();
    return (
        <OutlinedButton className={classes.button} href={href} onClick={onClick}>
            {label}
        </OutlinedButton>
    )
}

OutlinedPositiveButton.propTypes = {
    onClick: PropTypes.func,
    href: PropTypes.string,
    label: PropTypes.string
}

export default OutlinedPositiveButton

