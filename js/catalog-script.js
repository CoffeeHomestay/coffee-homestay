ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 100,
  });
  
  ScrollReveal().reveal(
    ".content-catalog h1,",
    { origin: "top" }
  );
  ScrollReveal().reveal(
    "",
    {
      origin: "left",
    }
  );
  
  ScrollReveal().reveal(
    ".content-main-catalog h2,",
    { origin: "bottom" }
  );