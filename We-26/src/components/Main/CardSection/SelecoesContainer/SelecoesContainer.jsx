import './selecoesContainer.scss';
import { Card } from '../Card/Card';

export const SelecoesContainer = ( {cards,
  onToggle,
  pais,
  group,
  flag,
  color}) =>{

  const count = cards.filter((v) => v.marked).length;

    return (
        <div className="selecoes-container" style={{'--cor-dinamica': color }}>
              <div className="selecoes-container__header">
                <span className="header__icon">{flag}</span>
                <div className="header__info">
                  
                    <p>We Are</p>
                    <h2>{pais}</h2>
                    <p>Grupo {group}</p>
                 
                  
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
                    color={color}
                  />
                ))}
              </div>
            </div>
    )
}