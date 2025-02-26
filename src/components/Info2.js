import React from "react";

function Info2() {
    return (
        <section className="w-screen h-screen flex items-center justify-center snap-start bg-gradient-to-br from-indigo-50 to-purple-100">
            <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-800">
                    Kad to izmanto?
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-600">
                    ERD izmanto:
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-lg text-gray-700">
                    <li className="leading-relaxed">
                        Datu bāzes projektēšanā – lai plānotu datu struktūru.
                    </li>
                    <li className="leading-relaxed">
                        Analīzē – lai saprastu datu attiecības un prasības.
                    </li>
                    <li className="leading-relaxed">
                        Komunikācijā – lai vizuāli parādītu datu shēmu.
                    </li>
                    <li className="leading-relaxed">
                        Dokumentēšanā – kā sistēmas dokumentācijas daļu.
                    </li>
                </ol>
            </div>
        </section>
    );
}

export default Info2;