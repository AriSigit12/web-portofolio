
// =====================================
// NAVBAR MOBILE
// =====================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("show");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.innerHTML = isOpen
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Tutup menu jika pengguna mengeklik area di luar navbar
    document.addEventListener("click", (event) => {
        const clickedInsideMenu = navMenu.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {
            navMenu.classList.remove("show");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
}

// =====================================
// NAVBAR ACTIVE LINK
// =====================================

const sections = document.querySelectorAll("main section[id]");

function updateActiveLink() {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${currentSection}`
        );
    });
}

window.addEventListener("scroll", updateActiveLink, {
    passive: true
});

updateActiveLink();

// =====================================
// TAHUN FOOTER
// =====================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// =====================================
// MODAL SERTIFIKAT PDF
// =====================================

function openCertificate(pdfPath) {
    const modal = document.getElementById("certificateModal");
    const viewer = document.getElementById("certificateViewer");

    if (!modal || !viewer) return;

    viewer.src = pdfPath;
    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}

function closeCertificate() {
    const modal = document.getElementById("certificateModal");
    const viewer = document.getElementById("certificateViewer");

    if (!modal || !viewer) return;

    modal.classList.remove("active");
    viewer.src = "";

    document.body.style.overflow = "";
}

// Tutup modal ketika mengeklik area luar
const certificateModal = document.getElementById("certificateModal");

if (certificateModal) {
    certificateModal.addEventListener("click", (event) => {
        if (event.target === certificateModal) {
            closeCertificate();
        }
    });
}

// Tutup modal menggunakan tombol Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeCertificate();
    }
});
