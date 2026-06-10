import { useEffect, useState } from "react";
import "./cardSection.scss";
import { EspecialContainer } from "./EspecialContainer/EspecialContainer";
import { SelecoesContainer } from "./SelecoesContainer/SelecoesContainer";

export function CardSection({ tab, onCountChange }) {
  const [abertura, setAbertura] = useState([
    { number: 0, marked: true },
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
    { number: 0, marked: false },
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
    { number: 16, marked: true },
  ]);

  const [cromos, setCromos] = useState([
    { number: 1, marked: false },
    { number: 2, marked: false },
    { number: 3, marked: false },
    { number: 4, marked: false }
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

  // PAÍSES-SEDE
  const [eua, setEua] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: true },  { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [mexico, setMexico] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: true },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [canada, setCanada] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: true },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  // AMÉRICA DO SUL
  const [brasil, setBrasil] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: true },  { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [argentina, setArgentina] = useState([
    { number: 1, marked: false }, { number: 2, marked: true },  { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [uruguai, setUruguai] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: true },  { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [colombia, setColombia] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: true },  { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [equador, setEquador] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: true },  { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [paraguai, setParaguai] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: true },  { number: 11, marked: false },
  ]);

  // CONCACAF
  const [panama, setPanama] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: true },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [curacao, setCuracao] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: true },
  ]);

  const [haiti, setHaiti] = useState([
    { number: 1, marked: false }, { number: 2, marked: true },  { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  // EUROPA
  const [inglaterra, setInglaterra] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: true },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [franca, setFranca] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: true },  { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [alemanha, setAlemanha] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: true },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [espanha, setEspanha] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: true },  { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [portugal, setPortugal] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: true },  { number: 11, marked: false },
  ]);

  const [holanda, setHolanda] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: true },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [croacia, setCroacia] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: true },  { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [noruega, setNoruega] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: true },
  ]);

  const [austria, setAustria] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: true },  { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [belgica, setBelgica] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: true },  { number: 11, marked: false },
  ]);

  const [escocia, setEscocia] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: true },  { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [suica, setSuica] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: true },
  ]);

  const [italia, setItalia] = useState([
    { number: 1, marked: false }, { number: 2, marked: true },  { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [turquia, setTurquia] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: true },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [republicaTcheca, setRepublicaTcheca] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: true },  { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [suecia, setSuecia] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: true },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  // ÁSIA
  const [japao, setJapao] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: true },
  ]);

  const [ira, setIra] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: true },  { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [coreiaDoSul, setCoreiaDoSul] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: true },  { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [australia, setAustralia] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: true },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [catar, setCatar] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: true },
  ]);

  const [arabiaSaudita, setArabiaSaudita] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: true },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [uzbequistao, setUzbequistao] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: true },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [jordania, setJordania] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: true },  { number: 11, marked: false },
  ]);

  const [iraque, setIraque] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: true },  { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  // ÁFRICA
  const [marrocos, setMarrocos] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: true },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [algeria, setAlgeria] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: true },  { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [egito, setEgito] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: true },  { number: 11, marked: false },
  ]);

  const [costadoMarfim, setCostadoMarfim] = useState([
    { number: 1, marked: false }, { number: 2, marked: true },  { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [tunisia, setTunisia] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: true },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [africaDoSul, setAfricaDoSul] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: true },
  ]);

  const [gana, setGana] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: true },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [senegal, setSenegal] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: true },  { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  const [caboVerde, setCaboVerde] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: true },
  ]);

  const [rdCongo, setRdCongo] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: true },  { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: false },
  ]);

  // OCEANIA
  const [novaZelandia, setNovaZelandia] = useState([
    { number: 1, marked: false }, { number: 2, marked: false }, { number: 3, marked: false },
    { number: 4, marked: false }, { number: 5, marked: false }, { number: 6, marked: false },
    { number: 7, marked: false }, { number: 8, marked: false }, { number: 9, marked: false },
    { number: 10, marked: false }, { number: 11, marked: true },
  ]);

  function toggleCard(setter, index) {
    setter((prev) =>
      prev.map((card, i) =>
        i === index ? { ...card, marked: !card.marked } : card
      )
    );
  }

  
const allCards = [
  abertura, fifaMuseum, estadiosSede, cromos, escudos,
  eua, mexico, canada, brasil, argentina, uruguai, colombia,
  equador, paraguai, panama, curacao, haiti, inglaterra, franca,
  alemanha, espanha, portugal, holanda, croacia, noruega, austria,
  belgica, escocia, suica, italia, turquia, republicaTcheca, suecia,
  japao, ira, coreiaDoSul, australia, catar, arabiaSaudita, uzbequistao,
  jordania, iraque, marrocos, algeria, egito, costadoMarfim, tunisia,
  africaDoSul, gana, senegal, caboVerde, rdCongo, novaZelandia,
];

const totalCards = allCards.reduce((acc, arr) => acc + arr.length, 0);
const markedCards = allCards.reduce((acc, arr) => acc + arr.filter(c => c.marked).length, 0);

useEffect (() => {
  onCountChange({marked: markedCards, total: totalCards});
}, [markedCards]);

  if (tab === "especiais") {
    return (
      <section className="card-section">
        <EspecialContainer
          onToggle={(i) => toggleCard(setAbertura, i)}
          cards={abertura}
          title="FWC 2026"
          icon="✨"
          description="Logo Panini, emblema, mascote, slogan, bola e países-sede"
        />
        <EspecialContainer
          onToggle={(i) => toggleCard(setFifaMuseum, i)}
          cards={fifaMuseum}
          title="Fifa Museum"
          icon="🏛️"
          description="Campeões e momentos históricos das Copas do Mundo"
        />
        <EspecialContainer
          onToggle={(i) => toggleCard(setEstadiosSede, i)}
          cards={estadiosSede}
          title="Estádios-Sede"
          icon="🏟️"
          description="As 16 arenas da Copa de 2026"
        />
        <EspecialContainer
          onToggle={(i) => toggleCard(setCromos, i)}
          cards={cromos}
          title="Cromos Institucionais"
          icon="🏆"
          description="Troféu FIFA, bola oficial, mascote e logotipo"
        />
        <EspecialContainer
          onToggle={(i) => toggleCard(setEscudos, i)}
          cards={escudos}
          title="Escudos das Seleções"
          icon="🛡️"
          description="Emblemas metalizados das 48 seleções classificadas"
        />
      </section>
    );
  }

  if (tab === "selecoes") {
    return (
      <section className="card-section">

        {/* GRUPO A */}
        <SelecoesContainer onToggle={(i) => toggleCard(setMexico, i)}          cards={mexico}          pais="México"          group="A" flag="🇲🇽" color="#006847" />
        <SelecoesContainer onToggle={(i) => toggleCard(setAfricaDoSul, i)}     cards={africaDoSul}     pais="África do Sul"   group="A" flag="🇿🇦" color="#007A4D" />
        <SelecoesContainer onToggle={(i) => toggleCard(setCoreiaDoSul, i)}     cards={coreiaDoSul}     pais="Coreia do Sul"   group="A" flag="🇰🇷" color="#C60C30" />
        <SelecoesContainer onToggle={(i) => toggleCard(setRepublicaTcheca, i)} cards={republicaTcheca} pais="Rep. Tcheca"     group="A" flag="🇨🇿" color="#D7141A" />

        {/* GRUPO B */}
        <SelecoesContainer onToggle={(i) => toggleCard(setCanada, i)}  cards={canada}  pais="Canadá" group="B" flag="🇨🇦" color="#FF0000" />
        <SelecoesContainer onToggle={(i) => toggleCard(setCatar, i)}   cards={catar}   pais="Catar"  group="B" flag="🇶🇦" color="#8D1B3D" />
        <SelecoesContainer onToggle={(i) => toggleCard(setSuica, i)}   cards={suica}   pais="Suíça"  group="B" flag="🇨🇭" color="#FF0000" />
        <SelecoesContainer onToggle={(i) => toggleCard(setItalia, i)}  cards={italia}  pais="Itália" group="B" flag="🇮🇹" color="#009246" />

        {/* GRUPO C */}
        <SelecoesContainer onToggle={(i) => toggleCard(setBrasil, i)}   cards={brasil}   pais="Brasil"   group="C" flag="🇧🇷" color="#FFCB05" />
        <SelecoesContainer onToggle={(i) => toggleCard(setMarrocos, i)} cards={marrocos} pais="Marrocos" group="C" flag="🇲🇦" color="#C1272D" />
        <SelecoesContainer onToggle={(i) => toggleCard(setHaiti, i)}    cards={haiti}    pais="Haiti"    group="C" flag="🇭🇹" color="#00209F" />
        <SelecoesContainer onToggle={(i) => toggleCard(setEscocia, i)}  cards={escocia}  pais="Escócia"  group="C" flag="🏴󠁧󠁢󠁳󠁣󠁴󠁿" color="#003DA5" />

        {/* GRUPO D */}
        <SelecoesContainer onToggle={(i) => toggleCard(setEua, i)}       cards={eua}       pais="Estados Unidos" group="D" flag="🇺🇸" color="#002868" />
        <SelecoesContainer onToggle={(i) => toggleCard(setParaguai, i)}  cards={paraguai}  pais="Paraguai"       group="D" flag="🇵🇾" color="#D52B1E" />
        <SelecoesContainer onToggle={(i) => toggleCard(setAustralia, i)} cards={australia} pais="Austrália"      group="D" flag="🇦🇺" color="#00008B" />
        <SelecoesContainer onToggle={(i) => toggleCard(setTurquia, i)}   cards={turquia}   pais="Turquia"        group="D" flag="🇹🇷" color="#E30A17" />

        {/* GRUPO E */}
        <SelecoesContainer onToggle={(i) => toggleCard(setAlemanha, i)}      cards={alemanha}      pais="Alemanha"       group="E" flag="🇩🇪" color="#000000" />
        <SelecoesContainer onToggle={(i) => toggleCard(setCuracao, i)}       cards={curacao}       pais="Curaçao"        group="E" flag="🇨🇼" color="#003DA5" />
        <SelecoesContainer onToggle={(i) => toggleCard(setCostadoMarfim, i)} cards={costadoMarfim} pais="Costa do Marfim" group="E" flag="🇨🇮" color="#F77F00" />
        <SelecoesContainer onToggle={(i) => toggleCard(setEquador, i)}       cards={equador}       pais="Equador"        group="E" flag="🇪🇨" color="#FFD100" />

        {/* GRUPO F */}
        <SelecoesContainer onToggle={(i) => toggleCard(setHolanda, i)} cards={holanda} pais="Holanda"  group="F" flag="🇳🇱" color="#FF6600" />
        <SelecoesContainer onToggle={(i) => toggleCard(setJapao, i)}   cards={japao}   pais="Japão"    group="F" flag="🇯🇵" color="#BC002D" />
        <SelecoesContainer onToggle={(i) => toggleCard(setTunisia, i)} cards={tunisia} pais="Tunísia"  group="F" flag="🇹🇳" color="#E70013" />
        <SelecoesContainer onToggle={(i) => toggleCard(setSuecia, i)}  cards={suecia}  pais="Suécia"   group="F" flag="🇸🇪" color="#006AA7" />

        {/* GRUPO G */}
        <SelecoesContainer onToggle={(i) => toggleCard(setBelgica, i)}      cards={belgica}      pais="Bélgica"       group="G" flag="🇧🇪" color="#EF3340" />
        <SelecoesContainer onToggle={(i) => toggleCard(setEgito, i)}        cards={egito}        pais="Egito"         group="G" flag="🇪🇬" color="#CE1126" />
        <SelecoesContainer onToggle={(i) => toggleCard(setIra, i)}          cards={ira}          pais="Irã"           group="G" flag="🇮🇷" color="#239F40" />
        <SelecoesContainer onToggle={(i) => toggleCard(setNovaZelandia, i)} cards={novaZelandia} pais="Nova Zelândia" group="G" flag="🇳🇿" color="#00247D" />

        {/* GRUPO H */}
        <SelecoesContainer onToggle={(i) => toggleCard(setEspanha, i)}      cards={espanha}      pais="Espanha"       group="H" flag="🇪🇸" color="#AA151B" />
        <SelecoesContainer onToggle={(i) => toggleCard(setCaboVerde, i)}    cards={caboVerde}    pais="Cabo Verde"    group="H" flag="🇨🇻" color="#003893" />
        <SelecoesContainer onToggle={(i) => toggleCard(setArabiaSaudita, i)} cards={arabiaSaudita} pais="Arábia Saudita" group="H" flag="🇸🇦" color="#006C35" />
        <SelecoesContainer onToggle={(i) => toggleCard(setUruguai, i)}      cards={uruguai}      pais="Uruguai"       group="H" flag="🇺🇾" color="#75AADB" />

        {/* GRUPO I */}
        <SelecoesContainer onToggle={(i) => toggleCard(setFranca, i)}   cards={franca}   pais="França"   group="I" flag="🇫🇷" color="#002395" />
        <SelecoesContainer onToggle={(i) => toggleCard(setSenegal, i)}  cards={senegal}  pais="Senegal"  group="I" flag="🇸🇳" color="#00853F" />
        <SelecoesContainer onToggle={(i) => toggleCard(setNoruega, i)}  cards={noruega}  pais="Noruega"  group="I" flag="🇳🇴" color="#EF2B2D" />
        <SelecoesContainer onToggle={(i) => toggleCard(setIraque, i)}   cards={iraque}   pais="Iraque"   group="I" flag="🇮🇶" color="#CE1126" />

        {/* GRUPO J */}
        <SelecoesContainer onToggle={(i) => toggleCard(setArgentina, i)} cards={argentina} pais="Argentina" group="J" flag="🇦🇷" color="#74ACDF" />
        <SelecoesContainer onToggle={(i) => toggleCard(setAlgeria, i)}   cards={algeria}   pais="Argélia"   group="J" flag="🇩🇿" color="#006233" />
        <SelecoesContainer onToggle={(i) => toggleCard(setAustria, i)}   cards={austria}   pais="Áustria"   group="J" flag="🇦🇹" color="#ED2939" />
        <SelecoesContainer onToggle={(i) => toggleCard(setJordania, i)}  cards={jordania}  pais="Jordânia"  group="J" flag="🇯🇴" color="#007A3D" />

        {/* GRUPO K */}
        <SelecoesContainer onToggle={(i) => toggleCard(setPortugal, i)}    cards={portugal}    pais="Portugal"     group="K" flag="🇵🇹" color="#006600" />
        <SelecoesContainer onToggle={(i) => toggleCard(setUzbequistao, i)} cards={uzbequistao} pais="Uzbequistão"  group="K" flag="🇺🇿" color="#1EB53A" />
        <SelecoesContainer onToggle={(i) => toggleCard(setColombia, i)}    cards={colombia}    pais="Colômbia"     group="K" flag="🇨🇴" color="#FCD116" />
        <SelecoesContainer onToggle={(i) => toggleCard(setRdCongo, i)}     cards={rdCongo}     pais="RD Congo"     group="K" flag="🇨🇩" color="#007FFF" />

        {/* GRUPO L */}
        <SelecoesContainer onToggle={(i) => toggleCard(setInglaterra, i)} cards={inglaterra} pais="Inglaterra" group="L" flag="🏴󠁧󠁢󠁥󠁮󠁧󠁿" color="#CF142B" />
        <SelecoesContainer onToggle={(i) => toggleCard(setCroacia, i)}    cards={croacia}    pais="Croácia"    group="L" flag="🇭🇷" color="#FF0000" />
        <SelecoesContainer onToggle={(i) => toggleCard(setGana, i)}       cards={gana}       pais="Gana"       group="L" flag="🇬🇭" color="#006B3F" />
        <SelecoesContainer onToggle={(i) => toggleCard(setPanama, i)}     cards={panama}     pais="Panamá"     group="L" flag="🇵🇦" color="#DA121A" />

      </section>
    );
  }
}
