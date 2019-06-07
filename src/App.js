import React from 'react'
import './App.scss'

import { CSSTransition } from 'react-transition-group'

function Vignette(props) {
  return (
    <div className="vignette">
      <img src={props.imgSrc} alt={props.imgAltText} />
      <h3>{props.title}</h3>
      <h4>
        <a href={props.linkHref}>{props.callToAction}</a>
      </h4>
    </div>
  )
}

function Logo(props) {
  return <img src="img/logo.svg" className="logo" alt="Artsonia" />
}
function SearchGlobal(props) {
  return (
    <div className="globalSearch">
      <input type="search" placeholder="Search schools or students" />
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
        <path
          fill="#84858B"
          fillRule="evenodd"
          d="M11.3 6.1A5.1 5.1 0 1 1 1 6.1a5.1 5.1 0 0 1 10.3 0zm-1.6 5a6.1 6.1 0 1 1 1.4-1.4l.3.2 4.3 4.4a1 1 0 1 1-1.4 1.4l-4.4-4.3-.2-.3z"
        />
      </svg>
    </div>
  )
}
function Header(props) {
  return (
    <header className="header">
      <Logo />
      <nav>
        <a href="#">Explore</a>
        <a href="#">Shop</a>
      </nav>
      <SearchGlobal />
      <nav className="rightNav">
        <a href="#">About Us</a>
        <a href="#">How It Works</a>
        <button onClick={props.handleToggleModal}>Login</button>
      </nav>
    </header>
  )
}
function SocialIcons(props) {
  let iconElements = []
  if (props.icons) {
    props.icons.forEach(function(element) {
      iconElements.push(
        <a href={element.href}>
          <img src={element.iconSrc} alt={element.socialName} />
        </a>
      )
    })
  }
  return <div>{iconElements}</div>
}
function Footer(props) {
  return (
    <footer className="footer">
      <div className="section1">
        <Logo />
        <h4>1350 Tri State Pkwy # 106</h4>
        <h4>(800) 869-9974</h4>
      </div>
      <nav className="section2">
        <a href="#">Explore</a>
        <a href="#">Shop</a>
        <a href="#">About Us</a>
        <a href="#">How It Works</a>
        <a href="#">Terms</a>
        <a href="#">Contact Us</a>
        <a href="#">Privacy</a>
      </nav>
      <SocialIcons />
    </footer>
  )
}
function Hero(props) {
  return (
    <div className="hero">
      <h1>Digitize portfolios.</h1>
      <h1>Turn art into keepsakes.</h1>
      <h1>
        All with <span className="hero-word">Artsonia.</span>
      </h1>
    </div>
  )
}
function BigCtaBlock(props) {
  return (
    <div className="bigCtaBlock">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <h3 className="ctas">
        <button onClick={`location.href=` + props.cta1Href} className="hollow">
          {props.cta1}
        </button>
        or
        <button onClick={`location.href=` + props.cta2Href} className="filled">
          {props.cta2}
        </button>
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
  if (props.artworks) {
    props.artworks.forEach(function(element, index) {
      artworks.push(
        <ArtworkCarouselArtwork
          key={index}
          artworkTitle={element.artworkTitle}
          artistGrade={element.artistGrade}
          artistName={element.artistName}
          artistSchool={element.artistSchool}
          src={element.src}
        />
      )
    })

    navigation = (
      <div>
        <a href="#">Back</a> 1 of {props.artworks.length} <a href="#">Next</a>
      </div>
    )
  }
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
        <CSSTransition in={this.state.modalIsOpen} timeout={300} classNames="modal" unmountOnExit>
          <Modal handleToggleModal={this.toggleModal} modalState={this.state.modalIsOpen} />
        </CSSTransition>
        <Header handleToggleModal={this.toggleModal} />
        <Hero />
        <div className="vignettes">
          <Vignette
            imgSrc="/img/illustration/upload-art.svg"
            imgAltText="Teacher with tablet"
            title="Upload and edit student art to perfection"
            linkHref="#"
            callToAction="See How It Works"
          />
          <Vignette
            imgSrc="/img/illustration/publish-portfolios.svg"
            imgAltText="Woman in front of artwork"
            title="Publish digital portfolios from school or home"
            linkHref="#"
            callToAction="Explore Portfolios"
          />
          <Vignette
            imgSrc="/img/illustration/purchase-keepsakes.svg"
            imgAltText="Illustration"
            title="Purchase and personalize custom keepsakes"
            linkHref="#"
            callToAction="Go Shopping"
          />
          <Vignette
            imgSrc="/img/illustration/artist.svg"
            imgAltText="Illustration"
            title="For every keepsake sold, we donate 20% to the school arts program"
            linkHref="#"
            callToAction="Learn About Us"
          />
        </div>
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
