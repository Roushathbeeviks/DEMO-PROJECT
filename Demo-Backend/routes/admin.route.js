const express = require("express");
const router = express.Router();
const userService = require("../services/user-service");
const connection = require("../db/connection");
const userTasks = require("../task/user.task");
var auth = require("../services/Authentication");
const VoyagePlan = require("../services/voyageplan-service");
const Vessel = require("../services/Vessel-service");

router.post("/voyageplan", function (req, res) {
  VoyagePlan.VoyagePlanForm(req, res);
});
router.get("/voyageplandetails", function (req, res) {
  VoyagePlan.GetVoyagePlan(req, res);
});
router.post("/voyagepath", function (req, res) {
  VoyagePlan.PostVoyagePath(req, res);
});
router.get("/voyagepath", function (req, res) {
  VoyagePlan.GetVoyagePath(req, res);
});
router.post("/vesselform",function (req, res) {
 Vessel.VesselForm(req,res)
});
router.get("/getvessel/:id", function (req, res) {
  Vessel. GetVesselByVesselId(req,res);
});
router.get("/getallvessel", function (req,res) {
  Vessel.GetAllVessels(req,res)
});
router.get("/getflag", function (req, res) {
  Vessel.GetVesselFlag(req,res);
})
module.exports = router;
