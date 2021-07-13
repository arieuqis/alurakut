import Box from "../src/components/Box";
import MainGrid from "../src/components/MainGrid";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AlurakutCommons";

function ProfileSidebar({ gitHubUser }) {
  return (
    <Box>
      <img src={`https://github.com/${gitHubUser}.png`} />
    </Box>
  );
}

export default function Home() {
  const gitHubUser = "arieuqis";
  const pessoasFavoritas = ["juunegreiros", "peas", "omariosouto"];

  return (
    <>
      <AlurakutMenu />

      <MainGrid>
        <div className="profileArea">
          <ProfileSidebar gitHubUser={gitHubUser} />
        </div>
        <div className="welcomeArea">
          <Box>
            <h1 className="title">

            Bem vindo
            </h1>

            <OrkutNostalgicIconSet/>
            </Box>
        </div>
        <div className="profileRelationsArea">
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
