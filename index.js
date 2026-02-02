const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // anima só uma vez (mais clean)
            }
        });
    },
    {
        threshold: 0.15
    }
);

reveals.forEach(reveal => observer.observe(reveal));
