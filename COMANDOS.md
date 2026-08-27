# 🚀 Guía de Comandos: Revista MDU (Manual del Universitario)

Este documento contiene la lista completa de comandos utilizados para el desarrollo, control de versiones (Git) y despliegue del proyecto **Revista MDU**.

---

## 🛠️ 1. Comandos de Desarrollo Next.js

Todos estos comandos deben ejecutarse desde la carpeta principal del proyecto (`revista-mdu`):

```bash
# Entrar a la carpeta del proyecto
cd "/Volumes/Proyectos/Antigravity Proy/Revista MDU/revista-mdu"
```

| Acción | Comando | Descripción |
| :--- | :--- | :--- |
| **Iniciar Modo Desarrollo** | `npm run dev` | Inicia el servidor local en `http://localhost:3000` con recarga rápida. |
| **Compilar para Producción** | `npm run build` | Valida TypeScript, analiza rutas y genera el bundle optimizado. |
| **Iniciar Servidor Producción**| `npm run start` | Sirve la versión compilada creada por `npm run build`. |
| **Ejecutar Linter** | `npm run lint` | Revisa errores de estilo o mejores prácticas según ESLint. |

---

## 🐙 2. Comandos de Git y GitHub

### A. Configuración de Usuario (Identidad)
```bash
# Configuración Global (Recomendada para todo tu equipo)
git config --global user.name "Moisés González"
git config --global user.email "tu_correo@ejemplo.com"

# Ver configuración actual
git config user.name
git config user.email
```

---

### B. Flujo Diario de Trabajo en Git

```bash
# 1. Ver el estado actual de los archivos (modificados/nuevos)
git status

# 2. Agregar todos los cambios al staging area
git add .

# 3. Crear un commit guardando los cambios con un mensaje
git commit -m "feat: descripción de tus cambios"

# 4. Subir los cambios a GitHub
git push origin main
```

---

### C. Configuración Inicial del Repositorio Remoto

```bash
# Inicializar repositorio local
git init

# Definir la rama principal como 'main'
git branch -M main

# Vincular el repositorio local con GitHub
git remote add origin https://github.com/MoisesG1z/Revista-MDU.git

# Actualizar la URL remota en caso de renombrar el repo
git remote set-url origin https://github.com/MoisesG1z/Revista-MDU.git

# Primer push vinculando el rastreo de rama
git push -u origin main
```

---

## 📁 3. Estructura de Archivos del Proyecto

```text
revista-mdu/
├── app/
│   ├── layout.tsx                # Configuración de fuentes y SEO global
│   ├── page.tsx                  # Portada interactiva de la Revista MDU
│   ├── globals.css               # Temas de lectura (Día, Noche, Sepia) y animaciones
│   └── articulos/
│       └── [slug]/
│           └── page.tsx          # Vista inmersiva de lectura de cada artículo
├── components/
│   ├── TickerBar.tsx             # Cintillo de Última Hora con marquesina
│   ├── HeaderEditorial.tsx       # Logo, selector de tema, buscador y categorías
│   ├── HeroAsymmetric.tsx        # Nota principal y ranking "Lo Más Leído Hoy"
│   ├── CategoryFilterGrid.tsx    # Filtro por pestañas estilo píldora y grid
│   ├── SavedArticlesModal.tsx    # Gestor modal de artículos guardados
│   ├── NewsletterModule.tsx      # Formulario de suscripción en degradado rojo
│   ├── ReadingProgressBar.tsx    # Barra fija de progreso de lectura roja
│   └── FooterModern.tsx          # Enlaces institucionales e iconos vectoriales
├── data/
│   └── articles.ts               # Dataset tipado (Article[]) y helper formatNumber
├── public/                       # Assets estáticos y gráficos SVG
├── COMANDOS.md                   # Este documento de referencia
└── package.json                  # Dependencias del proyecto
```

---

## 💡 4. Consejos Útiles
- Si abres una nueva consola, recuerda siempre hacer `cd revista-mdu` antes de correr `npm run dev` o `git push`.
- Si agregas nuevos artículos, edita la lista en `data/articles.ts` respetando la interfaz `Article`.
