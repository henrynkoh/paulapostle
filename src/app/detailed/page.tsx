'use client';

import { useState, useMemo } from 'react';
import { jesusQAData, categories, gospels, JesusQA } from '@/data/jesusQA';

export default function DetailedPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGospel, setSelectedGospel] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const filteredData = useMemo(() => {
    return jesusQAData.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesGospel = selectedGospel === 'All' || item.gospel === selectedGospel;
      const matchesSearch = searchTerm === '' || 
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.questioner.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.kjvReference.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesGospel && matchesSearch;
    });
  }, [selectedCategory, selectedGospel, searchTerm]);

  const toggleExpanded = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
            📖 Detailed Jesus Q&A Study
          </h1>
          <p className="text-center text-gray-600 text-lg">
            In-depth Analysis of Questions Asked to Jesus Christ
          </p>
          <div className="flex justify-center mt-4">
            <a 
              href="/" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              ← Back to Table View
            </a>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <input
                type="text"
                placeholder="Search questions, answers, or people..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Gospel Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gospel
              </label>
              <select
                value={selectedGospel}
                onChange={(e) => setSelectedGospel(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {gospels.map((gospel) => (
                  <option key={gospel} value={gospel}>
                    {gospel}
                  </option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-end">
              <div className="text-sm text-gray-600">
                Showing {filteredData.length} of {jesusQAData.length} Q&A's
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Q&A Cards */}
        <div className="space-y-6">
          {filteredData.map((item, index) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Card Header */}
              <div 
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleExpanded(item.id)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                        #{index + 1}
                      </span>
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                        {item.category}
                      </span>
                      <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">
                        {item.gospel}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.questioner} asks: "{item.question}"
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      <strong>Context:</strong> {item.context} | <strong>Reference:</strong> {item.kjvReference}
                    </p>
                    <div className="text-sm text-gray-500">
                      <strong>Theme:</strong> {item.theme} | <strong>Application:</strong> {item.application}
                    </div>
                  </div>
                  <div className="ml-4">
                    <button className="text-gray-400 hover:text-gray-600">
                      {expandedItem === item.id ? '▼' : '▶'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedItem === item.id && (
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Question Section */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded mr-2">
                          QUESTION
                        </span>
                        {item.subcategory}
                      </h4>
                      
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-gray-700 mb-2">English (KJV):</h5>
                          <div className="bg-white p-4 rounded border-l-4 border-red-500">
                            <p className="text-gray-800 italic">"{item.kjvQuestion}"</p>
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-gray-700 mb-2">Korean (흠정역):</h5>
                          <div className="bg-white p-4 rounded border-l-4 border-red-500">
                            <p className="text-gray-800 italic">"{item.koreanQuestion}"</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Answer Section */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded mr-2">
                          JESUS' ANSWER
                        </span>
                        {item.theme}
                      </h4>
                      
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-gray-700 mb-2">English (KJV):</h5>
                          <div className="bg-white p-4 rounded border-l-4 border-green-500">
                            <p className="text-gray-800 italic">"{item.kjvAnswer}"</p>
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-gray-700 mb-2">Korean (흠정역):</h5>
                          <div className="bg-white p-4 rounded border-l-4 border-green-500">
                            <p className="text-gray-800 italic">"{item.koreanAnswer}"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Application Section */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded mr-2">
                        APPLICATION
                      </span>
                      Modern Life Lessons
                    </h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-gray-700">{item.application}</p>
                    </div>
                  </div>

                  {/* Biblical References */}
                  <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                    <div>
                      <strong>Reference:</strong> {item.kjvReference} ({item.koreanReference})
                    </div>
                    <div>
                      <strong>Gospel:</strong> {item.gospel} {item.chapter}:{item.verse}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>Detailed study of questions asked to Jesus Christ with His responses</p>
          <p>King James Version (KJV) with Korean 흠정역 (Heumjeongyeok) translations</p>
        </footer>
      </div>
    </div>
  );
}
