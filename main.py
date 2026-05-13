from flask import Flask, request, send_from_directory, send_file

app = Flask(__name__)

@app.get("/", defaults={"any_route": "index.html"})
@app.get("/<path:any_route>")
def catch_all(any_route):
    is_curl = request.headers.get("User-Agent", "").startswith("curl/")

    if is_curl:
        if any_route == "":
            return send_file("ltzInstallOrUpdate.sh")
        else:
            return send_from_directory("out", any_route)
    

    return send_from_directory("out", any_route)

app.run("0.0.0.0", 80, debug=False, threaded=True)