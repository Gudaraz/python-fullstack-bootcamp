# 🐍 Python Full Stack Bootcamp | PF1164
![Python](https://img.shields.io/badge/Python-3.10+-3776AB?logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django-4.x-0C4B33?logo=django&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-🟡_En_Progreso-yellow)
![License](https://img.shields.io/badge/License-MIT-green)

> _"Construyendo el futuro, una línea de código a la vez."_ 🚀

## 📖 Sobre este repositorio
Este es el **diario de viaje técnico** de mi formación como **Desarrollador Full Stack Python (PF1164)**. Aquí encontrarás:
- 📚 **Módulos:** Apuntes, ejercicios y prácticas organizadas por competencia.
- 📦 **Tareas:** Entregables oficiales con versiones finales y retroalimentación.
- 🌟 **Portfolio:** Un proyecto vivo que evoluciona módulo a módulo hasta convertirse en una aplicación web completa.
- 🛠️ **Herramientas:** Configuraciones, scripts y buenas prácticas aplicadas en entorno real.

---

## 🗺️ Mapa de Aprendizaje
| Módulo | Nombre | Horas | Estado | Carpeta |
|:---:|:---|:---:|:---:|:---|
| 1️⃣ | Orientación al Perfil y Metodología | 18h | ✅ Completado | `modules/01-orientacion` |
| 2️⃣ | Fundamentos de Desarrollo Front-End | 72h | 🟡 En Progreso | `modules/02-frontend` |
| 3️⃣ | Fundamentos de Programación en Python | 72h | ⬜ Pendiente | `modules/03-python-basics` |
| 4️⃣ | Programación Avanzada en Python | 56h | ⬜ Pendiente | `modules/04-python-advanced` |
| 5️⃣ | Fundamentos de Bases de Datos Relacionales | 56h | ⬜ Pendiente | `modules/05-databases` |
| 6️⃣ | Desarrollo Web con Python Django | 72h | ⬜ Pendiente | `modules/06-django-basics` |
| 7️⃣ | Acceso a Datos en Django | 80h | ⬜ Pendiente | `modules/07-django-data` |
| 8️⃣ | Desarrollo de Portafolio Digital | 18h | ⬜ Pendiente | `modules/08-portfolio-docs` |
| 9️⃣ | Empleabilidad en la Industria Digital | 18h | ⬜ Pendiente | `modules/09-employability` |

<details>
<summary>📊 <b>Progreso General</b> (clic para expandir)</summary>
<br>
<code>██████░░░░░░░░░░░░░░ 30% Completado</code>
<br>
<i>Actualizado manualmente. Cada módulo desbloquea nuevas habilidades.</i>
</details>

---

## 🌟 Portfolio Project (Proyecto Vivo)
El corazón de este bootcamp es un **proyecto integrador** que crece en cada etapa:
- 🎨 **Frontend:** HTML5, CSS3, Bootstrap, JS/jQuery
- ⚙️ **Backend:** Python puro → Django MVC → ORM & CRUD
- 🗃️ **Base de Datos:** Modelado ER → SQL puro → Migraciones Django
- 🚀 **Deploy:** Configuración para producción (Próximamente en Render/Vercel)

👉 [Explorar código del Portfolio](portfolio/) | 📄 [Documentación del Proyecto](portfolio/README.md)

---

## 🛠️ Tech Stack
| Categoría | Tecnologías |
|:---|:---|
| 🖥️ **Frontend** | HTML5, CSS3, Bootstrap 5, JavaScript (ES6+), jQuery |
| ⚡ **Backend** | Python 3.10+, Django 4+, Django REST Framework *(próximamente)* |
| 🗄️ **Bases de Datos** | SQLite *(dev)*, PostgreSQL *(prod)*, SQL puro |
| 🐙 **Control de Versiones** | Git, GitHub, GitHub Actions *(CI/CD)* |
| 🧪 **Calidad & Testing** | Pytest, Black, Ruff, Flake8 |
| 📦 **Entornos** | `venv`, `pip`, `requirements.txt`, `pyproject.toml` |

---

## 🚀 Quick Start
¿Quieres ejecutar el proyecto localmente? Sigue estos pasos:

```bash
# 1. Clona el repositorio
git clone https://github.com/TU-USUARIO/python-fullstack-bootcamp.git
cd python-fullstack-bootcamp

# 2. Crea y activa el entorno virtual
python3 -m venv .venv
source .venv/bin/activate  # En Windows: .venv\Scripts\activate

# 3. Instala dependencias
pip install -r portfolio/requirements.txt

# 4. Ejecuta migraciones y servidor de desarrollo
cd portfolio
python manage.py migrate
python manage.py runserver