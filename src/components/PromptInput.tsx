"use client"

import { useState } from 'react';

export default function PromptInput() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    // Simulate loading state
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, this would trigger the AI generation process
      console.log('Generating app from prompt:', prompt);
      // Redirect to a results page or show generated options
    }, 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative">
        <form onSubmit={handleSubmit} className="relative">
          <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus-within:ring-2 focus-within:ring-blue-600">
            <label htmlFor="prompt" className="sr-only">
              What do you want to build?
            </label>
            <textarea
              rows={3}
              name="prompt"
              id="prompt"
              className="block w-full resize-none border-0 bg-transparent py-4 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 sm:text-lg"
              placeholder="What do you want to build? (e.g., 'A recipe finder app with search and favorites')"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
            <div className="flex items-center space-x-5">
              {/* Optional: Add attachment buttons or other controls here */}
            </div>
            <button
              type="submit"
              disabled={!prompt.trim() || isLoading}
              className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm ${
                !prompt.trim() || isLoading
                  ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
              }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </>
              ) : (
                'Create App'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 