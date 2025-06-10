from flask import Flask, render_template_string, request, redirect, url_for

app = Flask(__name__)

login_template = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login Page</title>
    <link rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body class="bg-light">
<div class="container">
    <div class="row justify-content-center align-items-center" style="height:100vh">
        <div class="col-4">
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title text-center mb-4">Login</h3>
                    <form method="post">
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" class="form-control" id="username"
                                   name="username" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password"
                                   name="password" required>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
"""

@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Dummy authentication logic
        username = request.form['username']
        password = request.form['password']
        if username == 'admin' and password == 'admin':
            return redirect(url_for('success'))
        else:
            return render_template_string(login_template)
    return render_template_string(login_template)

@app.route('/success')
def success():
    return "<h2>Login successful!</h2>"

if __name__ == '__main__':
    app.run(debug=True)