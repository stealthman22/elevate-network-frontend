import styled from 'styled-components';

const StyledWrapper = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-top: 6rem;
  margin-bottom: 3rem;


@media (max-width: 700px) {

    margin-top: 8rem;
  
}
`;

const Wrapper = () => <StyledWrapper />;

export default Wrapper;
