//援助 or 召唤榜
function getBigMovieStagelist(stage) {
    $.ajax({
            url: app.url + 'getAnchorOrUserList',
            type: 'get',
            dataType: 'json',
            data: {
                stage: stage
            },
        })
        .done(function (data) {
            console.log(data.list);
            app.flist = data.list;
        });
}

//第一阶段
function getOne(stage) {
    $.ajax({
            url: app.url + 'getRankFamilyList',
            type: 'get',
            dataType: 'json',
            data: {
                stage: stage
            },
        })
        .done(function (data) {
            console.log(data.list);
            app.fone = data.list;
        });
}

//第二阶段
function getTwo(stage) {
    $.ajax({
            url: app.url + 'getRankFamilyList',
            type: 'get',
            dataType: 'json',
            data: {
                stage: stage
            },
        })
        .done(function (data) {
            console.log(data.list);
            app.ftwo = data.list;
        });
}



//家族列表

function family() {
    var id = window.location.search.slice(1);
    console.log(id);

    $.ajax({
            url: app.url + 'getFamilyList',
            type: 'get',
            dataType: 'json',
            data: {
                fid: id
            },
        })
        .done(function (data) {
            console.log(data.list);
            app.family = data.list;
        });
}


//家族信息
function familyId() {
    var id = window.location.search.slice(1);
    console.log(id);

    $.ajax({
            url: app.url + 'getFamilyOfId',
            type: 'get',
            dataType: 'json',
            data: {
                fid: id
            },
        })
        .done(function (data) {
            console.log(data);
            app.familyId = data.family;
        });
}

//当前第几阶段
function stateTime() {

    $.ajax({
            url: app.url + 'getStage',
            type: 'get',
            dataType: 'json',
            //  data: {fid : id},
        })
        .done(function (data) {
            console.log(data.stage);
            app.stageTime = data.stage;
        });
}

//获取第三阶段队伍信息one
function rank3one(stage) {
    $.ajax({
            url: app.url + 'getRank3Team',
            type: 'get',
            dataType: 'json',
            data: {
                stage: stage
            },
        })
        .done(function (data) {
            console.log(data);
            app.fthree1 = data.list;
        });
}

//获取第三阶段队伍信息two
function rank3two(stage){
    $.ajax({
        url: app.url + 'getRank3Team',
        type: 'get',
        dataType: 'json',
        data: {
            stage: stage
        },
    })
    .done(function (data) {
        console.log(data);
        app.fthree2 = data.list;
    });
}