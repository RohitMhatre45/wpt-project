import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #333;
  color: #fff;
  padding: 20px 0;
`;

export const FooterColumn = styled.div`
  flex: 1;
  padding: 0 20px;
`;

export const FooterColumnHeader = styled.div`
  margin-bottom: 10px;
`;

export const FooterText = styled.p`
  margin: 5px 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
`;

export const FooterIcon = styled.div`
  color: #fff;
  font-size: 24px;
`;