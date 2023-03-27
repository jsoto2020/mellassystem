
import { NextPage,  GetStaticPaths, GetStaticProps } from 'next';


import { Box, Card, Grid, Typography } from '@mui/material';


import SystemLayout from '@/components/layouts/SystemLayout';
import { portfolio } from '../../database/'
import { documentoD } from '../../components/interfaces/documentoData';
import { imagen } from '@/components/interfaces/imagen';
import { DocumentoSlide } from '@/components/layouts/DocumentoSlide';
import Statica from '@/components/ui/Statica';



interface Props {
  product: imagen[]
}


const ProductPage:NextPage<Props> = ({ product }) => {

  
   const relacionados = product.map( rel =>{
    return rel.relacionados
  
  } )
 
  
 
 // console.log('data_rela: ',relacionados)
  
  

  return (
    <SystemLayout title={product[0].nombre  } pageDescription={ product[0].nombre }>
     <Box display='flex' flexDirection='column' sx={{ mt:15, xs: 8, sm: 4}} justifyContent='center'>

      {/* titulos */}
      <Typography variant='h1' component='h1' color="#00d87d">{ product[0].nombre }</Typography>


      </Box >
    <Grid container   spacing={2}  justifyContent='center' > 
 
        <Grid item  xs={12} md={8} >
           {
             product[0].rows != 10 ?
            <DocumentoSlide 
            images={ product }
          /> 
           :
           <Statica imagen={ product[0].estatica }/>
           }
          
        </Grid> 
      {/* Descripción */}
      <Box sx={{ mb:5 }}> 
 {/*    <Typography variant='subtitle2' color="#6161ff">Descripción:</Typography> */}
    <Typography variant='body2' color="#6161ff">{ product[0].descripcion }</Typography>
 </Box>  

    </Grid>

  </SystemLayout> 
)
}


// getStaticPaths....
// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  
  const documentoslug: string[] = portfolio.map( item => item.slug );

  
  
  return {
    paths: documentoslug.map( slug => ({
       
      params: { slug }
      
    })),
    // fallback: false
    fallback: 'blocking'
  }

}


// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { slug = '' } = params as { slug: string };
  const product = portfolio.filter(dato => {
    
    return dato.slug === slug;
  });
  
  if ( !product ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24
  }
}



export default ProductPage