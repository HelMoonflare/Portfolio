gsap.registerPlugin(ScrollTrigger);

// Hero (entrada al cargar)
gsap.timeline()
    .from("#titulo-principal", { y: -100, opacity: 0, duration: 1.2, ease: "back.out(1.7)" })
    .from("#subtitulo", { y: 50, opacity: 0, duration: 1 }, "-=0.8");

// Tarjetas con ScrollTrigger (entrada alternada)
gsap.utils.toArray(".card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        x: i % 2 === 0 ? -300 : 300,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: i * 0.2
    });
});

// Botón CTA: pulsación infinita + interacción extra
gsap.to("#btn-cta", {
    scale: 1.05,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// Footer fade-in
gsap.from("#footer", {
    scrollTrigger: {
        trigger: "#footer",
        start: "top bottom",
    },
    y: 50,
    opacity: 0,
    duration: 1.5
});
