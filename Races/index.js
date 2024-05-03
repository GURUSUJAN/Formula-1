// Array of image names and corresponding URLs
const images = [
    { name: "Bah01.avif", alt: "Bahrain GP", page: "./Bahrain/index.html", completionDate: "2024-03-02" },
    { name: "sau01.avif", alt: "Saudi GP", page: "./Saudi/index.html", completionDate: "2024-03-09" },
    { name: "aust01.avif", alt: "Australia GP",  page: "./Australia/index.html", completionDate: "2024-03-24" },
    { name: "jap01.avif", alt: "Japan GP",  page: "./Japan/index.html", completionDate: "2024-04-07" },
    { name: "china01.avif", alt: "China GP",  page: "./China/index.html", completionDate: "2024-04-21" },
    { name: "miami01.avif", alt: "Miami GP",  page: "./Miami/index.html", completionDate: "2024-05-05" },
    { name: "imola01.avif", alt: "Imola GP", page: "./Imola/index.html", completionDate: "2024-05-29" },
    { name: "monaco01.avif", alt: "Monaco GP", page: "./Monaco/index.html", completionDate: "2024-05-26" },
    { name: "cana01.avif", alt: "Canada GP",  page: "./Canada/index.html", completionDate: "2024-06-09" },
    { name: "bar01.avif", alt: "Spain GP",  page: "./Spain/index.html", completionDate: "2024-06-23" },
    { name: "aust01.avif", alt: "Austria GP",  page: "./Austria/index.html", completionDate: "2024-06-30" },
    { name: "silverstone.avif", alt: "British GP",  page: "./British/index.html", completionDate: "2024-07-07" },
    { name: "buda01.avif", alt: "Hungary GP", page: "./Hungary/index.html", completionDate: "2024-07-21" },
    { name: "spa01.avif", alt: "Belgium GP", page: "./Belgium/index.html", completionDate: "2024-07-28" },
    { name: "dutch.avif", alt: "Dutch GP",  page: "./Dutch/index.html", completionDate: "2024-08-25" },
    { name: "monza.avif", alt: "Monza GP",  page: "./Monza/index.html", completionDate: "2024-09-01" },
    { name: "baku.avif", alt: "Baku GP",  page: "./Baku/index.html", completionDate: "2024-09-15" },
    { name: "bay.avif", alt: "Singapore GP",  page: "./Bay/index.html", completionDate: "2024-09-22" },
    { name: "cota.avif", alt: "US GP", page: "./Cota/index.html", completionDate: "2024-10-20" },
    { name: "mexico.avif", alt: "Mexico GP", page: "./Mexico/index.html", completionDate: "2024-10-27" },
    { name: "sao.avif", alt: "Brasil GP",  page: "./Brasil/index.html", completionDate: "2024-11-03" },
    { name: "vegas.avif", alt: "Las vegas GP",  page: "./Vegas/index.html", completionDate: "2024-11-23" },
    { name: "lusial.avif", alt: "Qatar GP",  page: "./Lusail/index.html", completionDate: "2024-12-01" },
    { name: "abudhabi.avif", alt: "Abu Dhabi GP",  page: "./Abu/index.html", completionDate: "2024-12-08" }
  ];

  // Function to add cards
  function addCards() {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = ''; // Clear previous cards

    images.forEach(image => {
      const card = document.createElement('a');
      card.href = image.page; // Set the URL for redirection
      card.classList.add('bg-white', 'rounded-lg', 'overflow-hidden', 'shadow-md', 'transform', 'hover:scale-105', 'transition', 'duration-300', 'ease-in-out');

      // Calculate completion date dynamically
      const completionDate = new Date(image.completionDate);
      const today = new Date();

      // Check if the task is completed
      if (today >= completionDate) {
        // Check if the completion date is today
        if (today.toISOString().slice(0, 10) === image.completionDate) {
          card.classList.add('bg-blue-500');
        } else {
          card.classList.add('bg-red-500');
        }
      } else {
        card.classList.add('bg-green-500');
      }

      card.innerHTML = `
        <img src="./images/${image.name}" alt="${image.alt}" class="w-full">
        <div class="p-4">
          <h3 class="text-xl font-bold">${image.alt}</h3>
          
        </div>
      `;
      cardContainer.appendChild(card);
    });
  }

  // Add cards on page load
  window.onload = addCards;