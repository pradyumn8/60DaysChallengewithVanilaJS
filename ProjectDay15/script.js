const paragraphs = [
    'JavaScript is a versatile and widely-used programming language that is primarily used for building interactive and dynamic websites. It is a client-side scripting language, which means it runs in the user\'s web browser, allowing developers to create responsive and engaging web applications.',

'JavaScript is known for its ease of use and flexibility. It can be embedded directly into HTML documents, making it accessible and easy to implement. This flexibility allows developers to add interactivity to their websites without requiring additional plugins or software.',

'JavaScript provides a wide range of features and tools for manipulating the Document Object Model (DOM) of web pages. This means that developers can dynamically update and modify the content and structure of web pages, creating a seamless user experience.',

'JavaScript is not limited to client-side scripting. With the advent of technologies like Node.js, JavaScript can also be used on the server-side to build scalable and efficient web applications.',

'JavaScript has a vast ecosystem of libraries and frameworks that simplify and accelerate web development. Popular libraries like jQuery and powerful frameworks like React and Angular enable developers to build complex web applications more efficiently.',

'JavaScript supports both object-oriented and functional programming paradigms. This versatility allows developers to choose the approach that best suits their project\'s requirements and coding style.',

'JavaScript has excellent compatibility with modern web browsers, ensuring that web applications built with JavaScript will work seamlessly across various platforms and devices.',

'JavaScript is continually evolving, with new features and updates being regularly introduced to the language. This ensures that developers have access to the latest tools and capabilities for web development.',

'JavaScript also plays a crucial role in web security. Developers can use it to validate user input, prevent cross-site scripting (XSS) attacks, and protect sensitive data from unauthorized access.',

'JavaScript is an essential skill for web developers, and its widespread use in the industry makes it a valuable language to learn for anyone interested in building dynamic and interactive web applications.',
  ];

  const item = document.getElementById("items");
  const dataContainer = document.getElementById("data");

  function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

        while(currentIndex != 0){
            randomIndex = Math.floor(Math.random()*currentIndex);
            currentIndex--;

            [array[currentIndex],array[randomIndex]] = [array[randomIndex],array[currentIndex]
             ];
        }
        return array;
    }
    function generate(){
        if(item.value == 0){
            alert("The value cannot be zero");
        }else if(item.value > paragraphs.length){
            const randomIndex = Math.floor(Math.random() * paragraphs.length);
            dataContainer.innerHTML = `${paragraphs[randomIndex]}`;
        }else{
            const shuffleParagraphs = paragraphs;
            shuffle(paragraphs);

            const selectedParagraphs = shuffleParagraphs.slice(0,item.value);
            const paragraphsHTML = selectedParagraphs.map(paragraphs =>  `<p>${paragraphs}</p>`).join("");
            dataContainer.innerHTML = paragraphsHTML;
        }
    }