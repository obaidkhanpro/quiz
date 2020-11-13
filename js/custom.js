let questions = [
    {
      id: 1,
      question: "What is the full form of RAM ?",
      answer: "Random Access Memory",
      options: [
        "Random Access Memory",
        "Randomely Access Memory",
        "Run Aceapt Memory",
        "None of these"
      ]
    },
    {
      id: 2,
      question: "What is the full form of CPU?",
      answer: "Central Processing Unit",
      options: [
        "Central Program Unit",
        "Central Processing Unit",
        "Central Preload Unit",
        "None of these"
      ]
    },
    {
      id: 3,
      question: "What is the full form of E-mail",
      answer: "Electronic Mail",
      options: [
        "Electronic Mail",
        "Electric Mail",
        "Engine Mail",
        "None of these"
      ]
    },
    {
      id:4,
      question : "2 + 2 = ",
      answer : "4",
      options : [
          "5",
          "4",
          "8",
          "10"
      ]
  
  },
  {
    id:5,
    question : "What is the national Sport of Pakistan ?",
    answer : "Hockey",
    options : [
        "Cricket",
        "Hockey",
        "Volley Ball",
        "Ludo"
    ]
  
  },
  {
    id:6,
    question : "Who is the presidet of Pakistan nowadays ?",
    answer : "Arif Alvi",
    options : [
        "Imran Khan",
        "Saeed Ghani",
        "Sheikh Rasheed",
        "Arif Alvi"
    ]
  
  },
  {
    id:7,
    question : "The term ‘Computer’ is derived from____?",
    answer : "Latin",
    options : [
        "Latin",
        "German",
        "French",
        "Arabic"
    ]
  
  },
  {
    id:8,
    question : "3 + 3 - 4 ?",
    answer : " 2",
    options : [
        "3",
        " 4",
        "2",
        "0"
    ]
  
  },
  {
    id:10,
    question : "Which is the color of banana?",
    answer : "Yellow",
    options : [
        "green",
        "blue",
        "Yellow",
        "purple"
    ]
  
  },
  {
    id:11,
    question : "Which letter comes between X and Z ?",
    answer : "Y",
    options : [
        "U",
        "V",
        "Y",
        "O"
    ]
  
  },
  {
          id:11,
          question : "What is the color of mango ?",
          answer : "Yellow",
          options : [
              "Yellow",
              "Green",
              "Blue",
              "White"
          ]
  
      },
      {
        id:12,
        question : "WWW stands for_____?",
        answer : "World Wide Web",
        options : [
            "Web World Wide",
            "Wide World Web",
            "World Wide Web",
            "World Whole Web"
        ]
  
    },
    {
      id:13,
      question : "Gigabyte is equal to ____?",
      answer : "1024 megabytes",
      options : [
          "1024 bits",
          "1000 megabytes",
          "1024 kilobytes",
          "1024 megabytes"
      ]
  
  },
  {
    id:14,
    question : "The brain of any computer system is_____?",
    answer : "CPU",
    options : [
        "ALU",
        "CPU",
        "Control unit",
        "Memory"
    ]
  
  },
  {
    id:15,
    question : "Which of the following are components of Central Processing Unit (CPU) ?",
    answer : "Arithmetic logic unit, Control unit",
    options : [
        "Arithmetic logic unit, Mouse",
        "Arithmetic logic unit, Control unit",
        "Arithmetic logic unit, Integrated Circuits",
        "Control Unit, Monitor"
    ]
  
  },
  {
    id:16,
    question : "CD-ROM stands for______?",
    answer : "Compact Disk Read Only Memory",
    options : [
        "Compactable Disk Read Only Memory",
        "Compact Data Read Only Memory",
        "Compactable Read Only Memory",
        "Compact Disk Read Only Memory"
    ]
  
  },
  {
    id:17,
    question : "ALU is______?",
    answer : "Arithmetic Logic Unit",
    options : [
        "Arithmetic Logic Unit",
        "Array Logic Unit",
        "Application Logic Unit",
        "None of above"
    ]
  
  },
  {
    id:18,
    question : "VGA is______?",
    answer : "Video Graphics Array",
    options : [
        "Video Graphics Array",
        "Visual Graphics Array",
        "Volatile Graphics Array",
        "Video Graphics Adapter"
    ]
  
  },
  {
    id:19,
    question : "A CPU contains_____?",
    answer : "a control unit and an arithmetic logic unit",
    options : [
        "a card reader and a printing device",
        "an analytical engine and a control unit",
        "a control unit and an arithmetic logic unit",
        "an arithmetic logic unit and a card reader"
    ]
  
  },
  {
    id:20,
    question : "The first computers were programmed using_____?",
    answer : "Machine language",
    options : [
        "Assembly language",
        "Machine language",
        "Source code",
        "Object code"
    ]
  
  },
  
  
  
  
  
  ];
  
  let question_count = 0;
  let points = 0;
  
  window.onload = function() {
    show(question_count);
  
  };
  
  function next() {
  
     
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "end.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
      points += 10;
      sessionStorage.setItem("points", points);
    }
    console.log(points);
  
    question_count++;
    show(question_count);
  }
  
  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }