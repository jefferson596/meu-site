
document.addEventListener("DOMContentLoaded", () => {
  // Botão da hero section
  const heroBtn = document.getElementById("btnHero");
  if (heroBtn) {
    heroBtn.addEventListener("click", () => {
      alert("Você clicou em Saiba Mais!");
    });
  }

  // Validação do formulário
  const form = document.getElementById("contatoForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
      }
      if (!email.includes("@")) {
        alert("Digite um email válido!");
        return;
      }
      alert("Mensagem enviada com sucesso!");
      form.reset();
    });
  }
});

