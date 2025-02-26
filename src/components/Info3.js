import React from "react";

function Info3() {
    return (
        <section className="w-screen h-screen flex items-center justify-center snap-start bg-gradient-to-br from-purple-50 to-pink-100">
            <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-800">
                    ERD elementi un to UML atbilstošie ir:
                </h1>
                <ol className="list-decimal pl-6 space-y-4 text-lg text-gray-700">
                    <li className="leading-relaxed flex items-center">
                        <span className="font-medium text-purple-700">Entītija</span>
                        <span className="mx-2 text-gray-400">→</span>
                        <span className="font-medium text-indigo-600">UML klase</span>
                    </li>
                    <li className="leading-relaxed flex items-center">
                        <span className="font-medium text-purple-700">Atribūts</span>
                        <span className="mx-2 text-gray-400">→</span>
                        <span className="font-medium text-indigo-600">UML klases atribūts</span>
                    </li>
                    <li className="leading-relaxed flex items-center">
                        <span className="font-medium text-purple-700">Attiecība</span>
                        <span className="mx-2 text-gray-400">→</span>
                        <span className="font-medium text-indigo-600">UML asociācija</span>
                    </li>
                    <li className="leading-relaxed flex items-center">
                        <span className="font-medium text-purple-700">Kardinalitāte</span>
                        <span className="mx-2 text-gray-400">→</span>
                        <span className="font-medium text-indigo-600">UML multiplicitāte</span>
                    </li>
                </ol>
            </div>
        </section>
    );
}

export default Info3;