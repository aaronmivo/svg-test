import React from 'react'

function Combiner({data}) {
  return (
    <div>
        <div dangerouslySetInnerHTML={{ __html: data.svg + " " +data.image1 + " " + data.image2}}/>
    </div>

    
  )
}

export default Combiner