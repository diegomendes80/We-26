import './MainSection.scss';
import { Progress } from '../Progress/Progress';
import { Album } from '../Album/Album';

export function MainSection(){
    return (
        <section className="main-section">
            <Progress></Progress>
            <Album></Album>
        </section>
    )
}