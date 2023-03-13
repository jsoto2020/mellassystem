
import NextLink from 'next/link';
import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material';
import { Router, useRouter } from 'next/router';


const Navbar = () => {
   const router = useRouter()
   
   const portafoilio = ()=>{
     
    router.push("/portafolio")


} 
  return (
    <AppBar  >
        <Toolbar>
            <NextLink href="/" passHref legacyBehavior >
               <Link>
                    <img src="/logo.png" width='200' height='220' />
                </Link>
            </NextLink>

            <Box flex={ 1 }/>
            <Box>
   
                    <Link 
                            fontSize={20} 
                            component="button"
                       
                            onClick={() => portafoilio()}
                            
                            
                            > Portafolio
                    </Link>

   
                <NextLink href="https://fulldetord.com" passHref legacyBehavior >
                    <Link 
                    sx={{ ml:3 }}              
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