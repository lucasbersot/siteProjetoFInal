document.addEventListener("DOMContentLoaded", () => {
    const relatoForm = document.getElementById("relatoForm");
    const confirmForm = document.getElementById("confirmForm");

    const campos = {
        nome: document.getElementById("nome"),
        email: document.getElementById("email"),
        titulo: document.getElementById("titulo"),
        tipo: document.getElementById("tipo"),
        descricao: document.getElementById("descricao")
    };

    const confCampos = {
        nome: document.getElementById("confNome"),
        email: document.getElementById("confEmail"),
        titulo: document.getElementById("confTitulo"),
        tipo: document.getElementById("confTipo"),
        descricao: document.getElementById("confDescricao"),
        mensagemFinal: document.getElementById("mensagemFinal")
    };

    const confirmBtn = document.getElementById("confirmBtn");
    const cancelBtn = document.getElementById("cancelBtn");

    relatoForm.addEventListener("submit", (e) => {
        e.preventDefault();

        confCampos.nome.textContent = campos.nome.value;
        confCampos.email.textContent = campos.email.value;
        confCampos.titulo.textContent = campos.titulo.value;
        confCampos.tipo.textContent = campos.tipo.value;
        confCampos.descricao.textContent = campos.descricao.value;

        confirmForm.style.display = "block";
        confCampos.mensagemFinal.style.display = "none";
    });

    confirmBtn.addEventListener("click", () => {
        confCampos.mensagemFinal.textContent = "Relato enviado com sucesso! Obrigado por sua contribuição.";
        confCampos.mensagemFinal.style.display = "block";
    });

    cancelBtn.addEventListener("click", () => {
        confirmForm.style.display = "none";
    });
});