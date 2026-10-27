# Spe-assimilas

Bot para Discord desenvolvido em JavaScript, criado para facilitar as rolagens de dados do sistema de RPG **Assimilação**.

## Funcionalidades

- Rolagem de dados de 6, 10 e 12 faces, os únicos utilizados no sistema Assimilação.
- Exibição individual dos resultados de cada dado.
- Agrupamento dos dados por quantidade de faces.
- Resposta com GIF em caso de erro na expressão de rolagem. Cuidado para não deixar a SPE brava!

## Como utilizar

No chat de um servidor do Discord em que o bot esteja presente, envie uma mensagem usando o comando:

`!a EXPRESSÃO`

O comando aceita tanto `!a` quanto `!A`.

### Exemplos

- `!a d6` — rola um dado de 6 faces.
- `!A 2d10` — rola dois dados de 10 faces.
- `!a 2d6 + 1d12` — rola dois dados de 6 faces e um dado de 12 faces.
- `!A d12 d10` — rola um dado de 12 faces e um dado de 10 faces.

## Tecnologias utilizadas

- JavaScript
- Node.js
- Discord.js

## Configuração e execução

1. Instale o [Node.js](https://nodejs.org/) e o npm.
2. Clone ou baixe este repositório.
3. No diretório do projeto, instale as dependências com o comando:

   ```bash
   npm install
   ```

4. Configure a variável de ambiente `DISCORD_TOKEN` com o token do seu bot. Esse token pode ser obtido no Discord Developer Portal.
5. Inicie o bot com o comando:

   ```bash
   node index.js
   ```

**Importante:** nunca compartilhe seu token do Discord nem o publique no repositório. Ele deve ser mantido em segurança.

## Estrutura do projeto

```text
Spe-assimilas/
├── Gifs/
│   └── special-week-agemasen.gif
├── Sub_Sistemas/
│   └── rolarDados.js
├── index.js
├── package.json
└── README.md
```

## Créditos e atribuição

O **Spe-assimilas** pode ser utilizado e adaptado em projetos pessoais ou colaborativos, desde que sua autoria original seja devidamente reconhecida.

Caso este projeto, ou partes de seu código, sejam utilizados em outros projetos, solicita-se que seja incluída uma referência ao Spe-assimilas e ao seu autor na documentação e nos créditos pertinentes.

**Repositório original:** [Spe-assimilas](https://github.com/WYindu)

## Agradecimentos especiais

Este projeto nasceu de uma amizade e do desejo de ajudar meu amigo Leonardo durante suas sessões de RPG de Assimilação.

Criei o Spe-assimilas para facilitar as rolagens de dados pelo chat do Discord, permitindo que todos os jogadores tivessem mais acessibilidade e praticidade durante as sessões.

Além disso, agradeço ao Leonardo por me ajudar em diversos momentos da minha vida. Este bot também é uma forma de demonstrar minha gratidão por sua amizade e por tudo o que fez por mim.

**Obrigado, Leonardo!** Que o Spe-assimilas possa contribuir para muitas sessões divertidas e boas histórias.
