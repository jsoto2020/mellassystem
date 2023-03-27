
import { Box, Card,  CardContent, CardMedia,  Typography } from '@mui/material'
import { FC } from 'react'



interface Props {
   imagen: string
}

const Statica: FC<Props> = ({ imagen }) => {
  return (
    <Box   
      borderRight={0}
      borderBottom={0} > 
       
           
            <Card >
                    <CardMedia 
                        component='img'
                        image={ imagen }     
                  //      image="/galeria/portada.png"
                 //       sx={{  xs:6 ,sm: 4, lg:12, p: 0, opacity: [0.9, 0.8, 0.7]}}
                        
                    />
       
 
      </Card>
       
     
        
    </Box>
  )
}

export default Statica