

import React from 'react'
import Posts from './Posts';
import { Box } from '@mui/material';

const Feed = () => {
  return (
    <Box flex={4} padding={2}>
      <Posts image="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=600"></Posts>
      <Posts image="https://images.pexels.com/photos/1198817/pexels-photo-1198817.jpeg?auto=compress&cs=tinysrgb&w=600"></Posts>

      <Posts image="https://images.pexels.com/photos/937783/pexels-photo-937783.jpeg?auto=compress&cs=tinysrgb&w=600"></Posts>
    </Box>
  );
}

export default Feed