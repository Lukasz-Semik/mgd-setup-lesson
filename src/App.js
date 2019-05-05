import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: red;
  width: 100px;
  height: 100px;
`;

const App = () => {
  const [value, setValue] = useState(0);

  return (
    <Wrapper>
      <div>
        <button type="button" onClick={() => setValue(value + 1)}>
          click
        </button>
        <p>Message: {value}</p>
        <div>dasdasd</div>
      </div>

      <div>
        <button type="button" onClick={() => setValue(value + 1)}>
          click
        </button>
        <p>Message: {value}</p>
        <div>dasdasd</div>
      </div>
    </Wrapper>
  );
};

export default App;
