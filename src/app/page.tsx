'use client';

import { useState, useMemo } from 'react';
import { jesusQAData, categories, gospels, JesusQA } from '@/data/jesusQA';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGospel, setSelectedGospel] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
            🙏 Jesus Christ: Questions & Answers
          </h1>
          <p className="text-center text-gray-600 text-lg">
            Complete Collection of Questions Asked to Jesus with His Responses
          </p>
          <p className="text-center text-sm text-gray-500 mt-2">
            King James Version (KJV) with Korean 흠정역 Translations
          </p>
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

        {/* Q&A Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Questioner
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Question (KJV)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Answer (KJV)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reference
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 font-medium">{item.category}</div>
                      <div className="text-sm text-gray-500">{item.subcategory}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 font-medium">{item.questioner}</div>
                      <div className="text-sm text-gray-500">{item.context}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-md">
                        <div className="font-medium mb-1">English (KJV):</div>
                        <div className="italic text-gray-700 mb-2">"{item.kjvQuestion}"</div>
                        <div className="font-medium mb-1">Korean (흠정역):</div>
                        <div className="italic text-gray-600">"{item.koreanQuestion}"</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-md">
                        <div className="font-medium mb-1">English (KJV):</div>
                        <div className="italic text-gray-700 mb-2">"{item.kjvAnswer}"</div>
                        <div className="font-medium mb-1">Korean (흠정역):</div>
                        <div className="italic text-gray-600">"{item.koreanAnswer}"</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 font-medium">{item.kjvReference}</div>
                      <div className="text-sm text-gray-500">{item.koreanReference}</div>
                      <div className="text-xs text-gray-400 mt-1">{item.gospel} {item.chapter}:{item.verse}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>Complete collection of questions asked to Jesus Christ with His responses</p>
          <p>King James Version (KJV) with Korean 흠정역 (Heumjeongyeok) translations</p>
        </footer>
      </div>
    </div>
  );
}