import React from "react";

function Info3() {
    return (
        <div className="App">
            <article className="w-screen min-h-screen flex flex-col items-center justify-center p-8 snap-start">
                <h1>ERD elementi un to UML atbilstošie ir:</h1>
                <ol>
                    <li>Entītija → UML klase
                    </li>
                    <li>
                        Atribūts → UML klases atribūts
                    </li>
                    <li>
                        Attiecība → UML asociācija
                    </li>
                    <li>
                        Kardinalitāte → UML multiplicitāte
                    </li>
                </ol>
            </article>
        </div>
    );
}

export default Info3;
