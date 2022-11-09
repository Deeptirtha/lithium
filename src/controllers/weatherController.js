let axios = require("axios")


let weatherofLondon = async function (req, res) {

    let city =req.query.q
    
    let appid =req.query.appid
  
    try {
        
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = await axios(options)
        let data = result.data
       let weather={city:data.name,temp:data.main.temp}
     

        res.status(200).send({ city: data})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let weatherofallcity = async function (req, res) {
    allCityTemp=[]
        let citys =req.query.q
        let cityarr=citys.split(" ")
        let appid =req.query.appid
      
        try {
           for(i=0;i<cityarr.length;i++) {
            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cityarr[i]}&appid=${appid}`
            }
            let result = await axios(options)
            let data = result.data
           let weather={city:data.name,temp:data.main.temp}
           allCityTemp.push(weather)}
    
 let allCityWeatherReport=(allCityTemp.sort((a, b) => a.temp - b.temp))
 console.log(allCityWeatherReport)
          
  res.status(200).send({ city: allCityWeatherReport })
        }
        catch (err) {
            res.status(500).send({ msg: err.message })
        }
    }


module.exports.weatherofLondon=weatherofLondon
module.exports.weatherofallcity=weatherofallcity