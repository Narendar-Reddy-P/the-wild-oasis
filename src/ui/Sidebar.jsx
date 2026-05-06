import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: aliceblue;
  padding: 3.2rem 3.4rem;
  border-right: 1px solid var(--color-grey-0);
  grid-row: 1/-1;
`;

export default function Sidebar() {
  return <StyledSidebar>SIDEBAR</StyledSidebar>;
}
