import "./globals.css";
import Headers from "./headers";
import Script from 'next/script'
import "bootstrap-icons/font/bootstrap-icons.css";
import image from '../public/assets/images/background.jpg'

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" webcrx="true">
      <head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"></link>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></Script>
      </head>
      <body style={{backgroundImage: `url(${image.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', height: '100vh', overflow: 'hidden'}}> 
        <Headers />
        {children}
      </body>
    </html>
  );
}
