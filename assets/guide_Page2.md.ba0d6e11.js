import{_ as s,c as e,o as a,d as n}from"./app.86d1c4f5.js";const _=JSON.parse('{"title":"another page","description":"","frontmatter":{},"headers":[{"level":2,"title":"how to writer a website by vuepress?","slug":"how-to-writer-a-website-by-vuepress","link":"#how-to-writer-a-website-by-vuepress","children":[{"level":3,"title":"first step","slug":"first-step","link":"#first-step","children":[]},{"level":3,"title":"next step","slug":"next-step","link":"#next-step","children":[]}]}],"relativePath":"guide/Page2.md"}'),l={name:"guide/Page2.md"},t=n(`<nav class="table-of-contents"><ul><li><a href="#how-to-writer-a-website-by-vuepress">how to writer a website by vuepress?</a><ul><li><a href="#first-step">first step</a></li><li><a href="#next-step">next step</a></li></ul></li></ul></nav><h1 id="another-page" tabindex="-1">another page <a class="header-anchor" href="#another-page" aria-hidden="true">#</a></h1><h2 id="how-to-writer-a-website-by-vuepress" tabindex="-1">how to writer a website by vuepress? <a class="header-anchor" href="#how-to-writer-a-website-by-vuepress" aria-hidden="true">#</a></h2><h3 id="first-step" tabindex="-1">first step <a class="header-anchor" href="#first-step" aria-hidden="true">#</a></h3><h3 id="next-step" tabindex="-1">next step <a class="header-anchor" href="#next-step" aria-hidden="true">#</a></h3><div class="language-cmake"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 声明要求的 cmake 最低版本</span></span>
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
<span class="line"></span></code></pre></div>`,6),p=[t];function o(i,r,c,h,d,y){return a(),e("div",null,p)}const b=s(l,[["render",o]]);export{_ as __pageData,b as default};
