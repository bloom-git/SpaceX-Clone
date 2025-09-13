import {Box, Typography} from '@mui/material';


export default function StarShip() {
    return (
        <Box sx={{ position: "relative", width: "100vw" , height: "100vh" }}>
        <img src="/starshipoverview.avif"
        alt="Starship Overview Image"
        style={{width: "100vw", height: "100vh", objectFit: "cover"}} />
        <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "40%",
          color: "white",
          textAlign: "center",
          transform: "translate(-50%, -50%)",
          left: "50%"
        }}
      >
        STARSHIP
        <Typography variant='subtitle2' >SERVICE TO EARTH ORBIT, MOON, MARS AND BEYOND</Typography>
      </Typography>
        </Box>
    )
}