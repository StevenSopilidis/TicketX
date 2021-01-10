import 'bootstrap/dist/css/bootstrap.css'

// component refers to the Component(page) that will be rendered e.g index
// pageProps are the pros we are trying to use in that component
export default ({ Component, pageProps}) => {
    return <Component {...pageProps}/>
}