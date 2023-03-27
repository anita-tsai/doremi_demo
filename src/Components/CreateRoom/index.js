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

const CreateRoom = () => {

  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="750"
            image={Images.createRoom}
            alt="gif"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              創建房間
            </Typography>
            <Typography variant="body2" color="text.secondary">
              登入系統後可依照內建表單格式如類別、標籤以及圖片創立房間
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}


export default CreateRoom;