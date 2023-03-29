import "./formulaire.css";

export const Formulaire = ({ inputs, lien, txtlien }) => {
    return (
        <form className="Form">
            {inputs.map((input, index) => {
                if (input[1] === "submit") {
                    return <button key={index} id={input[2]} className={input[2]} type={input[1]}>{input[0]}</button>;
                } else if (input[1] === "checkbox") {
                    return (
                        <div key={index}>
                            <input key={index} id={input[2]} className='champs' type={input[1]} />
                            <label id={input[2]} className={input[2]} htmlFor={input[2]}>{input[0]}</label>
                        </div>
                    )
                } else {
                    return (
                        <div key={index}>
                            <a href={lien}>{txtlien}</a>
                            <label id={input[2]} className={input[2]} htmlFor={input[0]}>{input[0]}</label><br></br>
                            <input key={index} id={input[2]} className='champs' type={input[1]} />
                        </div>
                    );
                }
            })}
        </form>
    );
};