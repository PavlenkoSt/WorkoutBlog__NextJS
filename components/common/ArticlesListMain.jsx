import Image from "next/image";
import Link from "next/link";
import s from '../../styles/ArticlesListMain.module.scss'

export default function ArticlesListMain({ title, photo, id, date}){
    return (
        <Link href={`/articles/${id}`}>
            <a className={s.item}>
                <Image
                    src={photo}
                    width={150}
                    height={90}
                    alt='article'
                />
                <div className={s.info}>
                    <span className={s.title}>{title}</span>
                    <span className={s.date}>{date}</span>
                </div>
            </a>
        </Link>
    )
}