import { Container, Grid } from "@mui/material";
import Head from 'next/head';

export default function Index({
}) {
  return (
    <Container maxWidth={false}>
      <Head>
      </Head>
      <Grid container sx={{ display: "flex" }}>
        <Grid item sx={{ width: "100%" }}>
            <h1>Events page</h1>
        </Grid>
      </Grid>
    </Container>
  )
}