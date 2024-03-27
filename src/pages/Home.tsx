import { Fragment } from "react/jsx-runtime";
import { Banner } from "../components/styled-components/Banner";
import { Row } from "../components/styled-components/Row";
import { Container } from "../components/styled-components/Container";
import { Column } from "../components/styled-components/Column";
import { Card } from "../components/styled-components/Card";
import { TitleCard } from "../components/styled-components/TitleCard";
import { TextCard } from "../components/styled-components/TextCard";
import { Figure } from "../components/styled-components/Figure";
import { Wrapper } from "../components/styled-components/Wrapper";
import { Footer } from "../components/styled-components/Footer";
import { FinishPage } from "../components/styled-components/FinishPage";

import TvIcon from '@mui/icons-material/Tv';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LayersIcon from '@mui/icons-material/Layers';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import image1 from '../components/images/celular.jpeg'
import image2 from '../components/images/code.jpg'
import image3 from '../components/images/brincar.jpg'




export function Home(){
    return(
        <Fragment>
           <Banner>
                <div>
                    <h1>Minha primira página com React</h1>
                </div>
           </Banner>
                <Row>
                    <Column>
                        <Card>
                            <TvIcon style={{ fontSize: 55, color: '#0054b4' }}/>
                            <TitleCard>Somente para desktop</TitleCard>
                            <TextCard>
                            Vamos aprender, como utilizar um framework.
                            </TextCard>
                        </Card>                                                
                    </Column> 
                    <Column>
                        <Card>
                            <LayersIcon style={{ fontSize: 55, color: '#0054b4' }}/>
                            <TitleCard>Criado com componentes</TitleCard>
                            <TextCard>
                            Utilizaremos Styled Components.
                            </TextCard>
                        </Card>                                                
                    </Column> 
                    <Column>
                        <Card>
                            <CheckCircleOutlineIcon style={{ fontSize: 55, color: '#0054b4' }}/>
                            <TitleCard>Fácil aproveitamento</TitleCard>
                            <TextCard>
                            Estamos no caminho.
                            </TextCard>
                        </Card>                                           
                    </Column>                
                </Row>

           <Container $display='flex' $direction='row' $alignItems='center' $justifyContent='center' $wrap $reverse>
                <Figure $imageUrl={image1}/>
                <Wrapper>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sapiente. Aliquid accusamus perspiciatis, architecto nihil quos qui numquam quisquam hic natus voluptatum voluptatibus deleniti molestias at reprehenderit facilis reiciendis atque?</p>
                </Wrapper>    
            </Container>  

            <Container $display='flex' $direction='row' $alignItems='center' $justifyContent='center' $wrap>
                <Figure $imageUrl={image2}/>
                <Wrapper>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sapiente. Aliquid accusamus perspiciatis, architecto nihil quos qui numquam quisquam hic natus voluptatum voluptatibus deleniti molestias at reprehenderit facilis reiciendis atque?</p>
                </Wrapper>    
            </Container> 

            <Container $display='flex' $direction='row' $alignItems='center' $justifyContent='center' $wrap $reverse>
                <Figure $imageUrl={image3}/>
                <Wrapper>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sapiente. Aliquid accusamus perspiciatis, architecto nihil quos qui numquam quisquam hic natus voluptatum voluptatibus deleniti molestias at reprehenderit facilis reiciendis atque?</p>
                </Wrapper>    
            </Container>  

            <Footer>
                <div>
                    <h1>Contato</h1>
                </div>
           </Footer>

           <Container $display='flex' $direction='row' $alignItems='center' $justifyContent='center' $wrap> 
                <FinishPage>
                    
                    <div>               
                        <p>About . Contact . Terms of Use . Privacy Policy</p>
                    </div>
                    <div>
                        <small>
                            &copy; Your Website 2020.All Rights Reserved  
                        </small>
                    </div>
                    <div>
                        <FacebookIcon style={{ fontSize: 25, color: '#0054b4' }}/>
                        <TwitterIcon style={{ fontSize: 25, color: '#0054b4' }}/>
                        <InstagramIcon style={{ fontSize: 25, color: '#0054b4' }}/>
                    </div>
                </FinishPage>
            </Container>      
        </Fragment>
    )
}

//conjunto da ópera ELEMENTO HTML
//<div style='font-size: 32px'>Conteudo<div/>