import colors from "../../utils/style/color"
import styled from "styled-components"
import errorIllustration from "../../assets/404.svg"

const Display = styled.section`
    background: ${colors.backgroundLight};
    margin-left: clamp(10px, 5%, 65px);
    margin-right: clamp(10px, 5%, 65px);
    min-height: calc(100vh - 100px);
    padding: 0 5%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    `

const ErrorText =styled.span`
    text-align:center;
    font-weight:700;
    font-size:31px;
`

const ErrorIllustration = styled.img`
    height:300px;
    margin:40px 0;
`

function Error() {
    return (
      <Display>
        <ErrorText>Oups...</ErrorText>
        <ErrorIllustration src={errorIllustration}/>
        <ErrorText>Il semblerait qu’il y ait un problème</ErrorText>
      </Display>
    )
  }
  
  export default Error