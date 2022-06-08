const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads})  {
    return (
        <Default>
        <h2>Index Page</h2>
        {/* <p>I have {breads[0].name} bread!</p> */}
        {/* This is a JSX comment. */}
        <ul>
          {
            breads.map((bread, index)=> {
              return (<a href={`/breads/${index}`}>
                  {bread.name}
              </a>)
            }) 
          }
        </ul>
      </Default>
      
    )
}


module.exports = Index