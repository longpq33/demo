import styled from "styled-components";

export const Shell = styled.div`
  min-height: 100vh;
  background: #f7f8f9;
  position: relative; /* Create positioning context for absolute footer */
`;

export const Content = styled.main`
  padding: 24px;
  padding-bottom: 80px; /* Space for footer when collapsed */
`;

export const FooterArea = styled.footer`
  background: #0f2743;
  color: #fff;
  padding: 32px 16px;
`;


