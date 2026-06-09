import "./card.scss";
import { Check } from "lucide-react";

export function Card({ number, marked, especial, onToggle, color }) {
  return (
    <div
      className={`card ${marked ? "card-marked" : ""} ${especial ? "especial" : ""}`}
      onClick={onToggle} style={{'--cor-dinamica': color}}
    >
      {marked && <Check size={16} className="marked-icon" />}
      <span className="card__number">{String(number).padStart(2, "0")}</span>
      <span className="card__watermark">26</span>
    </div>
  );
}
