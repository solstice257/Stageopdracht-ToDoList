import React from 'react';
import {Component} from "react";
import { Button, Box, TextField, IconButton } from '@material-ui/core';
import Add from '@material-ui/icons/Add';

class ToDoListComponent extends Component{

    render(){
        return(
            <Box justifyContent="center" width="30%" height="70%" border={1} component="div" display="inline" m={4}>
                <TextField 
                size="small"
                id="filled-size-small" 
                label="Type hier je taak..." 
                variant="filled"/>            
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <Add/>
                </IconButton>
            </Box>
        );
    }
}

export default ToDoListComponent