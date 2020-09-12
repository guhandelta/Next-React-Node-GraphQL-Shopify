import App from 'next/app'
import Head from 'next/head'
import { AppProvider } from '@shopify/polaris' //Entire app should be wrapped within AppProvider to be able to use the features from Polaris-
//- throughout the app
import '@shopify/polaris/dist/styles.css'
import translations from '@shopify/polaris/locales/en.json' //Mandatory to be used with Polaris, this is to make the Shopify app to be-
//- globally usable with language packs for regional customization

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <React.Fragment>
                <Head>
                    <title>Sample App</title>
                    <meta charSet="UTF-8" />
                </Head>
                <AppProvider il8n={translations}>
                    <Component {...pageProps} />
                </AppProvider>
            </React.Fragment>
        );
    }
}

export default MyApp;
