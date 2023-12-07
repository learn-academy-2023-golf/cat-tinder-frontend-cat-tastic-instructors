import React, { useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const CatNew = ({createCat}) => {
  const navigate = useNavigate()

  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })

  const handleChange = (e) => {
    // console.log(e.target.value)
    // console.log(e.target.name)
    setNewCat({...newCat, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    createCat(newCat)
    navigate("/catindex")
  }

  // console.log(newCat)
  return(
    <> 
      <h2>Add a new cat!</h2>
      <Form>
        <FormGroup>
          <Label for="name">
            Name
          </Label>
          <Input
            name="name"
            placeholder="What is your name?"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">
            Age
          </Label>
          <Input
            name="age"
            placeholder="How old are you?"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">
            Enjoys
          </Label>
          <Input
            name="enjoys"
            placeholder="What do you enjoy?"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">
            Image
          </Label>
          <Input
            name="image"
            placeholder="Please add image url"
            type="url"
            onChange={handleChange}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default CatNew