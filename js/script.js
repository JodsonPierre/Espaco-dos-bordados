// Script simples para interações básicas
document.addEventListener('DOMContentLoaded', () => {
    console.log("Espaço dos Bordados carregado com sucesso.");

    // Alerta ao clicar em encomendar (exemplo de funcionalidade)
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert("Obrigado pelo interesse! Entre em contacto via WhatsApp para personalizar a sua encomenda.");
        });
    });
});