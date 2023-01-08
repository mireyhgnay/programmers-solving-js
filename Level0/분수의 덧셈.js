function gcd(num1, num2) {
    return num2 === 0 ? num1 : gcd(num2, num1 % num2);
}

function solution(denum1, num1, denum2, num2) {
    const num = num1 * num2;
    const denum = num1 * denum2 + num2 * denum1;

    const gcd_num = gcd(denum, num);

    return [Math.floor(denum / gcd_num), Math.floor(num / gcd_num)];
}