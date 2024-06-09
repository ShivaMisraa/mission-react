import React from 'react'

function Home() {
    const containerStyle= {
        padding: '20px',
        maxWidth: '800px',
        margin: '20px auto',
        backgroundColor: 'white',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
    }
  return (
    <div className="container" style={containerStyle}>
      <h1>Welcome to Our Website</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel sapien vehicula, tristique mi at, pulvinar nisi. Donec nec nisi nec arcu varius suscipit. Integer non lacus ut justo luctus sollicitudin.</p>
      <p>Nullam facilisis libero sit amet felis sollicitudin, nec pharetra libero viverra. Nulla facilisi. Praesent ut eros vitae urna mollis malesuada. Sed tempor turpis ut ante hendrerit, in interdum nulla dignissim.</p>
      <p>Aliquam erat volutpat. Integer ut velit nec tortor cursus luctus non sed sapien. Phasellus vulputate fermentum nulla, ut tincidunt lectus consectetur at. Cras dictum urna ac sem malesuada, a faucibus mauris fringilla.</p>
    </div>
  )
}

export default Home