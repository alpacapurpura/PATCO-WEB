# Despliegue de PATCO con Docker y Traefik

## Configuración Completa para patcoperu.com

### Archivos Creados

1. **Dockerfile** - Build multi-etapa optimizado para React
2. **docker-compose.yml** - Configuración de Traefik con SSL automático
3. **nginx.conf** - Configuración de nginx para SPA con React Router
4. **.dockerignore** - Optimización del contexto de build

### Problema Identificado

El proyecto utiliza una versión antigua de Webpack (v5.6.0) que tiene incompatibilidades con Node.js 16+. Se requiere una de las siguientes soluciones:

#### Opción 1: Usar Node.js 14 (Recomendado)
```dockerfile
FROM node:14-alpine AS builder
```

#### Opción 2: Actualizar Webpack
Actualizar a Webpack 5.x más reciente que soporte Node.js 16+

#### Opción 3: Usar flag legacy (Temporal)
```dockerfile
ENV NODE_OPTIONS="--openssl-legacy-provider"
```

### Configuración de Traefik

El docker-compose.yml incluye:

- **Dominio**: patcoperu.com y www.patcoperu.com
- **SSL**: Certificado automático con Let's Encrypt
- **Redirección**: HTTP → HTTPS automática
- **WWW Redirect**: www.patcoperu.com → patcoperu.com
- **Health Checks**: Monitoreo de salud del contenedor
- **Red**: Integración con web_gateway existente

### Comandos de Despliegue

```bash
# 1. Construir la imagen (después de resolver el problema de Node.js)
docker build -t patco-web .

# 2. Desplegar con docker-compose
docker compose up -d

# 3. Verificar el estado
docker compose ps
docker compose logs patco-web
```

### Verificación

Una vez desplegado, la aplicación estará disponible en:
- https://patcoperu.com
- Redirección automática desde http://patcoperu.com
- Redirección automática desde www.patcoperu.com

### Configuración de Nginx

El nginx.conf incluye:
- Compresión gzip
- Headers de seguridad
- Cache de archivos estáticos
- Endpoint de health check en /health
- Soporte completo para React Router

### Próximos Pasos

1. **Resolver el problema de Node.js/Webpack** (usar Node.js 14 o actualizar Webpack)
2. **Probar el build localmente** antes del despliegue
3. **Verificar que Traefik esté configurado** con el resolver de Let's Encrypt
4. **Desplegar y verificar** el funcionamiento completo

### Estructura de Archivos

```
/home/chris/patco/
├── Dockerfile              # Build multi-etapa
├── docker-compose.yml      # Configuración Traefik
├── nginx.conf              # Configuración nginx
├── .dockerignore           # Optimización build
└── README-DEPLOYMENT.md    # Esta documentación
```

### Contacto y Soporte

Para resolver el problema de compatibilidad de Node.js/Webpack, se recomienda:
1. Cambiar a Node.js 14 en el Dockerfile
2. O actualizar las dependencias de Webpack en package.json
