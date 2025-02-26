import React from "react";

function Info1() {
    return (
        <section className="w-screen h-screen flex items-center justify-center snap-start bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-800">
                    Kas ir ERD un vai tā ir struktūras vai uzvedības modeļa daļa?
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                    ERD (Entity-Relationship Diagram) ir datu bāzes struktūras modeļa daļa,
                    kas vizuāli attēlo datu entītijas, to atribūtus un attiecības.
                    Tas neattiecas uz uzvedību, bet gan uz datu organizēšanu un saistībām.
                </p>
            </div>
        </section>
    );
}

export default Info1;