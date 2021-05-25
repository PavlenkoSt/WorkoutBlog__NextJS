import Image from 'next/image'
import Link from 'next/link'
import s from '../../styles/Program.module.scss'

export default function Program({ title, photo, id }){
    return (
        <Link href={`/programs/${id}`}>
            <a className={s.program}>
                <div>
                    <Image
                        width={600}
                        height={350}
                        src={photo}
                        alt='program'
                    />
                    <div className={s.title}>{title}</div>
                </div>
            </a>
        </Link>
    )
}