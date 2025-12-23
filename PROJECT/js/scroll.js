const bestimg= [
            "image/book10.jpg",
            "image/book9.jpg",
            "image/book1.jpg",
            "image/book2.jpg",
            "image/book4.jpg",
            "image/book5.jpg",
        ];
        const newimg= [
            "image/book3.jpg",
            "image/book6.jpg",
            "image/book7.jpg",
            "image/book8.jpg",
            "image/book10.jpg",
            "image/book1.jpg",
        ];

        function renderBooks(category, image){
            const container= document.getElementById(category);
            container.innerHTML = "";
            image.forEach((src, index) => {
                container.innerHTML += `
                    <div class="book">
                        <a href= "viewbook.html"><img src="${src}" alt="book${index + 1}"></a>
                    </div>

                `;
            });
        }
        renderBooks("best-seller", bestimg);
        renderBooks("new-arrival", newimg);

        function scrollCarousel(containerId, direction) {
            const container = document.getElementById(containerId);
            const scrollAmount = 300; // adjust if needed

            container.scrollBy({
                left: direction * scrollAmount,
                behavior: "smooth"
            });
        }