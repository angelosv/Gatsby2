import React, { Component } from 'react'
import styled from 'styled-components'
import {styles} from '../../../utils'
export class NavbarIcons extends Component {
    render() {
        return (
            <ButtonWapper>
                           Content from NavbarIcons                
            </ButtonWapper>
        )
    }
}

const ButtonWapper = styled.div`
color: ${styles.colors.mainWhite}
`

export default NavbarIcons
