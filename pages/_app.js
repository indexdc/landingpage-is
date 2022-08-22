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
    <Script strategy="lazyOnload" id="Meta-Pixel">
      {`!function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1495444717580179');
      fbq('track', 'PageView');`}
    </Script>
    <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=1431457984030108&ev=PageView&noscript=1"
    /></noscript>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
