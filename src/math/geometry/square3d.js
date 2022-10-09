class Square3D{
    constructor(side, mass){
        this.side = side
        this.mass = mass
    }

    perimeter(){
        return this.side*4
    }

    area(){
        return this.side**2
    }

    volume(){
        return this.side**3
    }
}

module.exports = Square3D