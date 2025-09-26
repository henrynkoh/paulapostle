import jsPDF from 'jspdf';

export interface PDFExportData {
  questionsAnswers: Array<{
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
  }>;
  categories: Array<{
    id: string;
    name: string;
    description: string;
  }>;
}

export const exportToPDF = (data: PDFExportData) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const lineHeight = 7;
  let yPosition = margin;

  // Helper function to add text with word wrap
  const addText = (text: string, x: number, y: number, maxWidth: number, fontSize: number = 10) => {
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return y + (lines.length * lineHeight);
  };

  // Helper function to check if we need a new page
  const checkNewPage = (requiredSpace: number) => {
    if (yPosition + requiredSpace > pageHeight - margin) {
      doc.addPage();
      yPosition = margin;
      return true;
    }
    return false;
  };

  // Title
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('바울: 예수님의 택한 그릇', pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 15;

  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('무할례자의 사도 (Apostle to the Gentiles) - 질문과 답변', pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 20;

  // Summary
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('연구 개요', margin, yPosition);
  yPosition += 10;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const summaryText = `이 문서는 바울이 예수님의 택한 그릇으로서 무할례자의 사도(이방인의 사도)로서의 역할에 대해 받았던 질문들과 그에 대한 답변을 정리한 것입니다. 
각 질문과 답변은 KJV 성경과 흠정역 한글성경전서의 구절을 포함하고 있으며, 바울의 사도적 권위와 베드로의 할례자의 사도로서의 역할과의 차이점을 명확히 보여줍니다.

총 ${data.questionsAnswers.length}개의 질문과 답변이 포함되어 있습니다.`;
  
  yPosition = addText(summaryText, margin, yPosition, pageWidth - 2 * margin, 10);
  yPosition += 10;

  // Categories overview
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('카테고리 분류', margin, yPosition);
  yPosition += 10;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  data.categories.forEach((category, index) => {
    const categoryText = `${index + 1}. ${category.name}: ${category.description}`;
    yPosition = addText(categoryText, margin, yPosition, pageWidth - 2 * margin, 10);
    yPosition += 3;
  });

  yPosition += 10;

  // Questions and Answers
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('질문과 답변 상세', margin, yPosition);
  yPosition += 15;

  data.questionsAnswers.forEach((qa, index) => {
    // Check if we need a new page
    const requiredSpace = 200; // Estimate space needed
    checkNewPage(requiredSpace);

    // Question number and category
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    const categoryName = data.categories.find(cat => cat.id === qa.category)?.name || qa.category;
    doc.text(`${qa.id}. [${categoryName}${qa.subcategory ? ` - ${qa.subcategory}` : ''}]`, margin, yPosition);
    yPosition += 8;

    // Question
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('질문:', margin, yPosition);
    yPosition += 5;
    
    doc.setFont('helvetica', 'normal');
    yPosition = addText(qa.question, margin, yPosition, pageWidth - 2 * margin, 10);
    yPosition += 8;

    // Answer
    doc.setFont('helvetica', 'bold');
    doc.text('답변:', margin, yPosition);
    yPosition += 5;
    
    doc.setFont('helvetica', 'normal');
    yPosition = addText(qa.answer, margin, yPosition, pageWidth - 2 * margin, 10);
    yPosition += 8;

    // KJV Verse
    doc.setFont('helvetica', 'bold');
    doc.text('KJV 성경 구절:', margin, yPosition);
    yPosition += 5;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    yPosition = addText(`"${qa.kjvVerse}" (${qa.book} ${qa.chapter}:${qa.verse})`, margin, yPosition, pageWidth - 2 * margin, 9);
    yPosition += 8;

    // Korean Verse
    doc.setFont('helvetica', 'bold');
    doc.text('흠정역 한글성경:', margin, yPosition);
    yPosition += 5;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    yPosition = addText(`"${qa.koreanVerse}"`, margin, yPosition, pageWidth - 2 * margin, 9);
    yPosition += 15;

    // Add separator line
    if (index < data.questionsAnswers.length - 1) {
      doc.setLineWidth(0.5);
      doc.line(margin, yPosition, pageWidth - margin, yPosition);
      yPosition += 10;
    }
  });

  // Footer
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text(`페이지 ${i} / ${totalPages}`, pageWidth - 30, pageHeight - 10);
    doc.text('바울: 예수님의 택한 그릇 - 질문과 답변 연구', margin, pageHeight - 10);
  }

  // Save the PDF
  doc.save('paul-apostle-questions-answers.pdf');
};
