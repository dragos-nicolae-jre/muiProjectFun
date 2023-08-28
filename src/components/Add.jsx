import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material"
import React from "react"
import AddIcon from "@mui/icons-material/Add"
import { useState } from "react"
import styled from "@emotion/styled"
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAddAlt1,
  VideoCameraBack,
} from "@mui/icons-material"

const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <Stack>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <IconButton>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </IconButton>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          p={3}
          borderRadius={5}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography variant="h6" color="gray" textAlign="center" mb={2}>
            Write your post
          </Typography>
          <UserBox>
            <Avatar
              alt="BarocoCode"
              src="https://avatars.githubusercontent.com/u/125574828?v=4"
            />
            <Typography fontWeight={500} variant="span">
              BarocoCode
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAddAlt1 color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: 100 }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </Stack>
  )
}

export default Add

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
})
