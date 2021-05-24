import s from '../styles/Social.module.scss'
import Image from 'next/image'

export default function Social(){
    return (
        <div>
            <Image
                alt='youtube'
                width={60}
                height={60}
                src={'/public/icons/youtube.png'}
            />
        </div>
    )
}