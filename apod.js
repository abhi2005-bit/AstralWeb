    const apiKey = 'CEpmh5r82MJZA5Z4XTBE3RKb8xnuDWA3tikjyC6c';
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        document.getElementById("title").innerText = data.title;
        document.getElementById("date").innerText = `Date: ${data.date}`;
        document.getElementById("explanation").innerText = data.explanation;

        const mediaContainer = document.getElementById("media");
        if (data.media_type === "image") {
          mediaContainer.innerHTML = `<img src="${data.url}" alt="${data.title}">`;
        } else if (data.media_type === "video") {
          mediaContainer.innerHTML = `<iframe src="${data.url}" frameborder="0" allowfullscreen></iframe>`;
        }
      })
      .catch(error => {
        document.getElementById("title").innerText = "Failed to load APOD.";
        console.error("Error fetching APOD:", error);
      });