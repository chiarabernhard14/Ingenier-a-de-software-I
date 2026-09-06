let obj = {};  /// constructor == Object()
function Usuario(){
    this.name = "lalalalalal";
}

let user = new Usuario(); 
console.log(user.constructor);


const s1 = "1 + 1"; 
const s2 = new String("1 + 1"); 
console.log(s2.valueOf());