import styled from "styled-components"
import { ExpandMore } from "@material-ui/icons"

export const LinkIconDown = styled.a`
    z-index: 3;
    cursor: pointer;
    text-decoration: none;
    color: #5a3b3b;
    position: absolute;
    bottom: 1vh;
    left: 45vw;
`

export const BigExpandMore = styled(ExpandMore)`
    font-size: 48px;
`
