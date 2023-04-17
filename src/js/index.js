// -- Modal Menu -- //
// Open Modal Menu
document.getElementById("open-modal-menu")
	.addEventListener("click", () => {
		document.getElementById("modal-menu")
			.classList.add("active")
});

// Close Modal Menu
document.getElementById("close-modal-menu")
	.addEventListener("click", () => {
		document.getElementById("modal-menu")
			.classList.remove("active");
});

// Close Modal Menu by press to Esc
window.addEventListener("keydown", (e) => {
	if(e.key === "Escape") {
		document.getElementById("modal-menu")
			.classList.remove("active");
		}
});

// -- Modal Subscribe -- //
// Open Subscribe form
document.getElementById("subscribe-open")
	.addEventListener("click", () => {
		document.getElementById("subscribe-modal")
		.classList.add("active")
});

// Close Subscribe form
document.getElementById("subscribe-close")
	.addEventListener("click", () => {
		document.getElementById("subscribe-modal")
		.classList.remove("active")
});

// Close Subscribe form by press to Esc
window.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		document.getElementById("subscribe-modal")
		.classList.remove("active")
	}
});

// Close Subscribe form by click outside
document.getElementById("subscribe-modal")
	.addEventListener("click", event => {
		if (event._isClickWithInModal) return;
		event.currentTarget.classList.remove("active");
});