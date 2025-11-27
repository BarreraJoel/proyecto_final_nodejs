### 📄 Iniciar servidor

#### 🔧 Requisitos previos

**Node.js** >= 20.0.0
**npm**: Gestor de paquetes

### 1. Clonar el repositorio:
```bash
git clone https://github.com/BarreraJoel/proyecto_final_nodejs.git
cd proyecto_final_nodejs
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Crear archivo .env

```bash
cp .env.example .env
```

### 4. Configurar valores en .env
#### Ejemplo

```bash
APP_PORT=your_port
APP_ENV= # development | production

JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=your_expire_in

FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id

FRONTEND_URL=your_frontend_url
```

### 5. Ejecutar servidor

```bash
npm run start
```


### 📍Endpoints

|Método|Endpoint|Autenticado|
|------|--------|-----------|
|POST|api/auth/login|❌|
|GET|api/products|❌|
|GET|api/products/:id|❌|
|POST|api/products/create|✅|
|DELETE|api/products/:id|✅|