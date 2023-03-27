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

// const nodeIdMap = {
//   'googleLogin': '2',
//   'facebookLogin': '3'
// }


const FacebookLogin = () => {

  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="450"
            image={Images.facebookLogin}
            alt="gif"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Facebook登入
            </Typography>
            <Typography variant="body2" color="text.secondary">
              串接Facebook api來登入系統
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}




export default FacebookLogin;