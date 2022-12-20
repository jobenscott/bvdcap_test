import { AppBar, Button, Toolbar, Typography, useMediaQuery} from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AppDrawer from "../AppDrawer/AppDrawer";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
    '&:hover': {
      cursor: "pointer",
   },
  },
  nav: {
    color: "white",
    minHeight: "5rem",
    boxShadow: "none"
  }
}))

function Navbar() {
  const classes = useStyles()
  const router = useRouter()

  const onHomeClick = () => {
    router.push('/')
  }

  const matches = useMediaQuery('(max-width:600px)');

  const navLinks = [
    {
      id: "1",
      path: "Members"
    },
    {
      id: "2",
      path: "Resources"
    }
  ]

  return (
    <div>
      <Head>
        <title>CommunityBuilt</title>
      </Head>
      {!matches ? 
      (
      <AppBar className={classes.nav} position="sticky" color="transparent">
      <Toolbar className={classes.nav}>
        <Typography onClick={onHomeClick} variant="h6" className={classes.title} sx={{ mt: 1, fontSize: { lg: "1.6rem", md: "1.6rem", sm: "1.3rem", xs: "1.1rem" } }}>
          {"BVD Capital"}
        </Typography>
        {navLinks.map(link => (
          <Button
            key={link.id}
            color="inherit"
            onClick={() => router.push(link.path)}
            sx={{ mt: 1, fontSize: { lg: "1.2rem", md: "1.2rem", sm: "1rem", xs: ".8rem" }, }}
          >
            {link.path}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
    )
    :
    (
      <AppDrawer/>
    )
      }
        
    </div>
  )
}

export default Navbar;