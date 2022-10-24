let players=[
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ]
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ],
        "id":5487
    }
]
let x=players.findIndex(element => element.name =="manish")

if(x>=0){
    if(players[x].id>0){
        console.log("player id already exist")
    }else{
        players[x].id=54887
        console.log(players[x])
    }
    
}else{console.log("player does not exist")}


