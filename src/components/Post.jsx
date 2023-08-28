import React from "react"
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material"
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material"

const Post = () => {
  return (
    <Box flex={4} p={2}>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "red" }}
              aria-label="recipe"
              src="https://media.licdn.com/dms/image/C4D03AQEzKjQOklNO6Q/profile-displayphoto-shrink_400_400/0/1640686647872?e=1698278400&v=beta&t=wZwAznlpgJXlioTGOiRS4LjS9GY3hSddsRko2gZlsYw"
            >
              OGP
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Marius Adrian Tilica"
          subheader="August 24, 2023"
        />
        <Typography variant="h6" color="text.secondary" p={1} fontSize="16px">
          Începând cu luna Septembrie, pe data de 15, se va deschide un nou
          Barbershop în orașul nostru. Acesta va fi situat în zona centrală, pe
          strada Radu Beller, nr. 3. Vă aștept cu drag! Pentru mai multe detalii
          mă puteți contacta în privat, sau pe site-ul nostru
          MareSefTilica-TheBarber.ro Veniți să vă întund dă dracu vă ia.
        </Typography>
        <CardMedia
          component="img"
          height="15%"
          image="https://www.washingtonian.com/wp-content/uploads/2021/10/ScissorsScotchNavyYard-4.jpg"
          alt="Barbershop"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Pentru moment programările se pot face doar telefonic, la numărul
            89.89.89, sună acum! La trei frizuri, nu primesti niciuna gratis,
            dar la patru, nici atunci nu primesti una gratis. LA MUUUNCA!!
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "red" }}
              aria-label="recipe"
              src="https://media.licdn.com/dms/image/C5603AQFx8hTwk4_MGA/profile-displayphoto-shrink_400_400/0/1620694203378?e=1698278400&v=beta&t=DJF3utMSHr0YAFA5aaJ0fJEQfxGO2cUmfVkfUCh3Xhs"
            >
              TMA
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Onofrei George Petrisor"
          subheader="August 23, 2023"
        />
        <Typography variant="h6" color="text.secondary" p={1} fontSize="16px">
          Nu spamati cu mesaje daca masina dumneavoastra nu corespunde cu
          cerintele mele.
        </Typography>
        <CardMedia
          component="img"
          height="15%"
          image="https://i.ytimg.com/vi/4sHmRb43WUA/maxresdefault.jpg"
          alt="BMW Serie 5"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Doresc sa achizitionez un BMW Seria 5, an 2020, 2.0 diesel, 190 CP,
            cutie automata, 4x4, 5 usi, culoare neagra, interior piele crem,
            istoric service, istoric accidente, istoric proprietari, istoric km,
            stare tehnica si optica impecabila. Buget 35.000 euro. Rog
            seriozitate.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "red" }}
              aria-label="recipe"
              src="https://avatars.githubusercontent.com/u/125574828?v=4"
            >
              NDC
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Dragos Nicolae"
          subheader="August 22, 2004"
        />
        <Typography variant="h6" color="text.secondary" p={1} fontSize="16px">
          Stie cineva filme cu baieti de cartier? gen Paid in Full, Scarface,
          etc ? scz de mass.
        </Typography>
        <CardMedia
          component="img"
          height="15%"
          image="https://images.pluto.tv/episodes/600726d9cc17ce00130c32a1/screenshot16_9.jpg?fill=blur&fit=fill&fm=jpg&h=540&q=70&w=960&auto=&ixlib=react-9.1.5"
          alt="film cover"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            scz de mass dar nu stiu unde sa intreb, si nu gasesc pe google nimic
            interesant. daca stiti ceva filme cu baieti de cartier, astept
            mesaj. Nu ma intereseaza filme cu baieti de cartier din Romania,
            doar din America. Daca aveti DC++ partajati acolo. P.S - vând ceas
            cu optișpe sute, automatic, original, cu brățară de piele, nu e
            contrafăcut, nu e chinezărie, nu e de la țigani.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  )
}

export default Post
