import React from 'react';
import {
    Footer,
    FooterText,
    FooterLinks,
    FooterLink
} from 'react-weui';


const MSCFooter = (props) => (
  <Footer>
    <FooterLinks>
      <FooterLink href="http://www.msc-world.com/">MSC World</FooterLink>
      <FooterLink href="https://www.cbnweek.com/">第一财经周刊</FooterLink>
    </FooterLinks>
    <FooterText>Copyright &copy; 2015-2020 MSC World</FooterText>
  </Footer>
);

export default MSCFooter;