import { Question } from "@/types/questions";

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "A passenger arrives at the gate clearly intoxicated. What could happen?",
    imageUrl: "/question-1.png",
    options: [
      "They can board and sleep it off",
      "They can board if they drink some water",
      "They may be refused boarding",
      "They can have one more drink before boarding",
    ],
    correctAnswer: "They may be refused boarding",
  },

  {
    id: 2,
    question: "You are boarding and people are waiting behind you. What should you do?",
    imageUrl: "/question-2.png",
    options: [
      "Take your time, everyone can wait",
      "Quickly stow your things and move out of the aisle",
      "Leave your bags in the aisle",
      "Stand in the aisle until boarding is finished",
    ],
    correctAnswer: "Quickly stow your things and move out of the aisle",
  },

  {
    id: 3,
    question: "You bought duty-free alcohol at the airport. What should you do with it during the flight?",
    imageUrl: "/question-3.png",
    options: [
      "Drink it during the flight",
      "Share it with other passengers",
      "Keep it closed during the flight",
      "Drink it when the cabin crew are not looking",
    ],
    correctAnswer: "Keep it closed during the flight",
  },

  {
    id: 4,
    question: "After using the airplane toilet, what should you do?",
    imageUrl: "/question-4.png",
    options: [
      "Leave the door open",
      "Close the door behind you",
      "Ask another passenger to close it",
      "Leave it open if nobody is waiting",
    ],
    correctAnswer: "Close the door behind you",
  },

  {
    id: 5,
    question: "The plane has landed, but the seat belt sign is still on. What should you do?",
    imageUrl: "/question-5.png",
    options: [
      "Stand up and get your belongings",
      "Open the overhead locker",
      "Stay seated and buckled until the seat belt sign is off",
      "Walk towards the exit",
    ],
    correctAnswer: "Stay seated and buckled until the seat belt sign is off",
  },
];



/* import { Question } from "@/types/questions";

export const quizQuestions: Question[] = [
  {
    id: 1,
    imageUrl: '/marsh-owl.png',
    options: ['Marsh Owl', 'Crimson Chat', 'Shy Ground Dove', 'Albatross'],
    correctAnswer: 'Marsh Owl',
  },
  {
    id: 2,
    imageUrl: '/milky-stork.png',
    options: ['Snoring Rail', 'Dusky Lark', 'Milky Stork', 'Mexican Duck'],
    correctAnswer: 'Milky Stork',
  },
  {
    id: 3,
    imageUrl: '/golden-frontend-woodpecker.png',
    options: ['Golden Frontend Woodpecker', 'Yellow Mountain Warbler', 'Sooty Oystercatcher', 'Moustached Kingfisher'],
    correctAnswer: 'Golden Frontend Woodpecker',
  },
  {
    id: 4,
    imageUrl: '/elegant-tit.png',
    options: ['Hummingbird', 'Eared Dove', 'Blue Jay', 'Elegant Tit'],
    correctAnswer: 'Elegant Tit',
  },
  {
    id: 5,
    imageUrl: '/dark-pewee.png',
    options: ['Musk Duck', 'Dark Pewee', 'Sparrow', 'Finch'],
    correctAnswer: 'Dark Pewee',
  },
] */;