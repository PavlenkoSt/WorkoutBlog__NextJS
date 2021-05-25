import Head from "next/head";
import A from "../common/A";
import Image from 'next/image';
import Social from "../Social";
import Link from "next/link";
import s from '../../styles/MainLayout.module.scss';
import {useRouter} from 'next/router'

export default function MainLayout({ children, title }){

    const router = useRouter()
    const pathName = router.pathname

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
            <header className={s.header}>
                <div className={s.flex}>
                    <nav className={s.nav}>
                        <A text='Главная' href='/' active={pathName === '/'} />
                        <A text='Статьи' href='/articles' active={pathName === '/articles'} />
                        <A text='Программы' href='/programs' active={pathName === '/programs'} />
                    </nav>
                    <Link href='/'>
                        <a className={s.logoWrapper}>
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
            </header>
            <div className={s.subheader}>
                <div className={s.container}>
                    <Social/>
                </div>
            </div>
            <main className={s.main}>
                <div className={s.container}>
                    {children}
                </div>
            </main>
            <footer className={s.footer}>    
                <div className={s.container}>
                    
                </div>
            </footer>
        </>
    )
}