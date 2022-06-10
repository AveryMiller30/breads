const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads})  {
    return (
        <Default title={title}>
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
        <div className="newButton">
          <a href="/breads/new"><button>Add a new bread</button></a>
        </div>
      </Default>
      
    )
}


module.exports = Index
