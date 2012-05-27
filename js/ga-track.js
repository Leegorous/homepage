!function(doc, disabled) {
    var _gaq = (window._gaq = window._gaq || [])
    _gaq.push(['_setAccount', 'UA-424296-1'])
    _gaq.push(['_trackPageview'])

    if (!disabled) {

        var ga = doc.createElement('script')
          , s = doc.getElementsByTagName('script')[0]

        ga.type = 'text/javascript'
        ga.async = true
        ga.src = ('https:' == doc.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'
        s.parentNode.insertBefore(ga, s)

    }

}(document, /^(localhost|\d{1,3}(\.\d{1,3}){3})$/.test(location.hostname));