import {
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material"
import React from "react"
import Badge from "@mui/material/Badge"
import Avatar from "@mui/material/Avatar"
import { styled } from "@mui/material/styles"

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            alt="Onofrei Petrisor"
            src="https://media.licdn.com/dms/image/C5603AQFx8hTwk4_MGA/profile-displayphoto-shrink_400_400/0/1620694203378?e=1698278400&v=beta&t=DJF3utMSHr0YAFA5aaJ0fJEQfxGO2cUmfVkfUCh3Xhs"
          />
        </StyledBadge>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            alt="Roberto Rusnac"
            src="https://media.licdn.com/dms/image/C4D03AQEz5-76nHEz2A/profile-displayphoto-shrink_400_400/0/1642785377084?e=1698278400&v=beta&t=ClvYHNNCOEhi1uwGoi6GcnRGfixzMmpBCXk_IC__1J8"
          />
        </StyledBadge>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            alt="Roberto Rusnac"
            src="https://media.licdn.com/dms/image/C4D03AQEz5-76nHEz2A/profile-displayphoto-shrink_400_400/0/1642785377084?e=1698278400&v=beta&t=ClvYHNNCOEhi1uwGoi6GcnRGfixzMmpBCXk_IC__1J8"
          />
        </StyledBadge>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Avatar
            alt="Tilica Marius"
            src="https://media.licdn.com/dms/image/C4D03AQEzKjQOklNO6Q/profile-displayphoto-shrink_400_400/0/1640686647872?e=1698278400&v=beta&t=wZwAznlpgJXlioTGOiRS4LjS9GY3hSddsRko2gZlsYw"
          />
        </Badge>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList gap={5}>
          <ImageListItem>
            <img
              src="https://i.ytimg.com/vi/6ZnzzM1ikhA/maxresdefault.jpg"
              alt="#"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.ytimg.com/vi/WC5oG1q8-rU/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgXyhZMA8=&rs=AOn4CLBmXwkkkCRh9u_sC5CbEx5wecZ0sw"
              alt="#"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://pofta-buna.com/wp-content/uploads/2019/10/ciorba-de-perisoare-reteta-rapida-1-500x375.jpg"
              alt="#"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i0.wp.com/vieneland.ro/wp-content/uploads/2022/11/A-rasarit-soarele-Poftiti-la-cafea-640-%C3%97-440-px.jpg?ssl=1"
              alt="#"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Roberto Rusnac"
                src="https://media.licdn.com/dms/image/C4D03AQEz5-76nHEz2A/profile-displayphoto-shrink_400_400/0/1642785377084?e=1698278400&v=beta&t=ClvYHNNCOEhi1uwGoi6GcnRGfixzMmpBCXk_IC__1J8"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Vine cineva la un LAN?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Roberto Rusnac
                  </Typography>
                  {" — Dam un CS 1.6 sau un Dota 2?"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Domnisoara"
                src="data:image/jpeg;base64,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"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Noua la tine in oras"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to All
                  </Typography>
                  {
                    " — Singura in apartament, te astept sa petrecem clipe de neuitat"
                  }
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Alex Frumosul Thau"
                src="https://bogdanlupu.files.wordpress.com/2010/07/cinci-semne-ca-este-cocalar_4.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Vand SIDIuri cu muzica de petrecere"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Alex frumosul thau
                  </Typography>
                  {" — Cine este interesat sami dea mesaj"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))
