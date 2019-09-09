import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import {styles} from '../../../utils'


export class NavbarLinks extends Component {

    state = {
        links: [
            {
                id:0,
                path: '/',
                name: 'Home'
            },
            {
                id: 1,
                path: '/about/',
                name: 'about'
            },
            {
                id: 2,
                path: '/menu/',
                name: 'menu'
            }, {
                id: 3,
                path: '/contact/',
                name: 'contact'
            }
        ]
    }


    render() {
        return (
            <LinkWrapper open={this.props.navbarOpen}>
                {this.state.links.map(item => {
                    return (
                        <li
                        key={item.id}>
                        <Link to={item.path} className="nav-link">
                        {item.name}
                        </Link>
                        
                        </li>
                    )
                })}
            </LinkWrapper>
        )
    }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.6rem 1rem 0.6rem 1rem;
    color: ${styles.colors.mainBlue};
    font-weight: 300;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainBlue};
      color: ${styles.colors.mainWhite};
      padding: 0.6rem 1rem 0.6rem 1.2rem;

    }
  }
  
  height: ${props => (props.open ? '152px' : '0px')};
  overflow: hidden;
  ${styles.transObject({ time: '1s' })};
  

  @media (min-width: 768px) {
    
    height: auto;
    
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`
export default NavbarLinks
