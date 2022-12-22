import { Button, Container, Grid, styled, Typography, Paper, List, ListItem, ListItemText, Box, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from 'next/image';
import Link from 'next/link';
import ExpandableListItem from "../ExpandableListItem/ExpandableListItem";


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


const EventList = ({ eventList }) => {
    const classes = useStyles();
    const mobile = useMediaQuery('(max-width:600px)');
    return (
        <Container sx={{ mt: 8 }} disableGutters maxWidth={false}>
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
                    <Paper sx={{ maxHeight: 400, overflow: 'auto', backgroundColor: "transparent", boxShadow: "none", width: { lg: "60rem", md: "60rem", sm: "40rem", xs: "18rem" }, borderRadius: 2, '&::-webkit-scrollbar': { display: "none" } }}>
                        <List sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column"
                        }}>
                            {eventList.map((event) => {
                                return (
                                    <ExpandableListItem event={event} mobile={mobile} expandedContent={true} />
                                )
                            })}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default EventList;