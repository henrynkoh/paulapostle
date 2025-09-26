export interface QuestionAnswer {
  id: number;
  category: string;
  subcategory?: string;
  question: string;
  answer: string;
  kjvVerse: string;
  koreanVerse: string;
  book: string;
  chapter: number;
  verse: number;
  context?: string;
  relatedVerses?: string[];
  tags?: string[];
}

export interface BibleVerse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
  kjvText: string;
  koreanText: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  subcategories?: string[];
}

export interface SearchFilters {
  category?: string;
  subcategory?: string;
  book?: string;
  searchTerm?: string;
  tags?: string[];
}

export interface PaulApostleData {
  questionsAnswers: QuestionAnswer[];
  categories: Category[];
  bibleVerses: BibleVerse[];
  paulLifeEvents: PaulLifeEvent[];
}

export interface PaulLifeEvent {
  id: number;
  title: string;
  description: string;
  year?: number;
  location: string;
  biblicalReference: string;
  kjvText: string;
  koreanText: string;
  significance: string;
}
