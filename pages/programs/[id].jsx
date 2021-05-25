import Image from "next/image"
import MainLayout from "../../components/layouts/MainLayout"
import s from '../../styles/ProgamPage.module.scss'

export default function ProgramId({ program }){
    if(!program.content){
        return (
            <MainLayout title='Ошибка'>
                <h2 className={s.header}>Программы по данному адресу не найдено!</h2>
                <div className={s.noProgImg}>
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

    return (
        <MainLayout title={program.title} >
            <h2 className={s.header}>{program.title}</h2>
            <div className={s.content}>
                <div className={s.startLine}>
                    <Image
                        src={program.photo}
                        width={600}
                        height={350}
                        alt='programImg'
                    />
                    <div className={s.startLineText}>{program.start}</div>
                </div>
                {/* <div className={s.blockContent}>
                    {blocks}
                </div> */}
            </div>
        </MainLayout>
    )
}

export async function getServerSideProps({ query }) {
    const responce = await fetch(`http://localhost:3004/programs/${query.id}`)
    const program = await responce.json()

    return {
      props: {
        program
      }, 
    }
}