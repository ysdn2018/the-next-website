webpackJsonp([58053205068166],{743:function(A,e){A.exports={data:{markdownRemark:{headings:[{value:"Summary",depth:2},{value:"Problem",depth:2},{value:"Process",depth:2},{value:"Solution",depth:2}],html:'<h2>Summary</h2>\n<p>With the average Canadian now paying double for energy than they did 10 years ago, PWR SMRT provides a simply designed smart device and mobile application to help users track exactly where their energy is being used. </p>\n<h2>Problem</h2>\n<p>The price of energy is on the rise and the strain is being felt across Canada. The average Canadian now pays double for energy than they did 10 years ago. In 2006 the average Canadian household paid $40.03 per month for electricity usage. In 2016 the average cost has risen to $83.18 per month. While it is often suggested that people use electric appliances on off-peak hours even these prices have risen quite significantly over the past 10 years. Off-peak pricing has gone from 3.5 to 8.7 cents per kilowatt hour, an increase of 150 percent. Mid-peak pricing went from 7.1 to 13.2 cents per kilowatt hour, and increase of 85%, and on-peak pricing has gone from 10.5 to 18.0 cents per kilowatt hour, and increase of 70%. Now more than ever Canadians are interested in seeing where their energy is being used, and where their money is going. This products aims to help with this by allowing users to instantly see their usage as soon as a device it turned on.</p>\n<h2>Process</h2>\n<p>This project started with extensive research. Understanding what the problem is, who it affects and in what ways it affects them allows for the design to be better suited for the audience it meets. For this project in particular raw data was observed from Statistics Canada and Toronto Hydro. From here benchmarking began on existing applications that worked in a similar manner to the application being designed. From benchmarking it became clear that existing applications, while they apparently did what was intended, were not user friendly and their interfaces lacked easy navigation. After benchmarking, different forms of data visualization were compiled to have a starting point for how the data could be represented.</p>\n<h2>Solution</h2>\n<p>This product is a monitoring device of energy usage in your home. The smart device attaches to the home’s circuit board and tracks all instances of electricity being used as well as “phantom energy” to help the users locate where they use energy and how they can lower their hydro bills. The companion application tracks the overall energy use of the house, the use of each major appliance, location in the house that uses the most energy and the cost. The application achieves its goals by providing a unique visualization that allows users to see where most of their energy consumption is coming from without overwhelming them with too many numbers. </p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.64999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGQAAAQUAAAAAAAAAAAAAAAAAAAECAwQF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB047KDwD/xAAaEAABBQEAAAAAAAAAAAAAAAABAAIDEBES/9oACAEBAAEFApe8lc8URqLQa//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABsQAAICAwEAAAAAAAAAAAAAAAECEHEAESEi/9oACAEBAAY/AvBUXi6ZRYnoBuP/xAAcEAACAQUBAAAAAAAAAAAAAAABESEAEDFRYYH/2gAIAQEAAT8hhdhXWTcJYWeWBkT4VSOM0dv/2gAMAwEAAgADAAAAEPsP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHRABAAICAgMAAAAAAAAAAAAAAREhABAxQVGRsf/aAAgBAQABPxBF3BZrKqiMBldFijpwaNAMeT4y2KIEEe9f/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Main dashboard of PWR SMRT app."\n        title=""\n        src="/static/pwrsmrt_p1-5c2c5e9afdfcefae7f0df5548005b311-755ae.jpg"\n        srcset="/static/pwrsmrt_p1-5c2c5e9afdfcefae7f0df5548005b311-f07fc.jpg 125w,\n/static/pwrsmrt_p1-5c2c5e9afdfcefae7f0df5548005b311-9d06f.jpg 250w,\n/static/pwrsmrt_p1-5c2c5e9afdfcefae7f0df5548005b311-755ae.jpg 500w,\n/static/pwrsmrt_p1-5c2c5e9afdfcefae7f0df5548005b311-63ca3.jpg 750w,\n/static/pwrsmrt_p1-5c2c5e9afdfcefae7f0df5548005b311-9b9a3.jpg 1000w,\n/static/pwrsmrt_p1-5c2c5e9afdfcefae7f0df5548005b311-6e031.jpg 1500w,\n/static/pwrsmrt_p1-5c2c5e9afdfcefae7f0df5548005b311-2a439.jpg 2000w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  </p>\n<p>The graph works by creating a plot point as soon as an appliance is turned on and then stops when the appliance turns off. The saturation refers to the amount of kilowatts used with magenta representing heavy consumption and blue representing light consumption. Users can use the slider at the bottom to adjust the size of the data over time, and also choose to view the data by day, week, month and year to get a different view of their energy consumption. The icons of each appliance can be selected to view an in depth breakdown of its energy usage and cost. Users will now be able to see where there energy is being used, for how long, and how much energy is consumed. This can encourage them to make minor adjustments within the home to lower costs.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.64999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHpRuLA/8QAGhAAAQUBAAAAAAAAAAAAAAAAAQACEBETA//aAAgBAQABBQLtoGv0gi1Uf//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EAB0QAAAFBQAAAAAAAAAAAAAAAAABAhCBERIjMZH/2gAIAQEABj8Cx0kJtNMk+z63/8QAHRAAAgEEAwAAAAAAAAAAAAAAAREhABAxQVFhgf/aAAgBAQABPyEgDO5qYw7yyT1YGRPhVF1o4s//2gAMAwEAAgADAAAAEOvP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHhABAAEEAgMAAAAAAAAAAAAAAREAECExQVFhcbH/2gAIAQEAAT8QwzeETjxSRSETHI4aN7saAQ7PijchhBIT77t//9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Kitchen view of app PWR SMRT."\n        title=""\n        src="/static/pwrsmrt_p2-b1d0b2cf9f8923fb4b81cb56d8585536-755ae.jpg"\n        srcset="/static/pwrsmrt_p2-b1d0b2cf9f8923fb4b81cb56d8585536-f07fc.jpg 125w,\n/static/pwrsmrt_p2-b1d0b2cf9f8923fb4b81cb56d8585536-9d06f.jpg 250w,\n/static/pwrsmrt_p2-b1d0b2cf9f8923fb4b81cb56d8585536-755ae.jpg 500w,\n/static/pwrsmrt_p2-b1d0b2cf9f8923fb4b81cb56d8585536-63ca3.jpg 750w,\n/static/pwrsmrt_p2-b1d0b2cf9f8923fb4b81cb56d8585536-9b9a3.jpg 1000w,\n/static/pwrsmrt_p2-b1d0b2cf9f8923fb4b81cb56d8585536-6e031.jpg 1500w,\n/static/pwrsmrt_p2-b1d0b2cf9f8923fb4b81cb56d8585536-2a439.jpg 2000w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Users can iterate through the different rooms in their home by using the drop down menu, which provides an in depth breakdown of each appliance. By clicking on a data point, users can also see how long the device was on, and how much energy and money it has cost. </p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.64999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAdbXYoAf/8QAGRAAAwEBAQAAAAAAAAAAAAAAAQIDEAAE/9oACAEBAAEFAvVZoijuMpJK8UBz/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHhAAAQQBBQAAAAAAAAAAAAAAAQACEBESISJBUWH/2gAIAQEABj8CbjWvaZiWixyI3i6Q8j//xAAZEAEAAgMAAAAAAAAAAAAAAAABESEAEDH/2gAIAQEAAT8hajJMwwZWE2aACFxeWQ4gvX//2gAMAwEAAgADAAAAEE/P/8QAFxEAAwEAAAAAAAAAAAAAAAAAARARQf/aAAgBAwEBPxATV//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABoQAQEAAwEBAAAAAAAAAAAAAAERACExEEH/2gAIAQEAAT8QeVA2OA4b4AU2ZyOjefcvaiiiXvMPCSSIh5//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Room View of app PWR SMRT."\n        title=""\n        src="/static/pwrsmrt_p3-e16d8d12858a3836968279bc595b8b93-755ae.jpg"\n        srcset="/static/pwrsmrt_p3-e16d8d12858a3836968279bc595b8b93-f07fc.jpg 125w,\n/static/pwrsmrt_p3-e16d8d12858a3836968279bc595b8b93-9d06f.jpg 250w,\n/static/pwrsmrt_p3-e16d8d12858a3836968279bc595b8b93-755ae.jpg 500w,\n/static/pwrsmrt_p3-e16d8d12858a3836968279bc595b8b93-63ca3.jpg 750w,\n/static/pwrsmrt_p3-e16d8d12858a3836968279bc595b8b93-9b9a3.jpg 1000w,\n/static/pwrsmrt_p3-e16d8d12858a3836968279bc595b8b93-6e031.jpg 1500w,\n/static/pwrsmrt_p3-e16d8d12858a3836968279bc595b8b93-2a439.jpg 2000w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Users can also get an overview of their entire home, and which rooms are problem areas by using Room View found in the navigation bar. The data is displayed as a tree map for a quick understanding of the data.</p>',frontmatter:{title:"PWR SMRT",graduate:"Meaghan Gray",category:"UI/UX",category2:null,category3:null,image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAB/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgED/9oADAMBAAIQAxAAAAFOMw7imUf/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQITAxH/2gAIAQEAAQUCV9aWl+62LnKMYMYP/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAIBEgMxUf/aAAgBAwEBPwGGW2i+Ph//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8BZX//xAAcEAACAQUBAAAAAAAAAAAAAAAAARECEBIxceH/2gAIAQEABj8CeNSXURJs9v8A/8QAGxABAAICAwAAAAAAAAAAAAAAAQARYZEhMfD/2gAIAQEAAT8h4EbLEVTZiehOluFG0dzE7n//2gAMAwEAAgADAAAAEEjv/8QAGREBAAIDAAAAAAAAAAAAAAAAAQARMXHw/9oACAEDAQE/ELJw0TgE/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERYf/aAAgBAgEBPxCOGh//xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhYTGRwfH/2gAIAQEAAT8QuQKq5Bqo/kWlCC6mv0ltU3zSPYiSVtzn1k//2Q==",aspectRatio:1.5,src:"/static/pwrsmrt_main-cadb3569b9835f3a5d440d67384a7a01-a7a62.jpg",srcSet:"/static/pwrsmrt_main-cadb3569b9835f3a5d440d67384a7a01-5a1a9.jpg 375w,\n/static/pwrsmrt_main-cadb3569b9835f3a5d440d67384a7a01-0908c.jpg 750w,\n/static/pwrsmrt_main-cadb3569b9835f3a5d440d67384a7a01-a7a62.jpg 1500w,\n/static/pwrsmrt_main-cadb3569b9835f3a5d440d67384a7a01-83d7d.jpg 2000w",sizes:"(max-width: 1500px) 100vw, 1500px"}}}}}},pathContext:{slug:"/work/pwr-smrt/",name:"/PWR SMRT/"}}}});
//# sourceMappingURL=path---work-pwr-smrt-6a7e89306ebbfbec59ed.js.map