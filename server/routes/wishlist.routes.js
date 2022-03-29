const express = require("express");
const wishlistControllers = require("../Controllers/wishlist.controllers");
const checkAuth = require('../middlewares/checkAuth.middlewares');
const router = express.Router();
//params
router.param("itemId", wishlistControllers.getWishlistItemById);

router.get("/wishlist", wishlistControllers.getAllWishlist);
router.post("/menuitem", wishlistControllers.putWishlistItem);
router.delete("/wishlist/:itemId", wishlistControllers.deleteWishlistItem);
router.put("/wishlist", wishlistControllers.moveToCart);
//  checkAuth.verifyToken,

module.exports = router;
