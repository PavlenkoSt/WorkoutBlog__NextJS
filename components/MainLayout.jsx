import Head from "next/head";
import A from "./A";
import Image from 'next/image';
import Social from "./Social";

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
                <div className='container'>
                    <div className='flex'>
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
                    }

                    .subheader{
                        width: 100%;
                        height: 40px;
                        background-color: red;
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