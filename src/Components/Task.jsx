import { Box, TextField } from '@material-ui/core';
import React from 'react';
import {Component} from "react";


class Task extends Component{

    render(){
        return(           
            <Box>
                {this.props.task}
            </Box>
        );
    }
}

export default Task