const historia = {
  prologo: {
    h1: "Prológo",
    h2: "Denver, Colorado — 1978.",
    text: `A cidade está com medo. Nas últimas semanas, cinco garotos desapareceram sem deixar rastro. As crianças sussurram o nome dele no recreio, os adultos fingem que não ouvem. Mas todo mundo sabe: o Grabber está lá fora. Ele usa máscaras assustadoras. Oferece balões pretos para os meninos que encontra. E ninguém que entrou na van dele jamais voltou. Você é Finney Shaw, 13 anos. Você não é o mais forte da escola. Não é o mais popular. Mas você é inteligente — e isso pode ser a única coisa que vai te salvar. Enquanto isso, sua irmã Gwen tem sonhos estranhos. Sonhos que mostram coisas que ainda não aconteceram. E, esta noite, ela sonhou com você… num porão escuro, com um telefone preto tocando na parede. Você não sabe disso ainda. Mas o telefone vai tocar. E do outro lado da linha, os mortos vão falar.`,
    choices: [
      { text: "Começar", to: "capitulo1" }
    ]
  },
  capitulo1: {
    h1: "CAPÍTULO 1 — O DESPERTAR",
    text: `A primeira coisa que você sente é o cheiro. Não é um cheiro bom. É mofo, ferrugem, poeira velha e algo mais — algo doce e podre, como fruta apodrecendo num canto úmido. Você abre os olhos e a luz é fraca, vem de uma fresta fina embaixo de uma porta de metal. Você está deitado num colchão fino, no chão de concreto frio. Sua cabeça dói. Sua boca está seca. Você tenta se lembrar… A rua. A van preta. O homem de máscara. O balão preto que ele segurava na mão enluvada. E depois… nada. Você se senta devagar. O porão é pequeno e claustrofóbico. Uma cama velha, um vaso sanitário enferrujado no canto, uma janela minúscula e gradeada lá no alto, perto do teto. A porta é de metal, sem maçaneta do lado de dentro. E então você vê. Pendurado na parede, acima do colchão, há um telefone preto. Um modelo antigo, de disco. O fio está arrancado, pendurado inerte. Ele não está conectado a nada. Não há tomada. Não há linha. É impossível que ele funcione. E é exatamente por isso que, quando ele começa a tocar, seu sangue gela.`,
    choices: [
      { text: "Atender o telefone", to: "capitulo2A" },
      { text: "Ignorar e procurar uma saída", to: "capitulo2B" },
      { text: "Gritar por ajuda", to: "capitulo2C" }
    ]
  },
  capitulo2A: {
    h1: "CAPÍTULO 2 — A VOZ DO OUTRO LADO",
    text: `Sua mão treme quando você pega o fone. O plástico está frio. Você o aproxima do ouvido. Silêncio. Depois… uma voz. Não é uma voz normal. É distorcida, como se viesse de dentro de um poço fundo, com eco e chiado. Mas é jovem. É a voz de um garoto. "Ei… ei, você está aí? Consegue me ouvir?" Você engole seco. "Quem… quem é você?" A voz ri, mas não é uma risada feliz. É uma risada cansada, triste. "Meu nome é Robin. Robin Arellano. Eu já estive onde você está agora. Ele me pegou também. Mas escuta… não tem muito tempo. O Grabber volta sempre. Ele vai querer brincar com você. Mas você pode lutar." Você sente o coração batendo forte. "Como? A porta está trancada! Não tem saída!" "Tem sempre uma saída, garoto. Só precisa olhar direito. Procure no chão. Há algo solto. Uma pedra que se move. Foi eu que deixei." Um chiado alto. A voz está sumindo. "Espera! Robin, espera!" "Escuta… não confie no silêncio. E não deixe ele te ver chorando. Ele gosta disso. Boa sorte, Finney." Clique. A ligação cai. O fone fica mudo na sua mão. Você olha para o chão de concreto, coração acelerado.`,
    choices: [
      { text: "Procurar algo solto no chão", to: "capitulo3A" },
      { text: "Perguntar em voz alta quem estava falando", to: "capitulo3B" },
      { text: "Desligar e tentar arrombar a porta", to: "capitulo3C" }
    ]
  },
  capitulo2B: {
    h1: "CAPÍTULO 2 — PROCURANDO UMA SAÍDA",
    text: `Você não atende. Não importa o que seja aquilo — é errado. Telefones não funcionam sem fio. Você não vai perder tempo com truques. Você se levanta e começa a tatear as paredes. O concreto é áspero, frio, úmido. Você anda devagar, mapeando cada centímetro do porão. A porta é de metal reforçado. Sem maçaneta. Sem fechadura visível do lado de dentro. Você empurra com o ombro, depois com as duas mãos. Nada. Não cede um milímetro. A janela está alta demais. Você tenta pular, mas seus dedos mal alcançam a grade. É pequena, enferrujada, mas firme. O vaso sanitário está entupido e sujo. A cama é só um colchão fino em cima de uma base de metal. O telefone continua tocando. Riinnng. Riinnng. Riinnng. É um som absurdo, impossível, e ainda assim está lá. Insistente. Quase… desesperado.`,
    choices: [
      { text: "Voltar e atender o telefone", to: "capitulo2A" },
      { text: "Tentar alcançar a janela", to: "capitulo3D" },
      { text: "Sentar e esperar o sequestrador voltar", to: "capitulo3E" }
    ]
  },
  capitulo2C: {
    h1: "CAPÍTULO 2 — GRITANDO POR AJUDA",
    text: `Você enche o peito de ar e grita. "SOCORRO! ALGUÉM ME AJUDA! ESTOU PRESO!" Sua voz ecoa pelas paredes de concreto e volta para você, abafada, distorcida. O porão engole o som como se fosse um animal faminto. Você grita de novo. E de novo. Sua garganta começa a doer. Nada. Nenhum passo. Nenhuma resposta. Nenhum som de fora. O porão é à prova de som. Você entende isso devagar, e o entendimento é pior do que o silêncio. Ninguém vai te ouvir. Não importa o quanto você grite. O telefone para de tocar por um instante. Você prende a respiração. Talvez tenha acabado. Riinnng. Toca de novo. Mais alto. Quase urgente. Como se a voz do outro lado estivesse com pressa.`,
    choices: [
      { text: "Atender o telefone", to: "capitulo2A" },
      { text: "Continuar gritando até a voz falhar", to: "capitulo3F" },
      { text: "Chutar a porta com raiva", to: "capitulo3C" }
    ]
  },
  capitulo3A: {
    h1: "CAPÍTULO 3 — O OBJETO NO CHÃO",
    text: `Você se ajoelha e começa a passar os dedos pelas rachaduras do concreto. É um trabalho lento, doloroso. Suas unhas raspam a pedra. Poeira entra embaixo delas. E então você sente. Uma pedra se move. Não muito — só um pouquinho. Mas o suficiente. Você força com os dedos e ela cede, revelando um buraco pequeno, do tamanho de um punho. Dentro dele, envolto num pedaço de pano sujo, há um pedaço de vidro afiado. Não é grande, mas a ponta é fina e cortante. Foi trabalhada. Alguém passou tempo afiando aquilo. Você olha para o vidro. Olha para o telefone. Olha para a porta. O telefone toca novamente. A voz do outro lado parece… diferente. Mais próxima.`,
    choices: [
      { text: "Atender o telefone com o vidro na mão", to: "capitulo4A" },
      { text: "Esconder o vidro e esperar o que acontece", to: "capitulo4B" },
      { text: "Usar o vidro para cortar a corda do telefone", to: "capitulo4C" }
    ]
  },
  capitulo3B: {
    h1: "CAPÍTULO 3 — A VOZ SUMIU",
    text: `Você pergunta em voz alta, quase gritando: "QUEM É VOCÊ? O QUE VOCÊ QUER DE MIM?" Silêncio. O telefone está mudo. O fone pendurado no gancho, o fio arrancado balançando devagar. Como se nunca tivesse tocado. Como se tudo não passasse de um sonho febril. Você espera. Um minuto. Dois. Cinco. Nada. Talvez você tenha imaginado. Talvez a cabeça esteja confusa por causa da pancada. Talvez… Não. Você ouviu. Tinha uma voz. Tinha um nome. Robin. Você se sente tolo por ter perdido a chance. Talvez a voz fosse dizer algo importante. Talvez fosse a diferença entre viver e morrer.`,
    choices: [
      { text: "Procurar no chão mesmo assim, seguindo a dica", to: "capitulo3A" },
      { text: "Sentar no colchão e esperar, sem esperança", to: "capitulo4B" }
    ]
  },
  capitulo3C: {
    h1: "CAPÍTULO 3 — A PORTA DE METAL",
    text: `Você chuta a porta. Uma vez. O metal range, mas não cede. Seu pé dói. Duas vezes. Mais alto. Nada. Três vezes. Você usa toda a força que tem, gritando de raiva e medo. CRACK. A porta amassa um pouco, mas continua trancada. Você respira fundo, pronto para chutar de novo. E então você ouve. Passos. Do outro lado da porta. Passos pesados, lentos, subindo uma escada. Alguém está vindo. Alguém que ouviu o barulho. Seu corpo inteiro gela. Você olha em volta, procurando um lugar para se esconder. Mas o porão é vazio.`,
    choices: [
      { text: "Voltar para a cama e fingir que está dormindo", to: "capitulo4D" },
      { text: "Ficar parado atrás da porta, pronto para atacar", to: "capitulo4E" },
      { text: "Atender o telefone que voltou a tocar", to: "capitulo4A" }
    ]
  },
  capitulo3D: {
    h1: "CAPÍTULO 3 — A JANELA",
    text: `Você arrasta o colchão até embaixo da janela. Depois empilha o vaso sanitário em cima — é nojento, mas é a única coisa que tem. Você sobe, escorregando, quase caindo duas vezes. Finalmente, seus olhos alcançam a janela. Ela é pequena, suja, com grades de ferro enferrujadas. Do outro lado, você vê um quintal escuro. A lua está alta, prateada. Tem grama alta, uma árvore velha, um barril de metal virado. Você vê uma cerca ao fundo. Se conseguisse passar pela janela, talvez conseguisse alcançá-la. Mas o vidro é grosso. E as grades… estão firmes. Se você quebrar o vidro, o barulho vai ecoar. O Grabber pode ouvir. Mas talvez alguém lá fora também.`,
    choices: [
      { text: "Quebrar o vidro e gritar por socorro", to: "capitulo4F" },
      { text: "Desistir e voltar para o chão", to: "capitulo3A" },
      { text: "Tentar arrancar as grades com as mãos", to: "capitulo4G" }
    ]
  },
  capitulo3E: {
    h1: "CAPÍTULO 3 — ESPERAR O SEQUESTRADOR",
    text: `Você se senta no colchão. Não vai atender o telefone. Não vai gritar. Não vai fazer nada. Você espera. O tempo passa devagar. Você conta os segundos na cabeça. Chega a mil. Depois a dois mil. O telefone toca uma vez, duas, três, quatro. Cada toque é uma agulha nos seus nervos. Você não atende. Sua barriga ronca. Sua garganta queima de sede. Você está com frio. E então… CLANC. O som de uma tranca sendo aberta. A porta de metal se move devagar, rangendo. Ele está lá. O Grabber. Alto, ombros largos, vestindo um suéter escuro. A máscara cobre metade do rosto — é branca, com olhos negros e uma boca pintada num sorriso torto. A outra metade do rosto é… normal. Humana. E isso é ainda mais assustador. Ele segura um pedaço de pão e uma garrafa de água. "Comportado, hein?" — a voz dele é calma, quase gentil. "Isso é bom. Vamos ver quanto tempo dura."`,
    choices: [
      { text: "Aceitar a comida e ficar quieto", to: "capitulo5A" },
      { text: "Cuspir na máscara dele (PERIGOSO)", to: "capitulo5B" },
      { text: "Tentar pegar a chave do bolso dele (PERIGOSO)", to: "capitulo5C" }
    ]
  },
  capitulo3F: {
    h1: "CAPÍTULO 3 — A VOZ FALHA",
    text: `Você continua gritando até sua garganta arder e a voz sair rachada, num fiapo. Ninguém vem. O porão bebe cada som que você solta e não devolve nada. Você se cala, exausto, encostado na parede fria, ofegante. O telefone, que tinha parado, começa a tocar de novo — baixo, quase gentil, como se esperasse você recuperar o fôlego para tentar de novo.`,
    choices: [
      { text: "Atender o telefone", to: "capitulo2A" },
      { text: "Desistir de gritar e procurar algo no chão", to: "capitulo3A" }
    ]
  },
  capitulo4A: {
    h1: "CAPÍTULO 4 — O TELEFONE E O VIDRO",
    text: `Você atende. A voz do outro lado não é mais a de Robin. É outra — mais grave, mais velha. Um garoto mais velho, talvez. "Ei, novato. Escuta com atenção. Ele vai voltar em breve. Não sei quanto tempo você tem. Mas presta atenção: aquele telefone não é só um telefone. É uma porta. Nós estamos do outro lado. E a gente quer te ajudar." Você aperta o vidro na mão. "Como? Como vocês podem me ajudar?" "Cada um de nós tem uma dica. Uma coisa que aprendeu antes de… antes do fim. A minha é essa: ele não vê o telefone como ameaça. Ele acha que é só um objeto quebrado. Então use isso. Use o telefone. E quando a hora chegar, corte a corda. Ele não vai entender. E isso pode te dar um segundo." "Um segundo?" "Um segundo é tudo, garoto. Um segundo é a diferença entre a vida e a morte." Clique. Você olha para o vidro na sua mão. Olha para a corda grossa do telefone.`,
    choices: [
      { text: "Cortar a corda do telefone agora", to: "capitulo5D" },
      { text: "Guardar o vidro e esperar o Grabber", to: "capitulo4D" }
    ]
  },
  capitulo4B: {
    h1: "CAPÍTULO 4 — ESPERAR ESCONDIDO",
    text: `Você esconde o vidro sob o colchão. Não vai usar ainda. Precisa esperar o momento certo. Você se senta no canto, abraçando os joelhos. O telefone toca mais uma vez, mas você não atende. Depois toca de novo. E de novo. Você morde os lábios e espera. Passam-se horas. Ou talvez minutos. É difícil saber sem relógio. O ar fica mais pesado, mais frio. Você começa a tremer. CLANC. A porta se abre. O Grabber entra. Mas desta vez ele está diferente. A máscara é outra — agora é uma máscara de diabo, com chifres e um sorriso pintado de vermelho. Ele não traz comida. Está irritado. "Você não atendeu o telefone." — a voz dele é baixa, tensa. "Por quê?" Ele sabe. De alguma forma, ele sabe que o telefone tocou. E isso o incomoda. Muito.`,
    choices: [
      { text: "Mentir: 'Não ouvi nada'", to: "capitulo5E" },
      { text: "Perguntar sobre as outras vítimas", to: "capitulo5F" },
      { text: "Atacar com o vidro", to: "capitulo5G" }
    ]
  },
  capitulo4C: {
    h1: "CAPÍTULO 4 — CORTANDO A CORDA",
    text: `Você pega o vidro e começa a serrar a corda do telefone. É um trabalho lento e doloroso. A corda é grossa, feita de fibra trançada, e o vidro é pequeno. Você corta os dedos duas vezes. O sangue escorre, quente, mas você não para. Scrrt. Scrrt. Scrrt. Finalmente, com um estalo, a corda se rompe. O telefone cai no chão com um baque surdo. O fone quica e para no concreto, o disco rachado, a campainha muda. Você olha para o telefone quebrado. Depois para o vidro na sua mão. Depois para a porta. Agora você tem um telefone destruído, um pedaço de vidro e nenhuma outra ideia. E a porta continua trancada.`,
    choices: [
      { text: "Usar o vidro para tentar forçar a fechadura", to: "capitulo5H" },
      { text: "Gritar por ajuda, agora que o telefone está mudo", to: "capitulo3F" }
    ]
  },
  capitulo4D: {
    h1: "CAPÍTULO 4 — FINGIR QUE DORME",
    text: `Você corre para o colchão e se deita. Fecha os olhos. Respira fundo, tentando parecer calmo, tentando parecer dormindo. Seu coração bate tão forte que você tem certeza de que ele pode ouvir. A porta se abre. Passos pesados. Lentos. Cada um faz o chão vibrar. Você sente o cheiro antes de sentir a presença. Suor, metal, um leve odor adocicado, como perfume barato misturado com sangue. Os passos param ao seu lado. Uma mão toca seu ombro. É grande, pesada, quente. Você sente os dedos apertando devagar. "Acorda, garoto." — a voz é baixa, quase um sussurro. "Hora de brincar."`,
    choices: [
      { text: "Abrir os olhos lentamente", to: "capitulo5I" },
      { text: "Dar um golpe com o vidro", to: "capitulo5G" },
      { text: "Continuar fingindo que dorme", to: "capitulo5J" }
    ]
  },
  capitulo4E: {
    h1: "CAPÍTULO 4 — PRONTO PARA ATACAR",
    text: `Você se cola na parede, ao lado da porta. O vidro está na sua mão, tão apertado que seus dedos ficam brancos. Você respira devagar. Espera. A porta range. Agora. Você avança com o vidro. O golpe acerta o braço do Grabber — você sente a lâmina entrando na carne, o sangue quente escorrendo pela sua mão. "SEU MOLEQUE!" Ele urra de dor e te empurra com uma força absurda. Você voa pelo ar e bate nas costas no chão de concreto. O ar sai dos seus pulmões. O vidro escorrega da sua mão. A porta se fecha com um estrondo. Você está no chão, sem ar, com o corpo doendo. E o Grabber está do outro lado, gritando palavrões.`,
    choices: [
      { text: "Levantar e atender o telefone que está tocando", to: "capitulo4A" },
      { text: "Ficar no chão, chorando de dor", to: "capitulo5K" }
    ]
  },
  capitulo4F: {
    h1: "CAPÍTULO 4 — QUEBRANDO A JANELA",
    text: `Você pega o vaso sanitário — o único objeto pesado que tem — e o arremessa contra a janela. CRASH! O vidro explode numa chuva de cacos. Você cobre o rosto, mas alguns cortam seus braços. A dor é aguda, mas você não para. "SOCORRO!" — você grita com toda a força. "ESTOU AQUI EMBAIXO! ME AJUDEM!" Uma luz acende na casa vizinha. Você ouve uma voz distante, abafada: "Que barulho é esse?" Alguém te ouviu. Mas então… CLANC. A porta do porão se abre com força. O Grabber está lá, e ele está furioso. A máscara está torta. Ele segura uma faca. "VOCÊ NÃO DEVERIA TER FEITO ISSO."`,
    choices: [
      { text: "Continuar gritando por socorro", to: "capitulo5L" },
      { text: "Tentar fugir pela janela quebrada", to: "capitulo5M" },
      { text: "Atacar o Grabber com os punhos", to: "capitulo5G" }
    ]
  },
  capitulo4G: {
    h1: "CAPÍTULO 4 — ARRANCANDO AS GRADES",
    text: `Você agarra as grades com as duas mãos e puxa. Com toda a força. Com todo o ódio. Com todo o medo. Elas rangem. Você sente o metal ceder um pouquinho. Seu coração acelera. "Vamos… vamos…" Você puxa de novo. E de novo. Suas mãos começam a sangrar. A pele dos seus dedos se rasga. O metal está quente de tanto que você aperta. CRACK. Uma das barras se solta da base. Você quase chora de alívio. Mas a segunda barra não cede. E a terceira está firme. Você puxa mais uma vez, com toda a força que sobrou. Nada. O telefone toca atrás de você. Insistente.`,
    choices: [
      { text: "Largar as grades e atender o telefone", to: "capitulo4A" },
      { text: "Continuar tentando, mesmo com as mãos destruídas", to: "capitulo5N" }
    ]
  },
  capitulo5A: {
    h1: "CAPÍTULO 5 — ACEITAR A COMIDA",
    text: `Você estende a mão e pega o pão. Está velho, duro, mas é comida. A água está morna e tem gosto de metal, mas você bebe metade de uma vez. O Grabber observa. A máscara esconde a expressão, mas os olhos… os olhos estão calmos. Satisfeitos. "Bom garoto." — ele diz. "Se cooperar, eu deixo você viver mais um pouco. Talvez até deixe você ir." Você sabe que é mentira. Mas não diz nada. Ele se vira e sai. A porta se fecha. A tranca se encaixa. Você come o pão devagar, sentindo cada migalha. O telefone toca.`,
    choices: [
      { text: "Atender o telefone", to: "capitulo6A" },
      { text: "Ignorar e tentar dormir", to: "capitulo6B" }
    ]
  },
  capitulo5B: {
    h1: "CAPÍTULO 5 — CUSPIR NO GRABBER (PERIGOSO)",
    text: `Você olha para a máscara. Para o sorriso pintado. Para os olhos negros. E cospe. A saliva acerta o rosto da máscara. O Grabber para. Fica imóvel por um segundo que parece uma eternidade. Depois… Ele te dá um soco no estômago. O ar sai dos seus pulmões de uma vez. Você dobra, cai de joelhos, tenta respirar e não consegue. O mundo fica escuro nas bordas. "Você vai se arrepender disso." — a voz dele é baixa, calma, assustadora. "Vou voltar. E quando voltar, você vai implorar." Ele sai. A porta bate. Você fica no chão, engasgando, tentando respirar.`,
    choices: [
      { text: "Tentar respirar e atender o telefone que toca", to: "capitulo6A" },
      { text: "Ficar no chão, chorando", to: "capitulo6C" }
    ]
  },
  capitulo5C: {
    h1: "CAPÍTULO 5 — PEGAR A CHAVE (PERIGOSO)",
    text: `Você se aproxima. O Grabber está distraído, olhando para o telefone na parede. Você vê a chave pendurada no bolso da calça dele. Uma chave pequena, prateada. Você estende a mão. Devagar. Seus dedos quase alcançam… Ele agarra seu pulso. "Tentou me roubar?" Ele torce. Você sente algo estalar. A dor é branca, explosiva. Você grita. "Isso não se faz, garoto." Ele te joga no chão. Sua cabeça bate no concreto. O mundo gira. Quando você abre os olhos, ele já saiu. A porta está fechada. Seu pulso está inchado e dolorido. O telefone toca.`,
    choices: [
      { text: "Levantar e atender o telefone", to: "capitulo6A" },
      { text: "Ficar no chão, derrotado", to: "capitulo6D" }
    ]
  },
  capitulo5D: {
    h1: "CAPÍTULO 5 — TELEFONE CORTADO",
    text: `Você corta a corda. O telefone fica mudo para sempre. A campainha não toca mais. O disco não gira. É só um pedaço de plástico velho pendurado na parede. Você está sozinho. Sem as vozes. Sem as dicas. Sem ninguém. Você senta no colchão e olha para o telefone destruído. Talvez tenha sido um erro. Talvez as vozes fossem sua única chance. CLANC. A porta se abre. O Grabber entra. Ele olha para o telefone no chão. Depois para você. A máscara esconde a expressão, mas o corpo dele fica tenso. Os punhos se fecham. "O que você fez?" — a voz sai baixa, perigosa. "O QUE VOCÊ FEZ?"`,
    choices: [
      { text: "Correr para a porta aberta", to: "capitulo6E" },
      { text: "Atacar com o vidro", to: "capitulo5G" }
    ]
  },
  capitulo5E: {
    h1: "CAPÍTULO 5 — MENTIR",
    text: `Você engole seco e mente: "Não ouvi nada. Acho que… acho que estava dormindo." O Grabber te encara. A máscara não se move, mas você sente os olhos dele queimando. "Mentiroso." Ele anda até a parede e arranca o telefone com um puxão só. O fio se rompe, o plástico racha. Ele joga tudo no chão. "Agora você não tem mais ninguém." Ele sai. A porta se fecha. Você olha para os pedaços do telefone no chão. Sua última conexão com o mundo exterior… destruída.`,
    choices: [
      { text: "Tentar atacá-lo quando ele voltar", to: "capitulo5G" },
      { text: "Implorar por sua vida", to: "capitulo6F" }
    ]
  },
  capitulo5F: {
    h1: "CAPÍTULO 5 — PERGUNTAR SOBRE AS VÍTIMAS",
    text: `Você reúne coragem e pergunta: "O que você fez com os outros meninos?" O Grabber para. A máscara se vira devagar na sua direção. Por um momento, ele não diz nada. Depois, ri. É uma risada baixa, sem alegria. "Eles não eram espertos como você. Eles choraram. Imploraram. Fizeram tudo o que eu mandei." Ele dá um passo na sua direção. "Mas você… você é diferente. Você não chora. Isso é interessante." Ele se agacha na sua frente. A máscara está tão perto que você pode ver as rachaduras na pintura. "Vou gostar de brincar com você." Ele se levanta e sai. A porta se fecha. O telefone toca.`,
    choices: [
      { text: "Atender o telefone", to: "capitulo6A" },
      { text: "Chorar, finalmente deixando o medo sair", to: "capitulo6C" }
    ]
  },
  capitulo5G: {
    h1: "CAPÍTULO 5 — ATACAR COM O VIDRO",
    text: `Você avança. O vidro está na sua mão, apertado como uma garra. Você não pensa. Não planeja. Você só ataca. O golpe acerta o pescoço do Grabber. Você sente o vidro entrando. Sente o sangue quente jorrando pela sua mão. Ele cambaleia, levando a mão ao ferimento. A máscara se torce. Ele cai de joelhos. "Seu… seu…" Você não espera. Corre para a porta. Mas ela está trancada. Você precisa da chave. O Grabber está no chão, se contorcendo, sangrando. A chave está no bolso dele.`,
    choices: [
      { text: "Pegar a chave no bolso dele", to: "capitulo6G" },
      { text: "Continuar atacando até ele parar", to: "capitulo6H" },
      { text: "Correr para a janela quebrada", to: "capitulo6I" }
    ]
  },
  capitulo5H: {
    h1: "CAPÍTULO 5 — ABRIR A FECHADURA",
    text: `Você enfia o vidro na fechadura. A ponta entra, mas não alcança o mecanismo. Você empurra, força, torce. CRACK. O vidro quebra. Um pedaço corta seu dedo. Você olha para a fechadura. Não se moveu. Você olha para o vidro quebrado na sua mão. Agora é só um caco inútil. CLANC. O Grabber volta. Ele vê o vidro no chão. Vê seu dedo sangrando. Vê a fechadura arranhada. "Você é persistente." — ele diz, e há algo na voz dele que parece… respeito? "Gosto disso." Ele dá um passo na sua direção.`,
    choices: [
      { text: "Tentar correr por entre as pernas dele", to: "capitulo6J" },
      { text: "Ficar parado, encarando-o", to: "capitulo6K" }
    ]
  },
  capitulo5I: {
    h1: "CAPÍTULO 5 — ABRIR OS OLHOS",
    text: `Você abre os olhos. O Grabber está agachado ao seu lado. A máscara que ele usa agora tem um sorriso enorme, pintado de vermelho. Os olhos da máscara são buracos negros. Ele segura uma faca. Não uma faca grande — uma pequena, de cozinha, com o cabo de madeira gasto. Ele a gira entre os dedos, devagar. "Vamos jogar um jogo." — ele diz. Você engole seco. "Que jogo?" "Eu faço uma pergunta. Se você acertar, eu te deixo ir. Se errar…" — ele passa o dedo pela lâmina. "Bem. Você sabe."`,
    choices: [
      { text: "Aceitar o jogo", to: "capitulo6L" },
      { text: "Recusar e tentar fugir", to: "capitulo6M" }
    ]
  },
  capitulo5J: {
    h1: "CAPÍTULO 5 — CONTINUAR FINGINDO",
    text: `Você não se move. Não respira. Não pisca. O Grabber te sacode. "Acorda!" Você continua imóvel. Seu corpo está tenso, mas você força cada músculo a ficar relaxado. Parece dormir. Ele resmunga. "Dorminhoco." Os passos se afastam. A porta se abre. A porta se fecha. A tranca se encaixa. Você espera mais um minuto inteiro antes de abrir os olhos. Está sozinho. O telefone toca.`,
    choices: [
      { text: "Atender o telefone", to: "capitulo6A" },
      { text: "Esperar mais um pouco, com medo", to: "capitulo6N" }
    ]
  },
  capitulo5K: {
    h1: "CAPÍTULO 5 — CHORAR DE DOR",
    text: `Você chora. Não é um choro bonito. É feio, alto, com soluços e ranho. Você chora de dor, de medo, de raiva, de tudo. As lágrimas escorrem pelo seu rosto e caem no concreto. O Grabber ri. "Aí está. Eu sabia que você ia quebrar." Ele sai. A porta se fecha. Você fica no chão, chorando, com o braço dolorido e o corpo todo tremendo. O telefone toca, mas o som parece distante, abafado pelo seu próprio choro.`,
    choices: [
      { text: "Limpar o rosto e atender o telefone", to: "capitulo6A" },
      { text: "Ficar no chão, sem forças", to: "capitulo6D" }
    ]
  },
  capitulo5L: {
    h1: "CAPÍTULO 5 — CONTINUAR GRITANDO",
    text: `Você grita mais alto. "SOCORRO! POLÍCIA! ALGUÉM!" A voz sai rasgada, dolorida, mas você não para. Você grita com tudo o que tem. A luz na casa vizinha acendeu. Alguém está vindo. Mas o Grabber é mais rápido. Ele te agarra pelo pescoço. A mão é enorme, os dedos apertam. Você não consegue respirar. O mundo começa a escurecer. "Chega." Ele te joga no colchão. Pega um rolo de fita adesiva e cola na sua boca. Você tenta gritar, mas só sai um som abafado. "Agora você fica quieto." Ele sai. A porta se fecha. Você está amordaçado.`,
    choices: [
      { text: "Tentar soltar a fita", to: "capitulo6O" },
      { text: "Ficar quieto e esperar", to: "capitulo6B" }
    ]
  },
  capitulo5M: {
    h1: "CAPÍTULO 5 — FUGIR PELA JANELA",
    text: `Você não pensa duas vezes. Você sobe no vaso sanitário e se enfia pela janela quebrada. Os cacos de vidro cortam sua pele — seus braços, suas pernas, seu rosto. A dor é lancinante. Mas você não para. Você cai no quintal com um baque. A grama está molhada de orvalho. O ar frio da noite enche seus pulmões. Você está livre. Mas então você ouve. Passos. O Grabber está correndo atrás de você. Ele pulou pela janela também. A máscara está manchada de sangue. Ele está furioso.`,
    choices: [
      { text: "Correr para a rua", to: "capitulo6P" },
      { text: "Esconder-se no quintal", to: "capitulo6Q" }
    ]
  },
  capitulo5N: {
    h1: "CAPÍTULO 5 — CONTINUAR TENTANDO AS GRADES",
    text: `Você puxa até suas mãos ficarem em carne viva. O sangue escorre pelos seus pulsos, pingando no chão. As grades não cedem. Você não para. Você puxa de novo. E de novo. E de novo. Até que seus braços falham. Até que seu corpo desliga. Você cai no chão, exausto, desmaiando de dor. Quando você acorda, não sabe quanto tempo passou. Talvez horas. Talvez minutos. A luz da fresta mudou. E o Grabber está na porta. Ele não está com raiva. Está… curioso. A máscara que ele usa agora é lisa, sem expressão. Só dois buracos para os olhos. "Você é o mais teimoso de todos." — ele diz. "Isso vai tornar as coisas mais interessantes."`,
    choices: [
      { text: "Levantar e enfrentá-lo", to: "capitulo5G" },
      { text: "Implorar por sua vida", to: "capitulo6F" }
    ]
  },
  capitulo6A: {
    h1: "CAPÍTULO 6 — A VOZ DE GWEN (FINAL DE RESGATE)",
    text: `Você atende o telefone. A voz do outro lado é diferente. É suave. É familiar. "Finney?" Seu coração para. "Gwen?" "Finney, eu tô te vendo! Eu tô vendo o porão! Tem uma janela pequena e uma porta de metal, né? E tem um telefone preto na parede!" Você chora. Não consegue evitar. "Gwen, me ajuda…" "A polícia tá vindo! Eu sonhei com o lugar. Tem uma casa velha, com uma árvore grande no quintal. O detetive Wright tá com a gente. Aguenta, Finney! Aguenta só mais um pouco!" A ligação cai. Você espera. Um minuto. Dois. Cinco. E então você ouve. Sirenes. Luzes vermelhas e azuis piscam pela janela. Vozes gritam do lado de fora. Passos pesados no andar de cima. Uma porta sendo arrombada. "POLÍCIA! MÃOS NA CABEÇA!" A porta do porão se abre. Um policial desce correndo. Ele te vê no chão e seus olhos se arregalam. "Achamos ele! Ele está vivo!" Você chora. Dessa vez, de alívio. FIM. Você sobreviveu.`,
    choices: [
      { text: "Jogar novamente", to: "prologo" }
    ]
  },
  capitulo6B: {
    h1: "CAPÍTULO 6 — SILÊNCIO (FINAL AMBÍGUO)",
    text: `Você fecha os olhos. O cansaço é maior que o medo. Você dorme. Quando acorda, não sabe quanto tempo passou. A luz da fresta está diferente. O porão está silencioso. O telefone preto está mudo. Você se levanta devagar. A porta de metal está entreaberta. Você empurra. Ela cede. A escada é íngreme. Você sobe devagar, um degrau de cada vez. A casa está vazia. Silenciosa. Móveis cobertos com lençóis. Poeira no chão. Você sai pela porta da frente. O sol está nascendo. A rua está vazia. Você anda até em casa. Ninguém te viu. Ninguém te encontrou. O Grabber desapareceu. Você nunca mais foi o mesmo. FIM. Mas nem tudo tem um final feliz.`,
    choices: [
      { text: "Jogar novamente", to: "prologo" }
    ]
  },
  capitulo6C: {
    h1: "CAPÍTULO 6 — DERROTA (FINAL TRÁGICO)",
    text: `Você chora até adormecer. O cansaço vence o medo. Você dorme no chão frio, abraçado a si mesmo. Você não ouve a porta se abrir. Você não ouve os passos. Você não sente a mão no seu ombro. Você só sente a dor. E depois… nada. FIM. O Grabber venceu. Assim como venceu todos os outros.`,
    choices: [
      { text: "Jogar novamente", to: "prologo" }
    ]
  },
  capitulo6D: {
    h1: "CAPÍTULO 6 — SEM ESPERANÇA (FINAL TRÁGICO)",
    text: `Você fica no chão. Não tem forças para se levantar. Não tem vontade. O medo consumiu tudo. O Grabber volta. Ele te encontra ali, imóvel. Ele não diz nada. Só te pega pelo braço e te arrasta. Você não resiste. FIM. Às vezes, a esperança é a única coisa que nos mantém vivos. E você a perdeu.`,
    choices: [
      { text: "Jogar novamente", to: "prologo" }
    ]
  },
  capitulo6E: {
    h1: "CAPÍTULO 6 — CORRIDA PARA A PORTA",
    text: `Você corre. A porta está aberta. A luz da escada brilha. Você está quase lá. Quase. Mas o Grabber é mais rápido. Ele te agarra pela camisa e te puxa para trás. Você cai. Ele fecha a porta com o pé. "Quase." — ele diz. "Mas não o suficiente." FIM. A liberdade estava a um passo. Mas um passo pode ser uma eternidade.`,
    choices: [
      { text: "Jogar novamente", to: "prologo" }
    ]
  },
  capitulo6F: {
    h1: "CAPÍTULO 6 — IMPLORAR (FINAL TRÁGICO)",
    text: `Você implora. "Por favor… por favor, me deixa ir. Eu não vou contar pra ninguém. Eu prometo. Por favor…" O Grabber ri. É uma risada triste, quase compassiva. "Todos imploram." — ele diz. "Todos prometem. E todos mentem." Ele se agacha na sua frente. A máscara está tão perto que você sente o hálito dele através do tecido. "Eu gosto de você, Finney. Por isso vou fazer rápido." FIM. O orgulho não te salvou. A humilhação também não.`,
    choices: [
      { text: "Jogar novamente", to: "prologo" }
    ]
  },
  capitulo6G: {
    h1: "CAPÍTULO 6 — FUGA COM A CHAVE (FINAL DE FUGA)",
    text: `Você se agacha ao lado do corpo do Grabber. Ele está se contorcendo, segurando o pescoço, o sangue escorrendo entre os dedos. Você enfia a mão no bolso dele. Seus dedos encontram a chave. Pequena. Prateada. Fria. Você puxa. O Grabber tenta te agarrar, mas os dedos dele escorregam no seu braço. Você se levanta e corre para a porta. A chave entra na fechadura. Você gira. CLANC. A porta se abre. Você sobe as escadas correndo, tropeçando, chorando. A casa está escura, mas você vê a porta da frente. Você a abre com um empurrão. O ar frio da noite te atinge como uma onda. Você corre pela rua, descalço, sangrando, chorando. Uma luz acende numa casa. Alguém grita. Uma sirene toca ao longe. A polícia te encontra três quarteirões depois. Você está sentado na calçada, tremendo, com a chave ainda na mão. FIM. Você escapou. Você venceu.`,
    choices: [
      { text: "Jogar novamente", to: "prologo" }
    ]
  },
  capitulo6H: {
    h1: "CAPÍTULO 6 — FINAL SOMBRIO",
    text: `Você não para. Você continua atacando. O vidro entra e sai. Entra e sai. O sangue espirra no seu rosto, na sua roupa, no chão. O Grabber para de se mexer. Mas você continua. Você só para quando seus braços não obedecem mais. Você olha para o que fez. O corpo do Grabber está no chão, imóvel. A máscara caiu. O rosto por baixo é… normal. Um homem de meia-idade, com olhos abertos e vazios. Você não sente nada. A polícia chega vinte minutos depois. Eles te encontram sentado no canto, coberto de sangue, olhando para a parede. O telefone preto está mudo. Você é levado para o hospital. Depois para casa. Gwen te abraça e chora. Seu pai não diz nada. Você sobreviveu. Mas uma parte de você ficou naquele porão. FIM. Às vezes, sobreviver é só o começo de outra luta.`,
    choices: [
      { text: "Jogar novamente", to: "prologo" }
    ]
  },
  capitulo6I: {
    h1: "CAPÍTULO 6 — JANELA QUEBRADA",
    text: `Você corre para a janela. Mas quando chega lá, percebe: os cacos de vidro ainda estão nas grades. Passar por ali vai te cortar inteiro. Você hesita. Um segundo. Dois. É o suficiente. O Grabber se levanta. Sangrando, mas de pé. Ele te agarra pela cintura e te puxa para trás. "Não." — ele diz. "Ainda não." FIM. A hesitação custou caro.`,
    choices: [
      { text: "Jogar novamente", to: "prologo" }
    ]
  },
  capitulo6J: {
    h1: "CAPÍTULO 6 — CORRER POR ENTRE AS PERNAS (FINAL DE FUGA)",
    text: `Você se agacha e corre. O Grabber tenta te agarrar, mas você é pequeno e rápido. Você passa por entre as pernas dele, deslizando no concreto. Você alcança a porta. Ela está aberta. Você sobe as escadas correndo, quatro degraus de cada vez. A casa é um labirinto de móveis cobertos e poeira. Você corre para a porta da frente e a arromba com o ombro. Luz. Ar. Liberdade. Você corre pela rua, gritando por ajuda. Uma vizinha abre a porta. Ela te vê coberto de sangue e chama a polícia. O Grabber é preso duas horas depois, tentando fugir numa van preta. FIM. Você venceu. E desta vez, a justiça foi feita.`,
    choices: [
      { text: "Jogar novamente", to: "prologo" }
    ]
  },
  capitulo6K: {
    h1: "CAPÍTULO 6 — ENCARAR",
    text: `Você fica parado. Não corre. Não luta. Você só… encara. O Grabber para. A máscara se inclina, como se ele estivesse surpreso. "Você não está com medo." Você não responde. Só olha nos olhos negros da máscara. Ele fica ali por um longo momento. Depois, ri. "Você me lembra alguém." Ele se vira e sai. A porta se fecha. A tranca se encaixa. Você fica vivo. Mas preso. FIM. Nem toda vitória é uma fuga. Às vezes, sobreviver já é o suficiente.`,
    choices: [
      { text: "Jogar novamente", to: "prologo" }
    ]
  },
  capitulo6L: {
    h1: "CAPÍTULO 6 — O JOGO",
    text: `Você aceita. O Grabber sorri por baixo da máscara. Ele se senta no chão, cruzando as pernas, como se estivesse numa brincadeira de criança. "Primeira pergunta: qual é o meu nome?" Você pensa. Robin. A voz no telefone. Ele disse que os meninos sabiam. Talvez… "Você não tem nome." — você diz. "Você é só um monstro." O Grabber fica em silêncio. Depois, ri. "Errado." Ele se levanta. A faca brilha na mão dele. FIM. Alguns jogos não podem ser vencidos.`,
    choices: [
      { text: "Jogar novamente", to: "prologo" }
    ]
  },
  capitulo6M: {
    h1: "CAPÍTULO 6 — RECUSAR E FUGIR (FINAL DE LUTA)",
    text: `Você recusa. "Não vou jogar nada com você." O Grabber suspira. "Que pena." Ele avança com a faca. Você desvia por pouco. A lâmina rasga sua camisa, mas não sua pele. Você corre para a porta. Ele te agarra pelo cabelo. Você dá uma cotovelada no rosto dele — acerta a máscara, que racha. Ele solta. Você corre. A porta está trancada, mas você chuta a fechadura com toda a força. Uma vez. Duas. Três. CRACK. A porta se abre. Você corre escada acima, tropeçando, sangrando. O Grabber está atrás de você, mas ele está ferido, mais lento. Você alcança a porta da frente e a abre. FIM. Você lutou. E venceu.`,
    choices: [
      { text: "Jogar novamente", to: "prologo" }
    ]
  },
  capitulo6N: {
    h1: "CAPÍTULO 6 — ESPERAR (FINAL MISTERIOSO)",
    text: `Você espera. O telefone para de tocar. O silêncio é absoluto. Você fica sentado no colchão, abraçando os joelhos, esperando o que vier. E então… CLANC. A porta se abre. Sozinha. Não tem ninguém do outro lado. Você se levanta devagar. Sobe as escadas. A casa está vazia. A porta da frente está aberta. Você sai. A rua está deserta. O sol está nascendo. Você nunca viu o Grabber de novo. Nunca soube quem ele era. Nunca entendeu por que ele te deixou ir. FIM. Algumas perguntas nunca têm resposta.`,
    choices: [
      { text: "Jogar novamente", to: "prologo" }
    ]
  },
  capitulo6O: {
    h1: "CAPÍTULO 6 — SOLTAR A FITA (FINAL DE RESGATE)",
    text: `Você enfia os dedos na fita e puxa. Dói — a cola arranca a pele dos seus lábios. Mas você não para. A fita se solta. Você respira fundo e grita: "SOCORRO! ESTOU AQUI!" Uma luz acende lá fora. Vozes. Passos. A porta da frente sendo arrombada. O Grabber tenta fugir pela janela, mas a polícia o cerca no quintal. Você é encontrado no porão, amarrado, mas vivo. FIM. Você sobreviveu.`,
    choices: [
      { text: "Jogar novamente", to: "prologo" }
    ]
  },
  capitulo6P: {
    h1: "CAPÍTULO 6 — CORRER PARA A RUA (FINAL DE FUGA)",
    text: `Você corre. A grama corta seus pés descalços. Os galhos batem no seu rosto. Mas você não para. Você corre para a rua, para a luz, para a liberdade. Um carro freia bruscamente. O motorista sai, assustado. "Me ajuda! Por favor, me ajuda!" Ele te coloca no carro e chama a polícia. O Grabber é preso naquela mesma noite. FIM. Você venceu. E nunca mais olhou para um telefone preto do mesmo jeito.`,
    choices: [
      { text: "Jogar novamente", to: "prologo" }
    ]
  },
  capitulo6Q: {
    h1: "CAPÍTULO 6 — ESCONDER-SE (FINAL DE FUGA FURTIVA)",
    text: `Você se esconde atrás de um barril de metal. Seu coração bate tão forte que você tem certeza de que ele pode ouvir. O Grabber passa direto. Os passos se afastam. A respiração dele some. Você espera. Um minuto. Dois. Cinco. Depois, você corre. Pula a cerca. Atravessa o quintal do vizinho. Bate na porta. Uma mulher idosa abre. Ela te vê coberto de sangue e chama a polícia imediatamente. FIM. Você foi mais esperto que ele. E isso te salvou.`,
    choices: [
      { text: "Jogar novamente", to: "prologo" }
    ]
  }
};

const titulo1El = document.getElementById("titulo1");
const titulo2El = document.getElementById("titulo2");
const textoFaseEl = document.getElementById("fase");
const botoesEl = document.getElementById("botoes");

function goTo(id) {
  const node = historia[id];
  render(node);
}

function render(node) {
  titulo1El.textContent = node.h1 || "";
  titulo2El.textContent = node.h2 || "";
  textoFaseEl.textContent = node.text;

  botoesEl.innerHTML = "";

  node.choices.forEach(function (choice) {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = function () {
      goTo(choice.to);
    };
    botoesEl.appendChild(btn);
  });
}

goTo("prologo");