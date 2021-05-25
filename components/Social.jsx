import s from '../styles/Social.module.scss'
import SocialItem from './parts/SocialItem'

export default function Social(){
    return (
        <div className={s.wrapper}>
            <SocialItem iconPath='/icons/youtube.svg' href='https://youtube.com' size={35} />
            <SocialItem iconPath='/icons/facebook.svg' href='https://facebook.com' size={35} />
            <SocialItem iconPath='/icons/instagram.svg' href='https://instagram.com' size={35} />
            <SocialItem iconPath='/icons/telegram.svg' href='https://telegram.com' size={35} />
            <SocialItem iconPath='/icons/twitter.svg' href='https://twitter.com' size={35} />
            <SocialItem iconPath='/icons/vk.svg' href='https://vk.com' size={35} />
        </div>
    )
}