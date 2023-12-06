import React from "react"
import { NavLink } from "react-router-dom"
import { Card, CardBody, CardTitle, CardText, CardSubtitle, Button } from "reactstrap"

const CatIndex = ({cats}) => {
  console.log(cats)
  return(
    <div className="index-page">
      <h2 className='index-header'>Find your Prrrfect Match here:</h2>
      <div className="card-flex"> 
        {cats.map((catObject, index) => {
          return (
            <Card
              key={index}
              style={{
                width: '18rem'
              }}
            >
              <img
                alt="Sample"
                src={catObject.image}
              />
              <CardBody>
                <CardTitle tag="h5">
                  {catObject.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Age: {catObject.age}
                </CardSubtitle>
                <Button>
                  <NavLink to={`/catshow/${catObject.id}`}>
                    More about me!
                  </NavLink>
                </Button>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default CatIndex