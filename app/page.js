"use client";
import { useState, useEffect } from "react";

export default function VotePage() {
  const [candidates, setCandidates] = useState([]);
  const [results, setResults] = useState({});
  const [status, setStatus] = useState("");
  const [yourVote, setYourVote] = useState(null);
  const [totalVotes, setTotalVotes] = useState(0);

  async function fetchCandidates() {
    const res = await fetch("/api/candidates");
    const data = await res.json();
    setCandidates(data.candidates || []);
  }

  async function fetchResults() {
    const res = await fetch("/api/results");
    const data = await res.json();
    const formatted = data.results || {};
    setResults(formatted);

    const total = Object.values(formatted).reduce((a, b) => a + b, 0);
    setTotalVotes(total);
  }

  async function handleVote(choice) {
    const res = await fetch("/api/vote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ choice }),
    });

    const data = await res.json();
    if (res.ok) {
      setStatus(`🎉 You voted for: ${data.choice} 🗳️`);
      setYourVote(data.choice);
      await fetchResults();
    } else {
      setStatus(`❌ ${data.error}`);
    }
  }

  useEffect(() => {
    fetchCandidates();
    fetchResults();
  }, []);

  const quotes = [
    "Empower your voice, choose wisely ✨",
    "Your vote is your voice — make it heard!” 🎉",
    "Share to your next Zen G friend 🔗",
  ];

  return (
    <div className="p-6 min-h-screen bg-black text-white flex flex-col justify-between">
      {/* Top Right Total Votes */}
      <div className="flex justify-end mb-4">
        <p className="text-lg font-bold text-gray-200">
          Total Votes: {totalVotes} 🗳️
        </p>
      </div>

      {/* Top Banner */}
      <div className="text-center mb-6 space-y-2">
        <h1 className="text-3xl font-bold text-red-600">
          Choose Your Next Gen Candidate! 🚀
        </h1>
        <h2 className="text-xl font-semibold text-yellow-400">
          Every voice counts — one person, one vote.
        </h2>
        {quotes.map((quote, index) => (
          <p key={index} className="text-lg italic text-gray-300">
            "{quote}"
          </p>
        ))}
      </div>

      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6 px-4">
        <p className="text-lg font-semibold text-blue-400">
          {yourVote ? `Your vote is now for: ${yourVote} ⭐` : "Make your choice!"}
        </p>
      </div>

      {/* Status Message */}
      {status && (
        <div className="mb-4 p-2 bg-blue-800 text-blue-200 rounded text-center">
          {status}
        </div>
      )}

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {candidates.map((person) => {
          const votes = results[person.id] || 0;
          const isYourVote = yourVote === person.id;

          return (
            <div
              key={person.id}
              className={`bg-gray-900 shadow-lg rounded-2xl p-4 flex flex-col items-center transition transform hover:scale-105 ${
                isYourVote ? "border-4 border-blue-500" : ""
              }`}
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-32 h-32 object-cover rounded-full border mb-4"
              />
              <h2 className="text-lg font-semibold text-white mb-2">
                {person.name} {isYourVote && "⭐"}
              </h2>
              <p className="text-gray-300 mb-3">
                Total Votes: {votes} 🗳️
              </p>
              <button
                className={`px-4 py-2 rounded-lg font-semibold ${
                  isYourVote
                    ? "bg-gray-600 text-white cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
                onClick={() => !isYourVote && handleVote(person.id)}
                disabled={isYourVote}
              >
                {isYourVote ? "Voted ✅" : "Vote Now 🗳️"}
              </button>
            </div>
          );
        })}
      </div>

      {/* Share Section */}
      <div className="mt-6 text-center">
        <p className="text-gray-300 italic">
          "Share your vote with friends and spread the power! 🔗🎉"
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center py-6 bg-gray-900 rounded-lg space-y-2">
        {quotes.map((quote, index) => (
          <p key={index} className="text-gray-400 italic">
            "{quote}"
          </p>
        ))}
        <p className="text-sm text-gray-500">Powered by Zen G ⚡</p>
      </footer>
    </div>
  );
}
