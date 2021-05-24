import Image from 'next/image'
import s from '../styles/MainArticle.module.scss'

export default function MainArticle(){
    return (
        <>
            <h2 className={s.header}>5 ПРИЧИН, ПОЧЕМУ БУДУЩЕЕ НЕ ЗА ФИТНЕСОМ, А ЗА ВОРКАУТОМ</h2>
            <div className={s.content}>
                <div className={s.head}>
                    <Image
                        src={'https://ss.sport-express.ru/userfiles/materials/127/1274939/large.jpg'}
                        alt='workout'
                        width={600}
                        height={350}
                        className={s.img}
                    />
                    <div className={s.headText}>
                        <p>
                            В целом уличные активности – это не новшество, любители здорового образа жизни выходили во двор размяться задолго до того, как воркаут стал популярным спортивным движением по всему миру. Его базовые упражнения: подтягивания на перекладине или отжимания от пола выполнял любой из нас на уроке физкультуры.
                        </p>
                        <p>
                            Сегодня воркаут – это уже не просто молодой и развивающийся вид спорта, это целое движение, главная ценность которого – гармоничное физическое развитие. И все чаще на уличных тренажерах можно встретить молодых и подтянутых людей в стильной спортивной экипировке.
                        </p>
                    </div>
                </div>
                <div className={s.block}>
                    <h3 className={s.title}>Отсутствие затрат</h3>
                    <p className={s.text}>Причем это отнюдь не означает, что вы не вкладываетесь в свое физическое совершенствование. Вы едва ли потратите ползарплаты на занятия воркаутом. Все, что вам понадобится, это удобная спортивная одежда и кроссовки. Никаких абонементов и любых других финансовых вложений. Вышли на улицу в спортивной форме – готовы к тренировке!</p>
                </div>
                <div className={s.block}>
                    <h3 className={s.title}>Красивое тело</h3>
                    <p className={s.text}>Уличные тренировки при всей своей простоте довольно разнообразны – у опытных любителей арсенал упражнений довольно велик. К тому же, они подбираются таким образом, чтобы гармонично развивать все тело. Это миф, что у любителей уличных тренировок ноги отстают от рук – при регулярном выполнении комплекса упражнений увеличиваются силовые показатели, а в сочетании с правильным питанием можно добиться рельефа не хуже, чем в спортзале.</p>
                </div>
                <div className={s.block}>
                    <h3 className={s.title}>Здоровый образ жизни</h3>
                    <p className={s.text}>Отсутствие дополнительных отягощений поможет избежать ненужных травм и не перенапрягаться. В сочетании со здоровым питанием занятия на улице не только помогут сделать тело привлекательнее, но и скажутся положительным образом на самочувствии. А главное – вы станете больше времени проводить на свежем воздухе!</p>
                    <p className={s.text}>Конечно, воркаут не включен в Олимпийскую программу и пока не признан официально видом спорта, но так или иначе им является: по воркауту даже проводятся соревнования! А значит, занимаясь на улице, вы можете ставить перед собой цели и добиваться их. Хотите – будете бороться за звание чемпиона двора, а хотите – дорастете до претендента на звание чемпиона мира!</p>
                </div>
                <div className={s.block}>
                    <h3 className={s.title}>Компания единомышленников</h3>
                    <p className={s.text}>Воркаут в России сегодня – это целое движение, тысячи людей, которые стремятся развивать свое тело и выходят на улицы, чтобы тренироваться и вдохновлять друг друга своими результатами. В этом году в десяти российских городах вновь пройдет масштабный проект "Datsun Пикник", который в этом году также объединяет любителей уличных тренировок. Его задача – показать, что начать менять свою жизнь к лучшему можно в любой момент и в любом возрасте. Серия "пикников" стартовала 17 июня в Нижнем Новгороде, а дальше большой праздник воркаута прокатится по маршруту Екатеринбург – Ижевск – Набережные Челны – Уфа – Оренбург – Самара – Волгоград – Ростов-на-Дону и завершится в Краснодаре 20 августа.</p>
                </div>
                <div className={s.block}>
                    <h3 className={s.title}>Жизненная философия</h3>
                    <p className={s.text}>Директор Datsun в России Дмитрий Бусуркин подчеркнул, что воркаут из спортивной дисциплины превратился в философию, которая двигает человека вперед:</p>
                    <p className={s.text}>– Уличная атлетика – это не просто спортивная дисциплина, а скорее жизненная философия многостороннего развития личности, частью которого являются уличные тренировки. Главная ее идея – использовать обычные, всем доступные дворовые спортплощадки и оборудование, чтобы сначала обрести уверенность и силу, и уже с их помощью изменить свою жизнь и жизнь тех, кто рядом. Мы планируем плотно сотрудничать с ведущими атлетами, спортивными изданиями и региональными властями для дальнейшей популяризации воркаута и физической культуры в целом – поощрять тех, кто уже занимается, и привлекать в движение больше новых участников.</p>
                </div>
            </div>
        </>
    )
}