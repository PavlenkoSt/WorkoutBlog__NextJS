import s from '../../styles/ProgramBlock.module.scss'

export default function ProgramBlock({header, list}){
    return (
        <>
            <h3 className={s.header}>{header}</h3>
            {list.length ? ( 
                <ol className={s.list}>
                    {list.map((listItem, i) => <li key={i}>{listItem}</li>)}
                </ol>
            ) : ''}
        </>
    )
}