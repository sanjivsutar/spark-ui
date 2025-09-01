"use client";

import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 180 , border:1,borderColor:'#CECED6',borderRadius:'8px', boxShadow:'0px 1px 4px rgba(0, 0, 0, 0.1)'}}
    >
      <IconButton type="button" sx={{ p: '7px'}} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search by name"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Paper>
  );
}
