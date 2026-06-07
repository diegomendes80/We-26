import './progress.scss';

export function Progress(){
    return (
        <div className="progress">
            <div className="progress__display">
                <div className="coladas">
                    <p className="coladas__result">0</p>
                    <p className='display-info-name'>Coladas</p>
                </div>

                <div className="faltam">
                    <p className="faltam__result">376</p>
                    <p className='display-info-name'>Faltam</p>
                </div>

                <div className="Total">
                    <p className="total__result">376</p>
                    <p className='display-info-name'>Total</p>
                </div>
            </div>

            <div className="progress__exibition">
                <div className="exibition__bar">
                    <div className="bar__info">
                        <p>Progresso</p> <p>0%</p>
                    </div>

                    <div className="bar__div"></div>
                </div>

                <button className="clear-btn">Limpar</button>
            </div>
        </div>
    )
}