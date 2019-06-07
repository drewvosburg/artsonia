import React from 'react'
import logo from './logo.svg'
import './App.scss'

import { CSSTransition } from 'react-transition-group'

function Vignette(props) {
  return (
    <div>
      <img src={props.imgSrc} alt={props.imgAltText} />
      <h3>{props.title}</h3>
      <h4>
        <a href={props.linkHref}>{props.callToAction}</a>
      </h4>
    </div>
  )
}

function Logo(props) {
  return <img src="logo.svg" className="logo" alt="Artsonia" />
}
function LeftNav(props) {
  return (
    <nav>
      <a href="">Explore</a>
      <a href="">Shop</a>
    </nav>
  )
}
function RightNav(props) {
  return (
    <nav className="rightNav">
      <a href="">About Us</a>
      <a href="">How It Works</a>
      <button onClick={props.handleToggleModal}>Login</button>
    </nav>
  )
}
function SearchGlobal(props) {
  return (
    <div className="globalSearch">
      <input type="search" placeholder="Search schools or students" />
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
        <path
          fill="#84858B"
          fill-rule="evenodd"
          d="M11.3 6.1A5.1 5.1 0 1 1 1 6.1a5.1 5.1 0 0 1 10.3 0zm-1.6 5a6.1 6.1 0 1 1 1.4-1.4l.3.2 4.3 4.4a1 1 0 1 1-1.4 1.4l-4.4-4.3-.2-.3z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  )
}
function Header(props) {
  return (
    <header className="header">
      <Logo />
      <LeftNav />
      <SearchGlobal />
      <RightNav handleToggleModal={props.handleToggleModal} />
    </header>
  )
}
function SocialIcons(props) {
  let iconElements = []
  // if (props.icons) {
  //   props.icons.forEach(element){
  //     iconElements.push(<a href={element.href}><img src={element.iconSrc} alt={element.socialName} /></a>)
  //   })
  // }
  return <div>{iconElements}</div>
}
function Footer(props) {
  return (
    <div>
      <div>
        <Logo />
        <h4>Address</h4>
        <h4>Phone Number</h4>
      </div>
      <nav>
        <a href="">Explore</a>
        <a href="">Shop</a>
        <a href="">About Us</a>
        <a href="">How It Works</a>
        <a href="">Terms</a>
        <a href="">Contact Us</a>
        <a href="">Privacy</a>
      </nav>
      <SocialIcons />
    </div>
  )
}
function Hero(props) {
  return (
    <div className="hero">
      <h1>Digitize portfolios.</h1>
      <h1>Turn art into keepsakes.</h1>
      <h1>
        All with <span>Artsonia.</span>
      </h1>
    </div>
  )
}
function BigCtaBlock(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <h3>
        <a href={props.cta1Href}>
          <button>{props.cta1}</button>
        </a>{' '}
        or
        <a href={props.cta2Href}>
          <button>{props.cta2}</button>
        </a>
      </h3>
    </div>
  )
}
function ArtworkCarouselArtwork(props) {
  let nameAndGrade = props.artistName
  if (props.artistName && props.artistGrade) {
    nameAndGrade = props.artistName + ', ' + props.artistGrade
  }
  return (
    <div>
      <img src={props.src} alt={props.artworkTitle} />
      <div>
        <h3>{nameAndGrade}</h3>
        <h4>{props.artistSchool}</h4>
        <h4>&ldquo;{props.artworkTitle}&rdquo;</h4>
      </div>
    </div>
  )
}
function ArtworkCarousel(props) {
  let artworks = []
  let navigation
  // if (props.artworks) {
  //   props.artworks.forEach(element){
  //     artworks.push(<ArtworkCarouselArtwork artworkTitle={element.artworkTitle} artistGrade={element.artistGrade} artistName={element.artistName} artistSchool={element.artistSchool} src={element.src} />)
  //   })

  //   navigation = <div><a href="#">Back</a> 1 of {props.artworks.length} <a href="#">Next</a></div>;
  // }
  return (
    <div>
      {artworks}
      {navigation}
    </div>
  )
}
function ArtistOfTheWeek(props) {
  var artworks = [
    {
      artistName: 'America',
      src: '',
      artistGrade: '1st Grade',
      artistSchool: 'La Cañada High School',
      artworkTitle: 'Rainbow Watercolors'
    },
    {
      artistName: 'Greg',
      src: '',
      artistGrade: '1st Grade',
      artistSchool: 'Thompson Elementary School',
      artworkTitle: 'Fun fun times'
    },
    {
      artistName: 'Greg',
      src: '',
      artistGrade: '1st Grade',
      artistSchool: 'Thompson Elementary School',
      artworkTitle: 'Fun fun times'
    },
    {
      artistName: 'Greg',
      src: '',
      artistGrade: '1st Grade',
      artistSchool: 'Thompson Elementary School',
      artworkTitle: 'Fun fun times'
    }
  ]
  return (
    <div>
      <h2>Artist of the Week</h2>
      <h4>Help us pick the best artwork submitted last week!</h4>
      <ArtworkCarousel artworks={artworks} />
      <button>Vote Now!</button>
    </div>
  )
}

function Modal(props) {
  const customClasses = !props.modalState ? 'isClosed' : 'isOpen'
  return (
    <div className="modal" onClick={props.handleToggleModal}>
      <h1>MODALLY RAD</h1>
    </div>
  )
}
class App extends React.Component {
  state = {
    modalIsOpen: false
  }
  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen })
  }
  render() {
    return (
      <div>
        <CSSTransition in={this.state.modalIsOpen} timeout={300} classNames="alert" unmountOnExit="true">
          <Modal handleToggleModal={this.toggleModal} modalState={this.state.modalIsOpen} />
        </CSSTransition>
        <Header handleToggleModal={this.toggleModal} />
        <Hero />
        <Vignette
          imgSrc="abc"
          imgAltText="Illustration"
          title="Upload and edit student art to perfection"
          linkHref="#"
          callToAction="See How It Works"
        />
        <Vignette
          imgSrc="abc"
          imgAltText="Illustration"
          title="Publish digital portfolios from school or home"
          linkHref="#"
          callToAction="Explore Portfolios"
        />
        <Vignette
          imgSrc="abc"
          imgAltText="Illustration"
          title="Purchase and personalize custom keepsakes"
          linkHref="#"
          callToAction="Go Shopping"
        />
        <Vignette
          imgSrc="abc"
          imgAltText="Illustration"
          title="For every keepsake sold, we donate 20% to the school arts program"
          linkHref="#"
          callToAction="Learn About Us"
        />
        <BigCtaBlock
          title="Artsonia is even better when it's for you"
          description="Artsonia is the world's largest collection of student art, published by teachers and students from around the world."
          cta1="Take a Tour"
          cta1Href="https://www.google.com"
          cta2="Sign Up"
        />
        <ArtistOfTheWeek />
        <Footer />
      </div>
    )
  }
}

export default App
