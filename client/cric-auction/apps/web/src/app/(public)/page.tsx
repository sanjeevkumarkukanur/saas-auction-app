
"use client";
import React, { useState, useEffect } from 'react';
import { User, Player, Team, PlayerStatus } from "../../types/types";
import AuctionStrategist from '../../components/AuctionStrategist';
import { MOCK_PLAYERS, MOCK_TEAMS } from '../../components/constants/Constants';

interface Props {
  user: User;
  onLogout: () => void;
}

const HomePage: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>(MOCK_PLAYERS);
  const [teams, setTeams] = useState<Team[]>(MOCK_TEAMS);
  const [activePlayerIndex, setActivePlayerIndex] = useState(1); // Bumrah is upcoming
  const [countdown, setCountdown] = useState(10);
  const [currentBid, setCurrentBid] = useState(0);
  const [highestBidder, setHighestBidder] = useState<string | null>(null);

  const activePlayer = players[activePlayerIndex];
//   const userTeam = teams.find(t => t.id === user.teamId);

  useEffect(() => {
      if (activePlayer && activePlayer.status === PlayerStatus.UPCOMING) {
        const timer = setInterval(() => {
          setCountdown(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
      }
    }, [activePlayer]);

  const handlePlaceBid = () => {
    // if (!userTeam || userTeam.budget < currentBid + 50 || !activePlayer) return;
    // const newBid = (currentBid === 0 ? activePlayer.basePrice : currentBid) + 50;
    // setCurrentBid(newBid);
    // setHighestBidder(userTeam.name);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black font-oswald text-amber-500">AUCTION PRO</span>
            <span className="hidden sm:inline bg-slate-800 px-2 py-0.5 rounded text-[10px] font-bold tracking-widest text-slate-400">LIVE v2.5</span>
          </div>
          
          <div className="flex items-center gap-6">
            {/* {userTeam && (
              <div className="hidden md:flex items-center gap-3">
                <div className="text-right">
                  <p className="text-[10px] uppercase font-bold text-slate-500">Available Budget</p>
                  <p className="text-sm font-bold text-white">₹{userTeam.budget} LAKH</p>
                </div>
                <div className="h-8 w-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 font-black">
                  {userTeam.logo[0]}
                </div>
              </div>
            )} */}
            <button 
            //   onClick={onLogout}
              className="text-slate-400 hover:text-white transition-colors text-sm font-semibold flex items-center gap-2"
            >
              LOGOUT
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Active Auction Player */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
            <div className="md:flex h-full">
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <img 
                  src={activePlayer?.imageUrl || ""} 
                  alt={activePlayer?.name || "Player"} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter mb-2 inline-block">
                    {activePlayer?.role || ""}
                  </span >
                  <h2 className="text-3xl font-black font-oswald text-white uppercase">{activePlayer?.name || ""}</h2>
                  <p className="text-slate-400 font-semibold">{activePlayer?.country || ""}</p>
                </div>
              </div>

              <div className="md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Current Bid</p>
                      <p className="text-5xl font-black font-oswald text-white">₹{currentBid || activePlayer?.basePrice || 0} <span className="text-lg">LAKH</span></p>
                      {highestBidder && (
                        <p className="mt-1 text-sm text-green-400 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                          Highest Bidder: {highestBidder}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Base Price</p>
                      <p className="text-xl font-bold text-slate-300">₹{activePlayer?.basePrice || 0} LAKH</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                      <p className="text-[10px] font-bold text-slate-500 uppercase">Matches</p>
                      <p className="text-lg font-bold text-white">{activePlayer?.stats?.matches ?? ""}</p>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                      <p className="text-[10px] font-bold text-slate-500 uppercase">{activePlayer?.stats?.runs ? 'Runs' : 'Wickets'}</p>
                      <p className="text-lg font-bold text-white">{activePlayer?.stats?.runs || activePlayer?.stats?.wickets || ""}</p>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                      <p className="text-[10px] font-bold text-slate-500 uppercase">{activePlayer?.stats?.strikeRate ? 'S/R' : 'Econ'}</p>
                      <p className="text-lg font-bold text-white">{activePlayer?.stats?.strikeRate || activePlayer?.stats?.economy || ""}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={handlePlaceBid}
                    className="flex-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-4 rounded-xl shadow-lg shadow-amber-500/20 transition-all active:scale-95 text-lg"
                  >
                    PLACE BID +₹50L
                  </button>
                  <button className="px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all border border-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
               <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Auction Feed</h3>
               <div className="space-y-4">
                 <div className="flex items-center justify-between text-sm">
                   <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                     <span className="font-semibold text-white">MI</span>
                     <span className="text-slate-500">placed bid</span>
                   </div>
                   <span className="font-bold text-slate-300">₹450 L</span>
                 </div>
                 <div className="flex items-center justify-between text-sm">
                   <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                     <span className="font-semibold text-white">RCB</span>
                     <span className="text-slate-500">placed bid</span>
                   </div>
                   <span className="font-bold text-slate-300">₹400 L</span>
                 </div>
                 <div className="flex items-center justify-between text-sm opacity-50">
                   <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                     <span className="font-semibold text-white">CSK</span>
                     <span className="text-slate-500">placed bid</span>
                   </div>
                   <span className="font-bold text-slate-300">₹350 L</span>
                 </div>
               </div>
             </div>

             <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Time Remaining</h3>
                  <p className="text-4xl font-black font-oswald text-white tracking-tighter">00:{countdown < 10 ? `0${countdown}` : countdown}</p>
                </div>
                <div className="h-12 w-12 rounded-full border-4 border-slate-800 border-t-amber-500 animate-spin"></div>
             </div>
          </div>
        </div>

        {/* Right: Insights & Stats */}
        <div className="lg:col-span-4 space-y-6">
          {/* <AuctionStrategist currentPlayerName={activePlayer?.name || ""} budget={userTeam?.budget || 0} /> */}

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold font-oswald uppercase mb-6 tracking-wide">Top Buys</h3>
            <div className="space-y-4">
              {players.filter(p => p.status === PlayerStatus.SOLD).slice(0, 3).map(p => (
                <div key={p.id} className="flex items-center justify-between gap-4 group">
                  <div className="flex items-center gap-3">
                    <img src={p.imageUrl} alt={p.name} className="h-10 w-10 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all" />
                    <div>
                      <p className="text-sm font-bold text-white">{p.name}</p>
                      <p className="text-[10px] text-slate-500 uppercase font-bold">{p.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-amber-500">₹{p.currentBid}L</p>
                    <p className="text-[10px] text-slate-600 font-bold uppercase">SOLD</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold font-oswald uppercase mb-6 tracking-wide">Teams Budget</h3>
            <div className="space-y-4">
              {teams.map(t => (
                <div key={t.id} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-tighter">
                    <span className="text-slate-300">{t.name}</span>
                    <span className="text-white">₹{t.budget}L</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-500 transition-all duration-1000" 
                      style={{ width: `${(t.budget / 8000) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Ticker / Bottom Bar */}
      <footer className="bg-slate-950 border-t border-slate-800 py-3 overflow-hidden whitespace-nowrap">
        <div className="flex animate-[ticker_30s_linear_infinite] gap-12 text-xs font-bold text-slate-500 uppercase tracking-widest">
          <span>• Virat Kohli sold to MI for 15.00 CR</span>
          <span>• Glenn Maxwell sold to CSK for 8.50 CR</span>
          <span>• Rashid Khan sold to MI for 12.00 CR</span>
          <span>• Next Set: MARQUEE BOWLERS (Set 4)</span>
          <span>• Next Set: MARQUEE BOWLERS (Set 4)</span>
          <span>• Rashid Khan sold to MI for 12.00 CR</span>
        </div>
      </footer>
      
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
