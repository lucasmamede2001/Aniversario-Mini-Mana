document.addEventListener('DOMContentLoaded', () => {

    // --- Configuração da Música de Fundo ---
    const musicaDeFundo = document.getElementById('musicaDeFundo');
    // Adicione o caminho da sua música aqui.
    // Exemplo: musicaDeFundo.innerHTML = `<source src="sua_musica_de_fundo.mp3" type="audio/mpeg">`;
    // Se não for usar autoplay ou se a música for inserida diretamente no HTML, pode comentar/remover.
    // Para testar, você pode usar uma URL de música de fundo livre de direitos autorais.
    musicaDeFundo.innerHTML = `<source src="caminho/para/sua_musica.mp3" type="audio/mpeg">`;
    musicaDeFundo.load(); // Carrega a música
    // Tenta tocar a música. Em alguns navegadores, autoplay pode ser bloqueado.
    // Uma boa prática é iniciar a música após a primeira interação do usuário.
    // musicaDeFundo.play().catch(error => {
    //     console.log("Autoplay bloqueado. O usuário precisa interagir para a música tocar.");
    // });


    const mensagensCarinhosas = [
        "Feliz aniversário, Maninha! Você é uma das viadas mais zikas que conhecemos e merece toda a felicidade do mundo. 💖",
        "Que a vida te traga muitas alegrias, saúde e aventuras entre crias. Conte sempre com a gente! 🎉",
        "Você tira um sorriso de todes ao seu redor. Esperamos que você esteja sempre ao nosso lado! ✨",
        "Nossa amizade é uma dádiva. Somos imensamente gadicidos por ter você em nossas vidas. Parabéns! 😊",
        "Um bolo de carinho, um copo de alegria e um monte de fofocas. Tudo isso para você! 🎂",
        "Aproveite cada segundo do seu dia! Você merece o the best. ❤️",
        "Que seus sonhos mais lindos se realizem (e que a gente estevajamos neles) e que a felicidade seja sua companheira de jornada. 😊",
        "Por mais anos de risadas, aventuras e conversas muito fooodas. Feliz birthday! 🥳"
    ];

    const baloesContainer = document.querySelector('.baloes-container');

    function criarBalao() {
        const balaoDiv = document.createElement('div');
        balaoDiv.classList.add('balao');

        // IMAGEM DO BALÃO AQUI
        // Substitua 'caminho/para/o/balao.png' pelo caminho real da sua imagem de balão
        const imagemBalao = document.createElement('img');
        imagemBalao.src = "Imagens/balao.png";
        imagemBalao.alt = "Balão de Aniversário";

        balaoDiv.appendChild(imagemBalao);

        // Atribui uma mensagem aleatória
        const mensagemAleatoria = mensagensCarinhosas[Math.floor(Math.random() * mensagensCarinhosas.length)];

        const mensagemSpan = document.createElement('span');
        mensagemSpan.classList.add('mensagem');
        mensagemSpan.innerText = mensagemAleatoria;

        balaoDiv.appendChild(mensagemSpan);

        // Posiciona o balão aleatoriamente na parte inferior
        const leftPosition = Math.random() * 90;
        balaoDiv.style.left = `${leftPosition}vw`;

        // Define a duração e o delay da animação
        const animationDuration = 10 + Math.random() * 5;
        const animationDelay = Math.random() * 5;
        balaoDiv.style.animation = `subirBalao ${animationDuration}s linear ${animationDelay}s infinite`;

        // Adiciona o balão ao container
        baloesContainer.appendChild(balaoDiv);
    }

    // Cria 10 balões
    for (let i = 0; i < 10; i++) {
        criarBalao();
    }
});