import { useEffect } from "react";
import styled from "styled-components";

const BackdropStyles = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,.3);
    display: ${props => props.show ? 'block' : 'none'};
    top: 0;
    cursor: pointer;
`

export default function Backdrop({ children, show, onClick }) {
    useEffect(() => {
        if (show) window.document.body.style.overflowY = "hidden"

        return () => {
            window.document.body.style.overflowY = "scroll"
        }
    }, [show])

    if(!show) return <></>

    return <BackdropStyles show={show} onClick={() => onClick?.call()}>
        {children}
    </BackdropStyles>
}