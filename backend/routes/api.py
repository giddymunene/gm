from flask import Blueprint, jsonify, request

api_blueprint = Blueprint("api", __name__)

# Example route: Fetch services
@api_blueprint.route("/services", methods=["GET"])
def get_services():
    services = [
        {"id": 1, "title": "Consulting", "description": "Expert construction cost advice."},
        {"id": 2, "title": "Project Management", "description": "Efficient construction planning."},
    ]
    return jsonify(services)

# Example route: Submit contact form
@api_blueprint.route("/contact", methods=["POST"])
def submit_contact():
    data = request.json
    name = data.get("name")
    message = data.get("message")
    # Normally, save this info to a database
    return jsonify({"success": True, "message": f"Thank you, {name}!"})
