import {
    Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const ColorButton = withStyles(() => ({
    root: {
        color: "#00695c",
        border: "1px solid  #00695c",
        '&:hover': {
            color: "#004d40",
            textDecoration: "none",
            backgroundColor: "rgba(25, 118, 210, 0.04)",
            border: "1px solid  #004d40",
        },
    },
}))(Button);

export default ColorButton;