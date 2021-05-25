import Image from "next/image";
import MainLayout from "../components/layouts/MainLayout";

export default function Error(){
    return (
        <MainLayout title='404 Страница не найдена'>
            <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', padding: '30px 0'}}>
                <Image
                    width={500}
                    height={400}
                    alt='404 Страница не найдена'
                    src='/404.webp'
                />
            </div>
        </MainLayout>
    )
}