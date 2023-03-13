import { GetStaticProps } from 'next'
import NextLink from 'next/link'
import { useRouter } from 'next/router';
import {  Grid, IconButton, ImageListItemBar, Link} from '@mui/material'

import { FC } from 'react';
import { imagen } from '../../components/interfaces/imagen';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import InfoIcon from '@mui/icons-material/Info';
import SystemLayout from '@/components/layouts/SystemLayout';

import { portfolio } from '../../database/'

interface Props {
    imagenes: imagen[]

}
const Imagelist: FC<Props>  = ({ imagenes}) => {
    const router = useRouter()
   

    const onClick = ( item: any ) => {
        router.push(`/documentos/${ item.slug }`);
    }

  return (
    <SystemLayout title={'Portafolio'} pageDescription={'Compendio de trabajos realizados'} >


<Grid   container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 8, md: 12, lg:12 }} sx={{ mt:50 }}>
      <Grid item xs={8} sm={8} md={12} lg={12} sx={{ mt:15 }}>
        <ImageList
        //    sx={{ width: 1/1 }}
            variant="quilted"
            cols={3}
        //    rowHeight={470}
            >
     
          {portfolio.map((item) => (
          <ImageListItem key={item.slug} cols={item.cols || 1} rows={item.rows || 1} sx={{ ml: 4,mb: 2 }}>
            
                <img
                    {...srcset(item.imagenes, 121, item.rows, item.cols)}
                    alt={item.descripcion}
                    loading="lazy"
                />
           
            
    
            <ImageListItemBar
                title={item.descripcion}
                subtitle={item.nombre}
                actionIcon={
                <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.descripcion}`}
                    onClick={()=>onClick(item)}
                >
                    <InfoIcon />
                </IconButton>
                }
            />
            
            </ImageListItem>
            
        ))}
  
    </ImageList>
      
 </Grid>
 </Grid>
    
  {/*   <Grid container spacing={4}>
         {
            portfolio.map( imagen => (
                 
                <Imagecard
                    key={ imagen.slug }
                    imagen={ imagen}
                />
            ))
        }
    </Grid> */}
    </SystemLayout>  
  )
}

function srcset(image: string, size: number, rows = 1, cols = 1) {
    
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  } 

  // You should use getStaticProps when:
  //- The data required to render the page is available at build time ahead of a user’s request.
  //- The data comes from a headless CMS.
  //- The data can be publicly cached (not user-specific).
  //- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
  
  /* 
  export const getStaticProps: GetStaticProps = async (ctx) => {
   // const { data } = await  // your fetch function here 
   //  console.log('estatica: ',portfolio)
   
    const imagenesProps: imagen[] =   portfolio.map((item,i) => ({
       ...item,
       id: i + 1
    
    }))

    return {
        props: {
            imagenes: imagenesProps
        }
    }
  } */
export default Imagelist