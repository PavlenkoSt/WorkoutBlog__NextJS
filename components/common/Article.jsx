import Image from "next/image";
import Link from "next/link";
import s from '../../styles/Article.module.scss'

export default function Article({ title, date, photo, id, likes }){
    return (
        <Link href={`/articles/${id}`}>
            <a className={s.article}>
                <Image
                    width={600}
                    height={350}
                    src={photo}
                    alt='article'
                />
                    <div className={s.title}>{title}</div>
                <div className={s.desc}>
                    <div className={s.date}>{date}</div>
                    <div className={s.likes}>
                        <Image
                            src='/icons/like.svg'
                            width={20}
                            height={20}
                            alt='likes'
                        />  
                        <span className={s.count}>{likes}</span>
                    </div>
                </div>
            </a>
        </Link>
    )
}