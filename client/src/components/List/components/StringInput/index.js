import React, {useState} from 'react'
import Axios from 'axios'

const StringInput = (props) => {

  const [itemData, setItemData] = useState (
    {
      name: ''
    }
  )

  const onSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted")
    Axios.post('/api/items/', {name: itemData.name} )
    props.updateItems()
  }

  const onChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="name"
        placeholder="Item Name"
        name="name"
        value={itemData.name}
        onChange={onChange}
      />
      <input type="submit" value="Add Item"/>
    </form>
  )
}

export default StringInput
