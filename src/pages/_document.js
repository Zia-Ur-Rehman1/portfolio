import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-US'>
        <Head>
          <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`} />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="Zia Ur Rehman - Software Engineer" />
          <meta name="description" content="Software Engineer with 3+ years of experience building scalable web applications using Ruby on Rails, React,
          and modern cloud architectures. Expertise in RESTful API design, MVC architecture, relational database
          optimization (PostgreSQL, MySQL), and Agile workflows. Proven track record in refactoring legacy systems,
          performance tuning, and implementing serverless solutions (AWS Lambda). Enhanced system efficiency by 33%
          through query optimization and metaprogramming, while driving team productivity by 70% via CI/CD pipelines
          and automated workflows." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
