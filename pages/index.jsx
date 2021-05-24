import MainArticle from '../components/MainArticle'
import MainLayout from '../components/MainLayout'
import s from '../styles/Home.module.scss'

export default function Home() {
  return (
    <MainLayout title='Главная'>
      <MainArticle/>
    </MainLayout>
  )
}
