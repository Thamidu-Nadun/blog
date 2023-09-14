// Replace 'YOUR_API_KEY' with your actual News API key
const apiKey = '88e34b9254c54312a6dc699e8f354a08';
// Function to fetch and log news data
async function fetchAndLogNews() {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    
    // Log the news articles to the console
    data.articles.forEach((article, index) => {
      // Calculate the element ID based on the index
      const elementId = `breakingNews0${index + 1}`;
      
      // Get the element with the calculated ID
      const element = document.getElementById(elementId);
      
      // Check if the element exists before inserting the title
      if (element) {
        element.innerHTML = article.title;
      }
/*      console.log(`News Article ${index + 1}`);
      console.log(`Title: ${article.title}`);
      console.log(`Description: ${article.description}`);
      console.log(`URL: ${article.url}`);
      console.log('------------------------');*/
    });
  } catch (error) {
    console.error('Error fetching news data:', error);
  }
  console.log(data)
}

// Call the fetchAndLogNews function to retrieve and log news data
fetchAndLogNews();
