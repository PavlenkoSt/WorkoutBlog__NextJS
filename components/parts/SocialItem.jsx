import Image from "next/image";
import Link from "next/link";
import s from '../../styles/SocialItem.module.scss'

export default function SocialItem({ iconPath, href, size }){
    return (
        <Link href={href}>
            <a className={s.link}>
                <Image
                    src={iconPath}
                    alt='social icon'
                    width={size}
                    height={size}
                />
            </a>
        </Link>
    )
}