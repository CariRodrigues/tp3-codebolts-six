
---

# Codebolts Six - TP3 React
## Tecnicatura Superior en Desarrollo de Software - IFTS29
### Trabajo Práctico Grupal 2: Proyecto React en Equipo

**Materia:** Desarrollo de Sistemas Web (Front End)  
**Profesor:** LUCIANO ARIEL MARTINEZ  
**Comisión:** A  

## **Grupo 6 (Codebolts Six):**  

| Nombre              | Página individual     |
|---------------------|-----------------------|
| Rodrigues, Carina   | [Carina.jsx](https://github.com/eduardo-mendiola/tp2-codebolts-six/blob/main/src/pages/Carina/Carina.jsx) |
| Mendiola, Eduardo E.| [Eduardo.jsx](https://github.com/eduardo-mendiola/tp2-codebolts-six/blob/main/src/pages/Eduardo/Eduardo.jsx) |


**Fecha de inicio:** 23-09-2025  
**Fecha de finalización:** 19-10-2025  

---

## Enlaces del Proyecto
- **Repositorio GitHub:** [tp2-codebolts-six](https://github.com/eduardo-mendiola/tp2-codebolts-six)
- **Proyecto Desplegado:** [Vercel](https://tp2-codebolts-six.vercel.app)
- **Rama Principal:** `main`

## Descripción del Proyecto

**Codebolts Six** es una Single Page Application (SPA) desarrollada en React que representa la evolución del TP1 (sitio web estático) hacia una aplicación moderna y componentizada.

El proyecto presenta perfiles individualizados de los integrantes del equipo, páginas temáticas interactivas, y una completa documentación del proceso de desarrollo en la bitácora.

## Cronología del Desarrollo

* **22/09/2025:** Lanzamiento del TP2
* **28/09/2025:** Inicio de migración a React
* **02/10/2025:** Implementación de componentes base
* **08/10/2025:** Desarrollo de componentes interactivos
* **15/10/2025:** Migración completa de páginas
* **19/10/2025:** Finalización de componentes y funcionalidades avanzadas
* **19/10/2025:** Fecha de entrega

---

## Objetivo General

En el **TP1** desarrollamos un sitio web estático con **HTML, CSS y JavaScript**.
En este **TP2**, el objetivo es **migrar ese proyecto a React** y transformarlo en una **SPA (Single Page Application)**:

* Reorganizando el sitio en **componentes reutilizables**.
* Mejorando **modularidad, escalabilidad y mantenimiento** del código.
* Incorporando **rutas internas**, **props**, **estado** y **estilos consistentes**.

---

## Requerimientos Generales

### Repositorio y publicación

* Crear un repositorio en GitHub (este).
* Publicar en la nube con **Vercel**.

### Privacidad

* No es obligatorio usar nombre y apellido reales.
* Se recomienda usar avatares, ilustraciones o imágenes de mascotas.

---

## Estructura y contenidos obligatorios

1. **Nuevo → Sidebar** con logo y menú vertical.
2. **Sección Portada** (repite TP1).
3. **Sección Bitácora** (repite TP1).
4. **Sección Individual por integrante** (repite TP1).
5. **Nuevo → Datos desde archivo JSON** (mínimo 20 objetos, renderizados dinámicamente).
6. **Nuevo → Datos desde API pública** (ej. clima, noticias, películas).
7. **Nuevo → Diagramas**

   * Árbol de renderizado (jerarquía de componentes).
   * Organización de carpetas del proyecto.

---

## Requisitos técnicos

* **React Router** para navegación SPA.
* **Responsividad** con 3 puntos de quiebre (móvil, tablet, escritorio).
* **Componentización** de menús, tarjetas, etc.
* **Deploy en Vercel** público y accesible.
* **Control de versiones** con commits claros y organizados.

---

## Evaluación

* Implementación de todas las secciones y funcionalidades.
* Correcto uso de React Router.
* Adaptabilidad en distintos dispositivos.
* Claridad de diagramas y bitácora.
* Organización del código y buenas prácticas en GitHub.
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

## Componentes Desarrollados

### **Componentes de UI**
- **Card**: Tarjetas de contenido reutilizables
- **Title**: Títulos con estilos consistentes  
- **Line**: Separadores visuales
- **Section**: Contenedores de sección estructurados

### **Componentes Interactivos**
- **Carrusel**: Galería de imágenes con navegación automática
- **FlippingCard**: Tarjetas 3D con contenido dual
- **DarkModeButton**: Toggle para cambiar tema
- **DropDownMenu**: Menú desplegable animado
- **ZoomableImage**: Componente con zoom, pan y pinch para visualización detallada

### **Componentes de Navegación**
- **Sidebar**: Barra lateral con navegación principal
- **Header**: Cabecera adaptativa con imágenes de fondo
- **Footer**: Pie de página institucional
- **ScrollToTop**: Scroll automático entre rutas

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

## Logros del Equipo

### **Migración Exitosa**
Conversión completa de sitio HTML estático a SPA React  
Componentización de todos los elementos de UI  
Implementación de navegación SPA sin recargas  
Sistema de temas dark/light completamente funcional  

### **Funcionalidades Avanzadas**
Componentes interactivos (FlippingCard, Carrusel)  
Funcionalidad de zoom avanzada con react-zoom-pan-pinch  
Carga dinámica de datos desde JSON  
Diseño responsive en 3 breakpoints  
Deploy automático en Vercel  

### **Calidad del Código**
Estructura modular y escalable  
Reutilización efectiva de componentes  
Documentación completa en bitácora  
Control de versiones organizado  

---

## Equipo Codebolts Six

**Desarrollado por el equipo Codebolts Six**  
*Tecnicatura Superior en Desarrollo de Software - IFTS29*  
*Octubre 2025*

---

**Nota:** Para más detalles sobre el proceso de desarrollo, consultar la [Bitácora del Proyecto](https://tp2-codebolts-six.vercel.app/bitacora).
