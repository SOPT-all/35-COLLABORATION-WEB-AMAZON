

import FilterContainer from "../../components/common/FilterList/FIlterContainer";
import { css } from "@emotion/react";

const devPageStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const Dev: React.FC = () => {
  return (
    <div css={devPageStyle}>
      <h1>Dev Page</h1>
      <FilterContainer />
    </div>
  );
};

export default Dev
