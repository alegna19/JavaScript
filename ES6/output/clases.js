"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//El constructor es una funcion que se va a ejecutar una vez que se haga una instancia de usuario
//En el constructor se definen las propiedades de la clase usuario.
var User = /*#__PURE__*/function () {
  function User(name, lastName, age) {
    _classCallCheck(this, User);

    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  _createClass(User, [{
    key: "sayHi",
    value: function sayHi(value) {
      return value;
    }
  }, {
    key: "showInfo",
    value: function showInfo() {
      return "\n            name: ".concat(this.name, " <br>\n            lastName: ").concat(this.lastName, " <br>\n            age: ").concat(this.age, " <br>\n            <hr>\n        ");
    }
  }]);

  return User;
}(); // user va a hacer un nuevo usuario, al ser instanciado tiene acceso a las propiedades de la clase


var user = new User('Angie', 'Gomez', 30); //document.write(`${user.name} ${user.lastName} she has ${user.age}` )
//document.write(user.sayHi('Hi Angie'))

document.write(user.showInfo());

var Student = /*#__PURE__*/function (_User) {
  _inherits(Student, _User);

  var _super = _createSuper(Student);

  function Student(name, lastName, age, profession) {
    var _this;

    _classCallCheck(this, Student);

    _this = _super.call(this, name, lastName, age); //super llama al constructor del padre.

    _this.profession = profession;
    return _this;
  }

  _createClass(Student, [{
    key: "showInfo",
    value: function showInfo() {
      return "\n             name: ".concat(this.name, " <br>\n             lastName: ").concat(this.lastName, " <br>\n             age: ").concat(this.age, " <br>\n             profession: ").concat(this.profession, " <br>\n             <hr>\n         ");
    }
  }]);

  return Student;
}(User);

var user2 = new Student('Dastan', 'Marin', 12, 'Developer');
document.write(user2.showInfo());