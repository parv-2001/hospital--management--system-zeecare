import express from "express";
import {
    addNewAdmin, getAllDoctors, login, patientRegister,
    getUserDetails, logoutAdmin, logoutPatient, addNewDoctor
} from "../controller/userController.js";
import { isPatientAuthenticated, isAdminAuthenticated, isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

router.post("/patient/register", patientRegister);

router.post("/login", login);

router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);

router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);

router.get("/doctors", getAllDoctors);

router.get("/patient/me", isPatientAuthenticated, getUserDetails);

router.get("/admin/me", isAdminAuthenticated, getUserDetails);

router.get("/patient/logout", isPatientAuthenticated, logoutPatient);

router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);











export default router;