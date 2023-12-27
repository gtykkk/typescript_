/*
class User {
    private static x = 10;
    public static y = 20;
    protected z = 30;
}
x, y, z 속성의 특징을 설명
x는 상속(extends)이 불가능하며, 재정의 불가능
y는 자식들이 사용 가능하며, 재정의 가능
z는 상속(extends) 가능

1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성을 지녔는데, x와 y에는 static 키워드가
   붙었기 때문에 User.x 이런 식으로 접근해주어야하고 자식들은 x와 y를 쓸 수 없다.
2. private static x는 class 내부에서만 수정이 가능하다.
3. public static x는 class 내부 외부 상관없이 수정 가능하다. public이 없어도 같음
4. proteced z는 private 키워드와 유사하게 class 내부에서만 사용이 가능한데 범위가 넓어 extends로 복사한
   class 내부에도 사용할 수 있다.
*/
// x 속성에 숫자를 더해주는 함수가 필요
var Users = /** @class */ (function () {
    function Users() {
    }
    Users.addOne = function (a) {
        Users.x += a;
        return Users.x;
    };
    Users.printX = function () {
        console.log(Users.x);
    };
    Users.x = 10;
    Users.y = 20;
    return Users;
}());
Users.addOne(3);
Users.printX();
Users.addOne(4);
Users.printX();
// 네모.draw()를 할 때 마다, 가로 30px, 세로 30px의 배경색 'red'인 <div> 박스가 무작위 배치
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.draw = function () {
        var field = document.querySelector('.square');
        var newDiv = document.createElement('div');
        var xMin = 0;
        var yMin = 0;
        var xMax = 400;
        var yMax = 400;
        var x = Math.random() * (xMax - xMin) + xMin;
        var y = Math.random() * (yMax - yMin) + yMin;
        newDiv.style.position = 'absolute';
        newDiv.style.left = "".concat(x, "px");
        newDiv.style.top = "".concat(y, "px");
        newDiv.style.width = "".concat(30, "px");
        newDiv.style.height = "".concat(30, "px");
        newDiv.style.backgroundColor = 'red';
        field.append(newDiv);
    };
    return Square;
}());
var 네모 = new Square();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
// class Square {
//     constructor(public width: number, public height: number, public color: string) {
//     }
//     draw() {
//         let a = Math.random();
//         let square = `<div style="position:relative; 
//         top:${a * 400}px; 
//         left:${a * 400}px; 
//         width:${this.width}px; 
//         height : ${this.height}px; 
//         background:${this.color}"></div>`;
//         document.body.insertAdjacentHTML('beforeend', square);
//     }
// }
// let 네모 = new Square(30, 30, 'red');
// 네모.draw()
// 네모.draw()
// 네모.draw()
// 네모.draw()
