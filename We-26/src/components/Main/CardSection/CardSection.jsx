import "./cardSection.scss";
import { EspecialContainer } from "./EspecialContainer/EspecialContainer";

export function CardSection({ tab }) {

      const abertura = [
        {   number:1,
            marked: true
        },
        {   number:2,
            marked: false
        },
        {   number:3,
            marked: true
        },
        {   number:4,
            marked: true
        },
        {   number:5,
            marked: false
        },
        {   number:6,
            marked: true
        },
        {   number:7,
            marked: false
        },
        {   number:8,
            marked: false
        },
        {   number:9,
            marked: false
        }
      ];

      const fifaMuseum = [
        {   number:1,
            marked: false
        },
        {   number:2,
            marked: true
        },
        {   number:3,
            marked: true
        },
        {   number:4,
            marked: false
        },
        {   number:5,
            marked: false
        },
        {   number:6,
            marked: false
        },
        {   number:7,
            marked: false
        },
        {   number:8,
            marked: false
        },
        {   number:9,
            marked: false
        },
         {   number:10,
            marked: false
        },
         {   number:11,
            marked: false
        }
        

      ];


    if(tab === "especiais"){
        return (

        <section className="card-section">
            <EspecialContainer cards={abertura} title="Abertura" icon="✨" description="Logo Panini, emblema, mascote, slogan, bola e países-sede"></EspecialContainer>

            <EspecialContainer cards={fifaMuseum} title="Fifa Museum" icon="🏛️" description="Campeões e momentos históricos das Copas do Mundo"></EspecialContainer>
        </section>
        )
    }
 ;
}
