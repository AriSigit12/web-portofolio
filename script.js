
// Toggle menu navigasi pada perangkat mobile
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.innerHTML = isOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Tutup menu setelah link diklik
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Menentukan menu aktif berdasarkan posisi scroll
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
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveLink);

// Tahun footer otomatis
document.getElementById("year").textContent = new Date().getFullYear();

// MEMBUKA SERTIFIKAT PDF
function openCertificate(pdfPath) {
    const modal = document.getElementById("certificateModal");
    const viewer = document.getElementById("certificateViewer");
    const download = document.getElementById("certificateDownload");

    viewer.src = pdfPath;
    download.href = pdfPath;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// MENUTUP MODAL
function openCertificate(pdfPath) {
    const modal = document.getElementById("certificateModal");
    const viewer = document.getElementById("certificateViewer");

    viewer.src = pdfPath;
    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}

function closeCertificate() {
    const modal = document.getElementById("certificateModal");
    const viewer = document.getElementById("certificateViewer");

    modal.classList.remove("active");
    viewer.src = "";

    document.body.style.overflow = "";
}

document.getElementById("certificateModal").addEventListener("click", function(event) {
    if (event.target === this) {
        closeCertificate();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeCertificate();
    }
});