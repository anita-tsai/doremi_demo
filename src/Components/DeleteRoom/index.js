import * as React from 'react';
import styled from 'styled-components';
import Images from '../../images'

import _Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Card = styled(_Card)`
  display: flex;
  width: 750px;
  position: absolute;
  top: 40px; left: 300px;
  
`


const DeleteRoom = () => {

  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="750"
            image={Images.deleteRoom}
            alt="gif"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              刪除房間
            </Typography>
            <Typography variant="body2" color="text.secondary">
              開房者可刪除所創建之房間
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}


export default DeleteRoom;