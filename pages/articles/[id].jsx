import Image from "next/image";
import ArticleBlock from "../../components/common/ArticleBlock";
import MainLayout from "../../components/layouts/MainLayout";
import s from '../../styles/ArticlePage.module.scss'

export default function ArticleId({article}){
    if(!article.content){
        return (
            <MainLayout title='Ошибка' >
                <div className={s.headerLine}>
                    <h2 className={s.header}>Статьи по данному адресу не найдено!</h2>
                </div>
                <div className={s.noArtImg}>
                    <Image
                        width={500}
                        height={400}
                        alt='404 Страница не найдена'
                        src='/404.webp'
                    />
                </div>
            </MainLayout>
        )
    }

    const blocks = article.content.blocks.map(block => <ArticleBlock 
        key={block.id}
        header={block.header}
        text={block.text}
    />)
    
    return (
        <MainLayout title={article.title}>
            <div className={s.headerLine}>
                <h2 className={s.header}>{article.title}</h2>
                <div className={s.date}>{article.date}</div>
            </div>
            <div className={s.content}>
                <div className={s.startLine}>
                    <Image
                        src={article.photo}
                        width={600}
                        height={350}
                        alt='articleImg'
                    />
                    <div className={s.startLineText}>{article.content.start}</div>
                </div>
                <div className={s.blockContent}>
                    {blocks}
                </div>
                <div className={s.likes}>
                    <Image
                        src='/icons/like.svg'
                        width={20}
                        height={20}
                        alt='like'
                    />
                    <span className={s.count}>{article.likes}</span>
                </div>
            </div>
        </MainLayout>
    )
}

export async function getServerSideProps({ query }) {
    const responce = await fetch(`http://localhost:3004/articles/${query.id}`)
    let article = await responce.json()

    return {
      props: {
        article
      }, 
    }
}