var data1 = ['管理员项', '客户信息', '管理动作', '业务考评', '资产管理维护', '分析图表', '退出'];
var data2 = [
    ['权限分配', '部门设置', '员工管理', '押品设置', '操作纪录', "客户性质", "货款产品", "收款方式", "合作银行", "全部银行", "渠道"],
    ['费用发放', '相关人员', '客户照片', '数据导入', '贷款明细', '还款明细'],
    ['客户签约', '签约审核', '风控验收', '货款到款', '货款发放', '客户调查'],
    ['业绩情况', '市场开放', '市场维护', '费用支出'],
    ['资产管理', '设备设置', '设备保修', '保修审核', '已审核问题'],
    ['月日均变化图', '贷款笔数变化图'],
    ['通知', '个人资料', '退出']
];

var header = [{
    type: 1,
    placeholdertext: '搜索'
}];

var header2 = [{
        type: 1,
        title : '用户ID',
        placeholdertext: 'ID'
    },
    {
        type: 1,
        title: '客户名称',
        placeholdertext: '客户名称'
    },
    {
        type: 2,
        title: '贷款银行',
        placeholdertext: '请选择',
        placelists: ['中国农业银行', '广发银行', '中国建设银行', '中国工商银行', '中国邮政银行', '中国人民银行']
    },
    {
        type: 2,
        title: '客户性质',
        placeholdertext: '请选择',
        placelists: ['个人', '大型企业', '自定义', '民营企业', '房产中介', '国有企业','其它']
    },
    {
        type: 2,
        title: '市场开发人员',
        placeholdertext: '请选择',
        placelists: ['路人甲', '路人乙']
    },
    {
        type: 2,
        title: '市场维护人员',
        placeholdertext: '请选择',
        placelists: ['路人甲', '路人乙']
    },
    {
        type: 1,
        title: '录入时间',
        placeholdertext: '时间'
    }
]

// array = [1,2,3];
// array2 = [[11],[21],[31]];
// array[0] = 1;
// array[1][1] = 2;
// [1,11,2,21,3,31]
var datas = new Array();
for (var i = 0; i < data1.length; i++) {
    datas.push(data1[i]);
    // datas.push(data2[i]);
    var dd = data2[i];
    for (var j = 0; j < dd.length; j++) {

        datas.push(dd[j]);
    }
    // if(i == 0)break;
}
console.log(datas);

function initTree(t) {
    var tree = document.getElementById(t);

    var lists = tree.getElementsByTagName('li');
    for (var i = 0; i < lists.length; i++) {
        var item = lists[i]; //li
        (function (num) {
            var sub_ul = item.getElementsByTagName('ul');
            var a_el = item.getElementsByTagName('a');
            var b_el = item.getElementsByTagName('b');
            if (sub_ul.length != 0) { //1表
                sub_ul[0].style.display = 'none';
                a_el[0].onclick = function () {
                    if (sub_ul[0].style.display == 'block') {
                        sub_ul[0].style.display = 'none';
                        b_el[0].style.backgroundImage = 'url("./sources/images/arrow-right.png")';
                    } else {
                        sub_ul[0].style.display = 'block';
                        b_el[0].style.backgroundImage = 'url("./sources/images/arrow-down.png")';
                        
                    }
                }
            } else { //2表

                a_el[0].onclick = function () {
                    var li_el = this.parentNode.parentNode.getElementsByTagName('li');
                    for (var i = 0; i < li_el.length; i++) {
                        var sub_a = li_el[i].getElementsByTagName('a');
                        // sub_a[0].classList.remove('item-selected');
                        sub_a[0].style.borderLeft = '4px solid #f8f6f7';
                    }
                    // this.classList.add('item-selected');
                    this.style.borderLeft = '4px solid #f47f03';
                    console.log(num, datas[num]);
                    // document.getElementById('show').innerText = datas[num];

                    switch (num) {
                        case 1:
                            console.log(num);
                            
                            show_content({
                                num: num,
                                header: header
                            });
                            break;
                        case 2:
                            show_content({
                                num: num,
                                header: header2
                            });
                            break;
                        case 38:
                            show_content({
                                num: num,
                                header: chartsdatas
                            });
                            break;
                        default:
                            break;
                    }
                }
            }

        })(i);
    }

}
function create_header_type_01(header,text,title) {
    var title_div = create_node('div');
    // title_div.style.height = '10%';
    var t1 = create_node('h3');
    t1.classList.add('show-header-title');
    t1.innerText = title;
    append_node(title_div, t1);
    append_node(header, title_div);

    var div_left_el = create_node('div');
    // title_div.style.height = '90%';
    div_left_el.classList.add('show-header-left');
    var div_l_u_el = create_node('div');
    var l_u = create_node('label');
    l_u.innerText = '关键字:';
    append_node(div_l_u_el,l_u);
    var input_el = create_node('input');
    input_el.setAttribute('placeholder', text);
    input_el.setAttribute('typt', 'text');
    append_node(div_l_u_el, input_el);
    append_node(div_left_el,div_l_u_el);
    append_node(header,div_left_el);

    var div_right_el = create_node('div');
    div_right_el.classList.add('show-header-right');
    // div_right_el.style.padding = '20px';
    var search_btn = create_node('button');
    search_btn.innerText = '查询';
    search_btn.style.backgroundColor = '#f47f03';
    search_btn.style.color = '#fff';
    search_btn.style.border = '0px';
    search_btn.style.padding = '10px';
    search_btn.style.width = '80px';
    search_btn.style.height = '40px';
    append_node(div_right_el, search_btn);
    var add_btn = create_node('button');
    add_btn.innerText = '添加成员';
    add_btn.style.backgroundColor = '#f47f03';
    add_btn.style.color = '#fff';
    add_btn.style.border = '0px';
    add_btn.style.padding = '10px';
    add_btn.style.width = '80px';
    add_btn.style.height = '40px';
    add_btn.style.marginLeft = '20px';
    append_node(div_right_el, add_btn);
    append_node(header, div_right_el);

}

function create_header_type_02(header, items, title) {
    var title_div = create_node('div');
    // title_div.style.height = '10%';
    var t1 = create_node('h3');
    t1.classList.add('show-header-title');
    t1.innerText = title;
    append_node(title_div, t1);
    append_node(header, title_div);

    var ul = create_node('ul');
    ul.classList.add('h-type02');
    for(var i = 0; i < items.length;i++){
        var item = create_node('li');
        var label = create_node('label');
        label.innerText = items[i].title + ':';
        label.style.display = 'inline-block';
        label.style.width = '30%';
        label.style.paddingRight = '20px';
        label.style.textAlign = 'right';
        label.style.color = '#929596';
        append_node(item,label);

        switch (items[i].type) {
            case 1:
                var input_el = create_node('input');
                input_el.setAttribute('placeholder', items[i].placeholdertext);
                input_el.setAttribute('typt', 'text');
                input_el.style.height = '80%';
                input_el.style.backgroundColor = '#f7f5f6';
                input_el.style.border = '0px';
                input_el.style.textIndent = '10px';
                input_el.style.color = '#e0dee0';
                append_node(item, input_el);
                break;
            case 2:
                var el = create_drop_menu(items[i]);
                append_node(item, el);
                break;
            default:
                break;
        }
        append_node(ul,item);
    }
    append_node(header,ul);
}

function create_drop_menu(items) {
    var ul_el = create_node('ul');
    ul_el.setAttribute('id', 'navigation');
    ul_el.style.display = 'inline-block';
    ul_el.style.height = '100%';
    var li_el = create_node('li');
    li_el.style.height = '100%';
    var input_el = create_node('input');
    input_el.style.height = '80%';
    input_el.setAttribute('placeholder', items.placeholdertext);
    input_el.setAttribute('typt', 'text');
    input_el.style.backgroundColor = '#f7f5f6';
    input_el.style.border = '0px';
    input_el.style.textIndent = '10px';
    append_node(li_el,input_el);

    var sub_ul = create_node('ul');
    sub_ul.classList.add('items');
    sub_ul.style.display = 'none';
    sub_ul.style.backgroundColor = '#fff';
    sub_ul.style.width = '15%';
    
    for (let i = 0; i < items.placelists.length; i++) {
        var sub_li = create_node('li');
        sub_li.style.height = '30px';
        var a_el = create_node('a');
        a_el.setAttribute('href', 'javascript:void(0);');
        a_el.innerText = items.placelists[i];
        a_el.style.color = '#333';
        a_el.onclick = function () {
            input_el.value = this.innerText;
            var pre_el = this.parentNode.parentNode;
            pre_el.style.display = 'none';
        }
        append_node(sub_li,a_el);
        append_node(sub_ul,sub_li);
    }
    append_node(li_el,sub_ul);
    append_node(ul_el,li_el);
    li_el.addEventListener('mouseover', function () {
        var ul_el = this.getElementsByTagName('ul')[0];
        ul_el.style.display = 'block';
        ul_el.style.position = 'absolute';
    }, true);
    li_el.addEventListener('mouseout', function () {
        var ul_el = this.getElementsByTagName('ul')[0];
        ul_el.style.display = 'none';
    }, true);
    return ul_el;
}

function get_node(el) {
    var get_el = document.querySelector(el);
    if (get_el) {
        return get_el;
    } else {
        return null;
    }
}

function create_node(el) {
    var new_el = document.createElement(el);
    return new_el;
}

function insert_node(new_el, before_el) {
    before_el.parentNode.insertBefore(new_el, before_el);
}

function create_header(h_datas,num) {

    var header = null;
    if (h_datas.length != 1) {
        header = create_node('div');
        header.classList.add('show-header');

        
        create_header_type_02(header, h_datas,datas[num]);

        // for (let index = 0; index < h_datas.length; index++) {
        //     switch (h_datas[index].type) {
        //         case 1:
        //             var input_el = create_node('input');
        //             input_el.setAttribute('placeholder', h_datas[index].placeholdertext);
        //             input_el.setAttribute('typt', 'text');
        //             append_node(header, input_el);
        //             break;
        //         case 2:
        //             var el = create_drop_menu(h_datas[index]);
        //             append_node(header, el);
        //             break;

        //         default:
        //             break;
        //     }

        // }
    } else {
        
        header = create_node('div');
        header.classList.add('show-header');
        header.style.height = '20%';
        
        create_header_type_01(header, h_datas[0].placeholdertext,datas[num]);
    }
    return header;
}

function append_node(p_node, c_node) {
    p_node.appendChild(c_node);
}

function show_content(dict) {
    // console.log(dict);
    var bf_el = get_node('div#show>.pages');
    if (bf_el) {
        var get_content = get_node('div#show>.show_content');
        if (get_content) {
            get_content.parentNode.removeChild(get_content);
        }
        var new_el = create_node('div');
        new_el.classList.add('show_content');


        switch (dict.num) {
            case 38:
                var charts = create_node('div');
                charts.setAttribute('id', 'data_show');
                create_echarts(charts, chartsdatas, dict.num);
                append_node(new_el, charts);
                break;
            case 39:

                break;
        
            default:
                var header = create_header(dict.header, dict.num);
                append_node(new_el, header);
                var table_w = create_node('div');
                table_w.classList.add('table-wrapper');
                create_table_head(table_w, thead01);
                create_table_row(table_w, tr_datas);
                append_node(new_el, table_w);
                break;
        }
        
        insert_node(new_el, bf_el);
    }
}
// show_content();

//创建表头
var thead01 = ['全选','账号ID','账号名称','操作'];
function create_table_head(pel,thead01) {
    var th = create_node('ul');
    th.style.backgroundColor = '#fff';
    th.style.marginBottom = '2px';
    for(var i = 0; i < thead01.length; i++){
        var td = create_node('li');
        td.style.display = 'inline-block';
        td.style.height = '30px';
        td.style.lineHeight = '30px';
        td.style.color = '#999';
        td.style.padding = '2px';
        td.style.textAlign = 'center';
        td.style.boxSizing = 'border-box';
        // td.style.borderBottom = '1px solid #666';
        if(i == 0){
            td.style.width = '5%';
            td.style.borderRight = '2px solid #f7f4f8';
        } else if (i == thead01.length-1){
            td.style.width = '25%';
        }else{
            var ww = 0.7/(thead01.length - 2);
            var www = parseInt(ww*100) + '%';
            td.style.width = www;
            td.style.borderRight = '2px solid #f7f4f8';
        }
        td.innerText = thead01[i];
        
        append_node(th,td);
    }
    append_node(pel,th);

}
//创建表行
var tr_datas = [
    {
        uid : '100001',
        uname : '超级管理员'
    },
    {
        uid: '100002',
        uname: '市场销售'
    },
    {
        uid: '100003',
        uname: '市场经理'
    },
    {
        uid: '100004',
        uname: '客户销售'
    },
    {
        uid: '100005',
        uname: '客户销售'
    }
];
function create_table_row(pel,dd) {
    // datas.push({});
    // datas.unshift({});
    
    var keys = Object.keys(dd[0]);
    keys.unshift('select');
    keys.push('option');
    for(var i = 0; i < dd.length ;i++){
        var tr = create_node('ul');
        tr.style.backgroundColor = '#fff';
        tr.style.marginBottom = '2px';
        for(var j = 0;j<keys.length;j++){
            var td = create_node('li');
            td.style.display = 'inline-block';
            td.style.height = '40px';
            td.style.lineHeight = '40px';
            td.style.color = '#999';
            td.style.padding = '2px';
            td.style.textAlign = 'center';
            td.style.boxSizing = 'border-box';
            if(j == 0){
                td.style.width = '5%';
                td.style.borderRight = '2px solid #f7f4f8';
                var bs = create_node('b');
                bs.style.display = 'inline-block';
                bs.style.width = '10px';
                bs.style.height = '10px';
                bs.style.border = '1px solid #333';
                append_node(td,bs);
            }else if(j == keys.length-1){
                td.style.width = '25%';
                var edit_btn = create_node('button');
                edit_btn.innerText = '编辑';
                edit_btn.style.backgroundColor = '#f47f03';
                edit_btn.style.color = '#fff';
                edit_btn.style.border = '0px';
                // edit_btn.style.padding = '10px';
                edit_btn.style.width = '50px';
                edit_btn.style.height = '30px';
                append_node(td, edit_btn);
                var del_btn = create_node('button');
                del_btn.innerText = '删除';
                del_btn.style.backgroundColor = '#f47f03';
                del_btn.style.color = '#fff';
                del_btn.style.border = '0px';
                // del_btn.style.padding = '10px';
                del_btn.style.width = '50px';
                del_btn.style.height = '30px';
                del_btn.style.marginLeft = '20px';
                append_node(td, del_btn);
            }else{
                var ww = 0.7 / (thead01.length - 2);
                var www = parseInt(ww * 100) + '%';
                td.style.width = www;
                td.style.borderRight = '2px solid #f7f4f8';
                td.innerText = dd[i][keys[j]];
            }
            append_node(tr,td);
        }
        append_node(pel,tr);
    }

    
    

}

function createLeftNavs(id) {
    var ul_el = document.getElementById(id);
    if (data1.length != 0) {
        for (var i = 0; i < data1.length; i++) {
            var li = document.createElement('li');
            var b = document.createElement('b');
            var a = document.createElement('a');
            a.innerText = data1[i];
            a.style.background = '#f5f3f3 url("./sources/images/home.png") no-repeat left center';
            a.setAttribute('href', 'javascript:void(0);');
            li.appendChild(b);
            li.appendChild(a);
            var sub_ul = document.createElement('ul');
            sub_ul.classList.add('sub-item');
            for (var j = 0; j < data2[i].length; j++) {
                var s_li = document.createElement('li');
                var s_a = document.createElement('a');
                s_a.innerText = data2[i][j];
                s_li.appendChild(s_a);
                sub_ul.appendChild(s_li);
            }
            li.appendChild(sub_ul);
            ul_el.appendChild(li);
        }
    }

}

var pages_total_data = new Array();
// 显示页内容
function showPage(el, page) {
    for (var i = 0; i < 20; i++) {

        if ((pages_total_data.length) === (20 * (page - 1) + i)) {
            break;
        }

        var tr = document.createElement('ul');
        for (var j = 0; j < 2; j++) {
            var td = document.createElement('li');
            td.innerText = 'td' + (i + 1) + (j + 1);
            td.style.display = 'inline-block';
            tr.appendChild(td);
        }

        el.appendChild(tr);
    }

}

// 获取当前指定显示数据容器
function getContentWrapper() {
    var get_content = document.getElementById('t_body');
    if (get_content) {
        get_content.parentNode.removeChild(get_content);
    }
    get_content = document.createElement('div');
    get_content.setAttribute('id', 't_body');
    document.getElementsByClassName('table')[0].appendChild(get_content);
    return get_content;

}


//创建页码
var currentPage = 1;

function createPages(cla, pages) {
    var pages_el = document.getElementsByClassName(cla)[0];
    var p_ul = pages_el.getElementsByTagName('ul')[0];

    var li_count = 0;

    for (var index = 0; index < 5; index++) {
        var page_li = document.createElement('li');
        switch (index) {
            case 0:
                {
                    var a_el = document.createElement('a');
                    a_el.setAttribute('href', 'javascript:void(0);');
                    a_el.innerText = '当前页:';
                    var current_span = document.createElement('span');
                    current_span.innerText = '1';
                    current_span.style.color = '#f47f03';
                    var total_span = document.createElement('span');
                    total_span.innerText = '/' + pages.length;

                    a_el.appendChild(current_span);
                    a_el.appendChild(total_span);

                    page_li.appendChild(a_el);
                }
                break;

            default:
                {
                    var a_el = document.createElement('a');
                    a_el.innerText = index;
                    a_el.setAttribute('href', 'javascript:void(0);');
                    (function (num) {
                        a_el.onclick = function () {
                            switch (num) {
                                case 1:
                                    if (currentPage == 1) {
                                        break;
                                    }
                                    currentPage = 1;
                                    //执行 刷新当前页的数据
                                    break;
                                case 2:
                                    if (currentPage > 1) {
                                        currentPage -= 1;
                                    } else {

                                    }
                                    //执行 刷新当前页的数据

                                    break;
                                case 3:
                                    if (currentPage < pages) {
                                        currentPage += 1;
                                    } else {

                                    }
                                    //执行 刷新当前页的数据
                                    break;
                                case 4:
                                    if (currentPage == pages) {
                                        break;
                                    }
                                    //执行 刷新当前页的数据
                                    break;
                                default:
                                    break;
                            }

                        }
                    })(index);

                }
                break;
        }
    }


    for (var i = 0; i < 2; i++) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.setAttribute('href', 'javascript:void(0);');
        a.innerText = i + 1;
        li.appendChild(a);
        (function (num) {
            a.onclick = function () {
                //实现切换页
                var el = getContentWrapper();
                currentPage = num + 1;
                showPage(el, currentPage);
            }
        })(i);
        p_ul.appendChild(li);
    }

}

// var inputType = [
//     {
//         lable : '',
//         input_placeholder : '',
//         type: 1,//0表示普通text 1表示下拉3
//         data:[]
//     }
// ]


function getCarsAndHourse() {
    var xhr = new XMLHttpRequest();
    var url = 'http://127.0.0.1:8885/data';
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (4 == xhr.readyState) {
            if (200 == xhr.status) {
                var obj = JSON.parse(xhr.responseText);
                var datas = {};
                var temp = new Array();
                for (var i = 0; i < obj['hourses'].length; i++) {
                    temp.push(obj['hourses'][i]['score']);
                }
                datas.hourses = temp;
                temp = [];
                for (var i = 0; i < obj['cars'].length; i++) {
                    temp.push(obj['cars'][i]['score']);
                }
                datas.cars = temp;
                // drawTu(datas);
            }
        }
    }
}

function create_echarts(el,dd,num) {
    var title_div = create_node('div');
    // title_div.style.height = '10%';
    var t1 = create_node('h3');
    t1.classList.add('show-header-title');
    t1.innerText = datas[num];
    append_node(title_div, t1);
    append_node(el, title_div);

    var row = create_node('div');
    row.classList.add('row');
    row.style.width = '100%';
    row.style.height = '35%';

    console.log(window.innerHeight);
    console.log(window.innerWidth);
    
    var ec_w = parseInt(window.innerWidth * 0.7);
    var ec_h = parseInt(window.innerHeight * 0.3);
    console.log(ec_w,ec_h);
    
    var ec_div = create_node('div');
    ec_div.style.margin = '0 auto';
    ec_div.style.width =  ec_w+'px';
    ec_div.style.height = ec_h+'px';
    append_node(row,ec_div);
    append_node(el,row);
    drawTu(ec_div,dd[0]);

    var row2 = create_node('div');
    row2.classList.add('row');
    row2.style.width = '100%';
    row2.style.height = '35%';

    // var ec_w = parseInt(window.innerWidth * 0.7);
    // var ec_h = parseInt(window.innerHeight * 0.3);
    // console.log(ec_w, ec_h);

    var ec_div2 = create_node('div');
    ec_div2.style.margin = '0 auto';
    ec_div2.style.width = ec_w + 'px';
    ec_div2.style.height = ec_h + 'px';
    append_node(row2, ec_div2);
    append_node(el, row2);
    drawTuLine(ec_div2, dd[0]);

}

var chartsdatas = [{
    hourses : [120,80,90,100,150,60,100,124,110,90,160,200],
    cars: [60, 100, 124, 110, 90, 160, 240, 120, 80, 90, 100, 150]
}];


function drawTu(el,dd) {
    // var tu1 = document.getElementById('data_show').getElementsByClassName('row')[1].getElementsByClassName('col')[0];
    if(el == null) return;

    var myBar = echarts.init(el);
    var option = {
        title: {
            text: '已完成业务年统计图',
            subtext: '2018年'
        },
        //图例
        legend: {
            data: ['房贷', '车贷']
        },
        tooltip: {
            trigger: 'axis'
        },
        //x
        xAxis: {
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            axisPointer: {
                type: 'shadow'
            }
        },
        //y
        yAxis: {
            type: 'value',
            name: '单',
            min: 0,
            max: 300,
            interval: 100,
            axisLabel: {
                formatter: '{value}单'
            }
        },
        series: [{
                name: '房贷',
                type: 'bar',
                color: '#3db6f5',
                data: dd['hourses']
            },
            {
                name: '车贷',
                type: 'bar',
                color: '#fb8005',
                data: dd['cars']
            }
        ]

    }
    myBar.setOption(option);
}

function drawTuLine(el, dd) {
    // var tu1 = document.getElementById('data_show').getElementsByClassName('row')[1].getElementsByClassName('col')[0];
    if (el == null) return;

    var myBar = echarts.init(el);
    var option = {
        title: {
            text: '已完成业务年统计图',
            subtext: '2018年'
        },
        //图例
        legend: {
            data: ['房贷', '车贷']
        },
        tooltip: {
            trigger: 'axis'
        },
        //x
        xAxis: {
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            axisPointer: {
                type: 'shadow'
            }
        },
        //y
        yAxis: {
            type: 'value',
            name: '单',
            min: 0,
            max: 300,
            interval: 100,
            axisLabel: {
                formatter: '{value}单'
            }
        },
        series: [{
                name: '房贷',
                type: 'line',
                color: '#3db6f5',
                data: dd['hourses']
            },
            {
                name: '车贷',
                type: 'line',
                color: '#fb8005',
                data: dd['cars']
            }
        ]

    }
    myBar.setOption(option);
}
