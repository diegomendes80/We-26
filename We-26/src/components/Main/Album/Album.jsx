import { AlbumMenu } from '../AlbumMenu/AlbumMenu';
import {CardSection} from '../CardSection/CardSection';
import { useState } from 'react';
import './album.scss';

export function Album({onCountChange}){

    const [tab, setTab] = useState("especiais");
    
    return (
        <section className="album">
            <AlbumMenu tab={tab} setTab={setTab}></AlbumMenu>
            <CardSection tab={tab} onCountChange={onCountChange}></CardSection>
        </section>
    )
}