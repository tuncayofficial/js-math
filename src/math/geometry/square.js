class Square{
    constructor(side){
        this.side = side
    }

    perimeter(side){
        return side*4
    }

    area(side){
        return side^2
    }

    diagonal(){
        let result = Math.floor(this.side * Math.sqrt(2))
        return "Nearly " + result
    }
}

module.exports = Square