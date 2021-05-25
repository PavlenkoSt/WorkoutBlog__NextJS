import s from '../../styles/ArticleBlock.module.scss'

export default function ArticleBlock({ header, text }){
    return (
        <>
            <h3 className={s.header}>{header}</h3>
            <div>
                { text.map((p, i) => <p className={s.p} key={i}>{p}</p>)}
            </div>
        </>
    )
}