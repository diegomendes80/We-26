import './MainSection.scss';
import { Progress } from '../Progress/Progress';
import { Album } from '../Album/Album';
import { useState } from 'react';

export function MainSection(){
    const [cardControl, setCardControl] = useState({marked:0, total:0})

    return (
        <section className="main-section">
            <Progress total={cardControl.total} marked={cardControl.marked}></Progress>
            <Album onCountChange={setCardControl}></Album>
        </section>
    )
}