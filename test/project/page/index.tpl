<a>append1</a>
<a href="">append1</a>
<a href="/m/">append1</a>
<a href="{%\$url%}">append1</a>
<a href = "{%\$url%}">append1</a>
<a{%if \$current == 0%} class="cur"{%/if%} href="/">append1</a>
<a class="test" id="test05" href="javascript: ffccee('aa);" >append1</a>
<div class="test"><a class="test06" id="test06" href="#" onclick="javascript: ffccee('aa');" >append1</a></div>
<div class="test"><a class="test07" id="test07" href="##" onclick="javascript: ffccee('aa');" >append1</a></div>
<div class="test"><a class="test08" id="test07" href="##" onclick="javascript: ffccee('aa');" >append1</a></div>
<div class="test"><a href="/m/?st=5&pu=sz@1320_11&bd_page_type=1">append1</a></div>
<div class="test"><a href="{%\$href|escape:'html'%}">append1</a></div>

<script id="t:_1234-abcd-1" type="text/html">
    <a href="/uri_1/">TEST</a>
</script>

<textarea id="t:_1234-abcd-1">
    <a href="/uri_1/">TEST</a>
</textarea>

<TEXTAREA ID="T:_1234-ABCD-2">
    <A HREF="/URI_1/">TEST</A>
</TEXTAREA>

<div class="test">
    <a href="{%\$href|escape:'html'%}">
        {if \$name eq 'Fred'}
            Welcome Sir.
        {elseif \$name eq 'Wilma'}
            Welcome Ma'am.
        {else}
            Welcome, whatever you are.
        {/if}
    </a>

    {%foreach \$hotList as \$item%}
    <a href="/view/{%\$item.lemmaId%} ? {%(\$item.subLemmaId) ? ('sublemmaid='|cat:\$item.subLemmaId) : ''%}">
        <span class="t">{%\$item.title%}</span>
        {%\$item.abstract%}
    </a>
    {%/foreach%}

    <a id="exploreUser" {%if \$type=='question'%} href="/m/exploreuser" {%/if%} {%if \$type=='user'%} class="on"{%else%} class="un"{%/if%}>”√ªß</a>
</div>

