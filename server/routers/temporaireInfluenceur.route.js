const express=require("express");
const router=express.Router();
const temporaireInfluenceurController=require("../controllers/temporaireInfluenceur.controller");


router.route("/")
      .get(temporaireInfluenceurController.getAll)


router.route("/logout") 
      .get(temporaireInfluenceurController.Logout)  

router.route("/:id")
       .get(temporaireInfluenceurController.getId)
       .put(temporaireInfluenceurController.Update)
       .delete(temporaireInfluenceurController.Delete)

 
router.route("/register")
       .post(temporaireInfluenceurController.register)




module.exports=router;
