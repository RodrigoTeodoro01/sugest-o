document.getElementById('suggestionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simula envio e exibe uma mensagem
    document.getElementById('responseMessage').textContent = 'Obrigado por sua sugestão!';
    this.reset();
});
