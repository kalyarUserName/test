function divide(a, b){
    let sign = ((a > 0 && b < 0) || (a < 0 && b > 0)) ? -1 : 1;
    let aa = Math.abs(a);
    let bb = Math.abs(b);
    let res = 0;
    while (aa - bb >= 0) {
        aa = aa - bb;
        res++;
    }
    return sign * res;
}
