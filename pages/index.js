import { Container, Grid } from "@mui/material";
import Head from 'next/head';
import ComingSoon from "../components/ComingSoon/ComingSoon";

export default function Index({
  banner,
  whyUs,
}) {
  return (
    <Container disableGutters maxWidth={false}>
      <Head>
      </Head>
      <Grid container sx={{ display: "flex" }}>
        <Grid item sx={{ width: "100%" }}>
          <ComingSoon/>
        </Grid>
      </Grid>
    </Container>
  )
}


// export async function getStaticProps() {
//   // Run API calls in parallel
//   const home = await fetchAPI("/home", {
//     populate: {
//       banner: "*",
//       WhyUs: {
//         populate: {
//           KeyPoints: {
//             populate: {
//               icon: "*"
//             }
//           }
//         }
//       }
//     }
//   })

//   return {
//     props: {
//       banner: home.data.attributes.banner,
//       whyUs: home.data.attributes.WhyUs,
//     },
//     revalidate: 1,
//   };
// }