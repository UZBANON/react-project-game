import React, {useEffect, useState, useCallback} from 'react';
import {makeStyles, Box, Typography} from "@material-ui/core";
import Item from './Item';
import zIndex from '@material-ui/core/styles/zIndex';
import axios from 'axios';
import MyLoader from "../ui/button/Loader/MyLoader";
import { FilterRounded } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    ItemsList: {
        display: "flex",
        width: "80%",
        height: "80%",
    },
    ItemListSidebar: {
        background: "#9575cd",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "30%",
        textAlign: "center",
        boxShadow: "0 19px 38px rgba(0,0,0,0.3), 0 15px 12px rgba(0,0,0,0.1)",
        position: "relative",
        zIndex: 2
    },
    ItemListTitle: {
        fontSize: "3rem",
        color: "#fff",
        fontWeight: "bold",
        margin: 60,
    },
    ImgSidebar: {
        width: "50%",
        boxShadow: "0 19px 38px rgba(0,0,0,0.3), 0 15px 12px rgba(0,0,0,0.1)",
        borderRadius: "50%"
    },
    ItemListSticker: {
        height: "90%",
        width: "70%",
        background: "#fff",
        alignItems: "center",
        boxShadow: "0 19px 38px rgba(0,0,0,0.3), 0 15px 12px rgba(0,0,0,0.1)",
        marginTop: "30px",
        overflow: "scroll"
    }
}))

function ItemsList(props) {
    const classes = useStyles()
    const [joke, setJoke] = useState(null)

    async function getEmoji(){
        let newEmoji = []
        for (let i = 1; i < 7; i++){
            const response = await axios.get('https://icanhazdadjoke.com/', {
                headers: {
                    Accept: "application/json"
                }
            })
            newEmoji.push({id: i, text: response.data.joke, votes: 0})
            
        }
        setJoke(newEmoji)
    }
    useEffect(() => {
       getEmoji()
    }, [])

    const handleVote = useCallback((id, offset) => {
        const filterEmoji = joke.filter(item => item.id !== id)
        const emoj = joke.find(item => item.id === id)
        emoj.votes += offset
        filterEmoji.push(emoj)
        filterEmoji.sort((a,b) => b.votes - a.votes)
        setJoke((filterEmoji))
    }, [joke, setJoke])

    if(joke){
        return (
            <Box className={classes.ItemsList}>
                <Box className={classes.ItemListSidebar}>
                   <Typography className={classes.ItemListTitle}>
                       UzbAnon
                       <br />
                       Bro
                   </Typography>
                   <img className={classes.ImgSidebar} alt="imgSidebar" src="https://images.unsplash.com/photo-1528025445130-97588f3b72e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RpY2tlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" />
                </Box>
                <Box className={classes.ItemListSticker}>
                    {joke.map(item => (
                        <Item 
                        votes={item.votes} 
                        text={item.text} 
                        key={item.id}
                        upVote={() => handleVote(item.id, 1)}
                        downVote={() => handleVote(item.id, -1)}
                        />
                    ))}
                </Box>
            </Box>
           );
    }else{
        return(
            <MyLoader />
        )
    }

   
}

export default ItemsList;