import App from 'next/app'
import Head from 'next/head'
import { AppProvider } from '@shopify/polaris' //Entire app should be wrapped within AppProvider to be able to use the features from Polaris-
//- throughout the app
import { Provider } from '@shopify/app-bridge-react'
import '@shopify/polaris/dist/styles.css'
import translations from '@shopify/polaris/locales/en.json' //Mandatory to be used with Polaris, this is to make the Shopify app to be-
//- globally usable with language packs for regional customization
import Cookies from 'js-cookie' // Req as the entire shopOrigin is passed over a cookie

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        const config = { apiKey: API_KEY, shopOrigin: Cookies.get('shopOrigin'), forceRedirect: true };

        return (
            <React.Fragment>
                <Head>
                    <title>Sample App</title>
                    <meta charSet="UTF-8" />
                </Head>
                <Provider config={config}>
                    <AppProvider il8n={translations}>
                        <Component {...pageProps} />
                    </AppProvider>
                </Provider>
            </React.Fragment>
        );
    }
}

export default MyApp;
