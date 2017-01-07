class Util {
    request (callback) {
        //模拟请求
        setTimeout(function(){
            callback({
                promisList : [
                    {todo : '12:00  午饭', state : 'promis', index : 6},
                    {todo : '12:30  午休', state : 'promis', index : 7},
                    {todo : '13:30  工作', state : 'promis', index : 8},
                    {todo : '18:00  下班', state : 'promis', index : 9},
                    {todo : '19:20  到家', state : 'promis', index : 13}
                ],
                resolveList : [
                    {todo : '5:30  起床', state : 'resolve', index : 1},
                    {todo : '5:40  晨练', state : 'resolve', index : 2},
                    {todo : '7:00  早饭', state : 'resolve', index : 3},
                    {todo : '7:30  出门', state : 'resolve', index : 4},
                    {todo : '9:00  工作', state : 'resolve', index : 5}
                ]
            });
        }, 1000);
    }
}

export default (new Util());
