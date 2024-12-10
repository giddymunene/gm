from flask import Flask
from config import Config
from models import db, bcrypt
from routes.auth import auth_blueprint

@app.route("/")
def home():
    return "Welcome to the Flask API"

app = Flask(__name__)
app.config.from_object(Config)

# Initialize database and bcrypt
db.init_app(app)
bcrypt.init_app(app)

# Create tables
with app.app_context():
    db.create_all()  # Ensures tables are created if they don't exist

# Register routes
app.register_blueprint(auth_blueprint, url_prefix="/api/auth")

if __name__ == "__main__":
    app.run(debug=True)
