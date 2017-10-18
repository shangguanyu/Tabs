/**
 * Created by wyx on 2017/9/7.
 */
window.tabs=function (element) {
    var $tabs=$(element);
    let selector='ol[data-role="nav"]>li';
    $tabs.on('click',selector,e=>{//当selector呗点击的时候，就打印出function---e.target(点击的那个元素）
        let $li=$(e.currentTarget);
        let index=$li.index();//获取第几个元素
        $li.addClass('active').siblings().removeClass('active')//当前的li增加active，它的所有兄弟都移除active
        $li.closest('ol[data-role="nav"]').siblings('ol[data-role="panes"]').find('li').eq(index).addClass('active')
            .siblings().removeClass('active')//找到li最近的ol的兄弟，

        console.log(index)
        console.log($li);
    })
}
/*别人用代码*/
tabs(document.querySelectorAll('.tabs')[0]);
tabs(document.querySelectorAll('.tabs')[1]);//别人用这个代码得声明两个ol分别叫data-role="nav"和ol[data-role="panes"
tabs(document.querySelectorAll('.aaa')[0]);
tabs(document.querySelectorAll('.aaa')[1]);