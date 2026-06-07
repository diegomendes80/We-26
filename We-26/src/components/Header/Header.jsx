import './header.scss';
import { LogIn } from "lucide-react";

export function Header(){

    return (
        <header className="header">
            <button className="login-btn">
                <LogIn size={16} className='login-btn__icon'/>
                Entrar
            </button>
        </header>
    )
}