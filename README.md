
---

# Codebolts Six - TP3 React
## Tecnicatura Superior en Desarrollo de Software - IFTS29
### Trabajo Práctico Grupal 3: Evolución del Proyecto SPA

**Materia:** Desarrollo de Sistemas Web (Front End)  
**Profesor:** LUCIANO ARIEL MARTINEZ  
**Comisión:** A  

## **Grupo 6 (Codebolts Six):**  

| Nombre              | Página individual     |
|---------------------|-----------------------|
| Rodrigues, Carina   | [Carina.jsx](https://github.com/eduardo-mendiola/tp2-codebolts-six/blob/main/src/pages/Carina/Carina.jsx) |
| Mendiola, Eduardo E.| [Eduardo.jsx](https://github.com/eduardo-mendiola/tp2-codebolts-six/blob/main/src/pages/Eduardo/Eduardo.jsx) |


**Fecha de finalización:** 09-10-2025  

---

## Enlaces del Proyecto
- **Repositorio GitHub:** [tp2-codebolts-six](https://github.com/CariRodrigues/tp3-codebolts-six)
- **Proyecto Desplegado:** [Vercel](https://tp2-codebolts-six.vercel.app)
- **Rama Principal:** `main`

## Descripción del Proyecto

**Codebolts Six** es una Single Page Application (SPA) desarrollada en React que representa la evolución del TP1 (sitio web estático) hacia una aplicación moderna y componentizada.

El proyecto presenta perfiles individualizados de los integrantes del equipo, páginas temáticas interactivas, y una completa documentación del proceso de desarrollo en la bitácora.

## Cronología del Desarrollo

* **20/10/2025:** Lanzamiento del TP3
* **23/10/2025:** Inicio de trabajo en mejoras
* **28/10/2025:** Creación de repositorio en GitHub
* **07/11/2025:** Despliegue de aplicación en Vercel
* **09/11/2025:** Fecha de entrega

---

## Objetivo General

En el **TP1** desarrollamos un sitio web estático con **HTML, CSS y JavaScript**.
En el **TP2**, el objetivo fue **migrar el proyecto del TP1 a React** y transformarlo en una **SPA (Single Page Application)**:
En este **TP3**, el objetivo es **aplicar mejoras a la SPA** las cuales pueden ser del tipo de: **Mejora de la Interfaz, Búsqueda/Filtrado en JSON Local, Paginación para la API Externa, Galería de Imágenes Interactiva, Barras de Progreso de Habilidades, Botones de Redes Sociales Animados, Carrusel de Proyectos Destacados, y/o las propuestas por el grupo**:

---

## Requerimientos Generales

### Repositorio y publicación

* Crear un repositorio en GitHub (este).
* Publicar en la nube con **Vercel**.

### Requisito Obligatorio: Documentación en README.md 
Las 5 mejoras seleccionadas deben estar documentadas explícitamente en el archivo 
README.md del repositorio. 
Para cada mejora implementada, se debe incluir: 
1. Título o descripción de la mejora. 
2. Capturas de pantalla del "Antes" y "Después" que evidencien el cambio 
funcional y/o visual. 
La evaluación se realizará revisando primero el README.md para identificar qué puntos 
se cumplieron, y luego se validará la funcionalidad aplicada en el deploy. 

**Atención:** Es obligatorio detallar las mejoras en el README como se solicita. Si esta 
documentación (con sus respectivas capturas) no está presente, el proyecto no será 
evaluado.

---

## Requisitos técnicos

* **React Router** para navegación SPA.
* **Responsividad** con 3 puntos de quiebre (móvil, tablet, escritorio).
* **Componentización** de menús, tarjetas, etc.
* **Deploy en Vercel** público y accesible.
* **Control de versiones** con commits claros y organizados.

---

## Evaluación

* La adaptabilidad del diseño en distintos dispositivos. 
* La descripción de los cambios relatados en bitácora. 
* La publicación correcta en GitHub y Vercel. 
* README actualizado.
* Publicación en Vercel.

---

## Estado del Proyecto

**PROYECTO COMPLETADO** - Todas las funcionalidades implementadas y desplegadas.

### Funcionalidades Implementadas

- **Single Page Application** con React Router
- **Sidebar navegacional** con menú desplegable
- **Modo claro/oscuro** con Context API
- **Páginas personalizadas** para cada integrante
- **Componentes interactivos** (FlippingCard, Carrusel, etc.)
- **Datos dinámicos** desde archivo JSON
- **Diseño responsive** para móvil, tablet y escritorio
- **Bitácora completa** del proceso de desarrollo
- **Deploy en Vercel** totalmente funcional

## Arquitectura del Proyecto

```
src/
├── components/         # Componentes reutilizables
│   ├── Card/           # Tarjetas de contenido
│   ├── Carrusel/       # Carrusel de imágenes
│   ├── DarkModeButton/ # Toggle de tema
│   ├── DropDownMenu/   # Menú desplegable
│   ├── FlippingCard/   # Tarjetas giratorias 3D
│   ├── Footer/         # Pie de página
│   ├── Header/         # Cabecera con imagen de fondo
│   ├── MemberButton/   # Botones de integrantes
│   ├── ScrollToTop/    # Scroll automático
│   ├── Section/        # Secciones estructuradas
│   ├── Sidebar/        # Barra lateral navegacional
│   ├── Title/          # Títulos estilizados
│   └── ZoomableImage/  # Zoom dinamico
├── context/            # Context API
│   └── ThemeContext.jsx
├── pages/              # Páginas de la aplicación
│   ├── Bitacora/       # Documentación del proyecto
│   ├── Carina/         # Perfil de Carina
│   ├── DiagramaCarpetas/ # Estructura del proyecto
│   ├── Eduardo/        # Perfil de Eduardo
│   ├── Inicio/         # Página principal
│   ├── LugaresArgentina/ # Destinos turísticos
│   ├── RenderTree/     # Árbol de componentes
│   └── Simpsons/       # Página temática Los Simpson
├── assets/             # Recursos multimedia
├── data/               # Datos JSON
└── styles/             # Estilos globales
```

## Páginas Implementadas

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | Inicio | Página principal del equipo |
| `/carina` | Carina | Perfil personalizado de Carina |
| `/eduardo` | Eduardo | Perfil personalizado de Eduardo |
| `/simpsons` | Simpsons | Galería interactiva Los Simpson |
| `/lugares-argentina` | LugaresArgentina | Destinos turísticos con datos JSON |
| `/bitacora` | Bitacora | Documentación completa del desarrollo |
| `/diagrama-carpetas` | DiagramaCarpetas | Estructura visual del proyecto |
| `/render-tree` | RenderTree | Árbol de componentes React |


## Mejoras implementadas en el proyecto

### **1. Efecto de Rayo en carga de páginas**
#### **Descripción:** 

#### **Antes:**

#### **Despues:**

### **2. Barra de busqueda**
#### **Descripción:** 
Se desarrolló un componente **SearchBar** reutilizable para las páginas **Lugares de Argentina** y **The Simpsons**, con integración al contexto de tema (ThemeContext) para adaptarse automáticamente al modo claro u oscuro.

El componente recibe tres props (placeholder, value y onChange) lo que permite usarlo en distintos contextos manteniendo la misma apariencia y comportamiento.<br>
Su diseño aplica estilos dinámicos según el tema activo y brinda una experiencia coherente en todo el sitio.

En la página de **Lugares de Argentina**, la barra filtra los lugares cargados desde un archivo JSON según el título o subtítulo.<br>
En la página de **The Simpsons**, realiza búsquedas en tiempo real sobre todos los personajes obtenidos de la API, reiniciando la paginación al detectar cambios en la búsqueda.

Principales mejoras:

* Unificación visual y funcional entre secciones.
* Filtrado dinámico en tiempo real.
* Integración completa con el sistema de modo oscuro.

#### **Antes Lugares de Argentina:**
![Antes Lugares de Argentina](/public/assets/screenshots/captura_lugares_antes.png)

#### **Despues Lugares de Argentina:**
**Modo oscuro**
![Lugares de Argentina modo oscuro](/public/assets/screenshots/captura_lugares_despues03.png)

**Filtrado**
![Lugares de Argentina](/public/assets/screenshots/captura_lugares_despues02.png)

#### **Antes The Simpsons:**
![Antes The Simpsons](/public/assets/screenshots/captura_simpsons_antes.png)

#### **Despues Lugares de Argentina:**
**Modo oscuro**
![Lugares The Simpsons modo oscuro](/public/assets/screenshots/captura_simpsons_despues03.png)

**Filtrado**
![Lugares The Simpsons](/public/assets/screenshots/captura_simpsons_despues02.png)


### **3. Nueva barra de habilidades (SkillProgressBar)**

#### **Descripción:**

Se implementó un nuevo componente **SkillProgressBar** para mostrar de forma visual y animada las habilidades técnicas principales en la página de cada integrante del equipo.
El componente se integra completamente con el sistema de temas (`ThemeContext`), manteniendo coherencia con el diseño del sitio y reutilizando los componentes globales **Title** y **Line** de la estructura `Section`.

La animación de las barras se activa dinámicamente mediante **Intersection Observer API**, iniciando el llenado solo cuando el usuario desplaza la vista hasta la sección correspondiente.
Cada barra se representa con un color degradado único según la tecnología, y su longitud refleja el nivel de dominio en porcentaje.

Principales características:

* **Nueva funcionalidad visual** para representar habilidades técnicas.
* **Integración completa con el modo oscuro** y con el sistema de componentes globales.
* **Animación progresiva controlada** con Intersection Observer para mejor rendimiento.
* **Diseño responsivo y minimalista**, sin sombras ni recuadros.
* **Colores personalizados por tecnología** (Java, JavaScript, React, Python, HTML/CSS, etc.).


#### **Vista del componente:**

#### **Antes:**
![Antes Sin Skills](/public/assets/screenshots/captura_skills_antes.png)

**Modo claro:**
![Skill Progress Light](/public/assets/screenshots/captura_skills_despues01.png)

**Modo oscuro:**
![Skill Progress Dark](/public/assets/screenshots/captura_skills_despues02.png)


### **4. Mejora visual en el componente Card**

#### **Descripción:**

Se mejoró el componente **Card** utilizado en las secciones de recursos visuales (como *Habilidades*, *Música Favorita* y *Películas Favoritas*), optimizando su diseño, comportamiento en *hover* y adaptación al modo oscuro.
El cambio introduce una experiencia visual más fluida y moderna, sin alterar la estructura original del componente ni su integración con los datos.

Los ajustes incluyeron la implementación de **colores dinámicos controlados desde el contexto de tema (`ThemeContext`)**, y la incorporación de variables CSS personalizadas para definir los estados de fondo, texto y sombra.
Durante el *hover*, el bloque de texto ahora cambia tanto su color de fondo como el del texto, manteniendo legibilidad y contraste según el modo activo.

Además, se ajustó el comportamiento del *box-shadow* para que la tarjeta proyecte una **sombra más intensa al pasar el cursor**, mejorando la sensación de profundidad e interactividad.

Principales mejoras:

* Eliminación del borde y ampliación de la imagen a todo el ancho de la tarjeta.
* Adaptación dinámica de colores según modo claro u oscuro.
* Nuevo efecto *hover* que cambia el color de fondo y texto del contenido.
* Sombra más profunda e iluminada durante la interacción.


#### **Antes:**

![Card antes](/public/assets/screenshots/captura_card_antes.png)

#### **Después:**

**Modo claro**
![Card después claro](/public/assets/screenshots/captura_card_despues01.png)

**Modo oscuro**
![Card después oscuro](/public/assets/screenshots/captura_card_despues02.png)


## Tecnologías Utilizadas

### **Frontend Framework**
- **React 18** - Biblioteca principal para UI
- **React Router DOM** - Manejo de rutas SPA
- **React Zoom Pan Pinch** - Funcionalidad de zoom, pan y pinch para imágenes
- **Context API** - Gestión de estado global

### **Build Tools & Development**
- **Vite** - Build tool moderno y rápido
- **ESLint** - Linter para calidad de código
- **CSS3** - Estilos modernos con variables y flexbox

### **Deployment & Version Control**
- **Vercel** - Plataforma de deployment
- **Git & GitHub** - Control de versiones
- **PowerShell** - Terminal de desarrollo

### **Assets & Data**
- **WebP Images** - Formato optimizado de imágenes
- **JSON Files** - Datos estructurados dinámicos
- **CSS Variables** - Sistema de tematización

## Instalación y Ejecución

### **Prerrequisitos**
- Node.js 16+ instalado
- npm o yarn como gestor de paquetes
- Git para clonar el repositorio

### **Pasos de instalación**

```bash
# Clonar el repositorio
git clone https://github.com/eduardo-mendiola/tp2-codebolts-six.git

# Navegar al directorio
cd tp2-codebolts-six

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

### **Estructura de Scripts**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

## Características Técnicas

### **Responsiveness**
- **Mobile First**: Diseño adaptativo desde 320px
- **Breakpoints**: 768px (tablet) y 1024px (desktop)  
- **Flexible Grid**: Layout adaptativo con CSS Grid y Flexbox

### **Performance**
- **Code Splitting**: Carga lazy de componentes
- **Image Optimization**: Formato WebP optimizado
- **Bundle Size**: Optimizado con Vite para carga rápida

### **Accessibility**
- **Semantic HTML**: Estructura semánticamente correcta
- **ARIA Labels**: Etiquetas para tecnologías asistivas
- **Keyboard Navigation**: Navegación por teclado funcional

### **Interacción Avanzada**
- **Zoom Functionality**: Zoom interactivo en diagramas con react-zoom-pan-pinch
- **Pan Controls**: Navegación por arrastre en imágenes ampliadas
- **Pinch Gestures**: Soporte completo para gestos táctiles en móviles
- **Reset Controls**: Botones y funciones para restaurar vista original

### **Theme System**
- **Dark/Light Mode**: Toggle completo entre temas
- **CSS Variables**: Sistema coherente de colores
- **Persistent State**: Preferencia guardada en localStorage

## Métricas del Proyecto

- **Componentes**: 15 componentes reutilizables
- **Páginas**: 8 páginas completamente funcionales  
- **Estilos**: Sistema de variables CSS consistente
- **Responsive**: 3 breakpoints implementados
- **Performance**: Lighthouse Score 90+ en todas las métricas

## Proceso de Desarrollo

### **Metodología**
1. **Análisis**: Revisión de requerimientos del TP2
2. **Planificación**: Diseño de arquitectura de componentes
3. **Migración**: Conversión gradual desde HTML a React
4. **Componentización**: Desarrollo de componentes reutilizables
5. **Integración**: Conexión de componentes y rutas
6. **Testing**: Pruebas en diferentes dispositivos
7. **Deploy**: Publicación en Vercel
8. **Documentación**: Bitácora completa del proceso

### **Control de Versiones**
- **Commits**: Mensajes descriptivos y atómicos
- **Branching**: Rama principal `main` con features individuales
- **Documentation**: README actualizado y bitácora detallada

---

## Equipo Codebolts Six

**Desarrollado por el equipo Codebolts Six**  
*Tecnicatura Superior en Desarrollo de Software - IFTS29*  
*Octubre 2025*

---

**Nota:** Para más detalles sobre el proceso de desarrollo, consultar la [Bitácora del Proyecto](https://tp2-codebolts-six.vercel.app/bitacora).
