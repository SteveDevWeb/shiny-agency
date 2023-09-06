import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import colors from '../../utils/style/color'


const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    transition: 200ms;
    align-items:center;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

const CardLabel = styled.span`
color: #5843e4;
    font-size: 22px;
    font-weight: bold;
    align-self:flex-start;
    `

const CardImage = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    margin:50px 0;
`
const Name =styled.span`
    font-size:25px;
    font-weight:400;
`

function Card({ label, title, picture }) {
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance"/>
            <Name>{title}</Name>
        </CardWrapper>
    )
}
 
Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}
 
Card.defaultProps = {
    label:'',
    title: '',
    picture: DefaultPicture
}

export default Card