import React, {useCallback} from 'react';
import {Box, makeStyles, Typography} from "@material-ui/core";
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    item: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 400,
        borderBottom: "1px solid teal"
    },
    itemBtn: {
        display: "flex",
        marginRight: "1rem",
        justifyContent: "center",
        alignItems: "center",
        width: "15%"
    },
    arrowIcon: {
        fontSize: "2rem",
        margin: 10,
        cursor: "pointer"
    },
    voteLevel: {
        fontSize: 20
    },
    itemText: {
        width: "75%",
        fontSize: "1.2rem"
    },
    itemEmoji: {
        fontSize: "2rem",
        marginLeft: "auto",
        borderRadius: "50%",
        height: "50px",
        boxShadow: "0 19px 38px rgba(0,0,0,0.3), 0 15px 12px rgba(0,0,0,0.1)",
        position: "relative",
        zIndex: 9990
    }
}))

function Item(props) {
    const classes = useStyles()
    const {votes, text} = props
   

    return (
        <Box className={classes.item}>
           <Box className={classes.itemBtn}>
                <ArrowUpward onClick={props.upVote} className={classes.arrowIcon} />
                <Typography  className={classes.voteLevel}>{votes}</Typography>
                <ArrowDownward onClick={props.downVote} className={classes.arrowIcon} />
           </Box>
           <Box className={classes.itemText}>
               {text}
           </Box>
           <Box className={classes.itemEmoji}>
            <p>&#128540;</p>
           </Box>
        </Box>
    );
}

export default Item;