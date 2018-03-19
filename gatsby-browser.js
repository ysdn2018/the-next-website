import React, { createElement } from "react"
import { Transition } from "react-transition-group"
import createHistory from "history/createBrowserHistory"
import styled from 'styled-components'
import getTransitionStyle from "./src/utils/getTransitionStyle"
import SectionHeading from "./src/components/SectionHeading"
import Header from "./src/components/Header"
import Link from 'gatsby-link'
import { spacing } from './src/utils/constants'
import Headroom from 'react-headroom'


const timeout = 360
const delay = 100
const historyExitingEventType = `history::exiting`
const baseOffset = 0
const tabHeight = 41
const offscreenOffset = baseOffset+tabHeight*4

const Container = styled.div`
  width: 100%;
  height: calc(100% - 40px);
`

const Navigation = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
  pointer-events: none;
  overflow: hidden;
  z-index: 10;

  .headroom {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    zIndex: 1;
    transition: transform 250ms ease-in-out;
  }
  .headroom--unfixed {
    transition: transform 250ms ease-out;
    ${'' /* transform: translateY(0); */}
  }
  .headroom--scrolled {
    transition: transform 200ms ease-in;
  }
  .headroom--unpinned {
    transition: transform 250ms ease-out;
    transform: translateY(${props => tabHeight*(props.numInMenu-1)}px);

    @media (-webkit-min-device-pixel-ratio: 2) {
      transform: translateY(${props => tabHeight * (props.numInMenu + 1) }px);
    }
  }
  .headroom--pinned {
    transition: transform 250ms ease-out;
    ${'' /* transform: translateY(${tabHeight * 4}px); */}
  }
`

const PseudoSection = styled.div`
  position: absolute;
  top: 0;
  transform: translateY(${props => props.navShowing ?
    (props.active ? 100 + "vh" : "calc(100vh - " + (77+(tabHeight*(props.numInMenu-1)) - props.vOffset) + "px)") : 
    (props.active ? 100 + "vh" : "calc(100vh - " + (77+(tabHeight*(props.numInMenu-1)) - props.vOffset/3) + "px)")
    });
  background-color: white;
  z-index: ${props => props.active ? 0 : 10};
  width: 100%;
  opacity: 1;
  z-index: 1000;
  transition: transform ${timeout - delay}ms ease-out, opacity ${timeout - delay}ms ease-out;
  ${props => props.active && 'transition: none !important;'}
  pointer-events: auto;

  h4 {
    transition: opacity ${timeout - delay}ms ease-out, opacity ${timeout - delay}ms ease-out;
    opacity: ${props => props.navShowing ? 1 : 0};
  }

  @media (-webkit-min-device-pixel-ratio: 2) {
    transform: translateY(${props => props.active ? 100 + "vh" : "calc(100vh - " + (77 + (tabHeight * (props.numInMenu - 1)) - props.vOffset + 44) + "px)"});
  }
`

const PseudoSectionHeading = styled(SectionHeading)`
  position: absolute;
  top: ${spacing.big};
  pointer-events: auto;

  &:hover {
    text-decoration: underline !important;
  }
`

const PageLink = styled(Link) `
  text-decoration: none;
  color: black;
  width: 100%;
  height: 100%;
`

const PseudoSectionInner = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  pointer-events: auto;
  margin-top: ${spacing.big}px;
`

const OldContent = styled.div`
  position: absolute;
  top: 0;
  transition: all ${timeout}ms ease-out;
  width: 100%;
`


const newTransitionStyles = {
  entering: { 
    // backgroundColor: "green",
    opacity: 1, 
    transform: `translateY(0)`,
    transition: `transform ${timeout - delay}ms ease-out`,
  },
  entered: { 
    // backgroundColor: "yellow",
    opacity: 0,
    transform: `translateY(0)`,
    display: `none`,
    transition: `none`,
  },
  exiting: {
    // backgroundColor: "orange",
    opacity: 0,
    transform: `translateY(100vh)`,
    transition: `none`,
  },
  exited: {
    // backgroundColor: "red",
    transition: `none`,
    opacity: 1,
    transition: `transform ${timeout - delay+ 50}ms ease-out`,
  },
}



function NavigationTab(props) {
  return (
    <Transition 
      in={props.nextPageResources.hasOwnProperty(`component`) && props.nextPageResources.page.path === props.path } 
      timeout={timeout}
      onEntering={props.onEnter}
    >

      {(status) => (
        <PseudoSection style={newTransitionStyles[status]} 
          vOffset={props.vOffset} 
          active={props.active && status == "exited"}
          numInMenu={props.numInMenu}
          navShowing={props.navShowing}
        >
          <PageLink to={props.path}><PseudoSectionHeading title={props.name} path={props.path} /></PageLink>

          <PseudoSectionInner>
            {props.nextPageResources.component && props.nextPageResources.page.path === props.path && createElement(props.nextPageResources.component, {
              ...props,
              ...props.nextPageResources.json,
            })}
          </PseudoSectionInner>

        </PseudoSection>
      )}

    </Transition>
  )
}

const getUserConfirmation = (pathname, callback) => {
  const event = new CustomEvent(historyExitingEventType, { detail: { pathname } })
  window.dispatchEvent(event)

  if (pathname == "/work/" || pathname == "/sponsors/" || pathname == "/info/" || pathname == "/graduates/") {
    setTimeout(() => {
      callback(true)
    }, timeout)
  } else {
    callback(true)
  }
}

const history = createHistory({ getUserConfirmation })
// block must return a string to conform
history.block((location, action) => location.pathname)
exports.replaceHistory = () => history


class ReplaceComponentRenderer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { 
        exiting: false, 
        nextPageResources: {},
        offsets: [
          baseOffset,
          baseOffset+tabHeight,
          baseOffset+tabHeight*2,
          baseOffset+tabHeight*3
        ],
        numInMenu: 3,
        navShowing: true
      }
      

    this.navLinks = [
      { name: "Work", path: "/work/", index: 0 },
      { name: "Graduates", path: "/graduates/", index: 1 },
      { name: "Sponsors", path: "/sponsors/", index: 2 },
      { name: "Info", path: "/info/", index: 3 },
    ]

    this.listenerHandler = this.listenerHandler.bind(this)
  }

  listenerHandler(event) {
    const nextPageResources = this.props.loader.getResourcesForPathname(
      event.detail.pathname,
      nextPageResources => this.setState({ nextPageResources })
    ) || {}
    this.setState({ exiting: true, nextPageResources })
  }

  componentDidMount() {
    window.addEventListener(historyExitingEventType, this.listenerHandler)
    this.calcOffsets()
  }

  componentWillUnmount() {
    window.removeEventListener(historyExitingEventType, this.listenerHandler)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.setState({ exiting: false, nextPageResources: {} })
    }
  }

  calcOffsets = (index) => {
    let i = 0
    let offsets = []

    for (let link in this.navLinks) {
      if (this.props.location.pathname === this.navLinks[link].path) {
        offsets[link] = offscreenOffset
      } else {
        offsets[link] = baseOffset + (i * tabHeight)
        i++
      }
    }

    this.setState({
      offsets,
      numInMenu: i
    })
  }

  moveLowerLayers = (index, path) => {
    let offsets = []
    let activeFound = false

    for (let link in this.navLinks) {
      if (this.state.nextPageResources.page.path === this.navLinks[link].path) {
        activeFound = true
      } 

      if (activeFound) {
        offsets[link] = this.state.offsets[link]
      } else {
        offsets[link] = offscreenOffset
      }
    }

    this.setState({
      offsets,
    })
  }

  onNavHide = () => {
    this.setState({
      navShowing: false
    })
    console.log('HIDING');
    
  }

  onNavShow = () => {
    this.setState({
      navShowing: true
    })
    console.log('SHOWING');
  }

  showNav = () => {
    console.log()
  }

  render() {
    const transitionProps = {
      timeout: {
        enter: 0,
        exit: timeout,
      },
      appear: true,
      in: !this.state.exiting,
      key: this.props.location.key,
      onEnter: this.calcOffsets,
    }

    return (
      <Container>
        <OldContent>
          <Transition {...transitionProps}>
          {
            (status) => createElement(this.props.pageResources.component, {
              ...this.props,
              ...this.props.pageResources.json,
              transition: {
                status,
                timeout,
                style: getTransitionStyle({ status, timeout }),
                nextPageResources: this.state.nextPageResources,
              },
            })
          }
          </Transition>
        </OldContent>

      <Navigation numInMenu={this.state.numInMenu}>
        <Header />
          <Headroom disableInlineStyles onUnpin={this.onNavHide} onPin={this.onNavShow} onUnfix={this.onNavShow}>
            {this.navLinks.map(link => (
              <NavigationTab
                name={link.name}
                path={link.path}
                active={this.props.location.pathname === link.path}
                nextPageResources={this.state.nextPageResources}
                numInMenu={this.state.numInMenu}
                vOffset={this.state.offsets[link.index]}
                key={link.index}
                onExiting={this.calcOffsets}
                onEnter={this.moveLowerLayers}
                navShowing={this.state.navShowing}
                onMouseOver={this.showNav}
              />
            ))}
          </Headroom>
      </Navigation>
        
      </Container>
    )
  }
}

exports.replaceComponentRenderer = ({ props, loader }) => {
  if (props.layout) {
    return undefined
  }
  return createElement(ReplaceComponentRenderer, { ...props, loader })
}