
import { Box, Card,  CardContent, CardMedia,  Typography } from '@mui/material'


const Contenido = () => {
  return (
    <Box   
    sx={{
        sm:'4'
      }}

            borderBottom={0} > 
         <Box >
            <Card sx={{  justifyItems: 'left' }} >
            
                            <CardMedia 
                                component='img'
                                
                                image="/principal/logo.gif"
               //                 sx={{ xs:6 ,sm: 4,lg:12, width: 1/1, p: 0, opacity: [0.9, 0.8, 0.7]}}
                                
                            />
            
               </Card>
            </Box>
            <Box sx={{ justifyContent: 'center' }}>
            <Card sx={{ mt: 10 }}>
                <CardContent>
                    <Typography sx={{ ml: 65}} variant="h1" color="#00d87d" fontWeight={700}>Servicios</Typography>                
                    
                </CardContent>
                    <CardMedia 
                        component='img'
                        
                        image="/principal/servicios.png"
                 //       sx={{  xs:6 ,sm: 4, lg:12, p: 0, opacity: [0.9, 0.8, 0.7]}}
                        
                    />
       
 
      </Card>
           <Card sx={{ mt: 8, diplay: 'flex' }}>
               <Box sx={{ display: 'flex', flexDirection: 'row' }}>

               
                    <CardMedia 
                        component='img'
                        
                        image="/principal/fulldetord.gif"
                //        sx={{ xs:6 ,sm: 4, p: 0, opacity: [0.9, 0.8, 0.7]}}
                        
                    />
                    <CardContent>
                    <Typography sx={{ ml: 2, align: 'left' }} variant="h1" color="#00d87d" fontWeight={700}>Proyecto de la marca: Fulldeto</Typography>                
                    
                    <Typography sx={{ ml: 3,mt: 2, align: 'center' }} variant="h5" color="#6161ff">Esta es una marca de StreetWear, 
                                es   dinamica,   informal,   divertida,  
                                tiene el objetivo de alegrar tu closet con coloridos gráficos que
                                abrazan nuestra cultura Dominicana, visita nuestra tienda online.
                    </Typography>
                    </CardContent>
              </Box>
 
      </Card>

      <Card sx={{ mt:8 }}>
            <CardContent>
               <Typography sx={{ ml: 65}} variant="h1" color="#00d87d" fontWeight={700}>Aptitudes</Typography>                
                  
            </CardContent>
        
                <CardMedia 
                    component='img'
            
        
                    image="/principal/aptitudes.png"
               //     sx={{  xs:6 ,sm: 4,lg:12, p: 0, opacity: [0.9, 0.8, 0.7]}}
          
                />
       
 
      </Card>
      <Card sx={{ mt: 8 }}>
          <CardContent>
               <Typography sx={{ ml: 65}} variant="h1" color="#00d87d" fontWeight={700}>S k i l l s</Typography>                
                  
          </CardContent>

                <CardMedia 
                    component='img'
                    image="/principal/habilidades.png"
             //       sx={{ xs:6 ,sm: 4,lg:12, p: 0, opacity: [0.9, 0.8, 0.7]}}
                />
       
 
      </Card>
      <Card sx={{ mt:8 }}>
        
          <CardContent>
               <Typography sx={{ ml: 65}} variant="h1" color="#00d87d" fontWeight={700}>Educacion</Typography>                
                  
          </CardContent>
              
       
              
                  <CardMedia 
                      component='img'
                      
          
                      image="/principal/branding.png"
               //       sx={{  xs:6 ,sm: 4, lg:12, p: 0, opacity: [0.9, 0.8, 0.7]}}
                  
                  />
       

        </Card>
        </Box> 
    </Box>
  )
}

export default Contenido