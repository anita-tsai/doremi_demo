import * as React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
//import { useLocation } from 'react-router';

import _Box from '@mui/material/Box';
import _Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';





const Box = styled(_Box)`
  height: 270px;
  flex-grow: 1;
  width: 200px;
  // overflow-y: auto;
  position: absolute;
  top: 40px; left: 40px;

`

const Button = styled(_Button)`
  margin: auto; 
`


const Menu = () => {
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? ['1', '5', '10', '14'] : [],
    );
  };

  return (
    <>
    <Box>
      <Button onClick={handleExpandClick}>
        {expanded.length === 0 ? '展開全部' : '全部合起'}
      </Button>
      <Link to="/*">
      <Button>
        回到首頁
      </Button>
      </Link>    
      <TreeView
        aria-label="controlled"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
        multiSelect
      >
        <TreeItem nodeId="1" label="登入功能">
          <Link to= "/googleLogin">
            <TreeItem nodeId="2" label="google登入" />
          </Link>
          <Link to= "/facebookLogin">
            <TreeItem nodeId="3" label="facebook登入" />
          </Link>
          <Link to="/userPage">
            <TreeItem nodeId="4" label="個人頁面" />
          </Link>
        </TreeItem>

        <TreeItem nodeId="5" label="房間功能">
          <Link to="/createRoom">
            <TreeItem nodeId="6" label="創建房間" />
          </Link>
          <Link to="/editRoom">
            <TreeItem nodeId="7" label="編輯房間" />
          </Link>
          <Link to="/deleteRoom">
            <TreeItem nodeId="8" label="刪除房間" />
          </Link>
          <Link to="/interaction">
            <TreeItem nodeId="9" label="房間互動" />
          </Link>
        </TreeItem>

        <TreeItem nodeId="10" label="搜尋功能">
          <Link to="/textSearch">
            <TreeItem nodeId="11" label="文字搜尋" />
          </Link>
          <Link to="/categorySearch">
            <TreeItem nodeId="12" label="類別搜尋" />
          </Link>
          <Link to="/tagSearch">
            <TreeItem nodeId="13" label="標籤搜尋" />
          </Link>
        </TreeItem>

        <TreeItem nodeId="14" label="黑名單">
          <Link to="/blacklist">
            <TreeItem nodeId="15" label="黑名單列表" />
          </Link>
          <Link to="/submitBlacklist">
            <TreeItem nodeId="16" label="舉報黑名單" />
          </Link>
        </TreeItem>
          
        
      </TreeView>
      </Box>
      
      
      
      </>
  );
}




export default Menu;