import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
 
const Footer = () => {
    return (
        <Box>
         
            <FooterContainer>
                <Row>
                    <Column>
              
                        <Heading>Menu</Heading>
                        <FooterLink href="#">
                            Home
                        </FooterLink>
                        
                        <FooterLink href="#">
                            Features
                        </FooterLink>

                        <FooterLink href="#">
                            Pricing
                        </FooterLink>
                    </Column>

                    <Column>
              
              <Heading>IMDB</Heading>
              <FooterLink href="#">
                  Adress:
              </FooterLink>
              <FooterLink href="#">
              Roskilde University,
                  Universitetsvej 1, 
                  4000 Roskilde
              </FooterLink>
          </Column>
          <Column>
              
              <Heading>Contact Information</Heading>
              <FooterLink href="#">
                  Phone Number: 46 74 20 00
              </FooterLink>
              <FooterLink href="#">
              Support: imdb@ruc.dk
              </FooterLink>
          </Column>

                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;
