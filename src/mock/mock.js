import Mock from 'mockjs';//es6语法引入mock模块
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档

export default Mock.mock('http://test.cn', {//输出数据

    'flag': true,

    'result|0-30': [{
        'content':'@string("lower", 5)',//随机返回一个中文标题
        // 'content':'长江后浪推前浪，一浪更比一浪更',//随机返回一个中文标题
        'picture':

            [
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585150919231&di=e54ffd66701248b4dfad22227dbc3b47&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3616242789%2C1098670747%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D900%26h%3D1350",
                // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585150980060&di=aaed1679c7c110d53cca99460d5d08c8&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585151024651&di=8fa240a6ab5ca95dc2d701e79b8c2aaf&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D1179872664%2C290201490%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D854",
                "https://t1.hddhhn.com/uploads/tu/201812/622/484.jpg",
                // "https://uploadfile.huiyi8.com/up/a2/e3/83/a2e3832e52216b846c80313049591938.jpg"

            ],
        // 'js':Random.cparagraph(1, 3)+Random.cparagraph(1, 3)+Random.cparagraph(1, 3)+Random.cparagraph(1, 3)+Random.cparagraph(1, 3)//随机返回一句中文
        'js':'@string("lower", 100)'
    }]

    //测试空的数据
    // 'result':[]

    // '@string("lower", 5)',
    // '@string("lower", 5)',
    // '@string("lower", 5)',
    // '@string("lower", 5)',

});
