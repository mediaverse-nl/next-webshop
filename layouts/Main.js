import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default ({ children, title = 'This is the default title' }) => (
    <div className="main-container">
        <Head>
            <title >{ title }</title>
        </Head>

        <style jsx global>{` 
            * {
             box-sizing: border-box;
            }
            *:before,
            *:after {
             box-sizing: border-box;
            }
            html,
            body {
             height: 100%;
             position: relative;
            }
            .main-container {
             padding-top:55px;
             min-height: 100vh; /* will cover the 100% of viewport */
             overflow: hidden;
             display: block;
             position: relative;
             padding-bottom: 200px; /* height of your footer */
            }
            .breadcrumb{
                background-color: #fff;
            }
        `}</style>

        <Header/>

        <main className="">
            { children }
        </main>

        <Footer />
    </div>
)