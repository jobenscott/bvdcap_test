import { Button, Container, Grid, styled, Typography, Paper, List, ListItem, ListItemText, Box, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from 'next/image';
import Link from 'next/link';


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


const ScrollableList = () => {
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
                    <Paper sx={{ maxHeight: 400, overflow: 'auto', backgroundColor: "transparent", boxShadow: "none", width: { lg: "60rem", md: "60rem", sm: "40rem", xs: "18rem" }, borderRadius: 2 }}>
                        <List sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column"
                        }}>
                            <ListItem sx={{
                                background: "#00000042", borderRadius: 3, height: mobile ? 200 : 100, m: 2,
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                flexDirection: mobile ? "column" : "row",
                            }}>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                <Box sx={{ borderRadius: 100, height: mobile ? 40 : 60, width: mobile ? 40 : 60, overflow: "hidden", mr: 5, display: "flex", alignSelf: "flex-start", m: 1 }}>
                                    <Image
                                        src="/jobes_pfp.jpeg"
                                        width={mobile ? 40 : 60}
                                        height={mobile ? 40 : 60}
                                        objectFit="cover"
                                        alt="some image"
                                        sx={{ borderRadius: 100 }}
                                        priority={true}
                                    />
                                </Box>
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                    <ListItemText sx={{ color: "white" }} primary="Twitter" />
                                    <ListItemText sx={{ color: "white", textDecoration: "underline" }} primary="jobes.eth" />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                    <ListItemText sx={{ color: "white" }} primary="Discord" />
                                    <ListItemText sx={{ color: "white", textDecoration: "underline" }} primary="jobes.eth/jobes.sol" />
                                </Grid>
                            </ListItem>
                            <ListItem sx={{
                                background: "#00000042", borderRadius: 3, height: mobile ? 200 : 100, m: 2,
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                flexDirection: mobile ? "column" : "row",
                            }}>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                <Box sx={{ borderRadius: 100, height: mobile ? 40 : 60, width: mobile ? 40 : 60, overflow: "hidden", mr: 5, display: "flex", alignSelf: "flex-start", m: 1 }}>
                                    <Image
                                        src="/jobes_pfp.jpeg"
                                        width={mobile ? 40 : 60}
                                        height={mobile ? 40 : 60}
                                        objectFit="cover"
                                        alt="some image"
                                        sx={{ borderRadius: 100 }}
                                        priority={true}
                                    />
                                </Box>
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                    <ListItemText sx={{ color: "white" }} primary="Twitter" />
                                    <ListItemText sx={{ color: "white", textDecoration: "underline" }} primary="jobes.eth" />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                    <ListItemText sx={{ color: "white" }} primary="Discord" />
                                    <ListItemText sx={{ color: "white", textDecoration: "underline" }} primary="jobes.eth/jobes.sol" />
                                </Grid>
                            </ListItem>
                            <ListItem sx={{
                                background: "#00000042", borderRadius: 3, height: mobile ? 200 : 100, m: 2,
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                flexDirection: mobile ? "column" : "row",
                            }}>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                <Box sx={{ borderRadius: 100, height: mobile ? 40 : 60, width: mobile ? 40 : 60, overflow: "hidden", mr: 5, display: "flex", alignSelf: "flex-start", m: 1 }}>
                                    <Image
                                        src="/jobes_pfp.jpeg"
                                        width={mobile ? 40 : 60}
                                        height={mobile ? 40 : 60}
                                        objectFit="cover"
                                        alt="some image"
                                        sx={{ borderRadius: 100 }}
                                        priority={true}
                                    />
                                </Box>
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                    <ListItemText sx={{ color: "white" }} primary="Twitter" />
                                    <ListItemText sx={{ color: "white", textDecoration: "underline" }} primary="jobes.eth" />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                    <ListItemText sx={{ color: "white" }} primary="Discord" />
                                    <ListItemText sx={{ color: "white", textDecoration: "underline" }} primary="jobes.eth/jobes.sol" />
                                </Grid>
                            </ListItem>
                            <ListItem sx={{
                                background: "#00000042", borderRadius: 3, height: mobile ? 200 : 100, m: 2,
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                flexDirection: mobile ? "column" : "row",
                            }}>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                <Box sx={{ borderRadius: 100, height: mobile ? 40 : 60, width: mobile ? 40 : 60, overflow: "hidden", mr: 5, display: "flex", alignSelf: "flex-start", m: 1 }}>
                                    <Image
                                        src="/jobes_pfp.jpeg"
                                        width={mobile ? 40 : 60}
                                        height={mobile ? 40 : 60}
                                        objectFit="cover"
                                        alt="some image"
                                        sx={{ borderRadius: 100 }}
                                        priority={true}
                                    />
                                </Box>
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                    <ListItemText sx={{ color: "white" }} primary="Twitter" />
                                    <ListItemText sx={{ color: "white", textDecoration: "underline" }} primary="jobes.eth" />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                    <ListItemText sx={{ color: "white" }} primary="Discord" />
                                    <ListItemText sx={{ color: "white", textDecoration: "underline" }} primary="jobes.eth/jobes.sol" />
                                </Grid>
                            </ListItem>
                            <ListItem sx={{
                                background: "#00000042", borderRadius: 3, height: mobile ? 200 : 100, m: 2,
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                flexDirection: mobile ? "column" : "row",
                            }}>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                <Box sx={{ borderRadius: 100, height: mobile ? 40 : 60, width: mobile ? 40 : 60, overflow: "hidden", mr: 5, display: "flex", alignSelf: "flex-start", m: 1 }}>
                                    <Image
                                        src="/jobes_pfp.jpeg"
                                        width={mobile ? 40 : 60}
                                        height={mobile ? 40 : 60}
                                        objectFit="cover"
                                        alt="some image"
                                        sx={{ borderRadius: 100 }}
                                        priority={true}
                                    />
                                </Box>
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                    <ListItemText sx={{ color: "white" }} primary="Twitter" />
                                    <ListItemText sx={{ color: "white", textDecoration: "underline" }} primary="jobes.eth" />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                    <ListItemText sx={{ color: "white" }} primary="Discord" />
                                    <ListItemText sx={{ color: "white", textDecoration: "underline" }} primary="jobes.eth/jobes.sol" />
                                </Grid>
                            </ListItem>
                            <ListItem sx={{
                                background: "#00000042", borderRadius: 3, height: mobile ? 200 : 100, m: 2,
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                flexDirection: mobile ? "column" : "row",
                            }}>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                <Box sx={{ borderRadius: 100, height: mobile ? 40 : 60, width: mobile ? 40 : 60, overflow: "hidden", mr: 5, display: "flex", alignSelf: "flex-start", m: 1 }}>
                                    <Image
                                        src="/jobes_pfp.jpeg"
                                        width={mobile ? 40 : 60}
                                        height={mobile ? 40 : 60}
                                        objectFit="cover"
                                        alt="some image"
                                        sx={{ borderRadius: 100 }}
                                        priority={true}
                                    />
                                </Box>
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                    <ListItemText sx={{ color: "white" }} primary="Twitter" />
                                    <ListItemText sx={{ color: "white", textDecoration: "underline" }} primary="jobes.eth" />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                    <ListItemText sx={{ color: "white" }} primary="Discord" />
                                    <ListItemText sx={{ color: "white", textDecoration: "underline" }} primary="jobes.eth/jobes.sol" />
                                </Grid>
                            </ListItem>
                            <ListItem sx={{
                                background: "#00000042", borderRadius: 3, height: mobile ? 200 : 100, m: 2,
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                flexDirection: mobile ? "column" : "row",
                            }}>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                <Box sx={{ borderRadius: 100, height: mobile ? 40 : 60, width: mobile ? 40 : 60, overflow: "hidden", mr: 5, display: "flex", alignSelf: "flex-start", m: 1 }}>
                                    <Image
                                        src="/jobes_pfp.jpeg"
                                        width={mobile ? 40 : 60}
                                        height={mobile ? 40 : 60}
                                        objectFit="cover"
                                        alt="some image"
                                        sx={{ borderRadius: 100 }}
                                        priority={true}
                                    />
                                </Box>
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                    <ListItemText sx={{ color: "white" }} primary="Twitter" />
                                    <ListItemText sx={{ color: "white", textDecoration: "underline" }} primary="jobes.eth" />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                    <ListItemText sx={{ color: "white" }} primary="Discord" />
                                    <ListItemText sx={{ color: "white", textDecoration: "underline" }} primary="jobes.eth/jobes.sol" />
                                </Grid>
                            </ListItem>
                            <ListItem sx={{
                                background: "#00000042", borderRadius: 3, height: mobile ? 200 : 100, m: 2,
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                flexDirection: mobile ? "column" : "row",
                            }}>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                <Box sx={{ borderRadius: 100, height: mobile ? 40 : 60, width: mobile ? 40 : 60, overflow: "hidden", mr: 5, display: "flex", alignSelf: "flex-start", m: 1 }}>
                                    <Image
                                        src="/jobes_pfp.jpeg"
                                        width={mobile ? 40 : 60}
                                        height={mobile ? 40 : 60}
                                        objectFit="cover"
                                        alt="some image"
                                        sx={{ borderRadius: 100 }}
                                        priority={true}
                                    />
                                </Box>
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                    <ListItemText sx={{ color: "white" }} primary="Twitter" />
                                    <ListItemText sx={{ color: "white", textDecoration: "underline" }} primary="jobes.eth" />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                    <ListItemText sx={{ color: "white" }} primary="Discord" />
                                    <ListItemText sx={{ color: "white", textDecoration: "underline" }} primary="jobes.eth/jobes.sol" />
                                </Grid>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ScrollableList;