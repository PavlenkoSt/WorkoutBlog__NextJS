import Head from "next/head";
import A from "../common/A";
import Image from 'next/image';
import Social from "../Social";
import Link from "next/link";

export default function MainLayout({ children, title }){
    return (
        <>
            <Head>
                <title>{title} | Workout Life</title>
                <meta name="description" content="best concentration of information about workout" />
                <meta name="keywords" content="workout,calisthenics,gym,sport,fithes,workout24" />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <div className='container'>
                    <div className='flex'>
                        <nav>
                            <A text='Главная' href='/' />
                            <A text='Статьи' href='/articles' />
                            <A text='Программы' href='/programs' />
                        </nav>
                        <Link href='/'>
                            <a className='logo-wrapper'>
                                <Image
                                    src='/logo.png'
                                    alt='Workout'
                                    width={90}
                                    height={60}
                                    className='logo'
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </header>
            <div className='subheader'>
                <div className='container'>
                    <Social/>
                </div>
            </div>
            <main>
                <div className='container'>
                    {children}
                </div>
            </main>
            <footer>    
                <div className='container'>
                    
                </div>
            </footer>
            <style jsx>
                {`
                    header{
                        width: 100%;
                        height: 60px;
                        background-color: #333333;
                        position: fixed;
                        top: 0;
                        left: 0;
                        box-shadow: 0 2px 1px #333;
                        z-index: 1000;
                    }

                    .logo-wrapper{
                        width: 90px;
                        height: 60px;
                        background-color: #fff;
                        overflow: hidden;
                    }

                    .subheader{
                        width: 100%;
                        height: 40px;
                        margin-top: 60px;
                    }

                    .flex{
                        display: flex;
                        justify-content: space-between;
                        aling-items: center;
                    }

                    nav{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        gap: 20px;
                    }

                    main{
                        min-height: calc(100vh - 120px);
                    }

                    .container{
                        padding: 0 15px;
                    }

                    footer{
                        width: 100%;
                        height: 60px;
                        background: url(https://workout.su/img/footer.png) center no-repeat;
                        background-size: cover;
                    }

                `}
            </style>
        </>
    )
}