import { Container, Grid } from "@mui/material";
import Head from 'next/head';
import PageHeader from "../components/PageHeader/PageHeader";
import PageContent from "../components/PageContent/PageContent";
import MemberList from "../components/ScrollableList/MemberList";

export default function Index({
}) {

    const memberList = [
        {
            image: "/jobes_pfp.jpeg",
            socials: [
                {
                    platform: "Twitter",
                    handle: "jobes.eth"
                },
                {
                    platform: "Discord",
                    handle: "jobes.eth/jobes.sol"
                }
            ]
        },
        {
            image: "/jobes_pfp.jpeg",
            socials: [
                {
                    platform: "Twitter",
                    handle: "jobes.eth"
                },
                {
                    platform: "Discord",
                    handle: "jobes.eth/jobes.sol"
                }
            ]
        },
        {
            image: "/jobes_pfp.jpeg",
            socials: [
                {
                    platform: "Twitter",
                    handle: "jobes.eth"
                },
                {
                    platform: "Discord",
                    handle: "jobes.eth/jobes.sol"
                }
            ]
        },
        {
            image: "/jobes_pfp.jpeg",
            socials: [
                {
                    platform: "Twitter",
                    handle: "jobes.eth"
                },
                {
                    platform: "Discord",
                    handle: "jobes.eth/jobes.sol"
                }
            ]
        },
        {
            image: "/jobes_pfp.jpeg",
            socials: [
                {
                    platform: "Twitter",
                    handle: "jobes.eth"
                },
                {
                    platform: "Discord",
                    handle: "jobes.eth/jobes.sol"
                }
            ]
        },
    ]
  return (
    <Container disableGutters maxWidth={false}>
      <Head>
      </Head>
      <Grid container sx={{ display: "flex" }}>
        <Grid item sx={{ width: "100%" }}>
            <PageHeader pageHeader={"Members"} />
        </Grid>
        <Grid item sx={{ width: "100%" }}>
            <MemberList memberList={memberList} />
        </Grid>
      </Grid>
    </Container>
  )
}