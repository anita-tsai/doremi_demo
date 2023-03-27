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


const CategorySearch = () => {

  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="750"
            image={Images.categorySearch}
            alt="gif"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              類別搜尋
            </Typography>
            <Typography variant="body2" color="text.secondary">
              可點選類別以過濾感興趣的房間類型
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}


export default CategorySearch;