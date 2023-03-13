import { FC, useMemo, useState } from 'react';
import NextLink from 'next/link';
import { Grid, Card, CardActionArea, CardMedia, Box, Typography, Link, Chip } from '@mui/material'
import { imagen } from '../interfaces/imagen';


interface Props {
    product: imagen;
}

export const DocumentotCard: FC<Props> = ({ product }) => {

    const [isHovered, setIsHovered] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const { relacionados } = product
    console.log('relacionados: ',relacionados)
    const productImage = useMemo(() => {
      
        return isHovered
          ?  relacionados[1]
          :  relacionados[0] ;

    }, [isHovered, product])
      return (
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

      
      <Grid item 
            xs={2} sm={4} md={4}
        
    
            onMouseEnter={ () => setIsHovered(true) } 
            onMouseLeave={ () => setIsHovered(false) } 
      >
          <Card>
              <NextLink href={`/documentos/${ product.slug }`} passHref prefetch={ false }>
                <Link>

                    <CardActionArea>

                        <CardMedia 
                            component='img'
                            className='fadeIn'
                      //      image={ productImage }
                            alt={ product.nombre }
                            onLoad={ () => setIsImageLoaded(true) }
                          //  sx={{  width: 380 }}
                        />

                    </CardActionArea>
                </Link>
              </NextLink>
              
          </Card>

          <Box sx={{ mt: 1, display: isImageLoaded ? 'block' : 'none' }} className='fadeIn'>
              <Typography fontWeight={700}>{ product.nombre }</Typography>
              <Typography fontWeight={500}>{ `$${product.descripcion}` }</Typography>
          </Box>
      </Grid>
      </Grid>  
    )
}
