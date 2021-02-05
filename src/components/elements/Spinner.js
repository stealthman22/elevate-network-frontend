import styled from 'styled-components';

const StyledSpinner = styled.div`

 border: 5px solid  #343a40;
 border-top: 5px solid #ff6000 ;
 border-radius: 50%;
 width: 70px;
 height: 70px;
 animation: spin 0.8s linear infinite;
 margin: 5px auto;
 @keyframes spin {
  0% {
 transform: rotate(0deg);
 }
 100% {
 transform: rotate(360deg);
}
}
`;

const Spinner = () => <StyledSpinner />;

export default Spinner;
