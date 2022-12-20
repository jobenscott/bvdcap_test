import { Button, Container, Grid, styled, Typography } from "@mui/material";
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


const PageContent = () => {
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
          flexDirection: "row",
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >   
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                zIndex: 1,
                color: "white",
                fontSize:{ lg: "1rem", md: "1rem", sm: ".8rem", xs: ".7rem" },
                mt: { lg: "3rem", md: "3rem", sm: "2.5rem", xs: "2rem" },
                textAlign: "center"
              }}
            >
              Coming soon...
            </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PageContent;