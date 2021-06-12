const express = require('express')
const router = express.Router()

const Item = require('../../models/Item')

// @route     GET api/items/test
// @desc      Test items routes are connected
// @access    Public
router.get('/test', async (req, res) => {
  try {
    return res.json({test: 'success'})
  } catch (err) {
    return res.json({error: 'err'})
  }
})

// @route     GET api/items/:id
// @desc      Get an item by id
// @access    Public
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.find({ _id: req.params.id })
    res.json(item)
  } catch (err) {
    res.status(500).send(err)
  }
})

// @route     GET api/items
// @desc      Get all items
// @access    Public
router.get('/', async (req, res) => {
  console.log("In get all items");
  try {
    const items = await Item.find()
    res.json(items)
  } catch (err) {
    res.status(500).send('Server error')
  }
})

// @route     POST api/items
// @desc      Post a new item
// @access    Public
router.post('/', async (req, res) => {
  try {
    const newItem = new Item({
      name: req.body.name
    })
    newItem.save()
    res.json({success: 'True'})
  } catch (err) {
    res.status(500).send('Server error')
  }
})

// @route   PUT api/item/:id
// @desc    Update an item
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id)
    item.name = req.body.name

    await item.save()

    return res.json(item)

  } catch (err) {
    res.status(500).send(err)
  }
})

// @route     DELETE api/item/:id
// @desc      Delete an item
// @access    Public
router.delete('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id)
    item.deleteOne({ _id: req.params.id }).then(
      item => {return res.json(item)}
    )
  } catch (err) {
    res.status(500).send('Server rrror')
  }
})

module.exports = router
