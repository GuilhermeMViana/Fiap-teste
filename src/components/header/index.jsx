import { useEffect, useState } from "react";
import fiapLogo from "../../../public/images/logo fiap.png";

import "./index.css";
import { List, X } from "phosphor-react";

export function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (window) {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
  }, []);

  return (
    <header>
      {!isMobile ? (
        <nav>
          <img src={fiapLogo} alt="Logo da instituição Fiap" />
          <div className="links">
            <a href="#course">O CURSO</a>
            <a href="#resume">MATRIZ CURRICULAR</a>
            <a href="#classes">TURMAS</a>
          </div>
          <div className="navBarButton">
            <button>INSCREVA-SE</button>
          </div>
        </nav>
      ) : (
        <div className="header-mobile">
          <img src={fiapLogo} alt="Logo da instituição Fiap" height="40px" />
          <span onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X size={32} weight="light" />
            ) : (
              <List size={32} weight="fill" />
            )}
          </span>

            {isMenuOpen && (
                <div className="nav-mobile">
                    <a href="#course">O CURSO</a>
                    <a href="#resume">MATRIZ CURRICULAR</a>
                    <a href="#classes">TURMAS</a>
                </div>
            )}
        </div>
      )}
    </header>
  );
}