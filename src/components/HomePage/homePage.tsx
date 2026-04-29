import {Box} from "@mui/material"
import ElectionCard from "../Election/electionCard"
import ParilamentCard from "../pirliament/parliament"
import RajasthanMap from "../RajasthanMap/rajasthanMap"

export default function HomePage(){
    return(
        <>
        <Box
        sx={{
            height:'100vh',
            width:'100vw',
            backgroundImage:'url(/homeBGC.png)',
            backgroundSize:'cover',
            backgroundPosition:'center',
            display:'flex',
            gap:16,
            alignItems:'center',
            justifyContent:'center'
        }}
        >

            <ElectionCard/>
            <ParilamentCard/>
        </Box>
        <RajasthanMap/>
        
        </>
    )
}