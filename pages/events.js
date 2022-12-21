import { Container, Grid } from "@mui/material";
import Head from 'next/head';
import PageContent from "../components/PageContent/PageContent";
import PageHeader from "../components/PageHeader/PageHeader";
import EventList from "../components/ScrollableList/EventList";

export default function Index({
}) {

    const eventList = [
        {
            host: "Raikage.SOL 🧊",
            platform: "Twitter",
            title: "The #BVD Chat: Gacha Machine and Triats Gallore 💎",
            link: "https://twitter.com/i/spaces/1mrGmklPrDnxy?s=20"
        }
    ];
  return (
    <Container maxWidth={false}>
      <Head>
      </Head>
      <Grid container sx={{ display: "flex" }}>
        <Grid item sx={{ width: "100%" }}>
            <PageHeader pageHeader={"Events"} />
        </Grid>
        <Grid item sx={{ width: "100%" }}>
            <EventList eventList={eventList}/>
        </Grid>
      </Grid>
    </Container>
  )
}