/**
 * orignial http://open.weibo.com/sharebutton
 * 
 * modified by @leegorous Jun 2012
 */
window.share2weibo = function(config){
  var _w = 72 
    , _h = 16
    , param = {
        url:location.href
      , type:'3'
      , count:'1' /**是否显示分享数，1显示(可选)*/
      , appkey:'' /**您申请的应用appkey,显示分享来源(可选)*/
      , title: document.title /**分享的文字内容(可选，默认为所在页面的title)*/
      , pic:'' /**分享图片的路径(可选)*/
      , ralateUid:'' /**关联用户的UID，分享微博会@该用户(可选)*/
      , language:'zh_cn' /**设置语言，zh_cn|zh_tw(可选)*/
      , rnd:new Date().valueOf()
      }
    , temp = []
    , container = false

  if (config) {
    if ('container' in config) {
      container = config.container
      delete config.container
    }
    for (var i in config) param[i] = config[i]
  }

  for( var p in param ){
    temp.push(p + '=' + encodeURIComponent( param[p] || '' ) )
  }

  var html = '<iframe allowTransparency="true" frameborder="0" scrolling="no" src="http://hits.sinajs.cn/A1/weiboshare.html?' + temp.join('&') + '" width="'+ _w+'" height="'+_h+'"></iframe>'
  if (container) {
    container.innerHTML = html
  } else {
    document.write(html)
  }
}
