import React from "react";

function Info2() {
    return (
        <div className="App">
            <article className="w-screen min-h-screen flex flex-col items-center justify-center p-8 snap-start">
                <h1>ERD piemērs:</h1>

                <ol>
                    <li>Entītija "Klients": Satur atribūtus "KlientaID", "Vārds", "Vecums".</li>
                    <li>Entītija "Pasūtījums": Satur atribūtus "PasūtījumaID", "Datums".</li>
                    <li>Attiecība: "Klients" veic "Pasūtījumu" (1..* kardinalitāte, jo viens klients var veikt vairākus pasūtījumus).</li>
                </ol>
            </article>
        </div>
    );
}

export default Info2;
