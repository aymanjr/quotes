const quotes = [
    {
      text: "Sometimes the winds don't go the way we want to",
      author: "UNKNOWN"
    },
    {
        text: "If you see the lion's canines		Do not think that the lion is smiling.",
        author: "المتنبّي"
    },
    {
        text: "Not all one hopes achieves		Winds blow counter to what ships desire.",
        author: "المتنبّي"
    }
    ,{
        text: "Unity is power",
        author: "UNKNOWN"
      },
      {
        text: "Go with the lesser of two evils.",
        author: "UNKNOWN"
      }

  ];
  
  // Function to generate a random color in hexadecimal format
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Function to change the text color and background color of the body and button
  function changeColors() {
    const randomColor = getRandomColor();
  
    // Change text color and background color
    document.getElementById("text").style.color = randomColor;
    document.getElementById("author").style.color = randomColor;
    document.body.style.backgroundColor = randomColor;
  
    // Change button color
    document.getElementById("new-quote").style.backgroundColor = randomColor;
  }
  
  // Function to display a random quote
  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById("text").textContent = randomQuote.text;
    document.getElementById("author").textContent = randomQuote.author;
    changeColors(); // Call the color change function
  }
  
  // Event listener for the "New Quote" button
  document.getElementById("new-quote").addEventListener("click", displayRandomQuote);
  
  // Initial quote display with random colors
  displayRandomQuote();
  