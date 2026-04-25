import {Box} from "@mui/material"
import ElectionCard from "../Election/electionCard"
import ParilamentCard from "../pirliament/parliament"

export default function HomePage(){
    return(
        <>
        <Box
        sx={{
            height:'100vh',
            width:'100vw',
            backgroundImage:'url(/homEBG.png)',
            backgroundSize:'cover',
            backgroundPosition:'center',
            display:'flex',
            gap:8,
            alignItems:'center',
            justifyContent:'center'
        }}
        >

            <ElectionCard/>
            <ParilamentCard/>
        </Box>
        
        </>
    )
}