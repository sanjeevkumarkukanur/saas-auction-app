
import React, { useState } from 'react';

interface Props {
  currentPlayerName: string;
  budget: number;
}

const AuctionStrategist: React.FC<Props> = ({ currentPlayerName, budget }) => {
  const [advice, setAdvice] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const fetchAdvice = async () => {
    setLoading(true);
    // const result = await getAuctionAdvice(currentPlayerName, budget, "Looking for a match-winning bowler and middle-order stability.");
    // setAdvice(result || "No strategy available.");
    setLoading(false);
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-amber-500 p-2 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold font-oswald uppercase tracking-wider">AI Strategist</h3>
      </div>
      
      {advice ? (
        <div className="space-y-4">
          <p className="text-slate-300 italic leading-relaxed text-sm">"{advice}"</p>
          <button 
            onClick={() => setAdvice("")}
            className="text-amber-400 text-xs hover:underline"
          >
            Reset Analysis
          </button>
        </div>
      ) : (
        <div>
          <p className="text-slate-400 text-sm mb-4">Get AI-driven insights for {currentPlayerName} based on your current budget.</p>
          <button 
            onClick={fetchAdvice}
            disabled={loading}
            className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex justify-center items-center gap-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Analyzing...
              </>
            ) : "Analyze Player"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AuctionStrategist;
