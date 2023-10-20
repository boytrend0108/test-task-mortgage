const scrollAnim = (func, id) => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const callback = function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        func()
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  const target = document.querySelector(`#${id}`);
  observer.observe(target);
}

export default scrollAnim