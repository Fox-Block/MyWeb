import{_ as s,o as a,c as e,N as n}from"./chunks/framework.df4fa647.js";const u=JSON.parse('{"title":"another page","description":"","frontmatter":{},"headers":[],"relativePath":"guide/Page2.md"}'),l={name:"guide/Page2.md"},t=n(`<nav class="table-of-contents"><ul><li><a href="#how-to-writer-a-website-by-vuepress">how to writer a website by vuepress?</a><ul><li><a href="#first-step">first step</a></li><li><a href="#next-step">next step</a></li></ul></li></ul></nav><h1 id="another-page" tabindex="-1">another page <a class="header-anchor" href="#another-page" aria-label="Permalink to &quot;another page&quot;">​</a></h1><h2 id="how-to-writer-a-website-by-vuepress" tabindex="-1">how to writer a website by vuepress? <a class="header-anchor" href="#how-to-writer-a-website-by-vuepress" aria-label="Permalink to &quot;how to writer a website by vuepress?&quot;">​</a></h2><h3 id="first-step" tabindex="-1">first step <a class="header-anchor" href="#first-step" aria-label="Permalink to &quot;first step&quot;">​</a></h3><h3 id="next-step" tabindex="-1">next step <a class="header-anchor" href="#next-step" aria-label="Permalink to &quot;next step&quot;">​</a></h3><div class="language-cmake"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 声明要求的 cmake 最低版本</span></span>
<span class="line"><span style="color:#89DDFF;">cmake_minimum_required</span><span style="color:#A6ACCD;">(VERSION 2.8)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 声明一个 cmake 工程</span></span>
<span class="line"><span style="color:#89DDFF;">project</span><span style="color:#A6ACCD;">(HelloSLAM)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置编译模式</span></span>
<span class="line"><span style="color:#89DDFF;">set</span><span style="color:#A6ACCD;">(CMAKE_BUILD_TYPE </span><span style="color:#C3E88D;">&quot;Debug&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加一个可执行程序</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 语法：add_executable( 程序名 源代码文件 ）</span></span>
<span class="line"><span style="color:#89DDFF;">add_executable</span><span style="color:#A6ACCD;">(helloSLAM helloSLAM.cpp)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加hello库</span></span>
<span class="line"><span style="color:#89DDFF;">add_library</span><span style="color:#A6ACCD;">(hello libHelloSLAM.cpp)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 共享库</span></span>
<span class="line"><span style="color:#89DDFF;">add_library</span><span style="color:#A6ACCD;">(hello_shared SHARED libHelloSLAM.cpp)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加可执行程序调用hello库中函数</span></span>
<span class="line"><span style="color:#89DDFF;">add_executable</span><span style="color:#A6ACCD;">(useHello useHello.cpp)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 将库文件链接到可执行程序上</span></span>
<span class="line"><span style="color:#89DDFF;">target_link_libraries</span><span style="color:#A6ACCD;">(useHello hello_shared)</span></span>
<span class="line"></span></code></pre></div>`,6),p=[t];function o(r,i,c,h,y,d){return a(),e("div",null,p)}const b=s(l,[["render",o]]);export{u as __pageData,b as default};
