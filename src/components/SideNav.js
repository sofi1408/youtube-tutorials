import React from 'react'

const SideNavStyles = {
    listStyle: 'none',
    color: '#fff',
    background: 'darkslateblue',
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '0 auto',
    padding: '10px 50px',
    height: '100vh'

}

const SideNav = () => {
  return (
    <ul style={SideNavStyles}>
      <li>Home</li>
      <li>Profile</li>
    </ul>
  )
}

export default SideNav
