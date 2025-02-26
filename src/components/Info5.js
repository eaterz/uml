import React from "react";

function Info5() {
    return (
        <section className="w-screen h-screen flex items-center justify-center snap-start bg-gradient-to-br from-rose-50 to-amber-100">
            <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg flex flex-col items-center transform transition-all duration-300 hover:scale-105">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-indigo-800">
                    ERD vizualizācija
                </h1>
                <div className="w-full flex justify-center">
                    <img
                        className="w-full object-contain rounded-md shadow-md border border-gray-200"
                        src="/erd-example.svg"
                        alt="ERD diagramma"
                    />

                </div>
            </div>
        </section>
    );
}

export default Info5;