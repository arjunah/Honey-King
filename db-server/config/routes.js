const {
    user,
    products
} = require("../controllers");
const router = require("express").Router();
const authorize = require("./authorize");

router.get("/products", products.get.all);
router.get("/honey", products.get.honey);
router.get("/propolis", products.get.propolis);
router.get("/beeswax", products.get.beeswax);
router.get("/pollen", products.get.pollen);


router.post("/users/login", user.login);
router.post("/users/register", user.register);
router.get("/users/logout", user.logout);    

module.exports = router;