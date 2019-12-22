import React, { useEffect } from 'react';

const Page404 = () => {

  useEffect(() => {
    // Actualiza el título del documento usando la Browser API
    // document.title = `You clicked ${count} times`;
  })

  return (
    <div className="ed-grid">
      <h1>404 Page not found</h1>
    </div>
  )
}

export default Page404
