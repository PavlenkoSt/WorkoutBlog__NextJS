import { useEffect, useState } from "react";
import Article from "../../components/common/Article";
import MainLayout from "../../components/layouts/MainLayout";
import s from '../../styles/Articles.module.scss'

export default function Articles({articles}){

    const aticlesGenerate = articles.map(article => <Article 
        key={article.id}
        title={article.title} 
        date={article.date} 
        photo={article.photo} 
        likes={article.likes}
        id={article.id} 
    />)

    return (
        <MainLayout title='Статьи'>
            <h2 className={s.header}>Статьи</h2>
            <div className={s.articlesInner}>
                {aticlesGenerate}
            </div>
            
        </MainLayout>
    )
}

export async function getServerSideProps(context) {
    const responce = await fetch('http://localhost:3004/articles')
    const articles = await responce.json()

    return {
      props: {
        articles
      }, 
    }
  }