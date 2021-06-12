import React, {useState} from 'react'

const Item = (props) => {
  const [itemData, setItemData] = useState (
    {
      update: false,
      newName: ''
    }
  )

  const onChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value })
    console.log(itemData.newName);
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
    props.updateItem(props.item._id, itemData.newName )
    setItemData({ update: false })
  }

  const { newName } = itemData

  return (
    <div>
      <div>
        {props.item.name}
      </div>
      <div>
        <button onClick={() => {props.deleteItem(props.item._id)}}>Delete</button>
      </div>
      <div>
        {
          itemData.update
          ?
          <div>
            <div>
              <form onSubmit={onSubmit}>
                <input
                  type="newName"
                  placeholder="Change Name"
                  name="newName"
                  value={newName}
                  onChange={onChange}
                />
                <input type="submit" value="Update Name" />
              </form>
            </div>
            <button onClick={() => { setItemData({ update: false }) }}>X</button>
          </div>
          :
          <button onClick={() => { setItemData({ update: true })} }>Update</button>
        }
      </div>
    </div>
  )
}
export default Item
