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


const UserPage = () => {

  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="450"
            image={Images.userPage}
            alt="gif"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              個人頁面
            </Typography>
            <Typography variant="body2" color="text.secondary">
              顯示所創建的房間列表，可直接加入所選取房間
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}




export default UserPage;