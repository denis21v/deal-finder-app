import React from 'react'

function Footer() {
  const footerYear = new Date().getFullYear()
  return (
    <footer>
      Copyright &copy; {footerYear} <br />
      All rights reserved
    </footer>
  )
}

export default Footer
