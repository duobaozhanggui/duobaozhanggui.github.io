if (window.location.href.indexOf('article') !== -1) {
	document.write("<script src='../js/jquery-1.10.2.min.js'></script>");
	document.write("<script src='../js/pic-scroll.js'></script>");
} else {
	document.write("<script src='./js/jquery-1.10.2.min.js'></script>");
	document.write("<script src='./js/pic-scroll.js'></script>");
}


var rest={ 
  insertAgentData:'/ZhangGuiZhiNang_WebService/InvestmentAgent/agentInsert',
  ip:'https://manage.zhangguizhinang.com/',
  downloadIp:'https://www.zhangguizhinang.com/'
};

function handleScroll() {
  //为了保证兼容性，这里取两个值，哪个有值取哪一个
  //scrollTop就是触发滚轮事件时滚轮的高度
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop < 1) {
      $('#top').css({'background': 'none','color': '#B5D6FF','box-shadow': 'none'});
  } else {
      $('#top').css({'background': '#FFF','color': '#333'});
  }
}

if(window.addEventListener) {
  window.addEventListener('scroll', this.handleScroll, true);
}
