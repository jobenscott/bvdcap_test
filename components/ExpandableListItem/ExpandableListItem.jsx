import React, { useState } from 'react';
import { Collapse, Button, Container, Grid, styled, Typography, Paper, List, ListItem, ListItemText, Box, useMediaQuery } from "@mui/material";
import Image from 'next/image';
import Link from 'next/link';

const ExpandableListItem = ({ children, expandedContent, event, mobile }) => {
  const [expanded, setExpanded] = useState(true);

  const toggleExpanded = () => {
    setExpanded(!expanded);
    
  };

  return (

    <ListItem sx={{
      background: "#00000042", borderRadius: 3, height: mobile ? (expanded ? 600 : 300) : (expanded ? 300 :  110), m: 2,
      display: "flex",
      flexDirection: "column"
    }}>
      <Grid
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: mobile ? "column" : "row",
          mt: 1
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <ListItemText sx={{ color: "#00beff" }} primary="Host" />
          <ListItemText sx={{ color: "white", textAlign: "center" }} primary={event.host} />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <ListItemText sx={{ color: "#00beff" }} primary="Platform" />
          <ListItemText sx={{ color: "white", textAlign: "center" }} primary={event.platform} />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <ListItemText sx={{ color: "#00beff" }} primary="Event Name" />
          <ListItemText sx={{ color: "white", textAlign: "center" }} primary={event.title} />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Link href={event.link}>
            <ListItemText sx={{ color: "white", textDecoration: "underline" }} primary="Go to event" />
          </Link>
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Grid onClick={() => toggleExpanded()} sx={{width: 25, height: 25, background:"rgb(255,255,255)", background: "radial-gradient(circle, rgba(255,255,255,0.7525603991596639) 0%, rgba(49,8,56,0.2567620798319328) 49%, rgba(49,8,56,0) 100%)", borderRadius: 100, display: "flex",
            justifyContent: "center",
            alignItems: "center"}}>
            <Image
              src={expanded ? "/collapse.png" : "/hide.png"}
              width={20}
              height={20}
              objectFit="cover"
              alt="some image"
              sx={{ borderRadius: 100 }}
              priority={true}
            />
          </Grid>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
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
              It Works
            </Typography>
          </Collapse>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default ExpandableListItem;


