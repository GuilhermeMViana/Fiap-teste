import fiapLogo from '../../../public/images/logo fiap.png'

import './index.css'
export function Header(carrerLink) {
    return (
        <header>
            <nav>
                <img src={fiapLogo} alt="Logo da instituição Fiap" />
                <div className='links'>
                    <a href="#carrer">O CURSO</a>
                    <a href="#">MATRIZ CURRICULAR</a>
                    <a href="#">TURMAS</a>
                </div>
                <button>INSCREVA-SE</button>
            </nav>
        </header>
    )
}