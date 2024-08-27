import { Router } from "express";
import {
	home_view,
	login_view,
	register_view,
	not_found_view,
} from "../controller/views.js";
import { getSearch } from "../controller/fetch.js";

const router = Router();

router.get("/", home_view);
router.get("/login", login_view);
router.get("/register", register_view);
router.get("/search", getSearch);
router.get("*", not_found_view);

export default router;
