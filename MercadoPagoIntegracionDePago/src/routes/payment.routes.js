import {Router} from "express"
import { creandoOrden, reiceiveWebhook } from "../controllers/payment.controller.js"

const router = Router()

router.post("/create-order" , creandoOrden)
router.get("/success" , (req, res) => res.send("success"))
router.get("/failure" , (req, res) => res.send("failure"))
router.get("/pending" , (req, res) => res.send("pending"))
router.post("/webhook" , reiceiveWebhook)

export default router