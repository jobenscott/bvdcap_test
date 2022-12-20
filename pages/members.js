import { Container, Grid } from "@mui/material";
import Head from 'next/head';
import PageHeader from "../components/PageHeader/PageHeader";
import PageContent from "../components/PageContent/PageContent";

export default function Index({
}) {
  return (
    <Container disableGutters maxWidth={false}>
      <Head>
      </Head>
      <Grid container sx={{ display: "flex" }}>
        <Grid item sx={{ width: "100%" }}>
            <PageHeader pageHeader={"Members"} />
        </Grid>
        <Grid item sx={{ width: "100%" }}>
            <PageContent/>
        </Grid>
      </Grid>
    </Container>
  )
}