// best solution1
function solution(id_pw, db) {
    const [id, pw] = id_pw;
    const map = new Map(db);
    return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}

// best solution2
function solution(id_pw, db) {
    db = db.filter(v => v[0] === id_pw[0]);

    if (!db.length) return 'fail';

    for (let d of db) if (d[1] === id_pw[1]) return 'login';

    return 'wrong pw';
}
