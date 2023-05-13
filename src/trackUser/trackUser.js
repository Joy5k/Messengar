const checkTheIpAdress = () => {
    fetch("https://ipinfo.io/json?token=0b73d607cbff91")
      .then(
  (response) => response.json()
    )
      .then(
        (data) => {
          console.log(data);
  })
  }
  function getIpAddress() {
    fetch("https://api.ipify.org?format=json")
      .then(res => res.json())
      .then(data => {
        checkTheIpAdress(data);
      })
  }
  getIpAddress()