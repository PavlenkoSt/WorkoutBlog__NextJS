import s from '../styles/LastMainBlock.module.scss'
import ArticlesListMain from './common/ArticlesListMain'
import ProgramsListMain from './common/ProgramsListMain'


export default function LastMainBlock({ articles, programs }){

    const articlesList = articles.map(article => <ArticlesListMain 
        key={article.id}
        id={article.id} 
        title={article.title}
        photo={article.photo}
        date={article.date}
    />)

    const programsList = programs.map(program => <ProgramsListMain 
        key={program.id}
        id={program.id} 
        title={program.title}
        photo={program.photo}
    />)

    return (
        <div className={s.last}>
            <div className={s.articles}> 
                <h3 className={s.title}>Последние статьи</h3>
                <div>
                    {articlesList}
                </div>
            </div>
            <div className={s.programs}> 
                <h3 className={s.title}>Последние программы</h3>
                <div>
                    {programsList}
                </div>
            </div>
        </div>
    )
}




