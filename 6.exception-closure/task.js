function parseCount(count) {
    if (isNaN(Number.parseInt(count))) {
        throw new Error("Невалидное значение");
    }
    return Number.parseInt(count);
}

function validateCount(newCount) {
    try {
        return parseCount(newCount);
    } catch (e) {
        return e;
    }
}


class Triangle {
constructor(side1, side2, side3) {

  if ((side1+side2)<side3 || (side1 + side3) < side2|| (side3  + side2) < side1)
  throw new Error ('Треугольник с такими сторонами не существует')
}
this.side1 = side1;
this.side2 = side2;
this.side3 = side3;
}
getPerimeter(){
return this.side1 + this.side2 + this.side3;
}

getArea() {
        let p = (this.first + this.second + this.third) / 2;
        return +(Math.sqrt(p * (p - this.first) * (p - this.second) * (p - this.third))).toFixed(3);
    }
}

function getTriangle(side1, side2, side3){

 
    try {
        return new Triangle(side1, side2, side3);
    } catch (e) {
        return {
            getArea() {
                return "Ошибка! Треугольник не существует"
            },
            getPerimeter() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}
