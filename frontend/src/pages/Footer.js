import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
    FooterContainer,
    FooterColumn,
    FooterColumnHeader,
    FooterText,
    SocialLinks,
    FooterIcon
} from './FooterStyles';

function Footer() {
  return (
    <FooterContainer>
            <FooterColumn>
                <FooterColumnHeader>
                    <h3>Get connected</h3>
                </FooterColumnHeader>
                <SocialLinks>
                    <FooterIcon>
                        <FontAwesomeIcon icon={faFacebook} />
                    </FooterIcon>
                    <FooterIcon>
                        <FontAwesomeIcon icon={faTwitter} />
                    </FooterIcon>
                    <FooterIcon>
                        <FontAwesomeIcon icon={faYoutube} />
                    </FooterIcon>
                    <FooterIcon>
                        <FontAwesomeIcon icon={faInstagram} />
                    </FooterIcon>
                </SocialLinks>
            </FooterColumn>

            <FooterColumn>
                <FooterColumnHeader>
                    <h3>Project</h3>
                </FooterColumnHeader>
                <FooterText>Home</FooterText>
                <FooterText>About</FooterText>
                <FooterText>Contact</FooterText>
            </FooterColumn>

            <FooterColumn>
                <FooterColumnHeader>
                    <h3>Community</h3>
                </FooterColumnHeader>
                <FooterText>GitHub</FooterText>
                <FooterText>Issues</FooterText>
                <FooterText>Project</FooterText>
            </FooterColumn>

            <FooterColumn>
                <FooterColumnHeader>
                    <h3>Help</h3>
                </FooterColumnHeader>
                <FooterText>Support</FooterText>
                <FooterText>Troubleshooting</FooterText>
                <FooterText>Contact</FooterText>
            </FooterColumn>

            <FooterColumn>
                <FooterColumnHeader>
                    <h3>Others</h3>
                </FooterColumnHeader>
                <FooterText>Terms of Services</FooterText>
                <FooterText>Privacy Policy</FooterText>
                <FooterText>License</FooterText>
            </FooterColumn>
        </FooterContainer>
  );
}

export default Footer;
