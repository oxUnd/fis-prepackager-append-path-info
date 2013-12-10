
var exports = module.exports = function(ret, conf, settings, opt) {
    var _ = fis.util;

    if (fis.config.get('smarty')) {
        var smarty = fis.config.get('smarty');
        settings['left_delimiter'] = smarty['left_delimiter'];
        settings['right_delimiter'] = smarty['right_delimiter'];
    }

    _.map(ret.ids, function (id, file) {
        if (file.rExt == '.tpl') {
            replace(file, settings);
        }
    });
};


function replace(file, settings) {
    var content = file.getContent();
    var _ = fis.util;
    var ld = settings['left_delimiter'];
    var rd = settings['right_delimiter'];

    //match a link, get href; strip <script> or <textarea>
    var reg = /(?:<a(?:(?!<\/|>)[\s\S])*href\s*=\s*('(?:[^\\'\n\r\f]|\\[\s\S])*'|"(?:[^\\"\r\n\f]|\\[\s\S])*"|\S+)(?:(?!<\/|>)[\s\S])*>|(?:\<script\b[^>]*\>)(?:[\s\S]*?)(?:\<\/script\s*\>)|(?:\<textarea\b[^>]*\>)(?:[\s\S]*?)(?:\<\/textarea\s*\>))/gi
    content = content.replace(reg, function ($0, $1) {
        if ($1) {
            var info = _.stringQuote($1)
            var href = info.rest;
            var p1 = href.indexOf('##');
            var p2 = href.indexOf('javascript');
            var p3 = href.indexOf('#');
            if (p1 != -1) {
                href = href.replace('##', '');
            } else {
                if (href.indexOf('pu=') == -1
                   && href.indexOf('bd_page_type=') == -1
                   && href.indexOf('?{') == -1
                   && p2 == -1
                   && p3 !== 0) {
                       href = info.quote + ld + 'append_path_info url="' + href + '"' + rd + info.quote;
                   }
            }

            if ($1 !== href) {
                //替换
                $0 = $0.replace($1, href);
            }
        }
        return $0;
    });
    file.setContent(content);
}

exports.defaultOptions = {
    'left_delimiter': '{%',
    'right_delimiter': '%}'
};
