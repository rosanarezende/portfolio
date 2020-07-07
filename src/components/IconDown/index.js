import React from "react"

import { LinkIconDown, BigExpandMore } from "./styles"

function IconDown(props) {
    const { link } = props

    return (
            <LinkIconDown href={link}>
                < BigExpandMore />
            </LinkIconDown >
    )
}

export default IconDown