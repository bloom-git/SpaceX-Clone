import { Typography, Box, TableCell } from "@mui/material";
import {Table, TableBody, TableContainer, TableRow} from '@mui/material';

export default function StarshipOverView(){
    function createData(
        name: string,
        data: string
    ){
        return {name, data}
    }

    const rows= [
        createData('HEIGHT', '123m / 403 ft' ),
        createData('DIAMETER', '9 m / 29.5 ft'),
        createData('PAYLOAD CAPACITY', '100 - 150t(fully reusable)')
    ]
    return (
        <Box 
        sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center", 
            position: "relative",
        }}>
            <img src="/Starship1.avif"
                alt="Starship Image"
                style={{width: "100vw", height: "100vh", objectFit: "cover"}} />
           <Box sx={{position: "absolute", left: "10%", color: "white", alignContent: "left", maxWidth: "50%"}}>
            <Typography variant="h2"
            sx= {{
                mb: 2
            }}>
                STARSHIP OVERVIEW
                </Typography>
                <Typography variant="body1"
                sx={{
                    mb: 4 
                }}>
                    SpaceX's Starship spacecraft and Super Heavy rocket - collectively referred to as Starship - represent a fully reusable transportation system designed to carry both crew and cargo to earth orbit, the Moon, Mars and beyond. 
                    Starship is the world's most powerful launch vehicle ever developed, capable of carrying up to 150 metric tonnes fully reusable and 250 metric tonnes expendable.
                </Typography>
            <TableContainer sx={{mt: 4}}>
                    <Table sx={{minWidth: 650}}>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.name}>
                                    <TableCell sx={{color: "white"}}>{row.name}</TableCell>
                                    <TableCell sx={{color: "white"}}>{row.data}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
             </Box>
        </Box>
    )
}