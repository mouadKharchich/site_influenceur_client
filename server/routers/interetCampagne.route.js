const express=require("express");
const router=express.Router();
const interetCampagneController=require("../controllers/interetCampagne.controller");


router.route('/')
      .get(interetCampagneController.getAll)

      
router.route('/interet/:interetId')
      .get(interetCampagneController.getIdInteret)

router.route('/campagne/:campagneId')
      .get(interetCampagneController.getIdCampagne)

router.route('/:interetId/:campagneId')
      .post(interetCampagneController.addInteretCampagne)
      .delete(interetCampagneController.delete)



module.exports=router;