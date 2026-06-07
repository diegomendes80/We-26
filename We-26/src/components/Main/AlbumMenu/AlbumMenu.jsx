import { useState } from 'react';
import './albumMenu.scss';
import { Sparkles } from 'lucide-react';
import { Users } from 'lucide-react';
import { AlbumSearch } from '../Album/AlbumSearch/AlbumSearch';

export function AlbumMenu(){

    const [tab, setTab] = useState("especiais");

    return (
        <div className="album__menu">
            <div className="tab-group">
                <button className={`tab-btn ${tab === "especiais" ? "especiais-active" : ""}`}
                    onClick={() => setTab("especiais")}>

                        <Sparkles size={16}/>
                        Cartas Especiais
                </button>

                <button className={`tab-btn ${tab === "selecoes" ? "selecoes-active" : ""}`}
                    onClick={() => setTab("selecoes")}>

                        <Users size={16}/>
                        Seleções
                </button>
            </div>

            <AlbumSearch></AlbumSearch>
        </div>
    )
}