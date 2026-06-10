import './progress.scss';

export function Progress({total, marked}){
    return (
        <div className="progress">
            <div className="progress__display">
                <div className="coladas">
                    <p className="coladas__result">{marked}</p>
                    <p className='display-info-name'>Coladas</p>
                </div>

                <div className="faltam">
                    <p className="faltam__result">{total - marked}</p>
                    <p className='display-info-name'>Faltam</p>
                </div>

                <div className="Total">
                    <p className="total__result">{total}</p>
                    <p className='display-info-name'>Total</p>
                </div>
            </div>

            <div className="progress__exibition">
                <div className="exibition__bar">
                    <div className="bar__info">
                        <p>Progresso</p> <p>{Math.round((marked/total)*100)}%</p>
                    </div>

                    <div className="bar__div"  style={{'--progresso': `${Math.round((marked/total)*100)}%` }}>
                        <div className="preenchimento"></div>
                    </div>
                </div>

                <button className="clear-btn">Limpar</button>
            </div>
        </div>
    )
}