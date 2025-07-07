"use client";

import { useState } from 'react';
import styles from './quotes.module.css';
import Link from 'next/link';

const quotes = [
  { topic: "motivation", text: "In the end it's gonna be alright, and if it's not alright, it's not the end yet." },
  { topic: "motivation", text: "The harder you work for something, the greater you'll feel when you achieve it." },
  { topic: "motivation", text: "Don’t stop when you’re tired. Stop when you’re done." },
  { topic: "life", text: "Life is what happens when you're busy making other plans." },
  { topic: "life", text: "Get busy living or get busy dying." },
  { topic: "success", text: "Success is not in what you have, but who you are." },
  { topic: "success", text: "Success is walking from failure to failure with no loss of enthusiasm." },
];

export default function Quotes() {
  const [topic, setTopic] = useState('');
  const [filteredQuotes, setFilteredQuotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = quotes
      .filter((q) => q.topic.toLowerCase().includes(topic.toLowerCase()))
      .slice(0, 3);
    setFilteredQuotes(results);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>InspireMe ✨</h1>
      <p className={styles.subtitle}>
        Enter a topic and get inspired by handpicked quotes!
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={topic}
          placeholder="e.g., motivation, life, success"
          onChange={(e) => setTopic(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className="mt-8 inline-block text-white text-lg font-medium px-5 py-2 rounded-md border border-white hover:bg-white hover:text-purple-600 transition-all duration-300">
          Get Quotes
        </button>
      </form>

      <div className={styles.quoteList}>
        {filteredQuotes.length > 0 ? (
          filteredQuotes.map((quote, index) => (
            <div key={index} className={styles.quoteBox}>
              <p className={styles.quote}>{quote.text}</p>
              <p className={styles.meta}>Topic: {quote.topic}</p>
            </div>
          ))
        ) : (
          topic && (
            <p className={styles.noResults}>
              No quotes found for “{topic}”.
            </p>
          )
        )}
      </div>

      <Link
        href="/"
        className="mt-8 inline-block text-white text-lg font-medium px-5 py-2 rounded-md border border-white hover:bg-white hover:text-purple-600 transition-all duration-300"
      >
        Back to home
      </Link>
    </div>
  );
}
