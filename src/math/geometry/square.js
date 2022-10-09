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
}

module.exports = Square