document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('#Home h2');
    if (typingElement) {
        const text = typingElement.textContent;
        typingElement.textContent = ''; // Limpa o texto inicial

        let i = 0;
        const speed = 120; // Velocidade da digitação em milissegundos

        function typeWriter() {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else {
                // Adiciona a classe para o cursor piscando quando a digitação terminar
                typingElement.classList.add('typing-cursor');
            }
        }

        typeWriter();
    }
});