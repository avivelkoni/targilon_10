import { useState } from 'react';

import styled from 'styled-components';

const StyledDiv = styled.div`
  font-size: 24px;
    color: red;
`;

function Foo() {
  const [bar, setBar] = useState(0);
  console.log(bar);
  return (
    <StyledDiv onClick={() => setBar(bar + 1)}>
    {bar}
  </StyledDiv>
  );
}
export default Foo;