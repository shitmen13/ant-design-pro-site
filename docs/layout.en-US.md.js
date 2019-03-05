webpackJsonp([69],{854:function(n,a){n.exports={content:["article",{},["h2","Layout in Ant Design Pro"],["p","We abstract common layouts in Ant Design Pro, and put them in ",["code","/layouts"],", includes:"],["ul",["li",["p","BasicLayout: Basic Layout, includes header navigation, sidebar and notification."]]],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/oXmyfmffJVvdbmDoGvuF.png"}]],["ul",["li",["p","BlankLayout: Blank Layout"]],["li",["p","UserLayout: Layout for login and sign-ups."]]],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mXsydBXvLqBVEZLMssEy.png"}]],["h3","Usage"],["p","To manage mappings between routes and pages, we could configure ",["code","config/router.config.js"]," as follows:"],["pre",{lang:"jsx",highlighted:'module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  path<span class="token punctuation">:</span> <span class="token string">\'/\'</span><span class="token punctuation">,</span>\n  component<span class="token punctuation">:</span> <span class="token string">\'../layouts/BasicLayout\'</span><span class="token punctuation">,</span>  <span class="token comment" spellcheck="true">// layout for pages in routes</span>\n  routes<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token comment" spellcheck="true">// dashboard</span>\n    <span class="token punctuation">{</span> path<span class="token punctuation">:</span> <span class="token string">\'/\'</span><span class="token punctuation">,</span> redirect<span class="token punctuation">:</span> <span class="token string">\'/dashboard/analysis\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      path<span class="token punctuation">:</span> <span class="token string">\'/dashboard\'</span><span class="token punctuation">,</span>\n      name<span class="token punctuation">:</span> <span class="token string">\'dashboard\'</span><span class="token punctuation">,</span>\n      icon<span class="token punctuation">:</span> <span class="token string">\'dashboard\'</span><span class="token punctuation">,</span>\n      routes<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span> path<span class="token punctuation">:</span> <span class="token string">\'/dashboard/analysis\'</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">\'analysis\'</span><span class="token punctuation">,</span> component<span class="token punctuation">:</span> <span class="token string">\'./Dashboard/Analysis\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> path<span class="token punctuation">:</span> <span class="token string">\'/dashboard/monitor\'</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">\'monitor\'</span><span class="token punctuation">,</span> component<span class="token punctuation">:</span> <span class="token string">\'./Dashboard/Monitor\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> path<span class="token punctuation">:</span> <span class="token string">\'/dashboard/workplace\'</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">\'workplace\'</span><span class="token punctuation">,</span> component<span class="token punctuation">:</span> <span class="token string">\'./Dashboard/Workplace\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span>'},["code","module.exports = [{\n  path: '/',\n  component: '../layouts/BasicLayout',  // layout for pages in routes\n  routes: [\n    // dashboard\n    { path: '/', redirect: '/dashboard/analysis' },\n    {\n      path: '/dashboard',\n      name: 'dashboard',\n      icon: 'dashboard',\n      routes: [\n        { path: '/dashboard/analysis', name: 'analysis', component: './Dashboard/Analysis' },\n        { path: '/dashboard/monitor', name: 'monitor', component: './Dashboard/Monitor' },\n        { path: '/dashboard/workplace', name: 'workplace', component: './Dashboard/Workplace' },\n      ],\n    },\n  ],\n}]"]],["p","See ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/master/config/router.config.js"},"router.js"]," for more details."],["p","And more router config could be found in\uff1a",["a",{title:null,href:"https://umijs.org/guide/router.html#%E9%85%8D%E7%BD%AE%E5%BC%8F%E8%B7%AF%E7%94%B1"},"Umi router"],"\u3002"],["h4","Router config for Pro"],["p","We extend some configuration for Ant Design Pro's nav menu and authority."],["pre",{lang:null,highlighted:'{\n  name<span class="token punctuation">:</span> <span class="token string">\'dashboard\'</span><span class="token punctuation">,</span>\n  icon<span class="token punctuation">:</span> <span class="token string">\'dashboard\'</span><span class="token punctuation">,</span>\n  hideInMenu<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  hideChildrenInMenu<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  hideInBreadcrumb<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  authority<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'admin\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n}'},["code","{\n  name: 'dashboard',\n  icon: 'dashboard',\n  hideInMenu: true,\n  hideChildrenInMenu: true,\n  hideInBreadcrumb: true,\n  authority: ['admin'],\n}"]],["ul",["li",["p",["code","name"],": display name in menu and breadcrumb. Note that it is the key of locales data, you can change display text in  ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/v2/src/locales/en-US.js"},"/src/locales/en-US.js"],"."]],["li",["p",["code","icon"],": icon type of menu item."]],["li",["p",["code","hideInMenu"],": whether hide itself in menu, default ",["code","false"],"\u3002"]],["li",["p",["code","hideChildrenInMenu"],": whether hide it's children in menu, default ",["code","false"],"."]],["li",["p",["code","hideInBreadcrumb"],": whether hide itself in breadcrumb, default ",["code","false"],"."]],["li",["p",["code","authority"],": authority key, see more in ",["a",{title:null,href:"/docs/authority-management"},"Authority Management"],"\u3002"]]],["h2","Ant Design Components for layout"],["p","Ant Design currently provides two components for layout: ",["a",{title:null,href:"http://ant.design/components/layout/"},"Layout"]," and ",["a",{title:null,href:"http://ant.design/components/grid/"},"Grid"],"."],["h2","Grid Component"],["p","Grid layout is widely used, one of its major benefits is responsiveness."],["p","Grid Component provided by Ant Design is tremendously powerful. you can set span, responsive columns, and optional ",["code","flex"]," layout. It covers a majority of use-cases: See ",["a",{title:null,href:"http://ant.design/components/grid/"},"Grid"]," for details."],["h2","Layout Component"],["p","If you need more structured layout components, then ",["a",{title:null,href:"http://ant.design/components/layout/"},"Layout"]," is your best option. You only need to fill in the blanks to build professional layout. See ",["a",{title:null,href:"http://ant.design/components/layout/"},"Layout"]," for details."],["h2","Building layout components for specific use cases."],["p","Under most cases, we will build more specific components from the above ones, that includes navigation, sidebar, notification, titles etc., An example would be ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/master/src/layouts/BasicLayout.js"},"BasicLayout"]," from Ant Design Pro."],["p","We put layout components inside ",["code","layouts"],", parrallel to ",["code","pages"]," and ",["code","components"],". It is worth noting that layout components has no fundamental difference from other components, just that it deals with layout."],["blockquote",["p","Beside components provided by Ant Design React, you could try layout components from ",["a",{title:null,href:"https://ant.design/docs/react/recommendation-cn"},"communication recommendation"],"."]]],meta:{order:3,title:"Layout",type:"Introduction",filename:"docs/layout.en-US.md"},description:["section",["p","Layout is the outermost structure for a project, usually consists of navigation, footer, sidebar, notification and content. There are also a lot of different layouts within a page."]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Layout-in-Ant-Design-Pro",title:"Layout in Ant Design Pro"},"Layout in Ant Design Pro"]],["li",["a",{className:"bisheng-toc-h2",href:"#Ant-Design-Components-for-layout",title:"Ant Design Components for layout"},"Ant Design Components for layout"]],["li",["a",{className:"bisheng-toc-h2",href:"#Grid-Component",title:"Grid Component"},"Grid Component"]],["li",["a",{className:"bisheng-toc-h2",href:"#Layout-Component",title:"Layout Component"},"Layout Component"]],["li",["a",{className:"bisheng-toc-h2",href:"#Building-layout-components-for-specific-use-cases.",title:"Building layout components for specific use cases."},"Building layout components for specific use cases."]]]}}});