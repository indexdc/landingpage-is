import '../styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Script strategy="lazyOnload" id="Analytics" src={`https://www.googletagmanager.com/gtag/js?id=UA-235363606-1`} />
    <Script strategy="lazyOnload" id="JivoChat" src={`//code.jivosite.com/widget/0eylLUOEWX`} />
    <Script strategy="lazyOnload" id="Analytics-1">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-235363606-1', {
            page_path: window.location.pathname,
            });
        `}
    </Script>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
