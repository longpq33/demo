import styled from "styled-components";

export const Shell = styled.div`
  min-height: 100vh;
  background: #f7f8f9;
  position: relative; /* Create positioning context for absolute footer */
`;

export const Content = styled.main`
  padding: 24px;
  padding-bottom: 80px; /* Space for footer when collapsed */

  @media (max-width: 768px) {
    padding: 16px;
    padding-bottom: 100px; /* More space for mobile footer */
  }
`;

export const FooterArea = styled.footer`
  background: #0f2743;
  color: #fff;
  padding: 32px 16px;

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;


