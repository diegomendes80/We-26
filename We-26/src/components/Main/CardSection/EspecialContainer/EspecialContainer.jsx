import { Sparkles } from "lucide-react";
import { Card } from "../Card/Card";
import "./especialContainer.scss";

export function EspecialContainer({
  cards,
  onToggle,
  title,
  icon,
  description,
}) {
  const count = cards.filter((v) => v.marked).length;

  return (
    <div className="especial-container">
      <div className="especial-container__header">
        <span className="header__icon">{icon}</span>
        <div className="header__info">
          <div className="info__title">
            <h2>{title}</h2>
            <span className="badge">⭐</span>
          </div>
          <p className="info__desc">{description}</p>
        </div>
        <p className="header__count">
          {count}/{cards.length}
        </p>
      </div>

      <div className="card-container">
        {cards.map((value, index) => (
          <Card
            number={value.number}
            key={index}
            marked={value.marked}
            especial={true}
            onToggle={() => onToggle(index)}
            color={"oklch(0.82 0.17 85)"}
          />
        ))}
      </div>
    </div>
  );
}
