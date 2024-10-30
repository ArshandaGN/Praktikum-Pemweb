const form = document.getElementById("formPegawai");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const namaInput = form.querySelector("input[name='nama']");
  const jabatanInput = form.querySelector("input[name='jabatan']");

  let errorMessages = form.querySelectorAll(".error-message");
  errorMessages.forEach(error => error.remove());

  let isValid = true;

  if (namaInput.value.trim() === "") {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Nama lengkap harus diisi terlebih dahulu";
    errorMessage.classList.add("error-message");
    namaInput.parentNode.appendChild(errorMessage);
    isValid = false;
  }

  if (jabatanInput.value.trim() === "") {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Jabatan harus diisi terlebih dahulu";
    errorMessage.classList.add("error-message");
    jabatanInput.parentNode.appendChild(errorMessage);
    isValid = false;
  }

  if (isValid) {
    alert("Form berhasil disubmit!");
    form.submit();
  }
});
