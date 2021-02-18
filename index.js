const express = require('express') //다운받은 express 모듈을 가져옴. 
const app = express() //펑션을 이용해서 새로운 express 앱을 만듦. 
const port = 5000 //포트는 아무렇게나 해도 됨. 우리는 5000서버를 백서버로 둘 것. 
// 몽구스를 이용해서 몽고디비와 우리 어플리케이션을 연결할 것. 
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://codingsiro:1234@cluster0.zxzxm.mongodb.net/cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected')).catch(err => console.log(err))

//이것들을 써주는 이유는 안쓰면 에러같은 것들이 뜨기 때문에. 
// .then은 이것들이 연결이 잘 되었는지 확인하기 위해서 
// 연결이 잘 안된 경우는 catch --> 에러가 있으면 콘솔로그를 통해 에러를 보여줄 수 있게해줌. 


app.get('/', (req, res) => res.send('Hello World!')) //루트 디렉토리에 오면 hello world라ㅣ는 것을 출력되게 해줌. 

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) //5000번 포트에서 이 앱을 실행함. 