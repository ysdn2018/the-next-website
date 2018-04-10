webpackJsonp([0x6086a801279c],{648:function(A,a){A.exports={data:{markdownRemark:{headings:[{value:"Creating generative music through simple interaction.",depth:1},{value:"The Device",depth:2},{value:"Visual System",depth:2},{value:"Project Overview / Demo",depth:2},{value:"Live Performance",depth:2}],html:'<h1>Creating generative music through simple interaction.</h1>\n<p>As the first in the series of Audio Visual Systems, AVS001 is an installation that allows for the generation of randomized music. Created using Processing, Arduino and Ableton Live, the project uses physical computing to interact with an audio visual interface in order to create/perform live audio visual music sequences.</p>\n<p>The concept behind this project arose from the idea of creating computer generated music. I wanted to eliminate the choice factor of music making in order to make the process both accessible and randomized. By allowing the computer to algorithmically determine how the notes are played, the user is able to experience beautiful mistakes which might not have been reached organically.</p>\n<h2>The Device</h2>\n<p>I wanted to use a physical interface that shied away from common musical interfaces as a way to make the project more accessible and simple to use. Using standard Arduino components, I designed a physical interface which relied on basic, recognizable interactions such as pushing a button or turning a knob. Placed within a custom 3D printed case, the physical device helps to create a connection between the user and the visual interface.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 53.82545174932718%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA6UlEQVQoz5VSy24DIQzk/z+u6iXqMdUqp2qXdMGAMbDpLJaivDZNfLBsyTP2DJjTRiw9Tk/DPIS11kqPWut7YAAAUx7UIgKuTXDOOcaIORTTNI3jqPvX3M9vtdqQWerlXcgGDTCgB9h7b62d5xlDraWcvzp+jY/vcfg5Fsl6C5YBb9CEEJgZjWYiijFROLrpc5d2gwwg4ODIO+e8Gom1yFea1SHcC24CY1j2dn/4PQiLJ0rMKSVVhwUobg0DpTrU5TATc2BMn6X+4/bZcABKLeBCIUXun808+SR6IYzoWpaX3vlGxdYjI/4A5oCJVu7zs/0AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Physical Interface"\n        title=""\n        src="/static/avs-diagram-1-a7de4566ddc2e1265f32141eaaff1322-53128.png"\n        srcset="/static/avs-diagram-1-a7de4566ddc2e1265f32141eaaff1322-7266b.png 375w,\n/static/avs-diagram-1-a7de4566ddc2e1265f32141eaaff1322-0a3c1.png 750w,\n/static/avs-diagram-1-a7de4566ddc2e1265f32141eaaff1322-53128.png 1500w,\n/static/avs-diagram-1-a7de4566ddc2e1265f32141eaaff1322-91640.png 2250w,\n/static/avs-diagram-1-a7de4566ddc2e1265f32141eaaff1322-d221f.png 2601w"\n        sizes="(max-width: 1500px) 100vw, 1500px"\n      />\n    </span>\n  </span>\n  </p>\n<h2>Visual System</h2>\n<p>The visual system I designed originated from the idea of Pong paddles. I found this almost juvenile concept to provided me with a limited set of input variables while still allowing for some sort of user input. Inspired by the concept of musical rounds and the works of composer Steve Reich, I then created a musical system that would continuously develop over time, becoming more and more complex as the user progresses in the performance.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAR0lEQVQoz2P4SAFgoILmDx8+wIU+gAEyF1nD+/fvUTQDpd++ffvp0yeI0DswgKsASiHrR+ZSrJkiZ6MBuBNGAwwLl2HAkicAtGzdObGD9UgAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Initial State"\n        title=""\n        src="/static/avs001-screen1-358217db6d67bc2622345ccd23ae80ae-53128.png"\n        srcset="/static/avs001-screen1-358217db6d67bc2622345ccd23ae80ae-7266b.png 375w,\n/static/avs001-screen1-358217db6d67bc2622345ccd23ae80ae-0a3c1.png 750w,\n/static/avs001-screen1-358217db6d67bc2622345ccd23ae80ae-53128.png 1500w,\n/static/avs001-screen1-358217db6d67bc2622345ccd23ae80ae-91640.png 2250w,\n/static/avs001-screen1-358217db6d67bc2622345ccd23ae80ae-ea751.png 2880w"\n        sizes="(max-width: 1500px) 100vw, 1500px"\n      />\n    </span>\n  </span>\n  </p>\n<p>The program starts with a basic paddle state and is not initialized until the user presses the note trigger button on the interface.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABYlAAAWJQFJUiTwAAAArElEQVQoz62SSw7DIAxEuf8Vk1WQsgkfY1+g0xDAkFK1ar2KGcYenmLSD2U+usX8hZmImhHfzml/VU1uvPdaQ8vnbRIha9naJAIBhyGEGGMzh7NKQIbzkrFBhJclYXTZrNeYIeTY5sxK0qq5eEyQvKGlgB1HKiOH8alvtWqeg53jdc1IcIQHV2B3Ij0wINk23vfKswErhEiF6oFhAzJDeAmsbyfAbp7//Z6TegDgU9yqjDYYnAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Early State"\n        title=""\n        src="/static/avs001-screen2-ad7d0a6e8b8bca09c2eafc1755d861d7-53128.png"\n        srcset="/static/avs001-screen2-ad7d0a6e8b8bca09c2eafc1755d861d7-7266b.png 375w,\n/static/avs001-screen2-ad7d0a6e8b8bca09c2eafc1755d861d7-0a3c1.png 750w,\n/static/avs001-screen2-ad7d0a6e8b8bca09c2eafc1755d861d7-53128.png 1500w,\n/static/avs001-screen2-ad7d0a6e8b8bca09c2eafc1755d861d7-91640.png 2250w,\n/static/avs001-screen2-ad7d0a6e8b8bca09c2eafc1755d861d7-ea751.png 2880w"\n        sizes="(max-width: 1500px) 100vw, 1500px"\n      />\n    </span>\n  </span>\n  </p>\n<p>The user can then add in a series of balls which triggers different notes when interacting with each paddle.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAo0lEQVQoz7VSyw6DIBDcBZZGSbz4/9/YNPZgWgUnvkCrDTVpMod9zMDuABGFQxjjmcNZd8E/xHmgoLUvy/daEvFF0c0ph0o3llrEPFbAVMpHsbX9xJ7mRFukn9sq1HLXFI92bivORKJZcFA6AQZk3pLjhNcME3pV9Bgt8Z8WIE4v2O98o9bRcxWDbUxkwz88R5J2Vwz79kkwZL55ezGU2PYn8QBZiQRlygQVwgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Final State"\n        title=""\n        src="/static/avs001-screen3-178365aef2414457481a65467e1c737d-53128.png"\n        srcset="/static/avs001-screen3-178365aef2414457481a65467e1c737d-7266b.png 375w,\n/static/avs001-screen3-178365aef2414457481a65467e1c737d-0a3c1.png 750w,\n/static/avs001-screen3-178365aef2414457481a65467e1c737d-53128.png 1500w,\n/static/avs001-screen3-178365aef2414457481a65467e1c737d-91640.png 2250w,\n/static/avs001-screen3-178365aef2414457481a65467e1c737d-ea751.png 2880w"\n        sizes="(max-width: 1500px) 100vw, 1500px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Over time, the patterns become more and more visually and audibly complex, creating a fully immersive composition.</p>\n<h2>Project Overview / Demo</h2>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.25%; position: relative; height: 0; overflow: hidden;margin-bottom: 1.0725rem"\n          >\n            <iframe src="https://player.vimeo.com/video/245748972" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<h2>Live Performance</h2>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.25%; position: relative; height: 0; overflow: hidden;margin-bottom: 1.0725rem"\n          >\n            <iframe src="https://player.vimeo.com/video/245748949" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>',frontmatter:{title:"AVS001",graduate:"Aaron Mohr",category:"Installation",category2:null,category3:null,image:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAQklEQVQoz2NgYPhPARoWmtnY/jMyghArK4LLxATlEtDMwwNSyswMYgC5vLwgLgsLlEtAM9AeZAYal5Y2U+TnkZBIAGDnBHBeGuqzAAAAAElFTkSuQmCC",aspectRatio:1.5,src:"/static/avs001-thumb-f2bcaa9e445a34c2556b7bed26b7aa50-0f681.png",srcSet:"/static/avs001-thumb-f2bcaa9e445a34c2556b7bed26b7aa50-c1674.png 375w,\n/static/avs001-thumb-f2bcaa9e445a34c2556b7bed26b7aa50-34f47.png 750w,\n/static/avs001-thumb-f2bcaa9e445a34c2556b7bed26b7aa50-0f681.png 1500w,\n/static/avs001-thumb-f2bcaa9e445a34c2556b7bed26b7aa50-606ea.png 2250w,\n/static/avs001-thumb-f2bcaa9e445a34c2556b7bed26b7aa50-dd85f.png 2880w",sizes:"(max-width: 1500px) 100vw, 1500px"}}}}},projectsInCategory:{edges:[{node:{fields:{slug:"/work/close-strangers-closed-friends/"},frontmatter:{title:"Close Strangers / Closed Friends",graduate:"Bethany Moy",image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIBAwX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHw6yzk0ZQSD//EABcQAQADAAAAAAAAAAAAAAAAAAEAECD/2gAIAQEAAQUCsi5//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAFBABAAAAAAAAAAAAAAAAAAAAMP/aAAgBAQAGPwIf/8QAGRAAAgMBAAAAAAAAAAAAAAAAARAAESFB/9oACAEBAAE/IRKxruIQlf/aAAwDAQACAAMAAAAQE8AA/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAGhABAQEBAAMAAAAAAAAAAAAAAREAIRBxgf/aAAgBAQABPxAXMpS/cnecyL3UVB6yly8F3//Z",aspectRatio:1.5,src:"/static/cscf_thumbnail-4a234d097dfb9a32ef7952b9abe345e6-73620.jpg",srcSet:"/static/cscf_thumbnail-4a234d097dfb9a32ef7952b9abe345e6-5fe7a.jpg 150w,\n/static/cscf_thumbnail-4a234d097dfb9a32ef7952b9abe345e6-a5834.jpg 300w,\n/static/cscf_thumbnail-4a234d097dfb9a32ef7952b9abe345e6-73620.jpg 600w,\n/static/cscf_thumbnail-4a234d097dfb9a32ef7952b9abe345e6-02892.jpg 900w,\n/static/cscf_thumbnail-4a234d097dfb9a32ef7952b9abe345e6-7726d.jpg 1200w,\n/static/cscf_thumbnail-4a234d097dfb9a32ef7952b9abe345e6-7460d.jpg 1800w,\n/static/cscf_thumbnail-4a234d097dfb9a32ef7952b9abe345e6-de380.jpg 2000w",sizes:"(max-width: 600px) 100vw, 600px"}}}}}},{node:{fields:{slug:"/work/deliberate-practice/"},frontmatter:{title:"Deliberate Practice",graduate:"Hannah Park",image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIBAwQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAenbLphGKn//xAAaEAABBQEAAAAAAAAAAAAAAAACAAEQEjEh/9oACAEBAAEFAhDlE2Dkf//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABoQAAICAwAAAAAAAAAAAAAAAAARATEQIUH/2gAIAQEAAT8hiTYi6QlHZRn/2gAMAwEAAgADAAAAEIsf/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8Qh//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/EFn/xAAbEAACAgMBAAAAAAAAAAAAAAAAARExIVFhof/aAAgBAQABPxC0K0OUpk6ejI8wy+ngG6JP/9k=",aspectRatio:1.5,src:"/static/dp3-3eb455f191ca877de7ec2925d748e616-73620.jpg",srcSet:"/static/dp3-3eb455f191ca877de7ec2925d748e616-5fe7a.jpg 150w,\n/static/dp3-3eb455f191ca877de7ec2925d748e616-a5834.jpg 300w,\n/static/dp3-3eb455f191ca877de7ec2925d748e616-73620.jpg 600w,\n/static/dp3-3eb455f191ca877de7ec2925d748e616-02892.jpg 900w,\n/static/dp3-3eb455f191ca877de7ec2925d748e616-7726d.jpg 1200w,\n/static/dp3-3eb455f191ca877de7ec2925d748e616-7460d.jpg 1800w,\n/static/dp3-3eb455f191ca877de7ec2925d748e616-de380.jpg 2000w",sizes:"(max-width: 600px) 100vw, 600px"}}}}}},{node:{fields:{slug:"/work/moods/"},frontmatter:{title:"Moods",graduate:"Sarah Keast",image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAAB41pxuAi//8QAGRAAAgMBAAAAAAAAAAAAAAAAAAECESEx/9oACAEBAAEFAkrJ4WQ63qP/xAAWEQADAAAAAAAAAAAAAAAAAAABEDH/2gAIAQMBAT8BFX//xAAYEQACAwAAAAAAAAAAAAAAAAAAEQECIf/aAAgBAgEBPwGcoxn/xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAZEAEAAwEBAAAAAAAAAAAAAAABACExEWH/2gAIAQEAAT8hRHNYeb2FJp4RmzMz/9oADAMBAAIAAwAAABDPL//EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAgBAwEBPxCtI//EABcRAQEBAQAAAAAAAAAAAAAAAAEAEVH/2gAIAQIBAT8QJ1Nu/8QAGhABAQEBAQEBAAAAAAAAAAAAAREAITFRsf/aAAgBAQABPxAx6WSagUXA/dwblBak75mwyHlwvf3f/9k=",aspectRatio:1.5,src:"/static/keasts-f40cc809073d729ab54769445b54ed06-73620.jpg",srcSet:"/static/keasts-f40cc809073d729ab54769445b54ed06-5fe7a.jpg 150w,\n/static/keasts-f40cc809073d729ab54769445b54ed06-a5834.jpg 300w,\n/static/keasts-f40cc809073d729ab54769445b54ed06-73620.jpg 600w,\n/static/keasts-f40cc809073d729ab54769445b54ed06-02892.jpg 900w,\n/static/keasts-f40cc809073d729ab54769445b54ed06-7726d.jpg 1200w,\n/static/keasts-f40cc809073d729ab54769445b54ed06-7460d.jpg 1800w,\n/static/keasts-f40cc809073d729ab54769445b54ed06-5694e.jpg 6000w",sizes:"(max-width: 600px) 100vw, 600px"}}}}}}]},projectsInSecondCategory:null,projectByStudent:{edges:[{node:{fields:{slug:"/work/demo/"},frontmatter:{title:"Demo",graduate:"Aaron Mohr",image:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAADQklEQVQ4y2XTf0zUdRzH8e/WH238OpILOTzuN4fccRyRg0raBcodx+kGrU7B3Ej5odj9RDi4VGr+UX/U/IEO3LK5m6Tmj1D+0Izpmm3NavVHulppoFu5uTZLmXLB+ex9YqPWH++9v9tn38de788Phe8qSU044YtKfh+3kOhogb2fMLdrVPpR5t5N4G1qQB1aiT7cQFG4EV1oOYsqImSbIKfkITnWlHTIznsN5c6YgZ8Ten49ZuLyiJoP2vzz4O6P/gcawl50YZ/ANWTaulEW3UEpuI2yOF33eDLHj2IsP43amCDfeIwnCoaJNwZg+Diz70vCPUcWwOBKzFEfxqiX/C1uXF47I9FqhqLLGAqVcWCrk2r7EpTcMsgshiwppTBJn3c77B9l5r3DpHaPknzn0L8SNgjYgKrTzeYuG3xTAZelvrTDt2WsdxeiZFgENN9FZZ1F0dxi++q34MNx2DcGI9J3nWRVcyPqgIBBL0ZBn+rwsOH1UvjUxoNzZTw464AL5fhrBcy0psH7ZBenUIr+YPUzrRxd38JBfyuH1rZysMnPs+4qFve7KerzoB/woAq62dgu4ISd2c8czJ6XMT93sLYunVBGVZXcJ7dkDkU7zRvPu7gb0XKjU8tv7WputuVRv8xKYW095to6qRWoq+pof3UpXBRwokJQ53/BdEKVVcAl0wy8WAv9WojIQo+Vv8L5BGwb2GqeJGb8nh7NFTpUV4n7mgSxMHfeKQkdC+D8yPfIKU5Kwj+J1bwEvYXMBE08DJuZDuSxxdZFWHebmGmSAcsNugtuEl/1CqkLZpLnnMzIPnKxnDXpPcwQMMMsF1S6IsFiNSsE1JAMy2lFLPNgaQch7S16DdcE/YVNT08y2PQyfCU/XpJxLwn4tYN19QJmGc6QrTtMruGIXM4EseWVAmofg8WPwc5HYMx0/REY0EzR9lwzp3bqOTVo5+TgUsZ3luJyalAcPR6sXS70G6vJaqkm7tHL3hlIBg2QHjm4kDBmvk6/eYpuzU8Eqvr44e29XN02wpW+PVx7cxif4wV5Kdua0UUaMfX6yNrsJe6VBxoVMGQUcGHk8D8jG6fYVPAjO1w74IA8z30nYOhj+R5jnZz+31FTWbtsP7mRAAAAAElFTkSuQmCC",aspectRatio:1.5,src:"/static/demo-header-eaa6104dad972c484771ac52f7252609-19980.png",srcSet:"/static/demo-header-eaa6104dad972c484771ac52f7252609-47167.png 150w,\n/static/demo-header-eaa6104dad972c484771ac52f7252609-1b0eb.png 300w,\n/static/demo-header-eaa6104dad972c484771ac52f7252609-19980.png 600w,\n/static/demo-header-eaa6104dad972c484771ac52f7252609-f2c6a.png 900w,\n/static/demo-header-eaa6104dad972c484771ac52f7252609-6b278.png 1200w,\n/static/demo-header-eaa6104dad972c484771ac52f7252609-b2af2.png 1800w,\n/static/demo-header-eaa6104dad972c484771ac52f7252609-adae1.png 2880w",sizes:"(max-width: 600px) 100vw, 600px"}}}}}},{node:{fields:{slug:"/work/ora/"},frontmatter:{title:"ORA",graduate:"Aaron Mohr",image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwACBP/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAAB41BMuI5v/8QAGxAAAQQDAAAAAAAAAAAAAAAAAwACESEQEjH/2gAIAQEAAQUCqSUzXBuyv//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABgQAAIDAAAAAAAAAAAAAAAAAAAQARGB/9oACAEBAAY/AilpC//EABoQAAMBAAMAAAAAAAAAAAAAAAABESExQaH/2gAIAQEAAT8huiVEhCFa6FwPKVXp/9oADAMBAAIAAwAAABCMP//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/ECf/xAAWEQEBAQAAAAAAAAAAAAAAAAABECH/2gAIAQIBAT8QTZ//xAAbEAEAAwADAQAAAAAAAAAAAAABABEhMUFRYf/aAAgBAQABPxCjonAzNtDffkMU6bdx5PBUSFbttfszOA0T/9k=",aspectRatio:1.5,src:"/static/ora-thumb-2-54cf4acff1f8c4e6b582b2f72e127c55-73620.jpg",srcSet:"/static/ora-thumb-2-54cf4acff1f8c4e6b582b2f72e127c55-5fe7a.jpg 150w,\n/static/ora-thumb-2-54cf4acff1f8c4e6b582b2f72e127c55-a5834.jpg 300w,\n/static/ora-thumb-2-54cf4acff1f8c4e6b582b2f72e127c55-73620.jpg 600w,\n/static/ora-thumb-2-54cf4acff1f8c4e6b582b2f72e127c55-02892.jpg 900w,\n/static/ora-thumb-2-54cf4acff1f8c4e6b582b2f72e127c55-7726d.jpg 1200w,\n/static/ora-thumb-2-54cf4acff1f8c4e6b582b2f72e127c55-7460d.jpg 1800w,\n/static/ora-thumb-2-54cf4acff1f8c4e6b582b2f72e127c55-9ddfa.jpg 1920w",sizes:"(max-width: 600px) 100vw, 600px"}}}}}}]}},pathContext:{slug:"/work/avs001/",name:"/AVS001/",title:"AVS001",graduateName:"Aaron Mohr",graduate:"/Aaron Mohr/",category:"/Installation/",category2:"/null/"}}}});
//# sourceMappingURL=path---work-avs-001-a2b3da2e72394b1b495c.js.map