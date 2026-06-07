import { useRef } from 'react';
import './albumSearch.scss';
import { Search } from 'lucide-react';

export function AlbumSearch(){

    const inputRef = useRef()

    return(
        <div className="album-search">
            <Search size={16} className='search-icon'/>
            <input ref={inputRef} type="text" className="search-input" placeholder='Buscar...'/>
            
        </div>
    )
}