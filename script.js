document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelector('.content')
    const slider = document.querySelector('.slider');
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let initalSlideCount = slides.length;
    let isCloningRequired = true;

    function getVisibleSlides() {
        return window.innerWidth >= 768 ? 2 : 1;
    }

    function setSlidesWidth() {
        const containerWidth = content.offsetWidth;
        console.log(containerWidth);
        const margin = 10; // Margin between slides
        const visibleSlides = getVisibleSlides();
        const totalMargin = margin * 2 * (visibleSlides);
        const slideWidth = Math.floor((containerWidth - totalMargin) / visibleSlides);

        slides.forEach(slide => {
            slide.style.width = `${slideWidth}px`;
            slide.style.marginRight = `${margin}px`;
            slide.style.marginLeft = `${margin}px`;
        });

        // slides[slides.length - 1].style.marginRight = '0'; // Remove margin from the last slide

        adjustSliderPosition();
    }

    function adjustSliderPosition() {
        const slideWidth = slides[0].offsetWidth;
        const slideMargin = 10 * 2; // Margin for each slide
        const totalSlideWidth = Math.floor(slideWidth + slideMargin); // Total width including margin
        slider.style.transform = `translateX(-${currentSlide * totalSlideWidth}px)`;
    }

    function cloneSlides() {
        for (let i = 0; i < initalSlideCount; i++) {
            const cloneSlide = slides[i].cloneNode(true);
            slider.appendChild(cloneSlide);
        }
        slides = document.querySelectorAll('.slide'); // Update the slides NodeList
    }

    function updateSlideVisibility() {
        console.log("ouio")
        slides.forEach((slide, index) => {
            if (index >= currentSlide && index < currentSlide + getVisibleSlides()) {
                console.log("vissible")
                slide.classList.remove('hidden');
                slide.classList.add('visible');
            } else {
                slide.classList.remove('visible');
                slide.classList.add('hidden');
            }
        });
    }

    function nextSlide() {
        currentSlide++;

        if ((currentSlide + 1) % initalSlideCount == 0) {
            isCloningRequired = true;
        }

        if (isCloningRequired){
            cloneSlides();
            isCloningRequired = false;
        }

        adjustSliderPosition();
        updateSlideVisibility(); // Update visibility of slides
    }

    window.addEventListener('resize', () => {
        setSlidesWidth();
        isCloningRequired = true; // Reset flag to clone again if needed
        updateSlideVisibility();
    });

    if (isCloningRequired) {
        cloneSlides();
        isCloningRequired = false;
    }
    setSlidesWidth();
    updateSlideVisibility();
    setInterval(nextSlide, 5000);
});
