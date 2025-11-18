// Insertar el HTML del navbar dentro del contenedor
fetch("src/components/Navbar.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("navbar-container").innerHTML = html;

    const toggle = document.getElementById("navbar-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    toggle.addEventListener("click", () => {
      mobileMenu.style.display =
        mobileMenu.style.display === "flex" ? "none" : "flex";
      mobileMenu.style.flexDirection = "column";
    });
  });
