import './index.css'

export function Resume() {
    return(
        <section>
            <div>
                <h1>MATRIZ CURRICULAR</h1>
                <h2>2.000 HORAS/AULA</h2>
            </div>
            <div className='accordion'>
                <details>
                        <summary>1° ano - 2022</summary>
                        <h3>COMPUTATIONAL THINKING & APPLICATION SERVER</h3>
                        <p> Nessa disciplina você terá toda a base do desenvolvimento lógico para se iniciar como desenvolvedor web. Aprenderá criação de formulários em ambiente WEB, utilizando JS. Servidores de aplicação, servidores web e HTTP server. </p>
                 </details>
            </div>
        </section>
    )
}