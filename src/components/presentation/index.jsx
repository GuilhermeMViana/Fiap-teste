import './index.css'
import {CaretDown} from 'phosphor-react'
export function Presentation() {
    return(
        <section className='content'>
                <h1>SISTEMAS PARA INTERNET</h1>
                <p>FULL STACK, E-COMMERCE  & DIGITAL TRANSFORMATION</p>
                <button>INSCREVA-SE</button>

                <p className='scroolDown'>Scroll down</p>
                <CaretDown size={30} className='icon' />
        </section>
    )
}