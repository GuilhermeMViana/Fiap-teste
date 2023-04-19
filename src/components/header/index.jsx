import fiapLogo from '../../../public/images/logo fiap.png'

import './index.css'

export function Header() {
    return (
        <header>
            <nav>
                <img src={fiapLogo} alt="Logo da instituição Fiap" />
                <div className='links'>
                    <a href="#course">O CURSO</a>
                    <a href="#resume">MATRIZ CURRICULAR</a>
                    <a href="#classes">TURMAS</a>
                </div>
                <div>
                    <button>INSCREVA-SE</button>
                </div>
                
            </nav>
        </header>
    )
}