document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const blogBox = this.closest('.blog-box');
            const blogText = blogBox.querySelector('.blog-text');

            // Toggle the 'expanded' class for the blog box
            blogBox.classList.toggle('expanded');
            
            // Change the button text based on the state of the box
            if (blogBox.classList.contains('expanded')) {
                this.textContent = "Read Less";
            } else {
                this.textContent = "Read More";
            }
        });
    });
});
