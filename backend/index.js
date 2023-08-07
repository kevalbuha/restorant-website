const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello WORLD')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// bxitaZChjbuNThPW
// mongodb+srv://gofoodmern:bxitaZChjbuNThPW@gofood.zovgkhi.mongodb.net/