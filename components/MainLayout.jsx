import Head from "next/head";

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
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}