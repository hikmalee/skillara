const courseDescriptions = {
  "Content Creation & Design": "Belajar merencanakan konten, membuat desain promosi, dan menyusun kalender konten untuk sebuah brand.",
  "Digital Marketing Dasar": "Kenali audiens, tentukan tujuan pemasaran, pilih kanal digital, dan ukur performa kampanye sederhana.",
  "Copywriting untuk Pemula": "Latihan menulis headline, caption, dan ajakan bertindak yang jelas sesuai target audiens."
};

const courseDialog = document.querySelector("#courseDialog");
const registerDialogBox = document.querySelector("#registerDialogBox");
const toast = document.querySelector("#toast");
let selectedCourse = "";

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function openRegister() {
  courseDialog.close();
  registerDialogBox.showModal();
}

document.querySelectorAll(".course-button").forEach((button) => {
  button.addEventListener("click", () => {
    selectedCourse = button.dataset.course;
    document.querySelector("#dialogTitle").textContent = selectedCourse;
    document.querySelector("#dialogDescription").textContent = courseDescriptions[selectedCourse];
    courseDialog.showModal();
  });
});

document.querySelector("#registerTop").addEventListener("click", openRegister);
document.querySelector("#registerDialog").addEventListener("click", openRegister);
document.querySelector("#closeDialog").addEventListener("click", () => courseDialog.close());
document.querySelector("#closeRegister").addEventListener("click", () => registerDialogBox.close());

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const category = button.dataset.filter;
    document.querySelectorAll(".course-card").forEach((card) => {
      card.hidden = category !== "Semua" && card.dataset.category !== category;
    });
  });
});

document.querySelector("#registerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#fullName").value.trim();
  const email = document.querySelector("#email").value.trim();
  const goal = document.querySelector("#goal").value;
  if (!name || !email) return;
  registerDialogBox.close();
  event.target.reset();
  showToast(`Terima kasih, ${name}! Minatmu untuk belajar (${goal}) tercatat dalam simulasi.`);
});

document.querySelector("#menuToggle").addEventListener("click", () => {
  document.querySelector("#navMenu").classList.toggle("open");
});
document.querySelectorAll("#navMenu a").forEach((link) => {
  link.addEventListener("click", () => document.querySelector("#navMenu").classList.remove("open"));
});
