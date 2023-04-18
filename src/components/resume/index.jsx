import './index.css'

export function Resume() {
    return(
        <section>
            <div className='introduction'>
                <h1>MATRIZ CURRICULAR</h1>
                <h2>2.000 HORAS/AULA</h2>
            </div>
            <div className='accordion'>
                <div>
                    <details>
                        <summary>1° ano - 2022</summary>
                        <p><span>COMPUTATIONAL THINKING & APPLICATION SERVER</span></p>
                        <p> 
                            Nessa disciplina você terá toda a base do desenvolvimento lógico para se iniciar como desenvolvedor web. Aprenderá criação de formulários em ambiente WEB, utilizando JS. Servidores de aplicação, servidores web e HTTP server. 
                        </p>
                    </details>
                </div>  
            </div>
            <div className='accordion'>
                    <details>
                            <summary>2° ano - 2022</summary>
                            <p><span>CYBER SECURITY DEVOPS</span></p>
                            <p>
                                Os dados de uma empresa valem muito, ainda mais na era do comércio eletrônico, e-commerces, transações bancárias online outros. De acordo com a Forbes, nos próximos anos, 92% das cargas de trabalho serão processadas por centros de dados na nuvem. A maioria dos CEOs e CIOs, no entanto, cita a segurança como um fator primário que impede a adoção total de um modelo de computação baseada na nuvem. Nessa disciplina você aprenderá a projetar, gerenciar e controlar todo o patrimônio da empresa que está ou poderá estar localizado na nuvem.
                            </p>
                    </details>
            </div>
        </section>
    )
}