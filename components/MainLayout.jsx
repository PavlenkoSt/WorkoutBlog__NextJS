import Head from "next/head";
import A from "./A";
import Image from 'next/image';

export default function MainLayout({ children, title }){
    return (
        <>
            <Head>
                <title>{title} | Workout Life</title>
                <meta name="description" content="best concentration of information about workout" />
                <meta name="keywords" content="workout,calisthenics,gym,sport,fithes,workout24" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <nav>
                   <A text='Главная' href='/' />
                   <A text='Статьи' href='/articles' />
                   <A text='Программы' href='/programs' />
                </nav>
                <Image
                    src='https://st2.depositphotos.com/2465171/7182/v/600/depositphotos_71822329-stock-illustration-different-sports-and-street-workout.jpg'
                    alt='Workout'
                    width={60}
                    height={60}
                    className='logo'
                />
            </header>
            <main>
                <div className='container'>
                    {children}
                </div>
            </main>
            <style jsx>
                {`
                    header{
                        width: 100%;
                        height: 60px;
                        background-color: #333333;
                        padding: 0 15px;
                        position: relative;
                        display: flex;
                        justify-content: space-between;
                        aling-items: center;
                        box-shadow: 0 2px 1px #333;
                    }

                    nav{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        gap: 20px;
                    }

                    .container{
                        padding: 0 15px;
                    }

                `}
            </style>
        </>
    )
}