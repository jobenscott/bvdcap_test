import { Button, Container, Grid, styled, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from 'next/image';
import Link from 'next/link';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    color: "#ffffff"
  }
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#F2EFEA",
  backgroundColor: "#DB5461",
  '&:hover': {
    backgroundColor: "#ce858c",
  },
}));


const Events = () => {
  const classes = useStyles();
  return (
    <Container disableGutters maxWidth={false}>
      <Grid
        spacing={{
          xl: 50,
          lg: 30,
          md: 15,
          sm: 15,
          xs: 0
        }}
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            // borderBottom: "solid 1px white"
            // alignSelf: "flex-start"
          }}
        >   
         <Typography
              variant="h1"
              gutterBottom
              sx={{
                zIndex: 1,
                color: "white",
                fontWeight: { lg: "800", md: "600", sm: "600", xs: "600" },
                fontSize: { lg: "4rem", md: "3rem", sm: "2.5rem", xs: "1.7rem" },
                mt: { lg: "5rem", md: "5rem", sm: "5rem", xs: "5rem" },
                textShadow: "3px 3px 2px rgba(0, 0, 0, 1),7px -3px 18px rgba(41, 40, 37, 1);",
                textAlign: "center",
              }}
            >
              Events
            </Typography>
             <Box sx={{borderBottom: "solid 1px white", width: 250, height: 1}}/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Events;