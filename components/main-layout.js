import Head from "next/head";
import Link from 'next/link';

export function MainLayout({ children, title='Next' }) {
    return(
        <>
            <Head>
            <title>{title}|Next</title>
            </Head>
        <nav>
            <h1>Navigation</h1>
            <Link href={'/'}><a>Home</a></Link>
            <Link href={'/about'}><a>About</a></Link>
            <Link href={'/posts'}><a>Posts</a></Link>
        </nav>
        <main>
            {children}
        </main>
        <style jsx>{`
                    nav{
                        position:fixed;
                        height:60px;
                        left:0;
                        right:0;
                        top:0;
                        color:white;
                        background:black;
                        display:flex;
                        justify-content:space-around;
                        align-items:center;
                        
           
                       }
                       nav a{
                        color:white;
                        text-decoration:none;
                       }
                       main{
                           margin-top:60px;
                           padding:1rem;
                       }
                       `
        }
        </style>
        </>

    )
}