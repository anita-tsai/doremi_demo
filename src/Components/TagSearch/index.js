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


const TagSearch = () => {

  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="750"
            image={Images.tagSearch}
            alt="gif"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              標籤搜尋
            </Typography>
            <Typography variant="body2" color="text.secondary">
              可選取或自行輸入標籤內容，產出標籤後進行搜尋
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}


export default TagSearch;