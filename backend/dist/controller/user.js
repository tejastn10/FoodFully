"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRegisterUser = exports.putUpdateUser = exports.getUserProfile = exports.postAuthUser = void 0;
const generateToken_1 = require("../utlis/generateToken");
const models_1 = require("./../models");
// login user 
const postAuthUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = yield req.body;
    const user = yield models_1.User.findOne({ email });
    if (user && (yield user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            isNgo: user.isNgo,
            token: generateToken_1.generateToken(user._id),
        });
    }
    else {
        res.status(401);
        throw new Error("❗ Invalid Email or Password!");
    }
});
exports.postAuthUser = postAuthUser;
//getuserprofile
const getUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.User.findById(req.body.user._id);
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            contact: user.contact,
            isNgo: user.isNgo,
            street: user.address.street,
            city: user.address.city,
            pincode: user.address.pincode,
            state: user.address.state,
        });
    }
    else {
        res.status(404);
        throw new Error("❌ User Not Found!");
    }
});
exports.getUserProfile = getUserProfile;
//updateuser profile
const putUpdateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.User.findById(req.body.user._id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.contact = req.body.contact || user.contact;
        user.address.street = req.body.street || user.address.street;
        user.address.city = req.body.city || user.address.city;
        user.address.pincode = req.body.pincode || user.address.pincode;
        user.address.state = req.body.state || user.address.state;
        if (req.body.password) {
            user.password = req.body.password;
        }
        const updatedUser = yield user.save();
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isNgo: updatedUser.isNgo,
            contact: updatedUser.contact,
            street: updatedUser.address.street,
            city: updatedUser.address.city,
            pincode: updatedUser.address.pincode,
            state: updatedUser.address.state,
            token: generateToken_1.generateToken(updatedUser._id),
        });
    }
    else {
        res.status(404);
        throw new Error("❌ User Not Found!");
    }
});
exports.putUpdateUser = putUpdateUser;
//register a new user
const postRegisterUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, contact, isNgo, street, city, pincode, state } = yield req.body;
    const userExists = yield models_1.User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("❗ User Already Registered!");
    }
    const address = { street, city, pincode, state };
    const user = yield models_1.User.create({ name, email, password, contact, isNgo, address });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            isNgo: user.isNgo,
            token: generateToken_1.generateToken(user._id),
        });
    }
    else {
        res.status(400);
        throw new Error("❗ Invalid User data!");
    }
});
exports.postRegisterUser = postRegisterUser;
