
var api = {
  // Oview API login
  async postLogin(email, password) {
    // TODO REMOVE THIS
    email="test11@test.com"
    password="123456"
    try {
      let response = await fetch('https://api.oviewapp.com/v1/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        })
      });

      if (response.status === 200){
        let responseJson = await response.json();
        console.log(responseJson.data.accessToken);
        // TODO: redirect to Home page
      }
      else {
        let res = await response.text();
        console.log(res);
        this.errorHandling(res)
      }
    } catch (error) {
      console.error(error);
      this.errorHandling(text)
    }

  },
  // TODO: DO IT LATER
  errorHandling(text){
    alert(text);
  }
}

module.exports = api
