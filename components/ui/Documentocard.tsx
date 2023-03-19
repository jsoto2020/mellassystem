import { FC,  useState } from 'react';
import NextLink from 'next/link';
import { Grid, Card, CardActionArea, CardMedia, Box, Typography, Link } from '@mui/material'
import { imagen } from '../interfaces/imagen';


interface Props {
    
    imagen: string;
    nombre: string;
    slug: string
}

export const DocumentotCard: FC<Props> = ( { imagen,nombre,slug } ) => {

    
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    
      return (
 //     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

      
      <Grid item 
            xs={6} sm={4}         
      >
          <Card>
              <NextLink href={`/documentos/${ slug }`} passHref prefetch={ false }>
                <Link>

                    <CardActionArea>

                        <CardMedia 
                            component='img'
                         //   className='fadeIn'
                            image={imagen }
                            alt={ nombre }
                            onLoad={ () => setIsImageLoaded(true) }
                          //  sx={{  width: 380 }}
                        />

                    </CardActionArea>
                </Link>
              </NextLink>
              
          </Card>

          <Box sx={{ mt: 1, display: isImageLoaded ? 'block' : 'none' }} className='fadeIn'>
              <Typography fontWeight={700} color="#6263ff" >{ nombre }</Typography>
        
          </Box>
      </Grid>
//      </Grid>  
    )
}

