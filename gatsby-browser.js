import React, { createElement } from "react"
import { Transition } from "react-transition-group"
import createHistory from "history/createBrowserHistory"
import styled from 'styled-components'
import getTransitionStyle from "./src/utils/getTransitionStyle"
import SectionHeading from "./src/components/SectionHeading"
import Header from "./src/components/Header"
import Link from 'gatsby-link'
import { spacing } from './src/utils/constants'



const timeout = 360
const delay = 100
const historyExitingEventType = `history::exiting`
const baseOffset = 0
const offscreenOffset = 1000
const tabHeight = 47

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
`


const PseudoSection = styled.div`
  position: absolute;
  top: 0;
  transform: translateY(${props => props.active ? 100 + "vh" : "calc(100vh - " + (83+(tabHeight*(props.numInMenu-1)) - props.vOffset) + "px)"});
  background-color: white;
  z-index: ${props => props.active ? 0 : 10};
  width: 100%;
  opacity: 1;
  z-index: 1000;
  transition: transform ${timeout - delay}ms ease-out, opacity ${timeout - delay}ms ease-out;
  ${props => props.active && 'transition: none !important;'}
  pointer-events: auto;

  &:hover a {
    text-decoration: underline;
  }

  &:hover {
    background-color: pink;
  }

  a {
    text-decoration: none;
    color: black;
  }

  @media (-webkit-min-device-pixel-ratio: 2) {
    transform: translateY(${props => props.active ? 100 + "vh" : "calc(83vh - " + (83 + (tabHeight * (props.numInMenu - 1)) - props.vOffset) + "px)"});
  }
`

const PseudoSectionHeading = styled(SectionHeading)`
  position: absolute;
  top: ${spacing.big};
  pointer-events: auto;
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
    transition: `transform ${timeout - delay + 200}ms ease-out`,
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
        >
          <Link to={props.path}><PseudoSectionHeading title={props.name} path={props.path} /></Link>

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
        numInMenu: 3
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

      <Navigation>
        <Header />

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
          />
        ))}
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