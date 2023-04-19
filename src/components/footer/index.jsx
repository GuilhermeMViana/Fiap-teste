import './index.css'

export function Classes() {
    return (
        <footer id='classes'>
            <div>
                <h1>TURMAS 2022</h1>
            </div>
            <div className='redLine'><span>-</span></div>
            <div>
                <table>
                    <tr>
                        <th>campus</th>
                        <th>Duração</th>
                        <th>Dias</th>
                        <th>Horário</th>
                        <th>mensalidade</th>
                    </tr>
                    <tr>
                        <td className="campus">ACLIMAÇÃO</td>
                        <td>2 anos (2.000 horas)</td>
                        <td>3 dias por semana com aulas presenciais + 2 dias por semana aulas remotas ao vivo + Nano Courses</td>
                        <td>Matutino Das 07h40 às 12h</td>
                        <td>R$ 990,00* </td>
                    </tr>
                    <tr>
                        <td className="campus">VILA OLÍMPIA</td>
                        <td>2 anos (2.000 horas)</td>
                        <td>3 dias por semana com aulas presenciais + 2 dias por semana aulas remotas ao vivo + Nano Courses</td>
                        <td>Noturno Das 19h às 23h15</td>
                        <td>R$ 1.295,00* </td>
                    </tr>
                </table>
                <div className='obs'>* VALOR PARA 2022 NO PLANO ESTENDIDO.</div>
            </div>
            <button>INSCREVA-SE</button>
        </footer>
    )
}