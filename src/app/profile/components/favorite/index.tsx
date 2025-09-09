"use client"
import { useState } from "react";
import { FiEdit, FiX } from "react-icons/fi";
export function FavoriteCard() {
    const [input, setInput] = useState("");
    const [showInput, setShowInput] = useState(true);
    const [gameName, setGameName] = useState("");


    function handleButton() {
        setShowInput(!showInput);
        if(input !== "") setGameName(input);
        setInput("");
    }
    return (
        <div className="w-full bg-gray-900 rounded-lg p-4 mb-5 h-44 text-white flex justify-between flex-col">
            { showInput ? (
                <div className="flex items-center justify-normal gap-3">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="bg-white rounded-md text-black p-2 w-full h-8 px-2"
                    />
                    <button onClick={handleButton}>
                        <FiX size={24} color="#fff"/>
                    </button>
                </div>
            ) : (
                <button className="self-start hover:scale-110 duration-200 transition-all"
                    onClick={handleButton}
                >
            <FiEdit size={24} color="#fff"/>
           </button>
            )}
           
            {gameName && (
                <div>
                    <span className=" text-white">Jogo Favorito:</span>
                    <p className="font-bold text-sm text-white">{gameName}</p>
                </div>
            )}

            {!gameName && (
                <p className="font-bold text-sm text-white">
                    Adicionar Jogo
                </p> 
            )} 
           

        </div>
    )
}