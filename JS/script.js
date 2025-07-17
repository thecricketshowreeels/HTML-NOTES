function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    const clockElem = document.getElementById('clock');
    if (clockElem) {
        clockElem.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    }
}

// Call updateClock once to initialize, then update every second
updateClock();
setInterval(updateClock, 1000);
 // Get the modal
        var modal = document.getElementById("myModal");

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = document.getElementById("myImg");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        if (img) {
            img.onclick = function () {
                modal.style.display = "block";
                modalImg.src = this.src;
                modalImg.alt = this.alt;
                captionText.innerHTML = this.alt;
                // Focus for accessibility
                modal.focus();
            }
        }

        // Make all images in .content-container open in modal on click
        const contentImages = Array.from(document.querySelectorAll('.content-container img:not(.modal-content)'));

        contentImages.forEach(function(img) {
            img.style.cursor = "pointer";
            img.addEventListener('click', function () {
                modal.style.display = "block";
                modalImg.src = this.src;
                modalImg.alt = this.alt;
                captionText.textContent = this.alt;
                modal.focus();
            });
        });



        // Allow closing modal with Escape key
        document.addEventListener('keydown', function (event) {
            if (event.key === "Escape") {
                modal.style.display = "none";
            }
        });

        // Optional: Close modal when clicking outside the image
        modal.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }

        
          window.addEventListener('DOMContentLoaded', function() {
            document.body.classList.add('page-loaded');
          });
        
