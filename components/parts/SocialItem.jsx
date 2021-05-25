import Image from "next/image";
import Link from "next/link";
import s from '../../styles/SocialItem.module.scss'

export default function SocialItem({ iconPath, href }){
    return (
        <Link href={href}>
            <a className={s.link}>
                <Image
                    src={iconPath}
                    alt='social icon'
                    width={35}
                    height={35}
                />
            </a>
        </Link>
    )
}