from flask import Blueprint, request, jsonify
from models import db, bcrypt, User
from flask_jwt_extended import create_access_token

auth_blueprint = Blueprint("auth", __name__)

@auth_blueprint.route("/signup", methods=["POST"])
def signup():
    data = request.json
    username = data.get("username")
    email = data.get("email")
    password = bcrypt.generate_password_hash(data.get("password")).decode("utf-8")

    if User.query.filter_by(email=email).first():
        return jsonify({"message": "Email already exists"}), 400

    new_user = User(username=username, email=email, password=password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User created successfully!"}), 201

@auth_blueprint.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")
    user = User.query.filter_by(email=email).first()

    if user and bcrypt.check_password_hash(user.password, password):
        token = create_access_token(identity={"username": user.username, "is_admin": user.is_admin})
        return jsonify({"token": token}), 200

    return jsonify({"message": "Invalid credentials"}), 401
