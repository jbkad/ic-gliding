export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behaviour: "smooth",
        delay: 1
    });
};

export const navigateTo = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
    });
};