import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import chakraTheme from '../theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="stylesheet" href="/styles/fonts.css" />
          <link rel="stylesheet" href="/styles/style.css" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="stylesheet" type="text/css" href="/styles/nProgress.css" />
          <link href="./images/favicon.ico" rel="icon" />
          <script
            dangerouslySetInnerHTML={{
              __html: `function F(a){document.documentElement.classList.add(a)}var A=new Image;A.src="data:image/avif;base64,AAAAFGZ0eXBhdmlmAAAAAG1pZjEAAACgbWV0YQAAAAAAAAAOcGl0bQAAAAAAAQAAAB5pbG9jAAAAAEQAAAEAAQAAAAEAAAC8AAAAGwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAARWlwcnAAAAAoaXBjbwAAABRpc3BlAAAAAAAAAAQAAAAEAAAADGF2MUOBAAAAAAAAFWlwbWEAAAAAAAAAAQABAgECAAAAI21kYXQSAAoIP8R8hAQ0BUAyDWeeUy0JG+QAACANEkA=",A.onload=function(){F("avif")},A.onerror=function(){var a=new Image;a.src="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",a.onload=function(){F("webp")}};`,
            }}
          />
          <meta
            name="adopt-website-id"
            content="78ef1068-840c-4ada-af0d-2d7f81f20890"
          />
          <script
            src="//tag.goadopt.io/injector.js?website_code=78ef1068-840c-4ada-af0d-2d7f81f20890"
            className="adopt-injector"
          ></script>
          <script>window.adoptHideAfterConsent=true;</script>
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={chakraTheme.config.initialColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
