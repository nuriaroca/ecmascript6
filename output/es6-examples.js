"use strict";

var content = document.getElementById('content');

function createSection(title, examples) {
  var section = document.createElement('div');
  section.className = 'section';
  section.innerHTML = "<h2>".concat(title, "</h2>");
  examples.forEach(function (ex) {
    var example = document.createElement('div');
    example.className = 'example';
    example.innerHTML = "\n            <div class=\"label\">".concat(ex.label, "</div>\n            <div class=\"code\">").concat(ex.code, "</div>\n            <div class=\"result\">\u2192 ").concat(ex.result, "</div>\n        ");
    section.appendChild(example);
  });
  content.appendChild(section);
}

createSection('🎯 Template Strings', [{
  label: 'Interpolación de variables',
  code: "const name = 'Nuria';\nconst greeting = `Hola, ${name}!`;",
  result: "Hola, Nuria!"
}, {
  label: 'Multi-línea',
  code: "const multiline = `Primera l\xEDnea\nSegunda l\xEDnea`;",
  result: 'Primera línea\nSegunda línea'
}]);
createSection('🏹 Arrow Functions', [{
  label: 'Función tradicional vs Arrow',
  code: "const sum = (a, b) => a + b;",
  result: "sum(5, 3) = ".concat(function (a, b) {
    return a + b;
  }(5, 3))
}, {
  label: 'Arrow con un parámetro',
  code: "const double = x => x * 2;",
  result: "double(4) = ".concat(function (x) {
    return x * 2;
  }(4))
}, {
  label: 'Array methods con arrow',
  code: "[1, 2, 3].map(n => n * 2)",
  result: "[".concat([1, 2, 3].map(function (n) {
    return n * 2;
  }), "]")
}]);
createSection('📦 Destructuring', [{
  label: 'Array destructuring',
  code: "const [a, b, c] = [1, 2, 3];",
  result: "a = ".concat(function () {
    var _ref = [1, 2, 3],
        a = _ref[0];
    return a;
  }(), ", b = ").concat(function () {
    var _ref2 = [1, 2, 3],
        b = _ref2[1];
    return b;
  }(), ", c = ").concat(function () {
    var _ref3 = [1, 2, 3],
        c = _ref3[2];
    return c;
  }())
}, {
  label: 'Object destructuring',
  code: "const {name, age} = {name: 'Ana', age: 25};",
  result: "name = Ana, age = 25"
}, {
  label: 'Swap con destructuring',
  code: "let x = 1, y = 2;\n[x, y] = [y, x];",
  result: 'x = 2, y = 1'
}]);
createSection('🔧 Let & Const', [{
  label: 'const - valor constante',
  code: "const PI = 3.14159;",
  result: 'PI no se puede reasignar'
}, {
  label: 'let - scope de bloque',
  code: "if (true) {\n  let x = 10;\n}\n// x no existe fuera del if",
  result: 'Scope limitado al bloque'
}, {
  label: 'var vs let en loops',
  code: "for (let i = 0; i < 3; i++) {\n  // cada i es \xFAnica\n}",
  result: 'let crea un nuevo binding por iteración'
}]);
createSection('⚙️ Default Parameters', [{
  label: 'Parámetros por defecto',
  code: "function greet(name = 'Usuario') {\n  return `Hola ${name}`;\n}",
  result: "greet() = ".concat(function () {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Usuario';
    return "Hola ".concat(name);
  }())
}, {
  label: 'Múltiples defaults',
  code: "const power = (base, exp = 2) => base ** exp;",
  result: "power(3) = ".concat(function (base) {
    var exp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    return Math.pow(base, exp);
  }(3), ", power(3, 3) = ").concat(function (base) {
    var exp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    return Math.pow(base, exp);
  }(3, 3))
}]);
createSection('📚 String & Array Methods', [{
  label: 'startsWith & endsWith',
  code: "'Hola mundo'.startsWith('Hola')",
  result: "".concat('Hola mundo'.startsWith('Hola'))
}, {
  label: 'includes',
  code: "['Carlos', 'Ana', 'Luis'].includes('Ana')",
  result: "".concat(['Carlos', 'Ana', 'Luis'].includes('Ana'))
}, {
  label: 'find',
  code: "[5, 12, 8, 130].find(n => n > 10)",
  result: "".concat([5, 12, 8, 130].find(function (n) {
    return n > 10;
  }))
}, {
  label: 'findIndex',
  code: "[5, 12, 8, 130].findIndex(n => n > 10)",
  result: "".concat([5, 12, 8, 130].findIndex(function (n) {
    return n > 10;
  }))
}]);
createSection('🎨 Spread & Rest', [{
  label: 'Spread en arrays',
  code: "const arr = [1, 2];\nconst merged = [...arr, 3, 4];",
  result: "[".concat([1, 2].concat([3, 4]), "]")
}, {
  label: 'Spread en objetos',
  code: "const obj = {a: 1};\nconst new = {...obj, b: 2};",
  result: "{a: 1, b: 2}"
}, {
  label: 'Rest parameters',
  code: "function sum(...nums) {\n  return nums.reduce((a,b) => a+b);\n}",
  result: "sum(1,2,3,4) = ".concat(function () {
    for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
      nums[_key] = arguments[_key];
    }

    return nums.reduce(function (a, b) {
      return a + b;
    });
  }(1, 2, 3, 4))
}]);
createSection('🏗️ Classes', [{
  label: 'Definición de clase',
  code: "class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  greet() {\n    return `Hola, soy ${this.name}`;\n  }\n}",
  result: 'Sintaxis más limpia que prototipos'
}, {
  label: 'Herencia',
  code: "class Student extends Person {\n  constructor(name, grade) {\n    super(name);\n    this.grade = grade;\n  }\n}",
  result: 'Herencia con extends y super'
}]);
createSection('🎁 Object Enhancements', [{
  label: 'Property shorthand',
  code: "const name = 'Ana', age = 25;\nconst person = {name, age};",
  result: "{name: 'Ana', age: 25}"
}, {
  label: 'Method shorthand',
  code: "const obj = {\n  greet() { return 'Hola'; }\n};",
  result: 'Métodos sin function keyword'
}, {
  label: 'Computed properties',
  code: "const key = 'name';\nconst obj = {[key]: 'Luis'};",
  result: "{name: 'Luis'}"
}]);
var promiseSection = document.createElement('div');
promiseSection.className = 'section';
promiseSection.innerHTML = "\n    <h2>\u26A1 Promises</h2>\n    <div class=\"example\">\n        <div class=\"label\">Promesa simple</div>\n        <div class=\"code\">const promise = new Promise((resolve, reject) => {\n  setTimeout(() => resolve('\xA1Completado!'), 1000);\n});</div>\n        <button onclick=\"testPromise()\">Ejecutar Promesa</button>\n        <div id=\"promise-result\" class=\"result\"></div>\n    </div>\n    <div class=\"example\">\n        <div class=\"label\">Promise.all</div>\n        <div class=\"code\">Promise.all([promise1, promise2, promise3])\n  .then(results => console.log(results));</div>\n        <button onclick=\"testPromiseAll()\">Ejecutar Promise.all</button>\n        <div id=\"promiseall-result\" class=\"result\"></div>\n    </div>\n";
content.appendChild(promiseSection);

window.testPromise = function () {
  var resultDiv = document.getElementById('promise-result');
  resultDiv.textContent = '⏳ Ejecutando...';
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      return resolve('¡Completado!');
    }, 1000);
  });
  promise.then(function (result) {
    resultDiv.textContent = "\u2192 ".concat(result);
  });
};

window.testPromiseAll = function () {
  var resultDiv = document.getElementById('promiseall-result');
  resultDiv.textContent = '⏳ Ejecutando...';
  var p1 = new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve('Promesa 1');
    }, 500);
  });
  var p2 = new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve('Promesa 2');
    }, 1000);
  });
  var p3 = new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve('Promesa 3');
    }, 800);
  });
  Promise.all([p1, p2, p3]).then(function (results) {
    resultDiv.textContent = "\u2192 [".concat(results.join(', '), "]");
  });
};

console.log('✅ Ejemplos de ES6 cargados exitosamente');
