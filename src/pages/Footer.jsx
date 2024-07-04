import React from 'react'
import './styles/footer.css'

const Footer = () => {
  return (
     <footer className="footer">
      <p>&copy; Academlo 2024</p>
      <div className="social-icons">
        <a href="#" className="icon">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a href="#" className="icon">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href="#" className="icon">
          <ion-icon name="logo-youtube"></ion-icon>
        </a>
      </div>
    </footer>
  )
}

export default Footer
