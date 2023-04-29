import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material';
import React, { useState } from 'react'
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from '@mui/icons-material'
import myImage from './Asset 2@4x.png'

const StyledModal = styled(Modal)({
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
})

const UserBox = styled(Box)({
  display: "flex",
  alignItems:'center',
  gap:'10px',
  marginBottom:'20px'
});

const Add = () => {
    const [open,setOpen] =  useState(false)
  return (
    <>
      <Tooltip
        onClick={(event) => setOpen(true)}
        title="Add a post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(45% )", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={(event) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor="background.default"
          color="text.primary"
          p={3}
          borderRadius={5}
        >
          <Typography varient="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar src={myImage} sx={{ width: 30, height: 30 }} />
            <Typography varient="span" fontWeight={500}>
              Imtiaz Hussain
            </Typography>
          </UserBox>

          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={2}
            placeholder="What's in your mind?"
            variant="standard"
          />

          <Stack direction="row" gap={1} mb={3} mt={2}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>

          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}

export default Add