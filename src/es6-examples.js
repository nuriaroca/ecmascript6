const content = document.getElementById('content');

function createSection(title, examples) {
    const section = document.createElement('div');
    section.className = 'section';
    section.innerHTML = `<h2>${title}</h2>`;
    
    examples.forEach(ex => {
        const example = document.createElement('div');
        example.className = 'example';
        example.innerHTML = `
            <div class="label">${ex.label}</div>
            <div class="code">${ex.code}</div>
            <div class="result">→ ${ex.result}</div>
        `;
        section.appendChild(example);
    });
    
    content.appendChild(section);
}

createSection('🎯 Template Strings', [
    {
        label: 'Interpolación de variables',
        code: `const name = 'Nuria';\nconst greeting = \`Hola, \${name}!\`;`,
        result: `Hola, Nuria!`
    },
    {
        label: 'Multi-línea',
        code: `const multiline = \`Primera línea\nSegunda línea\`;`,
        result: 'Primera línea\nSegunda línea'
    }
]);

createSection('🏹 Arrow Functions', [
    {
        label: 'Función tradicional vs Arrow',
        code: `const sum = (a, b) => a + b;`,
        result: `sum(5, 3) = ${((a, b) => a + b)(5, 3)}`
    },
    {
        label: 'Arrow con un parámetro',
        code: `const double = x => x * 2;`,
        result: `double(4) = ${(x => x * 2)(4)}`
    },
    {
        label: 'Array methods con arrow',
        code: `[1, 2, 3].map(n => n * 2)`,
        result: `[${[1, 2, 3].map(n => n * 2)}]`
    }
]);

createSection('📦 Destructuring', [
    {
        label: 'Array destructuring',
        code: `const [a, b, c] = [1, 2, 3];`,
        result: `a = ${(() => { const [a] = [1, 2, 3]; return a; })()}, b = ${(() => { const [, b] = [1, 2, 3]; return b; })()}, c = ${(() => { const [,, c] = [1, 2, 3]; return c; })()}`
    },
    {
        label: 'Object destructuring',
        code: `const {name, age} = {name: 'Ana', age: 25};`,
        result: `name = Ana, age = 25`
    },
    {
        label: 'Swap con destructuring',
        code: `let x = 1, y = 2;\n[x, y] = [y, x];`,
        result: 'x = 2, y = 1'
    }
]);

createSection('🔧 Let & Const', [
    {
        label: 'const - valor constante',
        code: `const PI = 3.14159;`,
        result: 'PI no se puede reasignar'
    },
    {
        label: 'let - scope de bloque',
        code: `if (true) {\n  let x = 10;\n}\n// x no existe fuera del if`,
        result: 'Scope limitado al bloque'
    },
    {
        label: 'var vs let en loops',
        code: `for (let i = 0; i < 3; i++) {\n  // cada i es única\n}`,
        result: 'let crea un nuevo binding por iteración'
    }
]);

createSection('⚙️ Default Parameters', [
    {
        label: 'Parámetros por defecto',
        code: `function greet(name = 'Usuario') {\n  return \`Hola \${name}\`;\n}`,
        result: `greet() = ${((name = 'Usuario') => `Hola ${name}`)()}`
    },
    {
        label: 'Múltiples defaults',
        code: `const power = (base, exp = 2) => base ** exp;`,
        result: `power(3) = ${((base, exp = 2) => base ** exp)(3)}, power(3, 3) = ${((base, exp = 2) => base ** exp)(3, 3)}`
    }
]);

createSection('📚 String & Array Methods', [
    {
        label: 'startsWith & endsWith',
        code: `'Hola mundo'.startsWith('Hola')`,
        result: `${'Hola mundo'.startsWith('Hola')}`
    },
    {
        label: 'includes',
        code: `['Carlos', 'Ana', 'Luis'].includes('Ana')`,
        result: `${['Carlos', 'Ana', 'Luis'].includes('Ana')}`
    },
    {
        label: 'find',
        code: `[5, 12, 8, 130].find(n => n > 10)`,
        result: `${[5, 12, 8, 130].find(n => n > 10)}`
    },
    {
        label: 'findIndex',
        code: `[5, 12, 8, 130].findIndex(n => n > 10)`,
        result: `${[5, 12, 8, 130].findIndex(n => n > 10)}`
    }
]);

createSection('🎨 Spread & Rest', [
    {
        label: 'Spread en arrays',
        code: `const arr = [1, 2];\nconst merged = [...arr, 3, 4];`,
        result: `[${[...[1, 2], 3, 4]}]`
    },
    {
        label: 'Spread en objetos',
        code: `const obj = {a: 1};\nconst new = {...obj, b: 2};`,
        result: `{a: 1, b: 2}`
    },
    {
        label: 'Rest parameters',
        code: `function sum(...nums) {\n  return nums.reduce((a,b) => a+b);\n}`,
        result: `sum(1,2,3,4) = ${((...nums) => nums.reduce((a,b) => a+b))(1,2,3,4)}`
    }
]);

createSection('🏗️ Classes', [
    {
        label: 'Definición de clase',
        code: `class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  greet() {\n    return \`Hola, soy \${this.name}\`;\n  }\n}`,
        result: 'Sintaxis más limpia que prototipos'
    },
    {
        label: 'Herencia',
        code: `class Student extends Person {\n  constructor(name, grade) {\n    super(name);\n    this.grade = grade;\n  }\n}`,
        result: 'Herencia con extends y super'
    }
]);

createSection('🎁 Object Enhancements', [
    {
        label: 'Property shorthand',
        code: `const name = 'Ana', age = 25;\nconst person = {name, age};`,
        result: `{name: 'Ana', age: 25}`
    },
    {
        label: 'Method shorthand',
        code: `const obj = {\n  greet() { return 'Hola'; }\n};`,
        result: 'Métodos sin function keyword'
    },
    {
        label: 'Computed properties',
        code: `const key = 'name';\nconst obj = {[key]: 'Luis'};`,
        result: `{name: 'Luis'}`
    }
]);

const promiseSection = document.createElement('div');
promiseSection.className = 'section';
promiseSection.innerHTML = `
    <h2>⚡ Promises</h2>
    <div class="example">
        <div class="label">Promesa simple</div>
        <div class="code">const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('¡Completado!'), 1000);
});</div>
        <button onclick="testPromise()">Ejecutar Promesa</button>
        <div id="promise-result" class="result"></div>
    </div>
    <div class="example">
        <div class="label">Promise.all</div>
        <div class="code">Promise.all([promise1, promise2, promise3])
  .then(results => console.log(results));</div>
        <button onclick="testPromiseAll()">Ejecutar Promise.all</button>
        <div id="promiseall-result" class="result"></div>
    </div>
`;
content.appendChild(promiseSection);

window.testPromise = function() {
    const resultDiv = document.getElementById('promise-result');
    resultDiv.textContent = '⏳ Ejecutando...';
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('¡Completado!'), 1000);
    });
    
    promise.then(result => {
        resultDiv.textContent = `→ ${result}`;
    });
};

window.testPromiseAll = function() {
    const resultDiv = document.getElementById('promiseall-result');
    resultDiv.textContent = '⏳ Ejecutando...';
    
    const p1 = new Promise(resolve => setTimeout(() => resolve('Promesa 1'), 500));
    const p2 = new Promise(resolve => setTimeout(() => resolve('Promesa 2'), 1000));
    const p3 = new Promise(resolve => setTimeout(() => resolve('Promesa 3'), 800));
    
    Promise.all([p1, p2, p3]).then(results => {
        resultDiv.textContent = `→ [${results.join(', ')}]`;
    });
};

console.log('✅ Ejemplos de ES6 cargados exitosamente');
