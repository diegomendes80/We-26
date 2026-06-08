import { Sparkles } from "lucide-react";
import { Card } from "../Card/Card";
import "./especialContainer.scss";

export function EspecialContainer({cards, title, icon, description}) {

  let count = 0;
  cards.forEach(value => {
    if(value.marked) count++;
  })

  return (
    <div className="especial-container">
        <div className="especial-container__header">
            <span className="header__icon">{icon}</span>
            <div className="header__info">
                <div className="info__title">
                    <h2>{title}</h2><span className="badge">⭐</span>
                </div>
                <p className="info__desc">{description}</p>
            </div>
            <p className="header__count">{count}/{cards.length}</p>
        </div>

        <div className="abertura card-container">
            {cards.map((value, index) => (
                <Card number={value.number} key={index} marked={value.marked} especial={true} />
            ))}
        </div>
    </div>
  );
}
