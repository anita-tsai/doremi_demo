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


const TextSearch = () => {

  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="750"
            image={Images.textSearch}
            alt="gif"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              文字搜尋
            </Typography>
            <Typography variant="body2" color="text.secondary">
              於搜尋框輸入文字便可搜尋符合標題或內文之房間
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}


export default TextSearch;