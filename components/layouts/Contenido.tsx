
import { Box, Card,  CardContent, CardMedia,  Typography } from '@mui/material'


const Contenido = () => {
  return (
    <Box   
    sx={{
        sm:'4'
      }}

            borderBottom={0} > 
         <Box >
            <Card sx={{  mt:15 }} >
            
                            <CardMedia 
                                component='img'
                                
                                image="/principal/logo.gif"
               //                 sx={{ xs:6 ,sm: 4,lg:12, width: 1/1, p: 0, opacity: [0.9, 0.8, 0.7]}}
                                
                            />
            
               </Card>
            </Box>
            <Box sx={{ justifyContent: 'center' }}>
            <Card >
                    <CardMedia 
                        component='img'
                        
                        image="/principal/servicios.png"
                 //       sx={{  xs:6 ,sm: 4, lg:12, p: 0, opacity: [0.9, 0.8, 0.7]}}
                        
                    />
       
 
      </Card>
       
     
        </Box> 
    </Box>
  )
}

export default Contenido