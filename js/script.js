// Selecionando todos os elementos necessários
const start_btn = document.querySelector(".start_btn button");
const article_btn = document.querySelector(".article_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// Função para embaralhar as opções
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
    return array;
}

// Se o botão startQuiz for clicado
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); // Mostrar a caixa de informações
}

article_btn.onclick = () => {
    window.open("https://itsrio.org/wp-content/uploads/2017/08/sergio-fakenews.pdf", "_blank");
};

// Se o botão exitQuiz for clicado
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // Esconder a caixa de informações
}

// Se o botão continueQuiz for clicado
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // Esconder a caixa de informações
    quiz_box.classList.add("activeQuiz"); // Mostrar a caixa de quiz
    showQuetions(0); // Chamando a função showQuetions
    queCounter(1); // Passando 1 parâmetro para queCounter
    startTimer(30); // Chamando a função startTimer
    startTimerLine(0); // Chamando a função startTimerLine
}

let timeValue = 30; // Tempo ajustado para 30 segundos
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// Se o botão restartQuiz for clicado
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); // Mostrar a caixa de quiz
    result_box.classList.remove("activeResult"); // Esconder a caixa de resultados
    timeValue = 30; // Tempo ajustado para 30 segundos
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); // Chamando a função showQuetions
    queCounter(que_numb); // Passando que_numb para queCounter
    clearInterval(counter); // Limpando o contador
    clearInterval(counterLine); // Limpando o contador da linha
    startTimer(timeValue); // Chamando a função startTimer
    startTimerLine(widthValue); // Chamando a função startTimerLine
    timeText.textContent = "Tempo Restante"; // Alterando o texto para "Tempo Restante"
    next_btn.classList.remove("show"); // Escondendo o botão de próxima pergunta
}

// Se o botão quitQuiz for clicado
quit_quiz.onclick = () => {
    window.location.reload(); // Recarregar a página
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// Se o botão Next Que for clicado
next_btn.onclick = () => {
    if(que_count < questions.length - 1){ // Se o número de perguntas for menor que o total de perguntas
        que_count++; // Incrementar o número da pergunta
        que_numb++; // Incrementar o número da pergunta na interface
        showQuetions(que_count); // Chamando a função showQuetions
        queCounter(que_numb); // Passando que_numb para queCounter
        clearInterval(counter); // Limpando o contador
        clearInterval(counterLine); // Limpando o contador da linha
        startTimer(timeValue); // Chamando a função startTimer
        startTimerLine(widthValue); // Chamando a função startTimerLine
        timeText.textContent = "Tempo Restante"; // Alterando o texto para "Tempo Restante"
        next_btn.classList.remove("show"); // Escondendo o botão de próxima pergunta
    }else{
        clearInterval(counter); // Limpando o contador
        clearInterval(counterLine); // Limpando o contador da linha
        showResult(); // Chamando a função showResult
    }
}

// Obtendo perguntas e opções do array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    // Criando uma nova tag span e div para a pergunta
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    que_text.innerHTML = que_tag; // Adicionando a tag span dentro de que_tag
    
    // Embaralhando as opções de resposta
    let shuffledOptions = shuffleArray([...questions[index].options]);

    // Gerando as opções embaralhadas
    let option_tag = '';
    for (let i = 0; i < shuffledOptions.length; i++) {
        option_tag += '<div class="option"><span>' + shuffledOptions[i] + '</span></div>';
    }

    option_list.innerHTML = option_tag; // Adicionando as opções embaralhadas

    const option = option_list.querySelectorAll(".option");

    // Definindo o atributo onclick para todas as opções disponíveis
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

// Criando tags div novas para os ícones
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

// Se o usuário clicar em uma opção
function optionSelected(answer){
    clearInterval(counter); // Limpando o contador
    clearInterval(counterLine); // Limpando o contador da linha
    let userAns = answer.textContent; // Obtendo a opção selecionada pelo usuário
    let correcAns = questions[que_count].answer; // Obtendo a resposta correta do array
    const allOptions = option_list.children.length; // Obtendo o número de opções

    if(userAns == correcAns){ // Se a opção selecionada for igual à resposta correta
        userScore += 1; // Incrementar a pontuação do usuário
        answer.classList.add("correct"); // Adicionar a cor verde à opção correta
        answer.insertAdjacentHTML("beforeend", tickIconTag); // Adicionar o ícone de marca de seleção à opção correta
        console.log("Resposta Correta");
        console.log("Suas respostas corretas = " + userScore);
    }else{
        answer.classList.add("incorrect"); // Adicionar a cor vermelha à opção incorreta
        answer.insertAdjacentHTML("beforeend", crossIconTag); // Adicionar o ícone de cruz à opção incorreta
        console.log("Resposta Errada");

        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correcAns) { // Se a opção coincidir com a resposta correta
                option_list.children[i].setAttribute("class", "option correct"); // Adicionar a cor verde à opção correta
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); // Adicionar o ícone de marca de seleção à opção correta
                console.log("Resposta correta automaticamente selecionada.");
            }
        }
    }
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); // Desabilitar todas as opções após o usuário selecionar uma
    }
    next_btn.classList.add("show"); // Mostrar o botão "Próxima" após o usuário selecionar uma opção
}

function showResult(){
    info_box.classList.remove("activeInfo"); // Esconder a caixa de informações
    quiz_box.classList.remove("activeQuiz"); // Esconder a caixa de quiz
    result_box.classList.add("activeResult"); // Mostrar a caixa de resultados
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // Se o usuário acertou mais de 3
        let scoreTag = '<span>Parabéns! 🎉, Você acertou <p>' + userScore + '</p> de <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;  // Adicionando a tag span dentro de scoreText
    }
    else if(userScore > 4){ // Se o usuário acertou mais de 4
        let scoreTag = '<span>Bom trabalho 😎, Você acertou <p>' + userScore + '</p> de <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // Se o usuário acertou menos de 4
        let scoreTag = '<span>Precisa melhorar 😐, Você acertou <p>' + userScore + '</p> de <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

// Função para contar o número de perguntas
function queCounter(index){
    let totalQueCountTag = '<span><p>' + index + '</p> de <p>' + questions.length + '</p> Perguntas</span>';
    bottom_ques_counter.innerHTML = totalQueCountTag; // Adicionando a contagem de perguntas
}

// Função para iniciar o timer
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; // Definir o tempo restante
        time--; // Decrementar o tempo
        if(time < 9){ // Se o tempo for menor que 9
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){ // Se o tempo chegar a 0
            clearInterval(counter); // Limpar o contador
            timeText.textContent = "Tempo Esgotado"; // Alterar o texto para "Tempo Esgotado"
            const allOptions = option_list.children.length; // Obter o número total de opções
            for (let i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == questions[que_count].answer) { // Se a opção coincidir com a resposta
                    option_list.children[i].setAttribute("class", "option correct"); // Marcar a opção correta
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); // Adicionar o ícone de marca de seleção
                }
            }
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled"); // Desabilitar todas as opções após o tempo esgotado
            }
            next_btn.classList.add("show"); // Mostrar o botão "Próxima"
        }
    }
}

// Função para iniciar a linha do tempo
function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; // Incrementar o tempo da linha
        time_line.style.width = time + "px"; // Atualizar a linha do tempo
        if(time > 549){ // Se o tempo da linha for maior que 549px
            clearInterval(counterLine); // Limpar o contador da linha
        }
    }
}
