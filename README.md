# q-git-revert-env
23f3002697@ds.study.iitm.ac.in

## GitHub Actions Verification
This repository includes a GitHub Actions workflow for verification purposes.

### Features
- **Email Verification**: A step named after the student email.
- **Caching**: Uses `actions/cache@v4` with key `cache-617f648` to speed up CI runs.
- **Prime Cache Step**: A step named `prime-cache-617f648` that monitors cache status.

A Flask-based REST API service.

## Version

6.0.0

## Quick Start

```bash
pip install -r requirements.txt
python app.py
```

## API Endpoints

- `GET /health` - Health check
- `POST /api/v1/login` - User authentication
- `GET /api/v1/users` - List users
- `POST /api/v1/register` - Register new user

## Environment Variables

Copy `.env.example` to `.env` and configure:

- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secret for JWT tokens
- `REDIS_URL` - Redis connection for caching

## Development

```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
flask run --debug
```

## Testing

```bash
pytest tests/ -v
```

## License

MIT
