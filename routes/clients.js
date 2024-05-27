const  router = require("express").Router()
const {getAllclients,getclientById,createclient,updateclientById,deleteclientById} = require("../controllers/client")

router.get("/",getAllclients)
router.get("/:id",getclientById)
router.post("/",createclient)
router.put("/:id",updateclientById)
router.delete("/:id",deleteclientById)
module.exports = router