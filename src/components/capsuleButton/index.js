import React,{useState} from 'react';
import "./style.css"

const Buttongroups = ({buttons,doSomethingAfterClick }) => {
    const [clickedId, setClickedId] = useState(0);

    const handingClick = (e,i) => {
        setClickedId(i)
        doSomethingAfterClick(e);
    }

    return (
        <div>
            <div className="selector">
                {
                buttons.map((buttonLabel, i) => ( <div key={i} className={i === clickedId ? "anchor selected" : "anchor"}>
                    <h3>
                        <button id={i} name={buttonLabel} onClick={(e) =>handingClick(e, i)}>{buttonLabel}</button>
                    </h3>
                    <div className="background"></div>
                </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Buttongroups