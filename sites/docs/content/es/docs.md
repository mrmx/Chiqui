---
id: docs
title: Documentación
---

## Inicio Rápido

### 1. Crear un nuevo sitio

```bash
mkdir mi-sitio && cd mi-sitio
pnpm init
pnpm add chiky
```

### 2. Añadir tu configuración

Crea `config.ts` en la raíz de tu proyecto:

```ts
import type { AppConfig } from 'chiky';

const config: AppConfig = {
  site: { name: 'Mi Sitio' },
  i18n: { defaultLang: 'es', supported: ['es'] },
  nav: {
    header: { show: true, items: { es: [{ name: 'Inicio', href: '/es' }] } },
    footer: { show: true, items: { es: [] } }
  }
};

export default config;
```

### 3. Escribir contenido

Crea archivos markdown en `content/{lang}/`:

```md
---
id: home
title: Bienvenido
---

¡Hola mundo!
```

### 4. Conectar chiky

Crea la capa de integración en `src/lib/config.ts` y `src/lib/content.ts`, luego usa los componentes de chiky en tu layout.

Consulta el [código fuente del sitio docs](https://github.com/mrmx/chiky) para un ejemplo funcional completo.
