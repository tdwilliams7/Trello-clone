import React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import './ListCard.css'

const ListCard = (props) => {

  return (
    <div key={props.item.id}>
      <Card className="ListCard" key={props.item.id} >
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


export default ListCard;
