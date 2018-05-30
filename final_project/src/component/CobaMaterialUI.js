import React, {Component} from 'react';
import './../style/CobaMaterialUI.css'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class CobaMaterialUI extends Component {

    render() {
        return(
            <div>
                <CardContent>
                <Typography color="textSecondary">
                    Word of the Day
                </Typography>
                <Typography variant="headline" component="h2">
                    benevolent
                </Typography>
                <Typography color="textSecondary">
                    adjective
                </Typography>
                <Typography component="p">
                    well meaning and kindly.<br />
                    {'"a benevolent smile"'}
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Learn More</Button>
                </CardActions>
            </div>
        )
    }
}

export default CobaMaterialUI;