import { Container, Grid } from "@mui/material";
import Head from 'next/head';
import PageContent from "../components/PageContent/PageContent";
import PageHeader from "../components/PageHeader/PageHeader";

export default function Index({
}) {
  return (
    <Container maxWidth={false}>
      <Head>
      </Head>
      <Grid container sx={{ display: "flex" }}>
        <Grid item sx={{ width: "100%" }}>
            <PageHeader pageHeader={"Events"} />
        </Grid>
        <Grid item sx={{ width: "100%" }}>
            <PageContent/>
        </Grid>
      </Grid>
    </Container>
  )
}