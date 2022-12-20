import { Container, Grid } from "@mui/material";
import Head from 'next/head';
import PageHeader from "../components/PageHeader/PageHeader";

export default function Index({
}) {
  return (
    <Container disableGutters maxWidth={false}>
      <Head>
      </Head>
      <Grid container sx={{ display: "flex" }}>
        <Grid item sx={{ width: "100%" }}>
            <PageHeader pageHeader={"History"} />
        </Grid>
      </Grid>
    </Container>
  )
}