class rolarDados{
  constructor() {
    this.tabelaEmojis = {
      1: ":white_large_square:",                  2: ":white_large_square:",
      3: ":owl:",                                 4: ":owl:",
      5: ":owl: :deer:",                          6: ":lady_beetle:",
      7: ":lady_beetle: :lady_beetle:",           8: ":lady_beetle: :deer:",
      9: ":lady_beetle: :deer: :owl:",            10: ":lady_beetle: :lady_beetle: :owl:",
      11: ":lady_beetle: :deer: :deer: :owl:",    12: ":owl: :owl:"
    };
  }
  roll(expressao){
    const texto = expressao.trim(); //Retorna caso seja a entrada seja "!a" ou "!A"
    if (!texto) { throw new Error("Informe os dados.\nExemplo: !a 2d6 + 1d10 ou !A 2d6 d10"); }

    const somenteDados = /^\d*d(?:6|10|12)(?:(?:\s*\+\s*|\s+)\d*d(?:6|10|12))*$/i; //Ve se só tem os dados de Assimilação
    if (!somenteDados.test(texto)) { throw new Error("Em Assimilação RPG só tem d6, d10 e d12");}
    const grupos = texto.match(/\d*d(?:6|10|12)/gi) || [];

    const dadosAgrupados = {};
    for (const termo of grupos) {   // Agrupa os dados pelo número de faces
      const dado = termo.match(/^(\d*)d(\d+)$/i);
      const quantidade = dado[1] === "" ? 1 : Number(dado[1]);
      const faces = Number(dado[2]);
      dadosAgrupados[faces] =(dadosAgrupados[faces] || 0) + quantidade;
    }

    const gruposOrdenados = Object.entries(dadosAgrupados).sort((a, b) => Number(b[0]) - Number(a[0])); // Ordena os dados pelas maiores faces para as menores

    const totalDados = gruposOrdenados.reduce((total, [faces, quantidades]) => total + quantidades, 0 ); //Verifica se obedece o limite de 20 dados
    if (totalDados > 20) { throw new Error("Você pode rolar no máximo 20 dados.\nPare de trapacear"); }

    const detalhes = [];
    for (const [facesTexto, quantidade] of gruposOrdenados) {
      const faces = Number(facesTexto);
      for (let i = 0; i < quantidade; i++) {
        const resultado = Math.floor(Math.random() * faces) + 1;
        const assimilado = this.tabelaEmojis[resultado] ?? "❓";
        detalhes.push(`**${detalhes.length + 1}**. d${faces} [${resultado}] ➤ ${assimilado}`);
      }
    }
    return { detalhes };
  }
}
module.exports = rolarDados;
