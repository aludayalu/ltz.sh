from flask import Flask, request, send_from_directory, send_file

app = Flask(__name__)

@app.get("/", defaults={"any_route": "index.html"})
@app.get("/<path:any_route>")
def catch_all(any_route):
    is_curl = request.headers.get("User-Agent", "").startswith("curl/")

    if is_curl:
        if any_route == "index.html":
            return send_file("ltzInstallOrUpdate.sh")
        elif any_route.startswith("bin/"):
            return send_from_directory("bin", any_route[4:])
    else:
        if any_route == "index.html":
            return send_file("iframe.html")
    
    return "Not Found", 404

app.run("0.0.0.0", 80, debug=False, threaded=True)