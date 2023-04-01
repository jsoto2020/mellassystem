import { FC } from 'react'
import { Grid } from '@mui/material'
import { Iportadas } from '../../components/interfaces/imagen';
import { DocumentotCard } from './../../components/ui'

import { portfolio } from '../../database/imagenes'
import SystemLayout from '@/components/layouts/SystemLayout'



export const ProductList = () => {


   const products = portfolio
    
    
  return (
    <SystemLayout title='Portafolios' pageDescription={'Principal Pages'}>
    <Grid container spacing={4} sx={{ mt: 15 }}>
        
        {
            products.map( product => (
                <DocumentotCard 
                    key={ product.slug }
                    nombre={ product.nombre }
                    imagen={ product.imagenes }
                    slug={product.slug}
                />
            ))
        }
        
    </Grid>
    </SystemLayout>  
  )
}

export default ProductList;