// Dynamic content fade in
const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hidden = document.querySelectorAll('.hideA')
hidden.forEach((el) => observer.observe(el));