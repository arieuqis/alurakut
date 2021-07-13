import React from "react";
import Box from "../src/components/Box";
import MainGrid from "../src/components/MainGrid";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";

function ProfileSidebar({ gitHubUser }) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${gitHubUser}.png`} />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${gitHubUser}`}>
          @{gitHubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

function CommunityBox({ titleText, stateArray }) {
  console.log(stateArray);
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {titleText} ({stateArray.length})
      </h2>
      <ul>
        {stateArray.map((itemAtual) => {
          return (
            <li key={itemAtual.id}>
              <a href={itemAtual.url}>
                <img src={itemAtual.image} />
                <span>{itemAtual.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </ProfileRelationsBoxWrapper>
  );
}

export default function Home() {
  const gitHubUser = "arieuqis";
  // const pessoasFavoritas = ["juunegreiros", "peas", "omariosouto"];
  const [pessoasFavoritas, setPessoasFavoritas] = React.useState([
    {
      id: "423423423423",
      title: "juunegreiros",
      image: "https://github.com/juunegreiros.png",
      url: "https://github.com/juunegreiros",
    },
    {
      id: "424234234",
      title: "peas",
      image: "https://github.com/peas.png",
      url: "https://github.com/peas",
    },
    {
      id: "e3424234",
      title: "omariosouto",
      image: "https://github.com/omariosouto.png",
      url: "https://github.com/omariosouto",
    },
  ]);
  const [comunidades, setComunidades] = React.useState([
    {
      id: "12802378123789378912789789123896123",
      title: "Eu odeio acordar cedo",
      image: "https://alurakut.vercel.app/capa-comunidade-01.jpg",
      url: "https://alurakut.vercel.app/capa-comunidade-01.jpg",
    },
  ]);

  return (
    <>
      <AlurakutMenu githubUser={gitHubUser} />

      <MainGrid>
        <div className="profileArea">
          <ProfileSidebar gitHubUser={gitHubUser} />
        </div>
        <div className="welcomeArea">
          <Box>
            <h1 className="title">Bem vindo</h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subtitle">O que você deseja compartilhar?</h2>
            <form
              onSubmit={function handleCriaComunidade(e) {
                e.preventDefault();
                const dadosDoForm = new FormData(e.target);

                console.log("Campo: ", dadosDoForm.get("title"));
                console.log("Campo: ", dadosDoForm.get("image"));
                

                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get("title"),
                  image: dadosDoForm.get("image"),
                  url: dadosDoForm.get("communityUrl")
                };
                const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas);
              }}
            >
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="coloque uma URL para usarmos de capa"
                />
              </div>
              <div>
                <input
                  placeholder="coloque a URL para acessar a comunidade"
                  name="communityUrl"
                  aria-label="coloque a URL para acessar a comunidade"
                />
              </div>

              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea">
          <CommunityBox titleText="Comunidades" stateArray={comunidades} />
          <CommunityBox
            titleText="Pessoas da comunidade"
            stateArray={pessoasFavoritas}
          />
        </div>
      </MainGrid>
    </>
  );
}
