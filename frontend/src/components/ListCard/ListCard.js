import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import './ListCard.css'

const styles = theme => ({
  // card: {
  //   minWidth: 275,
  //   background: '#AA8239',
  // },
  // bullet: {
  //   display: 'inline-block',
  //   margin: '0 2px',
  //   transform: 'scale(0.8)',
  // },
  // title: {
  //   marginBottom: 16,
  //   fontSize: 14,
  //   color: theme.palette.text.secondary,
  // },
  // pos: {
  //   marginBottom: 12,
  //   color: theme.palette.text.secondary,
  // },
});

const ListCard = (props) => {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="ListCard">
      <Card key={props.item.id} className={classes.card}>
        <CardContent>
          <Typography className='title'>
            {props.item.text}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => props.advanceStageHandler(props.item.id)}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

ListCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListCard);
