window.onload = function () {
	let form = document.getElementsByTagName("form")[0];
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		alert("¡Formulario Enviado! Gracias por participar.");
	});

	document.getElementById("phone").addEventListener("input", function (e) {
		var x = e.target.value
			.replace(/\D/g, "")
			.match(/(\d{0,3})(\d{0,4})(\d{0,4})/);
		e.target.value = !x[2]
			? x[1]
			: "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
	});
};
