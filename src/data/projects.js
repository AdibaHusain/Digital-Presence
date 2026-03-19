
export const projects=[
    {
        id: 1,
        title: "Marvel Fan Portal",
        description: "An interactive Marvel-themed fan portal featuring smooth animations, dynamic hover effects, and character-specific interactions.Each superhero section uses custom gradients, animated reveals, and mini modals to create a cinematic browsing experience",
        image: "/images/Marvel.png",
        category:"Web Development",
        technologies:["HTML","React","Tailwind CSS","JavaScript"],
        githubUrl:"https://github.com/AdibaHusain/Marvel-Fan-Portal"
    },
    {
        id: 2,
        title: "Task Application",
        description: "A task management application that allows users to create, edit, and delete tasks. Features include drag-and-drop functionality, priority setting, and deadline reminders.",
        image: "/images/Task.png",
        category:"Frontend Development",
        technologies:["HTML","React","CSS","JavaScript"],
        githubUrl:"https://github.com/AdibaHusain/Task-Application"
    },
    {
        id: 3,
        title: "SafeCrowd AI",
        description: "An AI-powered crowd safety system designed to predict and prevent stampedes using real-time crowd monitoring.It combines computer vision, audio emotion analysis, and predictive analytics to detect risk patterns and generate early alerts, enabling proactive crowd management for safer public spaces.",
        image:"/images/SafeCrowdAI.png",
        category:"Machine Learning",
        technologies:["OpenCV","Python", "TensorFlow","Whisper API"],
        githubUrl:"https://github.com/AdibaHusain/SafeCrowdAI"
    },
    {
        id: 4,
        title: "Data Table Web App",
        description: "Developed a responsive web application using React and TypeScript that displays artwork data through a real-world REST API. The application features lazy loading and pagination to efficiently handle large datasets, along with multi-row selection using an interactive data table interface built with PrimeReact.",
        image: "/images/Table.png",
        category:"React+TypeScript",
        technologies:["React","TypeScript","PrimeReact","REST API"],
        githubUrl:"https://github.com/AdibaHusain/React-Artwork-Table"
    },
    {
        id: 5,
        title: "Language Detector",
        description: "Built a machine learning based language detection system capable of identifying text across 22 different languages. Implemented Bag of Words (BoW) for text preprocessing and feature extraction, followed by training classification models using a train-test split to evaluate performance. This project demonstrates core NLP concepts and foundational AI/ML workflows.",
        image: "/images/LanguageDetector.png",
        category: "AI/Machine Learning",
        technologies: ["Python", "NLP", "Machine Learning", "Bag of Words", "Scikit-learn"],
        githubUrl: "https://github.com/AdibaHusain/Language-Detector-using-ML-Concepts"
},
    {
        id: 6,
        title: "Mock Mind AI",
        description: "MockMind AI is a full-stack AI-powered mock interview platform where users answer role-specific questions verbally and receive instant scores, feedback, and a model answer for every response — powered by Groq's LLaMA 3.3 70B model. Built with the MERN stack, it features real-time speech recognition, JWT authentication, and an end-to-end performance report after each session.",
        image: "/images/MockMind AI.png",
        category: "Web Development",
        technologies: ["React", "Web Speech API", "Node+Express", "Mongo DB", "JSON Web Tokens", "Groq LLaMA 3.3 70B"],
        githubUrl: "https://github.com/AdibaHusain/AI-Mock-Interview"

    },
]
export const categories=['All','Web Development','Frontend Development','Machine Learning','React+TypeScript','AI/Machine Learning'] 