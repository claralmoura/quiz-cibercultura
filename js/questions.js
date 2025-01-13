// criando um array e passando as perguntas, opções e respostas
let questions = [
  {
    numb: 1,
    question: "O que caracteriza o conceito de 'personificação dos conteúdos' nas redes sociais?",
    answer: "O uso de algoritmos para personalizar e adaptar a experiência online de cada usuário, com foco em agradar o usuário e torná-lo mais confortável.",
    options: [
      "A criação de conteúdos exclusivos baseados em interesses individuais, com o objetivo de gerar debate público.",
      "O uso de algoritmos para personalizar e adaptar a experiência online de cada usuário, com foco em agradar o usuário e torná-lo mais confortável.",
      "A interação direta entre os usuários e os criadores de conteúdo, visando uma maior transparência nas informações compartilhadas.",
      "A promoção de conteúdos de natureza educativa, com foco em diversidade e inclusão de opiniões."
    ]
  },
  {
    numb: 2,
    question: "Quais são as consequências da 'bolha de filtros' criada pelas redes sociais, segundo a teoria apresentada?",
    answer: "A formação de uma experiência digital personalizada que impede o acesso a conteúdos diversos, limitando a percepção do mundo fora da rede social.",
    options: [
      "Maior acesso a informações variadas e um engajamento com diferentes pontos de vista.",
      "A formação de uma experiência digital personalizada que impede o acesso a conteúdos diversos, limitando a percepção do mundo fora da rede social.",
      "A promoção de debates equilibrados entre diferentes grupos, estimulando a reflexão crítica sobre temas sociais.",
      "A criação de um ambiente online no qual os usuários são incentivados a buscar novos tópicos, ampliando seu horizonte informativo."
    ]
  },
  {
    numb: 3,
    question: "Quais são as consequências de viver dentro de uma bolha de filtros nas redes sociais?",
    answer: "O usuário é exposto constantemente a conteúdos com os quais já tem afinidade, limitando a diversidade de informações e dificultando o contato com opiniões contrárias.",
    options: [
      "O usuário tem acesso a uma maior diversidade de opiniões, aumentando a troca de ideias e o diálogo.",
      "O usuário é exposto constantemente a conteúdos com os quais já tem afinidade, limitando a diversidade de informações e dificultando o contato com opiniões contrárias.",
      "O usuário é forçado a confrontar diferentes perspectivas, o que contribui para um ambiente mais plural nas redes sociais.",
      "O conteúdo que aparece para o usuário é determinado por uma curadoria editorial feita por especialistas, garantindo um equilíbrio entre opiniões diferentes."
    ]
  },
  {
    numb: 4,
    question: "O que motiva o comportamento de muitos usuários de redes sociais em relação à seleção de conteúdos que visualizam, segundo o conceito de 'narcisismo digital'?",
    answer: "A busca por aprovação e reconhecimento através da validação de suas próprias ideias, evitando conteúdos contraditórios e focando apenas em postagens com as quais se identificam.",
    options: [
      "O desejo de ampliar sua rede de contatos e obter informações mais variadas e desafiadoras.",
      "A busca por aprovação e reconhecimento através da validação de suas próprias ideias, evitando conteúdos contraditórios e focando apenas em postagens com as quais se identificam.",
      "A necessidade de consumir conteúdos educativos que ajudem no desenvolvimento pessoal e profissional.",
      "A escolha de conteúdos que desafiem suas crenças, com o objetivo de promover debates mais profundos e reflexivos."
    ]
  },
  {
    numb: 5,
    question: "Como a internet tem influenciado a criação e distribuição de conteúdo cultural, especialmente para pessoas de camadas populares?",
    answer: "A internet permite que pessoas comuns criem e distribuam suas próprias obras sem depender de intermediários como editoras e produtoras, aumentando a democratização da produção cultural.",
    options: [
      "A internet tem dificultado o acesso das camadas populares à produção cultural devido ao custo elevado dos meios tecnológicos.",
      "A internet permite que pessoas comuns criem e distribuam suas próprias obras sem depender de intermediários como editoras e produtoras, aumentando a democratização da produção cultural.",
      "A internet centraliza o controle da produção de conteúdo, tornando difícil para os indivíduos comuns competirem com as grandes corporações de mídia.",
      "A internet limita a produção cultural ao oferecer apenas plataformas exclusivas para grandes artistas e criadores já reconhecidos."
    ]
  },
  {
    numb: 6,
    question: "Qual é o principal benefício que a internet oferece para novos criadores, como a cineasta Yasmin Thayná, na construção de suas carreiras?",
    answer: "A internet permite a criação de conteúdo sem a necessidade de intermediários, além de possibilitar o financiamento coletivo e a divulgação direta para o público.",
    options: [
      "A internet oferece apoio financeiro direto de grandes estúdios e produtores, garantindo sucesso imediato.",
      "A internet permite a criação de conteúdo sem a necessidade de intermediários, além de possibilitar o financiamento coletivo e a divulgação direta para o público.",
      "A internet restringe a visibilidade de novos talentos, que dependem exclusivamente de canais tradicionais para alcançar sucesso.",
      "A internet torna a produção de conteúdo cultural mais cara e complexa, dificultando o acesso de novos criadores."
    ]
  },
  {
    numb: 7,
    question: "Qual é um dos maiores problemas enfrentados nas redes sociais quando se trata de liberdade de expressão?",
    answer: "A disseminação de informações imprecisas ou falsas, alimentada por uma torcida ideológica e facilidade de compartilhamento.",
    options: [
      "A censura prévia das informações divulgadas, controlada pelas mídias tradicionais.",
      "A grande diversidade de opiniões, que dificulta a disseminação de informações.",
      "A disseminação de informações imprecisas ou falsas, alimentada por uma torcida ideológica e facilidade de compartilhamento.",
      "A falta de acesso às redes sociais para uma parcela da população, limitando a liberdade de expressão."
    ]
  },
  {
    numb: 8,
    question: "Qual é uma das consequências negativas apontadas no texto sobre o anonimato nas redes sociais?",
    answer: "O anonimato pode levar à publicação de conteúdo irrefletido, pois o autor não precisa prestar contas por suas ações.",
    options: [
      "O anonimato dificulta a produção de conteúdo relevante e informativo.",
      "A ausência de um rosto por trás dos comentários facilita a difusão de opiniões ponderadas e racionais.",
      "O anonimato pode levar à publicação de conteúdo irrefletido, pois o autor não precisa prestar contas por suas ações.",
      "O anonimato nas redes sociais reduz o engajamento de usuários com diferentes pontos de vista."
    ]
  },
  {
    numb: 9,
    question: "Qual é o principal impacto da arquitetura das redes sociais no comportamento dos usuários?",
    answer: "O reforço da interação dos usuários dentro de bolhas informativas, fazendo com que se exponham apenas a opiniões que confirmem suas crenças.",
    options: [
      "A criação de uma rede de debates democráticos e imparciais, onde todos os pontos de vista são igualmente representados.",
      "O reforço da interação dos usuários dentro de bolhas informativas, fazendo com que se exponham apenas a opiniões que confirmem suas crenças.",
      "A filtragem de conteúdos baseados exclusivamente em dados objetivos e imparciais, promovendo uma troca de ideias equilibrada.",
      "A promoção de um ambiente de discussão pública onde as opiniões divergentes são debatidas de maneira construtiva."
    ]
  },
  {
    numb: 10,
    question: "A proliferação de notícias falsas (fake news) encontra um ambiente perfeito nas redes sociais devido a:",
    answer: "O excesso de informação e a dificuldade das pessoas em verificar a veracidade dos conteúdos antes de compartilhá-los.",
    options: [
      "A ampla aceitação de fontes tradicionais de mídia, como jornais e revistas.",
      "O excesso de informação e a dificuldade das pessoas em verificar a veracidade dos conteúdos antes de compartilhá-los.",
      "A transparência dos algoritmos que curam os conteúdos apresentados aos usuários.",
      "A velocidade de propagação de conteúdos verificáveis e de alta qualidade."
    ]
  }
];
