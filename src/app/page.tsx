"use client";
import Image from "next/image";
import React from "react";

export default function Home() {
  // create a modal that open when click on the card
  const [modal, setModal] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({
    title: "",
    description: "",
  });

  const handleModal = (title: string, description: string) => {
    setModalContent({
      title,
      description,
    });
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const frasesJson = [
    {
      categoria: "Para a gata mais inteligente que existe!!",
      cantadas: [
        {
          titulo: "Deixa eu estudar sua língua",
          frase:
            "pesquisas apontam que agente junto é erro de gramática, mas a gente separado é erro do destino. ",
        },
        {
          titulo: "Acho que tá rolando uma química aqui",
          frase: "Não sou adenina mas sou louco por timina.",
        },
        {
          titulo: "Mais atrativa que carga negativa pela positiva",
          frase:
            "Me chama de tabela Periódica e diz que rolou uma química entre nós.",
        },
        {
          titulo: "Única história que quero saber é a nossa",
          frase: "fazer ENEM? Só se for pra entrar no seu coração. ",
        },
        {
          titulo: "Você é mais atrativa que a Terra",
          frase:
            "Nosso amor deve ser de outro mundo, pq mesmo fora da gravidade da Terra, eu ficaria caidinho por vc...",
        },
        {
          titulo: "Única química que quero saber, é a nossa",
          frase:
            "Queria ser um gás nobre, mas um gás nobre eu não posso ser. Porque um gás nobre se estabiliza com 8 elétrons, e eu me estabilizo só com vc.",
        },
      ],
    },
    {
      categoria: "Não é sobre ser brega, mas é que te amo dms",
      cantadas: [
        {
          titulo: "Seu pai é padeiro?",
          frase:
            "Me passa seu Instagram? É que a minha mãe falou para eu seguir o meu sonho.",
        },
        {
          titulo: "Já vai no Maps que eu quero cada destino com você",
          frase: "Você não é GPS quebrado, mas me deixa sem rumo.",
        },
        {
          titulo: "Inclusive, você é meu primeiro ponto vou para qlqr dúvida",
          frase: "Seu nome é Google? Porquê você tem tudo que eu procuro.",
        },
        {
          titulo: "Tem que pegar fila, aproveita que é exclusiva para você ;)",
          frase:
            "Onde é que eu deixo o meu currículo para concorrer à vaga de amor da sua vida?",
        },
        {
          titulo: "Como eu facilmente passaria noite após noite te admirando",
          frase:
            "Se as estrelas fossem tão lindas quanto você, eu passaria noites em claro olhando para elas.",
        },
        {
          titulo: "Eu não era seu tudo?? aff...",
          frase: "Se nada dura para sempre, quer ser meu nada?",
        },
        {
          titulo: "Vi nem o tempo passar, tava olhando para você",
          frase:
            "Um mês atrás eu era apaixonado(a) por você. E parece que estamos no mês passado ainda.",
        },
        {
          titulo:
            "Te acompanhar em tudo quanto é canto nunca foi tão estratégico",
          frase:
            "Você acredita em amor a primeira vista? Ou eu devo passar aqui de novo",
        },
        {
          titulo: "Me chama de Beijamim...",
          frase:
            "Queria ser um beija-flor, mas beija-flor não posso ser, beija-flor beija várias flores, e eu só quero beijar você",
        },
        {
          titulo: "Sentindo uma mistura de sentimentos aqui",
          frase:
            "Você nunca poderia ser anestesista. Porque é impossível não sentir nada perto de você.",
        },
        {
          titulo: "Aliança é um bom ponto inclusive, com o seu nome ent! <3",
          frase:
            "Eu não quero seu dinheiro, nem sua herança, eu apenas quero o seu nome, gravado na minha aliança.",
        },
        {
          titulo: "Vamo ter que ir para RJ gata",
          frase:
            "A cidade maravilhosa só se chama Rio de Janeiro pq vc não tinha nascido ainda.",
        },
      ],
    },
  ];

  return (
    <main className="p-3">
      <h1>Lov U Alissa</h1>
      <div className="flex flex-col py-2">
        <div className="flex flex-wrap justify-around mt-6 sm:w-full">
          {frasesJson.map((frase) => (
            <div
              className="p-2 m-2 bg-pink-800 rounded-xl shadow-md hover:shadow-lg"
              key={frase.cantadas[0].titulo}
            >
              <h2 className="text-xl font-bold text-center mb-5">
                {frase.categoria}
              </h2>
              <div className="flex flex-col gap-4">
                {frase.cantadas.map((cantada) => (
                  <div
                    className="flex flex-col bg-pink-900 p-3 rounded-lg"
                    key={cantada.titulo}
                    onClick={() => handleModal(cantada.titulo, cantada.frase)}
                  >
                    {/* <h3 className="text-lg font-bold">{cantada.titulo}</h3> */}
                    <p className="">{cantada.frase}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal && modalContent.description && (
        <div className="bg-pink-700 fixed top-1/2 left-1/2 -translate-x-1/2 p-4 w-[80vw] rounded-lg flex gap-4 flex-col z-10">
          <h2 className="text-center text-lg font-bold">
            {modalContent.title}
          </h2>
          <p>{modalContent.description}</p>
        </div>
      )}
      {/* make a blur background for the modal, and when i click on it, the modal will close */}
      {modal && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50"
          onClick={closeModal}
        ></div>
      )}
    </main>
  );
}
