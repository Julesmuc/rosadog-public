import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { negativeSecondColor } from '../../helper'
const color = "linear-gradient(to bottom, " + negativeSecondColor + ", #ed809c, #fafafa, #fafafa, #fafafa)";
export const AltTabs = withStyles({
    root: {
        borderRadius: "5px",
        backgroundImage: color
    },
    indicator: {
        backgroundColor: '#fafafa'
    }

})(Tabs);
export const AltTab = withStyles(() => ({
    root: {
        textTransform: 'none',
        minHeight: 400,
        opacity: 1,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            opacity: 1,
        },
        '&$selected': {
        },
        '&:focus': {
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);