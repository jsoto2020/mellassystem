
import { Box, Card,  CardContent, CardMedia,  Typography } from '@mui/material'


const Portadas = () => {
  return (
    <Box   
    sx={{
        sm:'4'
      }}

            borderBottom={0} > 
       
            <Box sx={{ justifyContent: 'center' }}>
            <Card >
                    <CardMedia 
                        component='img'
                        
                        image="/galeria/portada.png"
                 //       sx={{  xs:6 ,sm: 4, lg:12, p: 0, opacity: [0.9, 0.8, 0.7]}}
                        
                    />
       
 
      </Card>
       
     
        </Box> 
    </Box>
  )
}

export default Portadas