// Quadratic Equation

function quadratic(a, b, c){
    x1 = -b+Math.sqrt((b**2)-4*a*c)/(2*a)
    x2 = -b-Math.sqrt((b**2)-4*a*c)/(2*a)
    return(x1 + ", " + x2);
}

// console.log(quadratic(1, 0, -1));

