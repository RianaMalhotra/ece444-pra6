# ECE444 PRA6 — Flaskr TDD and Deployment

A simple blogging application developed for the University of Toronto ECE444 PRA6, following the [course Flaskr TDD and deployment tutorial](https://github.com/shuruizUofT/flaskr-tdd).

**Live application:** https://ece444-pra6.onrender.com

## Features

- Log in and log out as an administrator
- Create, view, search, and delete blog posts
- Require authentication to create or delete posts
- Store posts with Flask-SQLAlchemy
- Deploy the Flask app to Render with a PostgreSQL database
- Automated tests using pytest

## Technology

Python, Flask, Flask-SQLAlchemy, Jinja templates, Bootstrap, JavaScript, pytest, PostgreSQL, Gunicorn, and Render.

## Run locally

Requires Python and pip. From the repository root:

```bash
python -m venv .venv
```

Activate the virtual environment:

- **Windows PowerShell:** `.venv\Scripts\Activate.ps1`
- **macOS/Linux:** `source .venv/bin/activate`

Then install dependencies and initialize the local SQLite database:

```bash
pip install -r requirements.txt
python create_db.py
python -m flask --app project.app run -p 5001
```

Open http://127.0.0.1:5001/.

The application uses SQLite locally by default, and PostgreSQL when `DATABASE_URL` is configured.

## Configuration

Set these environment variables in the hosting environment (for example, **Render → Web Service → Environment**):

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | PostgreSQL connection URL; defaults to local SQLite when absent |
| `SECRET_KEY` | Private Flask session-signing secret |
| `ADMIN_USERNAME` | Administrator login username |
| `ADMIN_PASSWORD` | Administrator login password |

Use private, strong values for production. Do **not** commit passwords, database connection strings, or session secrets to GitHub. The starter configuration provides development defaults if administrator variables or `SECRET_KEY` are not set; always configure all three for a public deployment.

## Automated tests

Run the test suite from the repository root:

```bash
python -m pytest -v
```

The tests cover the home page, database connection, empty database, login/logout, adding posts, authenticated deletion, and searching posts by title or text.

Run the course tutorial's linting and formatting checks:

```bash
python -m flake8 --exclude=env,.venv --ignore=E402,E501 .
python -m black --check --exclude="env|\.venv" .
```

To apply Black formatting instead of only checking it, run `python -m black --exclude="env|\.venv" .`.

## Render deployment

Connect this GitHub repository to a Render web service and configure:

- **Build command:** `pip install -r requirements.txt`
- **Start command:** `python create_db.py && gunicorn project.app:app`
- **Environment variables:** `DATABASE_URL`, `SECRET_KEY`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`

The start command creates database tables if necessary before starting Gunicorn. The live deployment uses Render PostgreSQL. When the database and web service are in different Render regions, use a reachable external database URL.

## Course reference

Professor's tutorial: https://github.com/shuruizUofT/flaskr-tdd

The project also includes [README_PRA6.md](README_PRA6.md) with brief setup and practicum notes.
