// Menu mobile
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("ouvert");
});

nav.querySelectorAll("a").forEach((lien) => {
  lien.addEventListener("click", () => nav.classList.remove("ouvert"));
});

// Apparition des sections au défilement
const elements = document.querySelectorAll(".reveal");
const observateur = new IntersectionObserver(
  (entrees) => {
    entrees.forEach((entree) => {
      if (entree.isIntersecting) {
        entree.target.classList.add("visible");
        observateur.unobserve(entree.target);
      }
    });
  },
  { threshold: 0.15 }
);
elements.forEach((el) => observateur.observe(el));

// Année automatique dans le pied de page
document.getElementById("annee").textContent = new Date().getFullYear();

// Formulaire de contact : ouvre l'application mail avec le message
const formulaire = document.getElementById("formulaire");
if (formulaire) {
  formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const sujet = encodeURIComponent("Message depuis ton portfolio");
    const corps = encodeURIComponent("Nom : " + nom + "\nEmail : " + email + "\n\n" + message);
    window.location.href = "mailto:oumarabdoulazizkra@gmail.com?subject=" + sujet + "&body=" + corps;
  });
}