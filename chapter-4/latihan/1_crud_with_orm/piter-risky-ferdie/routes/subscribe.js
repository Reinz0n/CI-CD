const express = require("express");
const subscribes = require("../controllers/subscribe.js")

const router = express.Router();

router.get('/subscribes', subscribes.index);
router.get('/subscribes/:id', subscribes.showDetail);
router.post('/subscribes', subscribes.store);
router.put('/subscribes/:id', subscribes.update);
router.delete('/subscribes/:id', subscribes.destroy);

module.exports = router;