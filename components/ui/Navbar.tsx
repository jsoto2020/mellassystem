
import NextLink from 'next/link';
import { AppBar, Box,  Link, Toolbar, Typography } from '@mui/material';
import {  useRouter } from 'next/router';


const Navbar = () => {
   const router = useRouter()
   
   const portafoilio = ()=>{
     
    router.push("/portafolio")


} 
  return (
    <AppBar  >
        <Toolbar>
            <Box sx={{ mr: 5 }} >
            <NextLink href="/" passHref legacyBehavior >
               <Link>
                    <img src="/logo.png" width='200' height='220' />
                </Link>
            </NextLink>
            </Box>
            <Box flex={ 1 }/>
            <Box>
            <NextLink href="/" passHref legacyBehavior >
               <Link
                       sx={{ mr:3 }}
                       fontSize={20} 
                       component="button"
               
               >Home
                    
                </Link>
            </NextLink>
   
                    <Link 
                            sx={{ mr:3 }}
                            fontSize={20} 
                            component="button"
                       
                            onClick={() => portafoilio()}
                            
                            
                            > Portafolio
                    </Link>

   
                <NextLink href="https://fulldetord.com" passHref legacyBehavior >
                    <Link 
                                  
                    fontSize={20}
                    component="button"
                    >Tienda
                    </Link>

                </NextLink>
          {/*       <NextLink href="/ilustraciones" passHref legacyBehavior>
                    <Link 
                        component="button"
                        sx={{ ml:3 }}
                        fontSize={20}
                    >Ilustraciones
                    </Link>

                </NextLink>
 */}            </Box>
            <Box flex={ 1 }/>
        </Toolbar>

    </AppBar>
  )
}

export default Navbar