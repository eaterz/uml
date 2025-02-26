import React from "react";

function Info6() {
    return (
        <section className="w-screen h-screen flex items-center justify-center snap-start bg-gradient-to-br from-amber-50 to-green-100">
            <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-800">
                    Uzdevums kursa biedriem
                </h1>
                <div className="mb-4 text-lg font-medium text-gray-800">
                    Uzzīmē ERD diagrammu, balstoties uz šo aprakstu:
                </div>
                <p className="mb-4 font-semibold text-lg text-gray-700 border-l-4 border-green-500 pl-4 italic">
                    Grāmatnīca pārdod grāmatas klientiem.
                </p>
                <ol className="list-decimal pl-6 space-y-3 text-lg text-gray-700">
                    <li className="leading-relaxed">
                        Katru grāmatu raksturo <span className="font-medium text-green-700">GrāmatasID</span>, <span className="font-medium text-green-700">Nosaukums</span> un <span className="font-medium text-green-700">Cena</span>.
                    </li>
                    <li className="leading-relaxed">
                        Katru klientu raksturo <span className="font-medium text-green-700">KlientaID</span> un <span className="font-medium text-green-700">Vārds</span>.
                    </li>
                    <li className="leading-relaxed">
                        Viens klients var iegādāties vairākas grāmatas, un katra grāmata var būt nopirkta vairāku klientu.
                    </li>
                </ol>
            </div>
        </section>
    );
}

export default Info6;