import Program from "../../components/common/Program"
import MainLayout from "../../components/layouts/MainLayout"
import s from '../../styles/Programs.module.scss'

export default function Programs({ programs }){

    const programsGenerate = programs.map(article => <Program 
        key={article.id}
        title={article.title} 
        photo={article.photo} 
        id={article.id} 
    />)

    return (
        <MainLayout title='Программы'>
            <h2 className={s.header}>Программы</h2>
            <div className={s.programsInner}>
                {programsGenerate}
            </div>
        </MainLayout>
    )
}

export async function getServerSideProps(context) {
    const responce = await fetch('http://localhost:3004/programs')
    const programs = await responce.json()
    return {
      props: {
        programs
      }, 
    }
}