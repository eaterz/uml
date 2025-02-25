import React from "react";

function Info2() {
    return (
        <div className="App">
            <article className="w-screen min-h-screen flex flex-col items-center justify-center p-8 snap-start">
                <h1>Kad to izmanto?</h1>
                <h2>ERD izmanto:</h2>
                <ol>
                    <li>Datu bāzes projektēšanā – lai plānotu datu struktūru.</li>
                    <li>Analīzē – lai saprastu datu attiecības un prasības.</li>
                    <li>Komunikācijā – lai vizuāli parādītu datu shēmu.</li>
                    <li>Dokumentēšanā – kā sistēmas dokumentācijas daļu.</li>
                </ol>
            </article>
        </div>
    );
}

export default Info2;
