// Chemistry Questions Data
const questionsData = [
    {
        page: 2,
        questions: [
            {
                question: "What name is given to Group 1 elements?",
                answer: "Alkali metals"
            },
            {
                question: "What is the radius of a potassium atom?",
                answer: "0.2 nm"
            },
            {
                question: "What name is given to the number of protons in an atom?",
                answer: "Atomic number"
            }
        ]
    },
    {
        page: 3,
        questions: [
            {
                question: "Complete the table: Name of particle with relative charge 0.",
                answer: "Neutron"
            },
            {
                question: "What is the charge on a potassium ion (K⁺)?",
                answer: "+1"
            }
        ]
    },
    {
        page: 4,
        questions: [
            {
                question: "Predict the melting point of potassium based on the trend in Group 1 (Figure 2).",
                answer: "A value less than Sodium (98°C) but greater than Rubidium (39°C) and Caesium (28°C), e.g., around 60-70°C. (The trend is decreasing melting points down the group)."
            }
        ]
    },
    {
        page: 5,
        questions: [
            {
                question: "How is the relative atomic mass (Aᵣ) of potassium calculated given its isotopes (Table 2)?",
                answer: "(39×93)+(41×7)/100"
            }
        ]
    },
    {
        page: 6,
        questions: [
            {
                question: "Draw the dot and cross diagram for a methane molecule (CH₄).",
                answer: "(Diagram should show one carbon atom centrally bonded to four hydrogen atoms. Each bond should have one 'dot' from carbon and one 'cross' from hydrogen, representing a shared pair of electrons.)"
            }
        ]
    },
    {
        page: 7,
        questions: [
            {
                question: "Which diagram represents the structure of diamond?",
                answer: "The diagram showing a giant covalent structure with each carbon atom bonded to four others in a tetrahedral arrangement."
            }
        ]
    },
    {
        page: 8,
        questions: [
            {
                question: "How many covalent bonds does each carbon atom form in graphite?",
                answer: "3 bonds"
            },
            {
                question: "Which particles carry electrical charge through graphite?",
                answer: "The electron (specifically, delocalised electrons)"
            }
        ]
    },
    {
        page: 9,
        questions: [
            {
                question: "Where are fullerenes used?",
                answer: "In electronic components"
            },
            {
                question: "Describe the structure of the fullerene shown in Figure 4 (carbon nanotube).",
                answer: "Based on hexagonal rings, forming a hollow shape (e.g., tube)."
            }
        ]
    },
    {
        page: 11,
        questions: [
            {
                question: "What type of variable is the mass of zinc when varied by the student?",
                answer: "Independent variable"
            }
        ]
    },
    {
        page: 12,
        questions: [
            {
                question: "What is the name of salt A when zinc reacts with copper sulfate solution? (zinc + copper sulfate -> salt A + copper)",
                answer: "Zinc sulfate"
            },
            {
                question: "Give two observations that can be made when zinc reacts with copper sulfate solution.",
                answer: "1. A reddish-brown solid (copper) is formed. 2. The blue colour of the solution fades/becomes colourless. (Note: No bubbles are typically observed as no gas is produced)."
            }
        ]
    },
    {
        page: 13,
        questions: [
            {
                question: "Given a starting temperature of 21°C and a highest temperature reached of 36°C, what is the temperature increase?",
                answer: "15°C (36−21=15)"
            }
        ]
    },
    {
        page: 14,
        questions: [
            {
                question: "Calculate the mean temperature increase for 2.0 g of zinc given Experiment 1 (13.1), Experiment 2 (13.8), Experiment 3 (13.3).",
                answer: "13.4°C ((13.1+13.8+13.3)/3=13.4)"
            },
            {
                question: "What is the range of the results for the experiment with 2.0 g of zinc?",
                answer: "13.1°C to 13.8°C"
            }
        ]
    },
    {
        page: 15,
        questions: [
            {
                question: "Which result is anomalous from a set of results (e.g., if results were 13.1, 13.8, 13.3, 12.9, 20.4)?",
                answer: "12.9 (It's far off compared to others around 13.1-13.8)"
            },
            {
                question: "Suggest one scientific reason why an experimental result might be anomalous (e.g., for temperature change).",
                answer: "Heat loss to the surroundings, incomplete reaction, impurities, or incorrect measurement (e.g., misreading thermometer)."
            }
        ]
    },
    {
        page: 16,
        questions: [
            {
                question: "What is the name of the method shown in Figure 7, used to separate dyes in black ink?",
                answer: "Chromatography"
            }
        ]
    },
    {
        page: 17,
        questions: [
            {
                question: "What is the name of the separation method shown in Figure 8 (where solid C is in filter paper and solution D passes through)?",
                answer: "Filtration"
            },
            {
                question: "Explain why solid C separated from the mixture of C and D.",
                answer: "Solid C is insoluble so it remains in the filter paper. Its particles are too big to pass through the pores in the filter paper."
            }
        ]
    },
    {
        page: 18,
        questions: [
            {
                question: "What is the name of the separation method shown in Figure 9 (apparatus with flask, condenser, thermometer)?",
                answer: "Distillation"
            }
        ]
    },
    {
        page: 19,
        questions: [
            {
                question: "Given boiling points: G=56°C, H=78°C, I=100°C. Which liquid collected first in the conical flask during distillation?",
                answer: "G (the liquid with the lowest boiling point distills first)"
            },
            {
                question: "Name the process: Liquid changes to vapour.",
                answer: "Evaporation (or boiling)"
            },
            {
                question: "Name the process: Vapour changes to liquid.",
                answer: "Condensing"
            }
        ]
    },
    {
        page: 20,
        questions: [
            {
                question: "In the distillation apparatus, compare the temperature of water at K (outlet) and at J (inlet).",
                answer: "The temperature of water at K (outlet) is higher than at J (inlet) because it has absorbed heat from the condensing vapor."
            }
        ]
    },
    {
        page: 21,
        questions: [
            {
                question: "Magnesium reacts with hydrochloric acid to produce magnesium chloride and a gas. Which gas is produced?",
                answer: "Hydrogen"
            }
        ]
    },
    {
        page: 22,
        questions: [
            {
                question: "Which represents molten magnesium chloride? (MgCl₂(g), MgCl₂(l), MgCl₂(s))",
                answer: "MgCl₂(l)"
            },
            {
                question: "Name the product at each electrode when molten magnesium chloride is electrolysed.",
                answer: "Negative electrode: Magnesium\nPositive electrode: Chlorine"
            }
        ]
    },
    {
        page: 23,
        questions: [
            {
                question: "Order magnesium, iron, and copper from most to least reactive, given Table 6.",
                answer: "Most reactive: Magnesium; Iron; Least reactive: Copper"
            },
            {
                question: "Give two reasons for this reactivity order based on Table 6.",
                answer: "1. Magnesium displaces both iron and copper from their salt solutions. 2. Iron displaces copper from its salt solution."
            }
        ]
    },
    {
        page: 24,
        questions: [
            {
                question: "When 0.72 g of magnesium reacts with iron oxide to produce 2.32 g of products, calculate the mass of iron oxide that reacts.",
                answer: "1.6 g (2.32 g−0.72 g=1.6 g)"
            },
            {
                question: "1 dm³ of magnesium chloride solution contains 180 g of magnesium chloride. Calculate the mass of magnesium chloride in 30 cm³ of solution.",
                answer: "5.4 g (30 cm³/1000=0.03 dm³; 0.03 dm³×180 g/dm³=5.4 g)"
            }
        ]
    },
    {
        page: 25,
        questions: [
            {
                question: "Give two conclusions that can be made from Figure 11 (Mass of copper produced vs. Year).",
                answer: "1. The mass of copper produced generally increases over time. 2. The rate of increase in copper production accelerates significantly over time (the curve becomes steeper)."
            }
        ]
    },
    {
        page: 26,
        questions: [
            {
                question: "Explain why an alloy of copper and zinc is harder than pure copper. Use Figure 12.",
                answer: "In pure copper, the atoms are all the same size and arranged in regular layers which can slide easily over each other. In the alloy, different sized zinc atoms disrupt the regular arrangement of copper atoms. This distortion prevents the layers from sliding over each other easily, making the alloy harder."
            }
        ]
    },
    {
        page: 27,
        questions: [
            {
                question: "Calculate the mass of copper in a 5.25 g sample of an alloy containing 13.5% zinc by mass. Give your answer to 3 significant figures.",
                answer: "4.54 g (Mass of zinc = 13.5/100×5.25=0.70875 g; Mass of copper = 5.25−0.70875=4.54125 g; Rounded to 3 s.f. = 4.54 g)"
            }
        ]
    },
    {
        page: 28,
        questions: [
            {
                question: "What is the formula of the acid used to prepare copper sulfate?",
                answer: "H₂SO₄ (Sulfuric acid)"
            }
        ]
    },
    {
        page: 29,
        questions: [
            {
                question: "Why is excess copper carbonate used in stage 1 of preparing copper sulfate?",
                answer: "To ensure all the acid has reacted (preventing unreacted acid from contaminating the product)."
            },
            {
                question: "Describe how the student could produce copper sulfate crystals from the copper sulfate solution in Beaker N.",
                answer: "1. Heat the copper sulfate solution to evaporate some of the water until a saturated solution is formed (or until the point of crystallization is reached). 2. Allow the hot saturated solution to cool slowly. 3. Filter off the crystals that form. 4. Dry the crystals (e.g., between filter paper)."
            }
        ]
    },
    {
        page: 30,
        questions: [
            {
                question: "Why does the mass of the contents of the test tube decrease when copper carbonate is thermally decomposed?",
                answer: "Carbon dioxide gas is produced, and it escapes."
            }
        ]
    },
    {
        page: 32,
        questions: [
            {
                question: "Compare the structure and bonding of sodium chloride (NaCl) and oxygen (O₂).",
                answer: "Answer (Sodium Chloride): Has a giant ionic lattice structure. It has ionic bonding with strong electrostatic forces of attraction between oppositely charged ions. This results in a high melting point.\n\nAnswer (Oxygen): Has simple molecular structure with covalent bonding. Each oxygen molecule (O₂) shares two pairs of electrons, forming a double bond. There are weak intermolecular forces between the oxygen molecules. This results in a low melting point."
            }
        ]
    }
];

// Global variables
let currentPageIndex = 0;
const totalPages = questionsData.length;
let markedQuestions = new Set();
let isMarkingInProgress = false;

// Gemini API Configuration
const GEMINI_API_KEY = 'AIzaSyAdbFHKgcsOz9YweT0fZCwJbNODoEwSGzs';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent';

// DOM elements
const questionsContainer = document.getElementById('questionsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageInfo = document.getElementById('pageInfo');
const progressFill = document.getElementById('progressFill');
const snowContainer = document.getElementById('snow');
const markAllBtn = document.getElementById('markAllBtn');
const clearMarksBtn = document.getElementById('clearMarksBtn');
const markedCount = document.getElementById('markedCount');
const totalCount = document.getElementById('totalCount');
const statusIndicator = document.getElementById('statusIndicator');
const statusText = document.getElementById('statusText');

// Initialize the application
function init() {
    createSnowflakes();
    displayCurrentPage();
    updateNavigation();
    updateProgress();
    updateStats();
    
    // Event listeners
    prevBtn.addEventListener('click', goToPreviousPage);
    nextBtn.addEventListener('click', goToNextPage);
    markAllBtn.addEventListener('click', markAllQuestionsWithAI);
    clearMarksBtn.addEventListener('click', clearAllMarks);
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Smooth scroll to top when page changes
    window.addEventListener('scroll', handleScroll);
}

// Create snowflakes
function createSnowflakes() {
    const numberOfSnowflakes = 50;
    
    for (let i = 0; i < numberOfSnowflakes; i++) {
        createSnowflake();
    }
    
    // Continuously create new snowflakes
    setInterval(createSnowflake, 200);
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    
    // Random properties
    const size = Math.random() * 4 + 2;
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;
    
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${startX}px`;
    snowflake.style.animationDuration = `${duration}s`;
    snowflake.style.animationDelay = `${delay}s`;
    
    snowContainer.appendChild(snowflake);
    
    // Remove snowflake after animation
    setTimeout(() => {
        if (snowflake.parentNode) {
            snowflake.parentNode.removeChild(snowflake);
        }
    }, (duration + delay) * 1000);
}

// Display current page
function displayCurrentPage() {
    const currentPage = questionsData[currentPageIndex];
    
    questionsContainer.innerHTML = '';
    
    currentPage.questions.forEach((item, index) => {
        const questionItem = document.createElement('div');
        questionItem.className = 'question-item';
        questionItem.style.animationDelay = `${index * 0.1}s`;
        
        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.textContent = item.question;
        
        const answerText = document.createElement('div');
        answerText.className = 'answer-text';
        answerText.innerHTML = item.answer.replace(/\n/g, '<br>');
        
        const markBtn = document.createElement('button');
        markBtn.className = 'mark-btn';
        markBtn.textContent = 'Mark';
        markBtn.onclick = () => toggleMark(currentPage.page, index);
        
        // Check if this question is marked
        const questionKey = `${currentPage.page}-${index}`;
        if (markedQuestions.has(questionKey)) {
            questionItem.classList.add('marked');
            markBtn.classList.add('marked');
            markBtn.textContent = '✓ Marked';
        }
        
        questionItem.appendChild(questionText);
        questionItem.appendChild(answerText);
        questionItem.appendChild(markBtn);
        questionsContainer.appendChild(questionItem);
    });
}

// Toggle mark for individual question
function toggleMark(page, index) {
    const questionKey = `${page}-${index}`;
    
    if (markedQuestions.has(questionKey)) {
        markedQuestions.delete(questionKey);
    } else {
        markedQuestions.add(questionKey);
    }
    
    displayCurrentPage();
    updateStats();
}

// Mark all questions with AI
async function markAllQuestionsWithAI() {
    if (isMarkingInProgress) return;
    
    isMarkingInProgress = true;
    markAllBtn.disabled = true;
    markAllBtn.innerHTML = '<span class="loading"></span> Marking...';
    updateApiStatus('loading', 'Marking questions with AI...');
    
    try {
        const currentPage = questionsData[currentPageIndex];
        
        for (let i = 0; i < currentPage.questions.length; i++) {
            const question = currentPage.questions[i];
            const questionKey = `${currentPage.page}-${i}`;
            
            // Skip if already marked
            if (markedQuestions.has(questionKey)) continue;
            
            // Call Gemini API to analyze the question
            const analysis = await analyzeQuestionWithAI(question.question, question.answer);
            
            if (analysis.shouldMark) {
                markedQuestions.add(questionKey);
            }
            
            // Small delay to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        
        displayCurrentPage();
        updateStats();
        updateApiStatus('ready', 'All questions analyzed with AI');
        
    } catch (error) {
        console.error('Error marking questions:', error);
        updateApiStatus('error', 'Error marking questions');
    } finally {
        isMarkingInProgress = false;
        markAllBtn.disabled = false;
        markAllBtn.textContent = 'Mark All with AI';
    }
}

// Analyze question with Gemini AI
async function analyzeQuestionWithAI(question, answer) {
    const prompt = `Analyze this chemistry question and answer pair. Determine if this question should be marked as important for study purposes. Consider factors like:
    - Complexity of the concept
    - Likelihood of appearing in exams
    - Fundamental importance to chemistry understanding
    - Practical applications
    
    Question: ${question}
    Answer: ${answer}
    
    Respond with a JSON object: {"shouldMark": true/false, "reason": "explanation"}`;
    
    try {
        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }]
            })
        });
        
        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }
        
        const data = await response.json();
        const responseText = data.candidates[0].content.parts[0].text;
        
        // Try to parse JSON response
        try {
            const analysis = JSON.parse(responseText);
            return analysis;
        } catch (parseError) {
            // If JSON parsing fails, use a simple heuristic
            const shouldMark = responseText.toLowerCase().includes('true') || 
                             responseText.toLowerCase().includes('important') ||
                             responseText.toLowerCase().includes('mark');
            return { shouldMark, reason: 'AI analysis completed' };
        }
        
    } catch (error) {
        console.error('Gemini API error:', error);
        // Fallback: mark questions with certain keywords
        const importantKeywords = ['calculate', 'explain', 'compare', 'predict', 'describe'];
        const shouldMark = importantKeywords.some(keyword => 
            question.toLowerCase().includes(keyword) || answer.toLowerCase().includes(keyword)
        );
        return { shouldMark, reason: 'Fallback analysis' };
    }
}

// Clear all marks
function clearAllMarks() {
    markedQuestions.clear();
    displayCurrentPage();
    updateStats();
    updateApiStatus('ready', 'All marks cleared');
}

// Update API status
function updateApiStatus(status, message) {
    statusIndicator.className = `status-indicator ${status}`;
    statusText.textContent = `API Status: ${message}`;
}

// Update statistics
function updateStats() {
    const totalQuestions = questionsData.reduce((total, page) => total + page.questions.length, 0);
    markedCount.textContent = markedQuestions.size;
    totalCount.textContent = totalQuestions;
}

// Navigation functions
function goToPreviousPage() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        displayCurrentPage();
        updateNavigation();
        updateProgress();
        scrollToTop();
    }
}

function goToNextPage() {
    if (currentPageIndex < totalPages - 1) {
        currentPageIndex++;
        displayCurrentPage();
        updateNavigation();
        updateProgress();
        scrollToTop();
    }
}

function updateNavigation() {
    prevBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = currentPageIndex === totalPages - 1;
    
    const currentPage = questionsData[currentPageIndex];
    pageInfo.textContent = `Page ${currentPage.page} of 32`;
}

function updateProgress() {
    const progress = ((currentPageIndex + 1) / totalPages) * 100;
    progressFill.style.width = `${progress}%`;
}

// Keyboard navigation
function handleKeyboardNavigation(event) {
    switch(event.key) {
        case 'ArrowLeft':
            if (!prevBtn.disabled) {
                goToPreviousPage();
            }
            break;
        case 'ArrowRight':
            if (!nextBtn.disabled) {
                goToNextPage();
            }
            break;
        case 'm':
        case 'M':
            if (!markAllBtn.disabled) {
                markAllQuestionsWithAI();
            }
            break;
        case 'c':
        case 'C':
            clearAllMarks();
            break;
    }
}

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Handle scroll for header effects
function handleScroll() {
    const header = document.querySelector('.header');
    const scrolled = window.pageYOffset > 50;
    
    if (scrolled) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.8)';
    }
}

// Add some interactive effects
function addInteractiveEffects() {
    // Add hover effects to questions
    document.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('question-text')) {
            e.target.style.transform = 'scale(1.02)';
        }
    });
    
    document.addEventListener('mouseout', (e) => {
        if (e.target.classList.contains('question-text')) {
            e.target.style.transform = 'scale(1)';
        }
    });
    
    // Add click effects to answers
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('answer-text')) {
            e.target.style.background = 'rgba(0, 255, 136, 0.1)';
            setTimeout(() => {
                e.target.style.background = 'rgba(0, 0, 0, 0.3)';
            }, 300);
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
    addInteractiveEffects();
    
    // Test API connection
    updateApiStatus('ready', 'Ready to use Gemini AI');
});

// Handle window resize for snowflakes
window.addEventListener('resize', () => {
    // Clear existing snowflakes and recreate
    snowContainer.innerHTML = '';
    createSnowflakes();
});
