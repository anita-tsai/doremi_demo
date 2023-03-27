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


const Blacklist = () => {

  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="750"
            image={Images.blacklist}
            alt="gif"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              黑名單列表
            </Typography>
            <Typography variant="body2" color="text.secondary">
              展開黑名單列表可看到被檢舉人的名稱、事發日期與經過
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}


export default Blacklist;