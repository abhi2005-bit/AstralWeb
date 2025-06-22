const container = document.getElementById("articlesContainer");

    async function fetchArticles() {
      try {
        const res = await fetch("https://api.spaceflightnewsapi.net/v4/articles?limit=12");
        const data = await res.json();
        const articles = data.results;

        articles.forEach(article => {
          const div = document.createElement("div");
          div.className = "article";

          div.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.summary.slice(0, 120)}...</p>
            <a href="${article.url}" target="_blank">Read Full Article</a>
          `;

          container.appendChild(div);
        });
      } catch (error) {
        container.innerHTML = "<p>🚨 Error fetching space news.</p>";
        console.error(error);
      }
    }

    fetchArticles();