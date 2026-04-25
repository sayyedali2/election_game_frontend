import {Box, Card,CardActions,CardContent, Button} from "@mui/material"
export default function ParilamentCard(){
    return(
        <>
        <Box sx={{width:'30vw',height:'60vh', bgcolor:'rgba(255, 223, 202, 0.7)',p:1, borderRadius:6}} >
        <Card sx={{width:'30vw',height:'60vh',bgcolor:'transparent', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center',borderRadius:6}} variant="outlined" elevation={10}>
            <CardContent sx={{fontSize:'2rem'}}>
                Parilament content
            </CardContent>
           
            
            <CardActions>
                <Button sx={{color:'black',fontSize:'1.2rem', border:'2px solid black',borderRadius:6}}>Parliament Acitons</Button>
            </CardActions>
        </Card>

        </Box>
        </>
    )
}