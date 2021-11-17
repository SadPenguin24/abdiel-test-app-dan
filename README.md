## Usage

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = mongodb+srv://danAdmin:admin@twice-ecommerce.xkvav.mongodb.net/Test-App?retryWrites=true&w=majority
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
cd ..
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku
