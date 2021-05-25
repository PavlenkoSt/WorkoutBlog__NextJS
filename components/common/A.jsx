import Link from 'next/link'
import s from '../../styles/A.module.scss'

export default function A({ href, text, active }){
    return (
        <Link href={href}>
            <a className={s.link} style={active ? {backgroundColor: '#20c9ff66'} : {}}>{text}</a>
        </Link>
    )
}