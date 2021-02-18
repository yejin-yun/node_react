const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: { //토큰의 유효기간
        type: Number
    }

}) //token을 이용해서 나중에 유효성 같은 것을 관리할 수 있음.

//스키마를 모델로 감싸줘야함.

const User = mongoose.model('User', userSchema) // 위에서 만든 모델의 이름을 적어주고, 스키마를 넣어주면 됨. 

//그리고 위에서 만든 저 스키마(강사님은 모델이라고 칭하심)를 다른 파일에서도 쓰고 싶음
// 그래서 변수 User를 모듈에 export를 해줌. 
module.exports = {User}