import Image from 'next/image'
import Link from 'next/link'
import s from '../../styles/LastListMain.module.scss'

export default function ProgramsListMain({id, title, photo}){
    return (
        <Link href={`/programs/${id}`}>
            <a className={s.item}>
                <Image
                    src={photo}
                    width={150}
                    height={90}
                    alt='program'
                />
                <div className={s.info}>
                    <span className={s.title}>{title}</span>
                </div>
            </a>
        </Link>
    )
}