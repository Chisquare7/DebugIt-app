const quizData = [
  {
    question: "What is the output of typeof null in JavaScript?",
    options: ["null", "undefined", "object", "number"],
    correct: 2,
  },
  {
    question:
      "Which method is used to add elements to the end of an array in JavaScript?",
    options: ["push()", "pop()", "unshift()", "shift()"],
    correct: 0,
  },
  {
    question: "What does the `super` keyword do in Java?",
    options: [
      "Refers to the parent class",
      "Creates a new instance",
      "Declares a constant",
      "Ends program execution",
    ],
    correct: 0,
  },
  {
    question:
      "Which programming language is primarily used for machine learning?",
    options: ["Python", "C", "JavaScript", "Swift"],
    correct: 0,
  },
  {
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correct: 1,
  },
  // {
  //   question: "What is a pointer in C?",
  //   options: [
  //     "A variable that stores memory addresses",
  //     "A function that returns memory size",
  //     "A special integer type",
  //     "An operator",
  //   ],
  //   correct: 0,
  // },
  // {
  //   question: "Which of the following is NOT an OOP principle?",
  //   options: ["Encapsulation", "Inheritance", "Polymorphism", "Compilation"],
  //   correct: 3,
  // },
  // {
  //   question: "What is the correct way to declare a function in Python?",
  //   options: [
  //     "def myFunction():",
  //     "function myFunction()",
  //     "void myFunction()",
  //     "fn myFunction()",
  //   ],
  //   correct: 0,
  // },
  // {
  //   question: "What is the default value of an uninitialized variable in Java?",
  //   options: ["null", "0", "undefined", "Depends on the type"],
  //   correct: 3,
  // },
  // {
  //   question: "Which symbol is used for single-line comments in C++?",
  //   options: ["//", "/*", "#", "--"],
  //   correct: 0,
  // },
  // {
  //   question: "Which of the following is a dynamically typed language?",
  //   options: ["Java", "C++", "Python", "Rust"],
  //   correct: 2,
  // },
  // {
  //   question: "How do you declare a constant in JavaScript?",
  //   options: [
  //     "const x = 10;",
  //     "var x = 10;",
  //     "let x = 10;",
  //     "constant x = 10;",
  //   ],
  //   correct: 0,
  // },
  // {
  //   question: "Which of these is NOT a JavaScript framework?",
  //   options: ["React", "Vue", "Django", "Angular"],
  //   correct: 2,
  // },
  // {
  //   question: "Which keyword is used to define a class in Python?",
  //   options: ["class", "define", "struct", "object"],
  //   correct: 0,
  // },
  // {
  //   question: "Which of the following is a functional programming language?",
  //   options: ["Java", "C++", "Haskell", "Swift"],
  //   correct: 2,
  // },
  // {
  //   question: "What is the purpose of the 'main' function in C?",
  //   options: [
  //     "It defines the starting point of execution",
  //     "It declares global variables",
  //     "It stores all functions",
  //     "It executes after all functions",
  //   ],
  //   correct: 0,
  // },
  // {
  //   question: "Which data structure uses LIFO (Last In, First Out)?",
  //   options: ["Queue", "Stack", "Array", "Linked List"],
  //   correct: 1,
  // },
  // {
  //   question: "Which operator is used to access members of a struct in C?",
  //   options: [".", "->", ":", "::"],
  //   correct: 0,
  // },
  // {
  //   question: "What does the `break` statement do in a loop?",
  //   options: [
  //     "Exits the loop immediately",
  //     "Skips the next iteration",
  //     "Continues execution",
  //     "Stops execution of the program",
  //   ],
  //   correct: 0,
  // },
  // {
  //   question: "Which Python library is used for data analysis?",
  //   options: ["Pandas", "NumPy", "TensorFlow", "Flask"],
  //   correct: 0,
  // },
  // {
  //   question: "Which of the following is an immutable data type in Python?",
  //   options: ["List", "Set", "Tuple", "Dictionary"],
  //   correct: 2,
  // },
  // {
  //   question: "Which symbol is used to denote a reference in C++?",
  //   options: ["&", "*", "#", "@ "],
  //   correct: 0,
  // },
  // {
  //   question: "What is the default access specifier in Java classes?",
  //   options: ["public", "private", "protected", "package-private"],
  //   correct: 3,
  // },
  // {
  //   question: "Which function is used to allocate memory dynamically in C?",
  //   options: ["malloc()", "alloc()", "new", "allocate()"],
  //   correct: 0,
  // },
  // {
  //   question: "What does the `static` keyword mean in Java?",
  //   options: [
  //     "Defines a class method",
  //     "Defines a local variable",
  //     "Creates a constant",
  //     "Defines a private member",
  //   ],
  //   correct: 0,
  // },
  // {
  //   question: "Which of the following is a compiled language?",
  //   options: ["Python", "JavaScript", "C", "Ruby"],
  //   correct: 2,
  // },
  // {
  //   question: "What is the primary purpose of the `lambda` function in Python?",
  //   options: [
  //     "Define anonymous functions",
  //     "Declare global variables",
  //     "Manage memory",
  //     "Execute threads",
  //   ],
  //   correct: 0,
  // },
  // {
  //   question: "Which language is primarily used for game development?",
  //   options: ["Java", "C++", "Python", "PHP"],
  //   correct: 1,
  // },
  // {
  //   question: "Which language uses the concept of garbage collection?",
  //   options: ["C", "C++", "Python", "Assembly"],
  //   correct: 2,
  // },
  // {
  //   question: "What is the output of `2 ** 3` in Python?",
  //   options: ["5", "6", "8", "9"],
  //   correct: 2,
  // },
  // {
  //   question: "Which keyword is used to return a value in JavaScript?",
  //   options: ["return", "yield", "output", "send"],
  //   correct: 0,
  // },
  // {
  //   question: "Which language is known for its use in embedded systems?",
  //   options: ["Python", "C", "JavaScript", "Ruby"],
  //   correct: 1,
  // },
  // {
  //   question:
  //     "Which feature allows multiple functions to have the same name in C++?",
  //   options: ["Encapsulation", "Polymorphism", "Overloading", "Inheritance"],
  //   correct: 2,
  // },
  // {
  //   question: "What is the default value of a boolean variable in Java?",
  //   options: ["true", "false", "null", "0"],
  //   correct: 1,
  // },
  // {
  //   question: "Which keyword is used to define an interface in Java?",
  //   options: ["interface", "class", "abstract", "implements"],
  //   correct: 0,
  // },
  // {
  //   question: "Which of the following is NOT a valid variable name in Python?",
  //   options: ["_name", "2name", "name_2", "Name"],
  //   correct: 1,
  // },
  // {
  //   question: "Which of the following is NOT a primitive data type in Java?",
  //   options: ["int", "String", "boolean", "char"],
  //   correct: 1,
  // },
  // {
  //   question: "What is the output of typeof null in JavaScript?",
  //   options: ["null", "undefined", "object", "number"],
  //   correct: 2,
  // },
  // {
  //   question:
  //     "Which method is used to add elements to the end of an array in JavaScript?",
  //   options: ["push()", "pop()", "unshift()", "shift()"],
  //   correct: 0,
  // },
  // {
  //   question: "What does the `super` keyword do in Java?",
  //   options: [
  //     "Refers to the parent class",
  //     "Creates a new instance",
  //     "Declares a constant",
  //     "Ends program execution",
  //   ],
  //   correct: 0,
  // },
  // {
  //   question:
  //     "Which programming language is primarily used for machine learning?",
  //   options: ["Python", "C", "JavaScript", "Swift"],
  //   correct: 0,
  // },
  // {
  //   question: "What is the time complexity of binary search?",
  //   options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
  //   correct: 1,
  // },
  // {
  //   question: "What is a pointer in C?",
  //   options: [
  //     "A variable that stores memory addresses",
  //     "A function that returns memory size",
  //     "A special integer type",
  //     "An operator",
  //   ],
  //   correct: 0,
  // },
  // {
  //   question: "Which of the following is NOT an OOP principle?",
  //   options: ["Encapsulation", "Inheritance", "Polymorphism", "Compilation"],
  //   correct: 3,
  // },
  // {
  //   question: "What is the correct way to declare a function in Python?",
  //   options: [
  //     "def myFunction():",
  //     "function myFunction()",
  //     "void myFunction()",
  //     "fn myFunction()",
  //   ],
  //   correct: 0,
  // },
  // {
  //   question: "What is the default value of an uninitialized variable in Java?",
  //   options: ["null", "0", "undefined", "Depends on the type"],
  //   correct: 3,
  // },
  // {
  //   question: "Which symbol is used for single-line comments in C++?",
  //   options: ["//", "/*", "#", "--"],
  //   correct: 0,
  // },
  // {
  //   question: "Which of the following is a dynamically typed language?",
  //   options: ["Java", "C++", "Python", "Rust"],
  //   correct: 2,
  // },
  // {
  //   question: "How do you declare a constant in JavaScript?",
  //   options: [
  //     "const x = 10;",
  //     "var x = 10;",
  //     "let x = 10;",
  //     "constant x = 10;",
  //   ],
  //   correct: 0,
  // },
  // {
  //   question: "Which keyword is used to define a class in Python?",
  //   options: ["class", "define", "struct", "object"],
  //   correct: 0,
  // },
];
