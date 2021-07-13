import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AluraCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

//  const Title = styled.h1`
//    font-size: 50px;
//    color: ${({ theme }) => theme.colors.primary};
// `

function ProfileSidebar (propriedades) {
    console.log(propriedades);
    return (
      <Box>
        <img src={`https://github.com/${propriedades.githubUser}.png`} sytle={{ borderRadius: '8px' }}/>
      </Box>
    )
}

export default function Home() {
  const usuarioAleatorio = 'peas';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]

  return (
  <>
    <AlurakutMenu />
    <MainGrid>
      {/* <Box style="grid-area: 'profileArea;"> */}
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSidebar githubUser={usuarioAleatorio} />
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          <h1 className="title">
            Bem-vindo
            </h1>

            <OrkutNostalgicIconSet />
        </Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle"> 
          Amigos ({pessoasFavoritas.length})
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
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
  </>
  )
}