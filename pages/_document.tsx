import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
            <link
              rel="stylesheet"
        //      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
           //     href="https://www.fontspace.com/montserrat-font-f16544"
                href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
           
          />
    
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}