'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, Download, BookOpen, Users, MessageCircle } from 'lucide-react';
import { questionsAnswers, categories } from '@/data/paulData';
import { QuestionAnswer, SearchFilters } from '@/types';
import { exportToPDF } from '@/utils/pdfExport';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredQuestions = useMemo(() => {
    return questionsAnswers.filter((qa) => {
      const matchesSearch = searchTerm === '' || 
        qa.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        qa.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        qa.kjvVerse.toLowerCase().includes(searchTerm.toLowerCase()) ||
        qa.koreanVerse.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === '' || qa.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === '' || qa.subcategory === selectedSubcategory;
      
      return matchesSearch && matchesCategory && matchesSubcategory;
    });
  }, [searchTerm, selectedCategory, selectedSubcategory]);

  const handleExportPDF = () => {
    const exportData = {
      questionsAnswers: filteredQuestions,
      categories: categories
    };
    exportToPDF(exportData);
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <BookOpen className="h-12 w-12 text-indigo-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  바울: 예수님의 택한 그릇
                </h1>
                <p className="text-lg text-gray-600 mt-1">
                  무할례자의 사도 (Apostle to the Gentiles) - 질문과 답변
                </p>
              </div>
            </div>
            <button
              onClick={handleExportPDF}
              className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Download className="h-5 w-5" />
              <span>PDF 내보내기</span>
            </button>
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="질문, 답변, 성경 구절로 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="h-5 w-5" />
              <span>필터</span>
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    카테고리
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">모든 카테고리</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    하위 카테고리
                  </label>
                  <select
                    value={selectedSubcategory}
                    onChange={(e) => setSelectedSubcategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">모든 하위 카테고리</option>
                    {selectedCategory && categories.find(c => c.id === selectedCategory)?.subcategories?.map((sub) => (
                      <option key={sub} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-600">
            총 <span className="font-semibold text-indigo-600">{filteredQuestions.length}</span>개의 질문과 답변을 찾았습니다.
          </p>
        </div>

        {/* Q&A Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-indigo-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    번호
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    카테고리
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    질문
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    답변
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    성경 구절 (KJV)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    성경 구절 (흠정역)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredQuestions.map((qa) => (
                  <tr key={qa.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {qa.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-indigo-600">
                          {getCategoryName(qa.category)}
                        </div>
                        {qa.subcategory && (
                          <div className="text-sm text-gray-500">
                            {qa.subcategory}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-md">
                      <div className="line-clamp-3">{qa.question}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-md">
                      <div className="line-clamp-3">{qa.answer}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                      <div className="line-clamp-2 font-mono text-xs">
                        {qa.kjvVerse}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {qa.book} {qa.chapter}:{qa.verse}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                      <div className="line-clamp-2">
                        {qa.koreanVerse}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* No Results */}
        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <MessageCircle className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">검색 결과가 없습니다</h3>
            <p className="mt-1 text-sm text-gray-500">
              다른 검색어나 필터를 시도해보세요.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">바울: 예수님의 택한 그릇</h3>
            <p className="text-gray-300">
              무할례자의 사도로서의 바울의 사도적 권위에 대한 질문과 답변
            </p>
            <p className="text-sm text-gray-400 mt-2">
              KJV 성경과 흠정역 한글성경전서를 기반으로 한 연구
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}