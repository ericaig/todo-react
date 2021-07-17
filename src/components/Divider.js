import styled from "styled-components"

const defaultHeight = 50;

const DividerStyles = styled.div`
    height: ${props => props.height || defaultHeight}px;
`

export default function Divider({ height = defaultHeight }) {
    return <DividerStyles height={height}></DividerStyles>
}