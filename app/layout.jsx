import '@styles/globals.css'
import Nav from '@components/Nav';
import Provider from '@components/Provider';



// layout.jsx file is great for when you're using these things across all pages; so, a NAV BAR is perfect for this.
export const metadata = {
    title : "MyApp",
    description : "Get Karina's site going."
}

const RootLayout = ({children}) => {
return (
    <html Lang = "en">
        <body>
            <div className = "main">
                <div className='gradient'/>
            </div>

            <main className = "app">
                <Nav/>
                {children}
            </main>
        </body>
    </html>
)
}

export default RootLayout;