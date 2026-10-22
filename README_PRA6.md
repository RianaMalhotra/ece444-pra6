# ECE444 PRA6

Course instructions: https://github.com/shuruizUofT/flaskr-tdd/blob/main/README.md

This repo contains the course Flaskr starter app and tests. Review and implement the TDD exercises; be ready to explain them to the TA.

## Local setup

```bash
python -m venv env
pip install -r requirements.txt
python -m pytest
python create_db.py
python -m flask --app project.app run -p 5001
```

## Render

Build: `pip install -r requirements.txt`

Start: `gunicorn project.app:app`

Configure deployment environment variables and database, verify the live application, then submit the repo URL to Quercus. In-person TA evaluation is required.
