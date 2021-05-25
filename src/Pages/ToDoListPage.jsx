import React from 'react';
import {Component} from "react";
import { Button, Box, Grid, Paper, } from '@material-ui/core';
import ToDoListComponent from '../Components/ToDoListComponent'

class ToDoListComponentPage extends Component{

    render(){
        return(
            <Grid   
            container
            direction="row"
            justify="center"
            alignItems="center">
                <ToDoListComponent/>
            </Grid>

        );
    }
}

export default ToDoListComponentPage