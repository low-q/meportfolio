// scrollUtils.js
export const scrollToNextSection = () => {
    const nextSection = document.getElementById('scroll-target');
    nextSection.scrollIntoView({ behavior: 'smooth' });
};
