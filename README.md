# 🙏 Jesus Christ: Questions & Answers - Complete Collection

A comprehensive Next.js web application featuring all questions asked to Jesus Christ with His responses, presented in both King James Version (KJV) and Korean 흠정역 (Heumjeongyeok) translations.

## 🌟 Features

### 📊 Complete Q&A Collection
- **39+ Questions and Answers** from all four Gospels
- **Dual Language Support**: KJV English + Korean 흠정역
- **Comprehensive Categories**: 18+ theological themes
- **Detailed Context**: Questioner, setting, and biblical references

### 🎯 Categories Covered
- **Salvation & Spiritual Rebirth** - Born again, spiritual transformation
- **Eternal Life** - Inheriting eternal life, kingdom teachings
- **Living Water & True Worship** - Spiritual satisfaction, worship principles
- **Messiahship & Identity** - Peter's confession, divine identity
- **Authority & Blasphemy** - Divine authority, forgiveness of sins
- **Healing & Faith** - Miracles, faith-based healing
- **Kingdom & Greatness** - Kingdom principles, service
- **Marriage & Divorce** - Biblical marriage principles
- **Sabbath & Law** - Sabbath observance, legal questions
- **Resurrection & Theology** - Resurrection teachings, theological concepts
- **Law & Commandments** - Greatest commandments, love principles
- **Kingship & Trial** - Trial before Pilate, kingship confirmation
- **Truth & Philosophy** - Philosophical questions, truth concepts
- **Salvation & Cross** - Cross teachings, last-minute salvation
- **Father & Son Relationship** - Divine relationships, unity
- **Way, Truth & Life** - Exclusive path to God
- **Death & Resurrection** - Power over death, eternal life

### 🖥️ User Interface
- **Table View**: Comprehensive table with filtering and search
- **Detailed Study View**: Expandable cards with in-depth analysis
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Beautiful Tailwind CSS styling
- **Search & Filter**: Find specific questions by category, gospel, or keywords

### 📖 Biblical Accuracy
- **King James Version (KJV)**: Complete English text
- **Korean 흠정역**: Authoritative Korean translation
- **Exact References**: Chapter and verse citations
- **Cross-References**: Connected biblical passages

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jesuschrist
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
jesuschrist/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main table view
│   │   ├── detailed/
│   │   │   └── page.tsx      # Detailed study view
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   └── Navigation.tsx    # Navigation component
│   └── data/
│       └── jesusQA.ts        # Complete Q&A dataset
├── public/                   # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 📊 Data Structure

Each Q&A entry includes:

```typescript
interface JesusQA {
  id: number;
  category: string;           // Main theological category
  subcategory: string;        // Specific subcategory
  questioner: string;         // Who asked the question
  context: string;            // Setting and circumstances
  question: string;           // Short question summary
  kjvQuestion: string;        // Complete KJV question
  koreanQuestion: string;     // Korean translation
  answer: string;             // Short answer summary
  kjvAnswer: string;          // Complete KJV answer
  koreanAnswer: string;       // Korean translation
  kjvReference: string;       // KJV reference (e.g., "John 3:4-5")
  koreanReference: string;    // Korean reference
  gospel: 'Matthew' | 'Mark' | 'Luke' | 'John';
  chapter: number;
  verse: number;
  theme: string;              // Main theme
  application: string;        // Modern life application
}
```

## 🎨 Key Features

### Search & Filter
- **Text Search**: Search questions, answers, or people
- **Category Filter**: Filter by theological themes
- **Gospel Filter**: Filter by specific Gospel
- **Real-time Results**: Instant filtering and search

### Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Touch-Friendly**: Easy navigation on mobile devices
- **Accessible**: WCAG compliant design

### Performance
- **Fast Loading**: Optimized Next.js build
- **Client-Side Filtering**: No server requests for filtering
- **Efficient Rendering**: React best practices

## 📚 Sample Q&A Entries

### 1. Nicodemus - Born Again (John 3:4-5)
**Question**: "How can a man be born when he is old?"
**Answer**: "Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God."

### 2. Rich Young Ruler - Eternal Life (Matthew 19:16-21)
**Question**: "What good thing shall I do, that I may have eternal life?"
**Answer**: "If thou wilt be perfect, go and sell that thou hast, and give to the poor, and thou shalt have treasure in heaven: and come and follow me."

### 3. Samaritan Woman - Living Water (John 4:9-14)
**Question**: "How is it that thou, being a Jew, askest drink of me, which am a woman of Samaria?"
**Answer**: "If thou knewest the gift of God, and who it is that saith to thee, Give me to drink; thou wouldest have asked of him, and he would have given thee living water."

## 🔧 Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Emoji and Unicode symbols
- **Deployment**: Vercel-ready

## 📖 Biblical Sources

- **King James Version (KJV)**: 1611 Authorized Version
- **Korean 흠정역**: Authoritative Korean translation
- **Cross-References**: Multiple biblical concordances
- **Theological Accuracy**: Verified against multiple sources

## 🤝 Contributing

This project is a comprehensive study resource. Contributions are welcome for:
- Additional Q&A entries
- Improved translations
- UI/UX enhancements
- Documentation improvements

## 📄 License

This project is created for educational and spiritual study purposes. All biblical text is in the public domain.

## 🙏 Purpose

This application serves as a comprehensive resource for:
- **Bible Study**: Complete reference for Jesus' Q&A sessions
- **Theological Research**: Systematic study of Jesus' teachings
- **Spiritual Growth**: Practical applications for modern life
- **Academic Study**: Research and educational purposes
- **Cross-Cultural Understanding**: Bilingual biblical study

## 📞 Support

For questions or support regarding this application, please refer to the documentation or create an issue in the repository.

---

**Built with ❤️ for the study of Jesus Christ's teachings and responses**