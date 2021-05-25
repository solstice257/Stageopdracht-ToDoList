import React from 'react';
import {Component} from "react";
import { Button, Box, TextField, IconButton, Grid } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import GlobalStateComponent from './GlobalState';
import Task from './Task'


class ToDoListComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
          showComponent: false,
          task: ""
        };
        this.handleclick = this.handleclick.bind(this);
      }

    handleclick = () =>{
        this.setState({
            showComponent: true,
          });
    }

    handlechange = (event) =>{
        this.setState({
            task: event.target.value
          });
    }

    render(){
        return(           
            <Box flexDirection="row-reverse" width="30%" height="600px" border={1} component="div" display="inline" m={4}> 
                <Grid   
                container
                direction="row"
                justify="center"
                alignItems="center">
                    <TextField 
                    onChange={this.handlechange}
                    size="small"
                    id="filled-size-small" 
                    label="Type hier je taak..." 
                    variant="filled"/>            
                    <IconButton onClick={this.handleclick}  color="primary" aria-label="add task" component="span">
                        <Add/>
                    </IconButton>    
                </Grid>       
                <br/>    
                {this.state.showComponent ?
                <Task task={this.state.task}/>:
                null
                }        
            </Box>
        );
    }
}

export default ToDoListComponent