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