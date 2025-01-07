import Image from 'next/image'
import Head from 'next/head'

import Navbar from './Navbar'
import { Poppins } from 'next/font/google'

 
const rubik = Poppins({ weight: ["100","200","300","400","500","600","700","800","900"], subsets: ["latin"] })

export default function Layout({ children }) {
    return (
        <main className={rubik.className}>
            <Head>
                <title>Home Page</title>
                <meta name="description" content="This is the home page description." />
            </Head>
            <div className='stars-container'>   
                <Image src={`/stars.svg`} alt="Stars background" className="stars" fill/>
            </div>
            <Navbar />
            {children}
        </main>
  )
}