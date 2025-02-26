import React from "react";

function Info4() {
    return (
        <section className="w-screen h-screen flex items-center justify-center snap-start bg-gradient-to-br from-pink-50 to-rose-100">
            <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-800">
                    ERD piemērs:
                </h1>
                <ol className="list-decimal pl-6 space-y-4 text-lg text-gray-700">
                    <li className="leading-relaxed">
                        Entītija <span className="font-semibold text-pink-700">"Klients"</span>:
                        Satur atribūtus <span className="italic">"KlientaID", "Vārds", "Vecums"</span>.
                    </li>
                    <li className="leading-relaxed">
                        Entītija <span className="font-semibold text-pink-700">"Pasūtījums"</span>:
                        Satur atribūtus <span className="italic">"PasūtījumaID", "Datums"</span>.
                    </li>
                    <li className="leading-relaxed">
                        Attiecība: <span className="font-semibold text-pink-700">"Klients"</span> veic
                        <span className="font-semibold text-pink-700"> "Pasūtījumu"</span>
                        <span className="ml-1 text-indigo-600 font-medium">(1..* kardinalitāte, jo viens klients var veikt vairākus pasūtījumus)</span>.
                    </li>
                </ol>
            </div>
        </section>
    );
}

export default Info4;