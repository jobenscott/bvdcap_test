import { Container, Grid } from "@mui/material";
import Head from 'next/head';

export default function Index({
}) {
  return (
    <Container disableGutters maxWidth={false}>
      <Head>
      </Head>
      <Grid container sx={{ display: "flex" }}>
        <Grid item sx={{ width: "100%" }}>
            <h1>About page</h1>
        </Grid>
      </Grid>
    </Container>
  )
}