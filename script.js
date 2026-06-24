const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const form = document.querySelector("[data-form]");
const statusText = document.querySelector("[data-status]");
const productInput = document.querySelector("[data-product-input]");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  header.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll("[data-product]").forEach((button) => {
  button.addEventListener("click", () => {
    productInput.value = button.dataset.product;
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    productInput.focus({ preventScroll: true });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = String(formData.get("name") || "").trim();

  statusText.textContent = name
    ? `${name}，已收到你的詢問示範。正式上線時可串接 Email、LINE 或購物車系統。`
    : "已收到你的詢問示範。正式上線時可串接 Email、LINE 或購物車系統。";
  form.reset();
});
