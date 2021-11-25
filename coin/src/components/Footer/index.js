import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia,SocialmediaWrap, SocialLogo,WebsiteRights, SocialIcons, SocialIconsLink,   } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/Crypto">Comments</FooterLink>
                                <FooterLink to="/Crypto">Career</FooterLink>
                                <FooterLink to="/Crypto">How it Works</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/Crypto">Comments</FooterLink>
                                <FooterLink to="/Crypto">Career</FooterLink>
                                <FooterLink to="/Crypto">How it Works</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/Crypto">Comments</FooterLink>
                                <FooterLink to="/Crypto">Career</FooterLink>
                                <FooterLink to="/Crypto">How it Works</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/Crypto">Comments</FooterLink>
                                <FooterLink to="/Crypto">Career</FooterLink>
                                <FooterLink to="/Crypto">How it Works</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialmediaWrap>
                        <SocialLogo to='/'>C01N</SocialLogo>
                        <WebsiteRights>C01N® 2021 - Created By Juan Andrés Fernández Camacho</WebsiteRights>
                        <SocialIcons>
                            <SocialIconsLink href ="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconsLink>
                            <SocialIconsLink href ="//www.youtube.com" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconsLink>
                            <SocialIconsLink href ="//www.youtube.com" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconsLink>
                            <SocialIconsLink href ="//www.youtube.com" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconsLink>
                            <SocialIconsLink href ="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconsLink>
                        </SocialIcons>

                    </SocialmediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
