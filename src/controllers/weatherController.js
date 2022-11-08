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
        let city =req.query.q
        let city1 =req.query.q1
        let city2 =req.query.q2
        let city3 =req.query.q3
        let city4 =req.query.q4
        let city5 =req.query.q5
        let city6 =req.query.q6
        let appid =req.query.appid
      
        try {
            
            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
            }
            let result = await axios(options)
            let data = result.data
           let weather={city:data.name,temp:data.main.temp}
           allCityTemp.push(weather)
    
            let options1 = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${appid}`
            }
            let result1 = await axios(options1)
            let data1 = result1.data
            let weather1={city:data1.name,temp:data1.main.temp}
            allCityTemp.push(weather1)

            
            let options2 = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${appid}`
            }
            let result2 = await axios(options2)
            let data2 = result2.data
            let weather2={city:data2.name,temp:data2.main.temp}
            allCityTemp.push(weather2)

            let options3 = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city3}&appid=${appid}`
            }
            let result3 = await axios(options3)
            let data3 = result3.data
            let weather3={city:data3.name,temp:data3.main.temp}
            allCityTemp.push(weather3)


            let options4 = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city4}&appid=${appid}`
            }
            let result4 = await axios(options4)
            let data4 = result4.data
            let weather4={city:data4.name,temp:data4.main.temp}
            allCityTemp.push(weather4)

            
            let options5 = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city5}&appid=${appid}`
            }
            let result5 = await axios(options5)
            let data5 = result5.data
            let weather5={city:data5.name,temp:data5.main.temp}
            allCityTemp.push(weather5)



            
            let options6 = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city6}&appid=${appid}`
            }
            let result6 = await axios(options6)
            let data6 = result6.data
            let weather6={city:data6.name,temp:data6.main.temp}
            allCityTemp.push(weather6)


         
          console.log(allCityTemp)




          function compare( a, b ) {
            if ( a.temp < b.temp ){
              return -1;
            }
            if ( a.temp > b.temp ){
              return 1;
            }
            return 0;
          }
          
          console.log(allCityTemp.sort( compare ))

    
            res.status(200).send({ city: data, city1:data1,city2:data2 ,city3:data3 ,city4:data4,city5:data5,city6:data6 })
        }
        catch (err) {
            console.log(err)
            res.status(500).send({ msg: err.message })
        }
    }


module.exports.weatherofLondon=weatherofLondon
module.exports.weatherofallcity=weatherofallcity