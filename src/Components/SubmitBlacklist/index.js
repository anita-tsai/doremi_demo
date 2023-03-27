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


const SubmitBlacklist = () => {

  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="750"
            image={Images.submitBlacklist}
            alt="gif"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              舉報黑名單
            </Typography>
            <Typography variant="body2" color="text.secondary">
              登入系統後可依照內建表單格式建立黑名單
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}


export default SubmitBlacklist;