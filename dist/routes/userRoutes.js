"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// router.get('/', userController.index);
// router.get('/', userController.show);

router.use(_loginRequired2.default);
router.post('/', _UserController2.default.store);
router.put('/', _UserController2.default.update);
router.delete('/', _UserController2.default.delete);

exports. default = router;
