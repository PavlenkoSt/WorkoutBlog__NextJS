import MainArticle from '../components/MainArticle'
import MainLayout from '../components/layouts/MainLayout'
import LastMainBlock from '../components/LastMainBlock'
import s from '../styles/Home.module.scss'

export default function Home({ articles, programs }) {
  return (
    <MainLayout title='Главная'>
      <LastMainBlock articles={articles} programs={programs}/>
      <MainArticle/>
    </MainLayout>
  )
}

export async function getServerSideProps(context) {

    const responce = await fetch('http://localhost:3004/articles?_limit=5&_sort=id&_order=DESC')
    const articles = await responce.json()

    const responce2 = await fetch('http://localhost:3004/programs?_limit=5&_sort=id&_order=DESC')
    const programs = await responce2.json()
    return {
      props: {
        articles,
        programs
      }, 
    }
}