import { Html, Head, Main, NextScript } from 'next/document'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export async function getStaticProps(context) {
  const { locale } = context
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  }
}
