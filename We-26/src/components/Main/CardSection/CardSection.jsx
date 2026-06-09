import { useState } from "react";
import "./cardSection.scss";
import { EspecialContainer } from "./EspecialContainer/EspecialContainer";
import { SelecoesContainer } from "./SelecoesContainer/SelecoesContainer";

export function CardSection({ tab }) {
  const [abertura, setAbertura] = useState([
    { number: 1, marked: true },
    { number: 2, marked: false },
    { number: 3, marked: true },
    { number: 4, marked: true },
    { number: 5, marked: false },
    { number: 6, marked: true },
    { number: 7, marked: false },
    { number: 8, marked: false },
    { number: 9, marked: false },
  ]);

  const [fifaMuseum, setFifaMuseum] = useState([
    { number: 1, marked: false },
    { number: 2, marked: true },
    { number: 3, marked: true },
    { number: 4, marked: false },
    { number: 5, marked: false },
    { number: 6, marked: false },
    { number: 7, marked: false },
    { number: 8, marked: false },
    { number: 9, marked: false },
    { number: 10, marked: false },
    { number: 11, marked: false },
  ]);

  const [estadiosSede, setEstadiosSede] = useState([
    { number: 1, marked: false },
    { number: 2, marked: false },
    { number: 3, marked: false },
    { number: 4, marked: false },
    { number: 5, marked: false },
    { number: 6, marked: false },
    { number: 7, marked: true },
    { number: 8, marked: false },
    { number: 9, marked: false },
    { number: 10, marked: false },
    { number: 11, marked: false },
    { number: 12, marked: false },
    { number: 13, marked: false },
    { number: 14, marked: true },
    { number: 15, marked: true },
    { number: 15, marked: true },
  ]);

  const [cromos, setCromos] = useState([
    { number: 1, marked: false },
    { number: 2, marked: false },
    { number: 3, marked: false },
  ]);

  const [escudos, setEscudos] = useState([
    { number: 1, marked: false },
    { number: 2, marked: false },
    { number: 3, marked: true },
    { number: 4, marked: false },
    { number: 5, marked: false },
    { number: 6, marked: false },
    { number: 7, marked: true },
    { number: 8, marked: false },
    { number: 9, marked: false },
    { number: 10, marked: false },
    { number: 11, marked: false },
    { number: 12, marked: true },
    { number: 13, marked: false },
    { number: 14, marked: false },
    { number: 15, marked: false },
    { number: 16, marked: false },
    { number: 17, marked: true },
    { number: 18, marked: false },
    { number: 19, marked: false },
    { number: 20, marked: false },
    { number: 21, marked: false },
    { number: 22, marked: false },
    { number: 23, marked: true },
    { number: 24, marked: false },
    { number: 25, marked: false },
    { number: 26, marked: false },
    { number: 27, marked: false },
    { number: 28, marked: false },
    { number: 29, marked: true },
    { number: 30, marked: false },
    { number: 31, marked: false },
    { number: 32, marked: false },
    { number: 33, marked: false },
    { number: 34, marked: false },
    { number: 35, marked: true },
    { number: 36, marked: false },
    { number: 37, marked: false },
    { number: 38, marked: false },
    { number: 39, marked: false },
    { number: 40, marked: false },
    { number: 41, marked: true },
    { number: 42, marked: false },
    { number: 43, marked: false },
    { number: 44, marked: false },
    { number: 45, marked: false },
    { number: 46, marked: false },
    { number: 47, marked: true },
    { number: 48, marked: false },
  ]);

  const [brasil, setBrasil] = useState([
    { number: 1, marked: false },
    { number: 2, marked: false },
    { number: 3, marked: false },
    { number: 4, marked: false },
    { number: 5, marked: false },
    { number: 6, marked: false },
    { number: 7, marked: true },
    { number: 8, marked: false },
    { number: 9, marked: false },
    { number: 10, marked: false },
    { number: 11, marked: false },
    { number: 12, marked: false },
    { number: 13, marked: false },
    { number: 14, marked: true },
    { number: 15, marked: false },
    { number: 16, marked: false },
    { number: 17, marked: false },
    { number: 18, marked: false }
  ]);

  function toggleCard(setter, index) {
    setter((prev) =>
      prev.map((card, i) => {
        return i === index ? { ...card, marked: !card.marked } : card;
      }),
    );
  }

  if (tab === "especiais") {
    return (
      <section className="card-section">
        <EspecialContainer
          onToggle={(i) => {
            toggleCard(setAbertura, i);
          }}
          cards={abertura}
          title="Abertura"
          icon="✨"
          description="Logo Panini, emblema, mascote, slogan, bola e países-sede"
        ></EspecialContainer>

        <EspecialContainer
          onToggle={(i) => {
            toggleCard(setFifaMuseum, i);
          }}
          cards={fifaMuseum}
          title="Fifa Museum"
          icon="🏛️"
          description="Campeões e momentos históricos das Copas do Mundo"
        ></EspecialContainer>

        <EspecialContainer
          onToggle={(i) => {
            toggleCard(setEstadiosSede, i);
          }}
          cards={estadiosSede}
          title="Estádios-Sede"
          icon="🏟️"
          description="As 16 arenas da Copa de 2026"
        ></EspecialContainer>

        <EspecialContainer
          onToggle={(i) => {
            toggleCard(setCromos, i);
          }}
          cards={cromos}
          title="Cromos Institucionais"
          icon="🏆"
          description="Troféu FIFA, bola oficial, mascote e logotipo"
        ></EspecialContainer>

        <EspecialContainer
          onToggle={(i) => {
            toggleCard(setEscudos, i);
          }}
          cards={escudos}
          title="Escudos das Seleções"
          icon="🛡️"
          description="Emblemas metalizados das 48 seleções classificadas"
        ></EspecialContainer>
      </section>
    );
  }

  if (tab === "selecoes") {
    return (
      <section className="card-section">
        <SelecoesContainer
          onToggle={(i) => {
            toggleCard(setBrasil, i);
          }}
          cards={brasil}
          pais={"Brasil"}
          group={"C"}
          flag={"🇧🇷"}
          color={"#FFCB05"}
        ></SelecoesContainer>
      </section>
    );
  }
}
