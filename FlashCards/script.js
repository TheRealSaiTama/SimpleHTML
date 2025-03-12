const flipper = document.querySelector(".flipper");
const questionEl = document.querySelector(".question");
const answerEl = document.querySelector(".answer");
const progressFill = document.querySelector(".progress-fill");
const progressPercent = document.querySelector(".progress-percent");
const cardCount = document.querySelector(".card-count");
const showAnswerBtn = document.querySelector(".show-answer");
const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

// Extended flashcard content with more demo questions
const flashcards = [
  {
    question: "What is the difference between var, let, and const?",
    answer:
      "var is function-scoped and can be redeclared, let is block-scoped and can be reassigned, const is block-scoped and cannot be reassigned.",
  },
  {
    question: "What does HTML stand for?",
    answer: "HyperText Markup Language.",
  },
  {
    question: "What is the purpose of CSS?",
    answer:
      "CSS (Cascading Style Sheets) is used to style and layout web pages.",
  },
  {
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that retains access to its outer scope's variables even after the outer function has finished executing.",
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    answer:
      "== checks for equality with type coercion, while === checks for strict equality without type coercion.",
  },
  {
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces, particularly single-page applications.",
  },
  {
    question: "What is the virtual DOM in React?",
    answer:
      "The virtual DOM is a lightweight copy of the actual DOM that React uses to improve performance by minimizing direct manipulation of the DOM.",
  },
  {
    question: "What is a RESTful API?",
    answer:
      "A RESTful API is an architectural style for an application program interface that uses HTTP requests to access and manipulate data.",
  },
  {
    question: "What is SQL?",
    answer:
      "SQL (Structured Query Language) is a programming language used to manage and manipulate relational databases.",
  },
  {
    question: "What is the box model in CSS?",
    answer:
      "The CSS box model describes the rectangular boxes generated for elements in the document tree, consisting of content, padding, border, and margin areas.",
  },
];

const total = flashcards.length;
let currentIndex = 0;
let isFlipped = false;

function updateCard() {
  const card = flashcards[currentIndex];
  questionEl.textContent = card.question;
  answerEl.textContent = card.answer;

  // Update progress indicators
  const progress = ((currentIndex + 1) / total) * 100;
  progressFill.style.width = `${progress}%`;
  progressPercent.textContent = `${Math.round(progress)}%`;
  cardCount.textContent = `${currentIndex + 1} of ${total}`;

  // Reset card to question side when changing cards
  flipper.classList.remove("flipped");
  isFlipped = false;

  // Update show answer button text
  updateShowAnswerButtonText();
}

function updateShowAnswerButtonText() {
  showAnswerBtn.textContent = isFlipped ? "SHOW QUESTION" : "SHOW ANSWER";
}

// Toggle flip when clicking the card
flipper.addEventListener("click", () => {
  flipper.classList.toggle("flipped");
  isFlipped = !isFlipped;
  updateShowAnswerButtonText();
});

// Toggle flip when clicking the show answer button
showAnswerBtn.addEventListener("click", () => {
  flipper.classList.toggle("flipped");
  isFlipped = !isFlipped;
  updateShowAnswerButtonText();
});

previousBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCard();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < total - 1) {
    currentIndex++;
    updateCard();
  }
});

// Initial update
updateCard();
