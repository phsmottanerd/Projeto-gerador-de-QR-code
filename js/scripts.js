const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector(".qr-form button");
const qrCodeInput = document.querySelector(".qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;
    if (!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando código...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerText = "Código criado!";
    }, { once: true }); // Adiciona { once: true } para garantir que o evento não seja disparado mais de uma vez
}

qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => { // Corrigido para "keydown"
    if (e.code === "Enter") { // Corrigido para "Enter"
        generateQrCode();
    }
});

// Limpar área do QR Code
qrCodeInput.addEventListener("keyup", () => { // Corrigido para "keyup"
    const qrCodeInputValue = qrCodeInput.value; // Definido dentro da função

    if (!qrCodeInputValue) {
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code";
    }
});
