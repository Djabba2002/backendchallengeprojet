const router = require("express").Router()
const {getAllcomptes,getcompteById,createcompte,updatecompteById,deletecompteById} = require("../controllers/compte")

router.get("/",getAllcomptes)
router.get("/:id",getcompteById)
router.post("/",createcompte)
router.put("/:id",updatecompteById)
router.delete("/:id",deletecompteById)
module.exports = router