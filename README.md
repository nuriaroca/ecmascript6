# 🚀 Curso Interactivo de ECMAScript 6 (ES6)

Proyecto educativo interactivo para aprender las características principales de ECMAScript 6 (ES2015) con ejemplos visuales y prácticos.

![ES6](https://img.shields.io/badge/ES6-JavaScript-yellow)
![Babel](https://img.shields.io/badge/Babel-7.8.4-blue)

## 📋 Descripción

Este proyecto es una guía visual e interactiva que cubre las características más importantes introducidas en ES6. Incluye ejemplos de código en vivo con resultados visuales, haciendo que el aprendizaje sea más intuitivo y práctico.

## ✨ Características Cubiertas

### 🎯 Template Strings
- Interpolación de variables
- Strings multi-línea
- Expresiones embebidas

### 🏹 Arrow Functions
- Sintaxis concisa
- Binding léxico de `this`
- Uso en métodos de arrays

### 📦 Destructuring
- Destructuring de arrays
- Destructuring de objetos
- Swapping de variables

### 🔧 Let & Const
- Scope de bloque
- Constantes inmutables
- Diferencias con `var`

### ⚙️ Default Parameters
- Parámetros por defecto en funciones
- Valores predeterminados

### 📚 String & Array Methods
- `startsWith()`, `endsWith()`, `includes()`
- `find()`, `findIndex()`
- Nuevos métodos de búsqueda

### 🎨 Spread & Rest Operators
- Spread en arrays y objetos
- Rest parameters
- Clonación y merge de estructuras

### 🏗️ Classes
- Sintaxis de clases
- Herencia con `extends`
- Métodos y constructores

### 🎁 Object Enhancements
- Property shorthand
- Method shorthand
- Computed property names

### ⚡ Promises
- Creación de promesas
- `Promise.all()`
- Manejo asíncrono

## 🛠️ Instalación

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd ecmascript6
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Arregla permisos de Babel (si es necesario):**
   ```bash
   chmod +x node_modules/.bin/babel
   ```

## 🚀 Uso

### Modo Desarrollo (con watch)

Para compilar automáticamente los archivos cuando hagas cambios:

```bash
npm run build
```

Esto ejecutará Babel en modo watch, transpilando todos los archivos de `src/` a `output/` automáticamente.

### Compilación Manual

Para compilar un archivo específico:

```bash
npx babel src/archivo.js -o output/archivo.js
```

### Ver el Proyecto

1. **Inicia un servidor local:**
   ```bash
   python3 -m http.server 8000
   # o usa cualquier otro servidor estático
   ```

2. **Abre en el navegador:**
   ```
   http://localhost:8000
   ```

3. **Disfruta de los ejemplos interactivos!** 🎉

## 📁 Estructura del Proyecto

```
ecmascript6/
├── src/                      # Código fuente ES6
│   ├── es6-examples.js       # Ejemplos visuales principales
│   ├── arrayStructure.js     # Destructuring de arrays
│   ├── arrowFunctions.js     # Funciones flecha
│   ├── classes.js            # Clases
│   ├── constLet.js           # Let y Const
│   ├── defaultParameters.js  # Parámetros por defecto
│   ├── numbersMethods.js     # Métodos de strings/arrays
│   ├── objectsStructure.js   # Destructuring de objetos
│   ├── promises.js           # Promesas
│   ├── restParameters.js     # Rest parameters
│   ├── shortenObjects.js     # Object shorthand
│   ├── spreadParameters.js   # Spread operator
│   └── templateStrings.js    # Template strings
├── output/                   # Archivos transpilados
├── node_modules/             # Dependencias
├── index.html                # Página principal
├── .babelrc                  # Configuración de Babel
├── package.json              # Dependencias y scripts
└── README.md                 # Este archivo
```

## 🎨 Características de la Interfaz

- **Diseño responsivo** con CSS Grid
- **Gradiente moderno** púrpura
- **Cards interactivas** con efectos hover
- **Código con sintaxis coloreada**
- **Resultados en tiempo real**
- **Botones interactivos** para promesas
- **Compatible con móviles**

## 🔧 Tecnologías Utilizadas

- **JavaScript ES6+** - Características modernas de JavaScript
- **Babel 7** - Transpilador de ES6 a ES5
- **@babel/preset-env** - Preset para ES6+
- **HTML5 & CSS3** - Estructura y estilos modernos

## 📝 Scripts Disponibles

- `npm run build` - Compila los archivos en modo watch
- `npx babel src -d output` - Compila todos los archivos una vez

## 🤝 Contribuir

Las contribuciones son bienvenidas! Si quieres agregar más ejemplos o mejorar los existentes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📚 Recursos Adicionales

- [MDN - ECMAScript 6](https://developer.mozilla.org/es/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla)
- [ES6 Features](http://es6-features.org/)
- [Babel Documentation](https://babeljs.io/docs/en/)

## 📄 Licencia

Este proyecto es de código abierto y está disponible para fines educativos.

---

**Hecho con ❤️ para aprender ES6**
