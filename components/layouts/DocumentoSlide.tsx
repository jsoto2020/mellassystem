
import {  Box, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { Slide } from 'react-slideshow-image';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import 'react-slideshow-image/dist/styles.css';
import { imagen } from '../interfaces/imagen';
import styles  from './DocumentoSlideShow.module.css';

interface Props {
    images: imagen[]
}

export const DocumentoSlide: FC<Props> = ({ images }) => {
    const data = images


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

  return (
    
                <Slide
                    easing="ease"
                    duration={ 6000 }
                    indicators
                    
                >
          {
            data[0].relacionados.map( image =>  {
                
                const url = `${ image.rimg }`;
                
                return (
                  
                         <div className={ styles['each-slide'] } key={ image.rimg } >
             
                            <div style={{
                                backgroundImage: `url(${ url })`,
                                backgroundSize: 'cover'
                                
                                }}>
                             </div>
                              <Typography color="#6161ff" sx={{ mt: 3}} fontWeight={600} >{ image.descripcion }</Typography> 
                          </div> 
                 
                      
                    
                          )

            })
        }

                
                </Slide>

    
  )
}
