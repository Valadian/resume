function BuildDate(desc){
    if (desc == null){
        return null
    }
    if (desc == "Present"){
        return new Date()
    }
    parts = desc.split(" ")
    month_desc = {
        Early:0,
        January: 0,
        February: 1,
        March: 2,
        April: 3,
        May: 4,
        Spring:4,
        June: 5,
        Summer:6,
        July: 6,
        Late:7,
        August: 7,
        Fall:8,
        September:8,
        October: 9,
        November: 10,
        December: 11
    }
    month = month_desc[parts[0]]
    year = +parts[1]
    return new Date(year, month, 1)
}
function BuildEntry(def){
    def.start_date = BuildDate(def.start)
    def.stop_date = BuildDate(def.stop)
    def.years = null
    def.months = null
    def.verbose = ko.observable(false)
    if (def['image'] == undefined){
        def.image = null
    }
    if (def['classes'] == undefined){
        def.classes = ''
    }
    if (def['stop'] == undefined){
        def.stop = null
    }
    if (def['timespan'] == undefined){
        def.timespan = null
    }
    if (def['location'] == undefined){
        def.location = null
    }
    if (def['text'] == undefined){
        def.text = []
    }
    else if (!Array.isArray(def['text'])){
        def.text = [def.text]
    }
    if (def['extended'] == undefined){
        def.extended = []
    }
    else if (!Array.isArray(def['extended'])){
        def.extended = [def.extended]
    }
    if (def['labels'] == undefined){
        def.labels = []
    }
    if (def.stop_date){
        stop_months = def.stop_date.getFullYear()*12+def.stop_date.getMonth()
        start_months = def.start_date.getFullYear()*12+def.start_date.getMonth()
        month_delta = stop_months - start_months
        def.years = Math.floor(month_delta/12)
        def.months = month_delta - def.years*12
        def.timespan = ""
        if (def.years>0){
            def.timespan = def.years+" year"
            if (def.years>1){
                def.timespan+="s"
            }
        }
        if (def.years>0 && def.months>0){
            def.timespan += ", "
        }
        if (def.months>0){
            def.timespan += def.months+" month"
            if (def.months>1){
                def.timespan+="s"
            }
        }
    }
    return def
}
function ResumeModel(){
    koModel = this
    this.education = ko.observableArray([
        BuildEntry({
            image:'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Embry-Riddle_Aeronautical_University_seal.svg/800px-Embry-Riddle_Aeronautical_University_seal.svg.png',
            start:'Fall 2004',
            stop:'Spring 2009',
            title:'Embry-Riddle Aeronautical University',
            location:'Daytona Beach, FL',
            text:'BS/MS of Software Engineering - April 2009',
            classes:'entry-company'})
    ])
    this.employment = ko.observableArray([
        BuildEntry({
            image:'https://metecs.com/wp-content/uploads/2019/03/METECS_Logo-web-mobile-small01.png',
            start:'Summer 2016',
            stop:'Present',
            title:'Metecs',
            location:'Houston, TX',
            text:'Senior Software & Simulation Engineer',
            classes:'entry-company'}),
        BuildEntry({
            image:'https://www.boeing.com/assets/images/logo.png',
            start:'Summer 2007',
            stop:'Summer 2016',
            title:'Boeing',
            location:'Houston, TX',
            text:['Summer 2007 Loadable Software Intern <br> <span class="text-muted">Boeing Commercial Airplanes</span> ',
                  'Summer 2008 Support Systems Intern <br> <span class="text-muted">Boeing Integrated Defense Systems</span> ',
                  '2009 Support Systems/Lab Engineering <br> <span class="text-muted">Boeing Defense, Space & Security</span> '],
            classes:'entry-company'}),
        // BuildEntry({
        //     image:'https://www.boeing.com/assets/images/logo.png',
        //     start:'Summer 2009',
        //     stop:'Summer 2016',
        //     title:'Boeing Defense, Space & Security',
        //     location:'Houston, TX',
        //     text:'Support Systems/Lab Engineering',
        //     classes:'entry-company'}),
        // BuildEntry({
        //     image:'https://www.boeing.com/assets/images/logo.png',
        //     start:'Summer 2008',
        //     timespan: '3 months',
        //     title:'Boeing Integrated Defense Systems',
        //     location:'Houston, TX',
        //     text: 'Support Systems Intern',
        //     classes:'entry-company'}),
        // BuildEntry({
        //     image:'https://www.boeing.com/assets/images/logo.png',
        //     start:'Summer 2007',
        //     timespan: '3 months',
        //     title:'Boeing Commercial Airplanes',
        //     location:'Everett, WA',
        //     text: 'Loadable Software Intern',
        //     classes:'entry-company'}),
        BuildEntry({
            image:'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Embry-Riddle_Aeronautical_University_seal.svg/800px-Embry-Riddle_Aeronautical_University_seal.svg.png',
            start:'Spring 2005',
            stop:'Fall 2006',
            title:'Embry-Riddle Info/Tech Admin. Systems',
            location:'Daytona Beach, FL',
            text: 'Assistant Intranet Developer - Web Design',
            classes:'entry-company'}),
    ])
    this.experience = ko.observableArray([
        BuildEntry({
            start:'March 2022',
            title:'Johnson Space Center Individual Innovation Award',
            text:'For Machine Learning Contributions to ISS Logistics Program',
            extended:'Recognized for my Individual contributions as the chief Machine Learning architect for the RFID Logistics program on the International Space Station. Models are leveraged in real-time operations with Astronauts while performing cargo related duties to locate unexpected missing items required for cargo manifest and scientific experiments.',
            labels: ['Accomplishments','Technology:Machine Learning']}),
        BuildEntry({
            start:'March 2022',
            title:'Software Process Lead - Commercial Projects',
            text:'Pulled into unaffiliated projects by company President to critique and define necessary software processes to build quality software for commercial customer',
            labels: ['Process Improvement']}),
        // BuildEntry({
        //     start:'Late 2021',
        //     title:'Implementation of real-time GPS orbital model leveraging General/Special Relativity',
        //     text:'',
        //     extended: 'Needed to build a real-time GPS satellite simulation leveraging minimal external library dependencies for commercial agriculture vehicle simulation. Implemented orbital propagation model for real world observed parameters, and implemented Special and General Relativity Time dilation effects to correctly calculated frequency offsets required for GPS communication',
        //     labels: ['Language:Python','Language:Go','Simulation']}),
        BuildEntry({
            start:'Early 2021',
            stop:'Present',
            title:'Successful Homing test of Autonomous Astrobee robot on ISS',
            text:'Autonomous Algorithm controlling Astrobee Robot onboard International Space Station tracked RFID tag',
            extended:['Algorithm and autonomous control code that I had written in 2019 had its maiden flight on the International Space Station. Experiment was set up by Astronaut Shannon Walker, and successfully met all test objectives. Results of that test was utilized to improve algorithm leading to a highly successful test in early 2022 culminating to robot navigating and touching target across a module. More details below. ',
                      '<br><a target="_blank" href="https://metecs.com/astrobee-flights/">More Info here</a>'],
            labels: ['Current','Accomplishments','Technology:Robotic Operating System','Language:C++','Language:Java']}),
        BuildEntry({
            start:'Early 2021',
            title:'<a target="_blank" href="https://ieeexplore.ieee.org/document/9444373">Intra-Spacecraft RFID Localization</a>',
            text:'IEEE Conference Publication',
            extended:['J. Simonoff, J. Berger, A. Abdullali, O. Lerner, L. Rodriguez, P. Fink Ph.D',
                  '“Intra-Spacecraft RFID Localization”',
                  'Presented to IEEE International Conference on RFID, 2021<br>',
                  'Supporting Technical writer, and chief researcher of Machine Learning algorithms applied to RFID localization in highly complex and reflective multipath environments. This paper is the basis of the localization capabilities utilized for finding missing items on the International Space Station, and confirming manifest loading before visiting vehicles depart.'],
            labels: ['Publication','Technology:Machine Learning']}),
        BuildEntry({
            start:'Spring 2021',
            stop:'Summer 2021',
            title:'COVID Contact Tracing Automation Tool',
            text:['Replace email based contact tracing process, reducing management burden by > 90%'],
            extended: 'Management overhead is overwhelming NASA Civil Servants while meeting agency requirements to track and approve who goes on site at Johnson Space Center. Existing method is done through email correspondence. On request of NASA ER7 (engineering & simulation) branch management, built a tool that not only makes it faster for users to make requests to go on-site, but also centralizes the approval process while providing the  contextual information needed to approve those requests.',
            labels:['Language:Javascript','Process Improvement','Rapid Prototyping','UI Design']}),
        BuildEntry({
            start:'Early 2021',
            stop:'Feb 2021',
            title:'Payroll Process Automation',
            text:'Lead R&D effort optimizing company payroll processes to scale with company growth',
            extended:'Company growth over the last 5 years outgrew existing payroll processes. Originated, proposed, and led an effort to analyze payroll processes, identify areas where software automation and data centralization could be implemented to reduce touch labor.',
            labels:['Language:Python','Process Improvement','Leadership','UI Design','Proposals']}),
        BuildEntry({
            start:'Late 2020',
            stop:'Present',
            title:'Contract Task Lead - NASA Lunar Gateway ',
            text:'Managing 5 Senior, and 3-4 mid career engineers supporting Lunar Gateway Integration Tasks',
            extended:['Contract Task Order lead and manager of $1-5 million/yr Task Order. Ensured team largely consisting of Sr. Engineers were meeting Contractual Obligations defined in Task Order, led daily tagups, managed schedules, task prioritization, and ensured technical risks were identified and mitigated early. Outside of my technical role, I continued being primary User Interface Developer for the Integrated Lunar Gateway Engineering Simulation platform. This task consisted of significant exposure and integration with commercial and international partners from Maxar, Northrop, JAXA, ESA, CSA. Task grew substantially under my leadership, leading it to be separated from the below mentioned Exploration Systems Simulation Task Order.<br>',
                'Managed 9 engineers doing:',
                '• Test Orchestration Development & Integration',
                '• Systems Engineer & Integration (SE&I) for Modeling & Simulation (M&S)',
                '• Project planning support',
                '• Commercial Partner Oversight',
                '• NASA Demonstration support',
                '• Due to large number of interfaces with external teams, requires persistant resolution of technical and interorganizational conflict'],
            labels:['Current','Leadership','Proposals','Team Building','Simulation','UI Design','Conflict Resolution']}),
        BuildEntry({
            start:'Early 2020',
            stop:'Present',
            title:'User Interface and Integration Lead - Lunar Gateway',
            text:'Lead Integrator and User Interface Designer for the Lunar Gateway integrated simulation platform',
            extended:'Working with NASA Lab Managers, Commercial Partners (Maxar, Northrop Grumman), and international partners (JAXA, ESA, CSA) to instrument simulations for use in a common orchestrated lab environment',
            labels:['Language:Javascript','Language:Php','Language:C++','Language:Go','Current','Leadership','Hardware/Software Integration','Simulation','Infrastructure','UI Design']}),
        BuildEntry({
            start:'Early 2020',
            stop:'Late 2020',
            title:'Contract Task Lead - NASA Exploration Systems Simulation ',
            text:'Managing 8 developers performing core simulation development tasks',
            extended:'Contract Task Order lead and manager of 8 member team working on Exploration Systems Simulation and Lunar Gateway simulation. Coordinated communication and monthly reports with our NASA interface. Ensured the team was meeting our contractual obligations. Provided technical expertise in 3d Graphics, Databases, and Web Architectures.',
            labels:['Leadership','Simulation']}),
        BuildEntry({
            start:'Early 2020',
            stop:'Present',
            title:'Chief Architect - REALM Machine Learning and Algorithm Development',
            text:'Random Forest, XGBoost, Feature decomposition, pipeline generation for RFID localization',
            extended:['Led RFID Enabled Autonomous Logistics Management (REALM) Algorithm development as part of our Complex Event Processor (CEP) Toolchain. Was first to utilize machine learning algorithms to solve signal strength to Rack Location classification, leveraged that into a reusable Machine Learning toolchain for our RFID readings database, and brought other developers up to speed to be able to continue and expand the ground work I created. This work is one of <b>the only operational uses of Machine Learning on a daily basis in Mission Control</b> in the direction  of astronaut activities.',
                     'Initial work consisted of using >30 billion RFID reads, integrating with manually entered Inventory Management System (IMS) data, and training a Random Forest to classify Rack (42”x84”) locations. Supported development of continued work building a Image Recognition/CNN Deep Learning engine (extending ResNet50). Develop methods to ensemble the results and present them through a web interface for consumption by Mission Control Center (MCC) Inventory Stowage Officers (ISOs).'],
            labels:['Current','Technology:Machine Learning','Leadership','Language:Python','Technology:Machine Learning']}),
        BuildEntry({
            start:'Late 2019',
            title:'Recipient of Metecs’s “Empty Envelope” award',
            text:'Highest honor for cross-disciplinary technical achievement. Only 3 recipients in 15 years of the Company.',
            labels:['Accomplishments']}),
        BuildEntry({
            start:'Late 2019',
            stop:'Present',
            title:'Lead Monthly Metecs Board Game Nights',
            text:'Make new employees feel more welcome',
            extended:['Modern Board games are a personal hobby of mine. Led effort to have recurring Board Games nights to make new employees feel more welcome, and help existing employees to become more comfortable and effective at a team.',
            'Going into 2020, this became much more challenging, and was converted to a remote game night consisting of Tabletop Simulator, or other team/cooperative based gaming.'],
            labels:['Current','Team Building']}),
        BuildEntry({
            start:'Late 2019',
            title:'Facilitated Performance Improvement Plan (PIP) for direct report',
            extended:'Worked with HR and Company leadership to define process, scope, and project plans to give an underperforming team member a chance to improve.',
            labels:['Conflict Resolution','Leadership']
        }),
        BuildEntry({
            start:'Late 2019',
            stop:'Present',
            title:'Contract Task Co-Lead - REALM Ground Sofware',
            text:['Managing 12 developers',
                  '• Interfacing with International Space Station (ISS) Inventory Stowage Officers (ISOs)',
                  '• REALM-1 transition from a science payload to an ISS operational system.'],
            extended:['REALM = Radio Frequency Identification (RFID) Embedded Automated Logistics Management<br>',
                    'One of 3 co-managers of the task comprising 3 primary principal subtasks and between 12-19 developers. My subtask was the ground based data analysis toolset comprising a 3TB database of 30 Billion RFID reads that had been downlinked from our instrumentation operating on the International Space Station (ISS) since 2017. Led the task throughout the transition of REALM from a science payload to an operational system. My contributions were essential to the continuing operation and funding of REALM by the ISS program.'],
            labels:['Current','Leadership','UI Design','Technology:Machine Learning']}),
        BuildEntry({
            start:'Early 2019',
            title:'International Space Station - Unity Visualizer',
            text:'Interactive 3d simulation built in WebGL',
            extended:'Converted my early built Unity 3d visualization of the International Space Station (ISS) to build to HTML5 which led to easier access across the team for science analysis activities. This required converting the existing method of direct database access to utilize web apis to pull data. Utilized AspNet .Net Core restful web apis to solve the problem with little code beyond data class definitions.',
            labels:['Language:C#','Technology:Unity3d','Technology:rest','UI Design']}),
        BuildEntry({
            start:'Early 2019',
            title:'Astrobee REALM Homing Algorithm',
            text:'Control free flying robot on international space station to find specific RFID tags',
            extended:'Worked with REALM Science team to design and implement a Homing algorithm to autonomously control the Astrobee Free Flyer Robot in the internal volume of the International Space Station. Consisted of core algorithms running on robot, integration with RFID Antenna hardware, and communication with the ground control system. Implemented and tested with full 6 degree of freedom simulation, and with 3 degree of freedom Turtlebot analog.',
            labels:['Language:C++','Technology:Robotic Operating System','Hardware/Software Integration','Simulation','Technology:Machine Learning']}),
        BuildEntry({
            start:'Late 2018',
            title:'Unity VR Full body Tracking with Inverse Kinematics',
            extended:'Rapid Application Development project supporting another team to burn down technical risk and determine feasibility of integrating full body limb tracking into existing VR simulations. Involved testing out various off the shelf hardware/software, resolving technical challenges, and completely rebuilding the armatures of existing 3d astronaut models',
            labels:['Language:C#','Technology:Unity3d','Rapid Prototyping','Risk Mitigation','AR/VR']}),
        BuildEntry({
            start:'Late 2018',
            title:'Cutting Edge XR Hardware Prototype and Checkout',
            text:'Worked with Varjo VR headset, Magic Leap AR headset',
            extended:'Evaluated early evaluation (before market) hardware for ultra high resolution VR (Varjo) and newly released Augmented Reality Hardware (Magic leap). These were both evaluated for the value of integrating them into our NASA Virtual Reality capabilities and our VR/AR commercial training capabilities.',
            labels:['Language:C#','Technology:Unity3d','AR/VR']}),
        BuildEntry({
            start:'Late 2018',
            title:'Chief Technical Risk Mitigation Engineer - Next Generation agricultural hardware/software emulation platform',
            text:'CAN bus, android emulation, performance optimization',
            extended:'Brought on in the middle of the project lifecycle to provide surge technical expertise to resolve previously insurmountable technical problems. Consisted of hardware/display emulation for Tractor displays and integration/emulation of CAN bus communication. Many of the issues were related to resolving performance issues related to hardware/gpu emulation.',
            labels:['Language:Java','Technology:Android','Risk Mitigation','Simulation']}),
        BuildEntry({
            start:'Early 2018',
            title:'Built various Augmented Reality demos for commercial customers',
            text:'Leveraged Image Target Recognition',
            extended:'Built and demonstrated multiple Augmented Reality (AR) prototypes related to field use of AR in construction. Utilized fusion of device sensors and camera leveraging Object and Image Target Recognition to localize the device and identify targets of interest.',
            labels:['Language:C#','Technology:Unity3d','AR/VR','Risk Mitigation','UI Design','Proposals']}),
        BuildEntry({
            start:'Early 2018',
            stop:'Present',
            title:'Chief Architect - REALM Autonomous Robotics',
            text:['cross compilation build process for class 1E flight software'],
            extended:['Led technical efforts involving cross compilation to arm hardware under class 1E flight software requirements. Led development effort for Android based Astrobee Free Flying robot software utilizing CrystaX Native Development Kit (NDK)<br>',
                    'Technical leadership of project started with a Tiger team of Sr. Metecs`s Developers saving the project from the previous contractor.'],
            labels:['Current','Language:C++','Language:Java','Technology:Android','Technology:Robotic Operating System','Technology:Machine Learning','Risk Mitigation','Conflict Resolution']}),
        BuildEntry({
            start:'Early 2018',
            stop:'Present',
            title:'Metecs Recruiter and Primary Candidate Interviewer',
            text:['• Technical Interview of Candidates',
                  '• Lead Career Fair Booth, resume filtering, and follow up interviews'],
            extended:'Reviewed hundreds of resumes, led dozens on dozens of technical interviews to identify qualified software engineering candidates. Worked with other recruiters to establish a consistent process and method to normalize scoring methods.',
            labels:['Current','Team Building']}),
        BuildEntry({
            start:'Early 2018',
            stop: 'Present',
            title:'Created and maintain first REALM RFID inferencing engine',
            text:'Built algorithmic localization solution to utilize RFID data from International Space Station leveraging Antenna Volumes and RSSI interpolation',
            extended:'Implemented the first REALM engine that consumed RFID signal strength data and converted it to XYZ locations inside of international space stations. Utilized antenna perspective regions/volumes and RSSI interpolation. Was absolutely critical in providing initial operational capability in leveraging the REALM science payload on Orbit into actionable information to be utilized for finding missing items on ISS.',
            labels:['Current','Language:Python','Technology:PostgreSQL','Rapid Prototyping','Risk Mitigation','Technology:Machine Learning']}),
        BuildEntry({
            start:'Early 2018',
            title:'Offline Speech to Text and Natural Language Processing (NLP) interfaces for RFID Logistics',
            extended:'Implemented a fully offline Speech to Text NLP solution for querying the REALM database for item locations. Leveraged real time inference engine to track the movement of items in a ground analog of the space station environment. Leveraged PocketSphinx with a highly optimized Lexical dictionary, integrated with realm-time Abstract state localization engine detailed below.',
            labels:['Language:Javascript','Language:Python','Technology:NLP','Rapid Prototyping','UI Design','Proposals','Technology:Machine Learning']}),
        BuildEntry({
            start:'Late 2017',
            title:'<a target="_blank" href="https://arc.aiaa.org/doi/abs/10.2514/6.2017-5256">Autonomous Logistics Management Systems for Exploration Missions</a>',
            text:'AIAA Space and Astronautics Forum and Exposition Publication',
            extended:['Patrick W. Fink, Timothy F. Kennedy, Lazaro Rodriguez, James L. Broyan, Phong H. Ngo, Andrew Chu, Ami Yang, Donald M. Schmalholz, Robert W. Stonestreet, Robert C. Adams, Jesse Berger, Adam K. Merta, Frank J. Graffagnino, Prashant Shenoy, Emmanuel Cecchet and Jeremy Gummeson',
                  '“<a target="_blank" href="https://arc.aiaa.org/doi/abs/10.2514/6.2017-5256">Autonomous Logistics Management Systems for Exploration Missions</a>”',
                  '  Published to AIAA Space and Astronautics Forum and Exposition, 2017<br>',
                  'Technical content author and supporting scientist'],
            labels:['Publication','Technology:Machine Learning']}),
        BuildEntry({
            start:'Late 2017',
            title:'Wifi Localization - Extreme Rapid Prototype Development',
            text:'Won crowd favorite at NASA technology fair',
            extended:'New NASA customer wanted to demonstrate capability of utilizing standard wifi technology to determine low resolution localization capability for experiments flown to the International Space Station. In an extremely compressed timetable, successfully wrote, tested, and demonstrated engine for Wireless Access Point (WAP) signal strength, trilateration, and physics based solution simplification optimization to track an item moving through a cluttered Engineering HighBay with the standard set of 12 Wireless Access Points installed in the environment.',
            labels:['Language:Python','Language:C#','Technology:Unity3d','Rapid Prototyping','Technology:Machine Learning']}),
        BuildEntry({
            start:'Late 2017',
            stop: 'Present',
            title:'Chief R&D Engineer - Augmented Reality',
            extended:'Lead various projects to evaluate Augmented Reality hardware and software for application for commercial customers in the Agriculture, Construction, and Oil & Gas Industry. Built various prototypes and demonstrated to commercial partner leadership.',
            labels:['Current','AR/VR','Risk Mitigation','Language:C#','Technology:Unity3d','Rapid Prototyping']}),
        BuildEntry({
            start:'Late 2017',
            stop: 'Early 2018',
            title:'Principle Investigator - Adaptive Augmented Reality Displays SBIR',
            text:['Discovered, proposed, won, lead, and delivered on Small Business Innovation Research Grant'],
            extended:['Originated, Chief Technical Writer, Principal Investigator, and Project lead for Phase I SBIR to build an Adaptive Augmented Reality Display. Adapted the modalities utilized to communicate with the user as they performed procedural tasks. Took in various inputs such as simulated stress levels, procedure state, and expertise of the user.',
            '• Lead team of 3 engineers',
            '• “Augmented Virtual Reality” (Emulated non-existent 180deg FOV AR display inside International Space Station in zero-g)',
            '• Augmented elements supported Procedural task execution in emergency scenarios',
            '• Multi-modal cognitive load modeling'],
            labels:['Language:C#','Technology:Unity3d','Leadership','Proposals','AR/VR','UI Design','Technology:Machine Learning']}),
        BuildEntry({
            start:'Early 2017',
            title:'International Space Station Unity3d Visualizer for RFID Localization',
            extended:'Conceived and Built 3d visualization of the International Space Station for use in Science Analysis. Over the years has proven essential to support discussions of on-orbit hardware and inferencing algorithm effectiveness. Regularly used to discuss anomalies of hardware reconfiguration.',
            labels:['Current','Language:C#','Technology:Unity3d','Technology:rest','UI Design','Technology:Machine Learning']}),
        BuildEntry({
            start:'Early 2017',
            stop:'Present',
            title:'Chief Database Architect - RFID Logistics',
            extended:'Led schema development, database administration, and development of loading/management scripts. Database would grow to nearly 4 TB by 2021.Implemented various partitioning, meta status/summary tables, and loader optimizations to keep up with the growth of data, and maintain query performance at acceptable levels. ',
            labels:['Current','Technology:PostgreSQL','Infrastructure','Technology:Machine Learning']}),
        BuildEntry({
            start:'Early 2017',
            stop:'Present',
            title:'RFID automated database loading',
            text:'Built pipeline to automomously load ~20 million rows of data generated by International Space Station into PostgreSQL every day',
            extended:'Wrote loader scripts utilizing incron file event monitoring, python generators and batch inserts to load files as they are continuously downlinked to our ground software from International Space Station. On average this consists of 20 million reads a day. Over the years following, the loader scripts would be updated to handle the various anomalies in data, while ensuring changes don’t have unintended consequences on the production database.',
            labels:['Current','Language:Python','Technology:PostgreSQL','Infrastructure','Technology:Machine Learning']}),
        BuildEntry({
            start:'Early 2017',
            title:'Abstract state Localization Engine for RFID',
            text:['• Visualization on HoloLens',
                  '• Machine Learning graph building and auto-calibration'],
            extended:'Developed a real time Markov Chain inspired hidden state inferencing engine to identify items as they moved in and out of Radio Frequency (RF) opaque drawers in the environment. Utilized streaming of tag data from commercial off the shelf RFID hardware into a REDIS database and continuously inferring locations of tags of interest. Was unique in that it was fully self-calibrating, and required no initial seed data on drawer or antenna locations.',
            labels:['Language:C#','Technology:Unity3d','AR/VR','Technology:rest','Rapid Prototyping','Technology:Machine Learning']}),
        BuildEntry({
            start:'Early 2017',
            title:'Agricultural Return on Investment Calculator',
            text:'Rapid Application Development - Single page web calculator',
            extended:'Lead calculations and front end user interface development for a web based Single Page Application (SPA) to calculate expected Return on Investment for customers that upgrade to the latest agriculture hardware/software.Utilized KnockoutJS as a Model-View-ViewModel layer to handle the dynamic dependency tracking and update propagation on the front end.',
            labels:['Language:Javascript','Rapid Prototyping','UI Design','Proposals']}),
        BuildEntry({
            start:'Late 2016',
            title:'Restful simulation interfaces SBIR',
            text:['Small Business Innovation Research Grant',
                  '• Primary technical contributor, integrating restful web services into RS422/MIL-STD-1553 bus'],
            extended:'Developed a restful interface to streaming RS422 an MIL-STD-1553 data. Cross compiled existing framework to run on a rad hardened PowerPC platform.',
            labels:['Language:Javascript','Language:C++','Language:Php','Hardware/Software Integration','Proposals']}),
        BuildEntry({
            image:'https://metecs.com/wp-content/uploads/2019/03/METECS_Logo-web-mobile-small01.png',
            start:'Summer 2016',
            stop: 'Present',
            title:'Started at MacLean Engineering and Applied Technology (METECS)',
            labels:['Employer'],
            classes:'entry-company'}),
        BuildEntry({
            start:'Mid 2016',
            title:'Program Management Training',
            extended:'Went through Boeing’s Multi-week Program Management Training to prepare for leading and managing very large teams (100+) at the program/vehicle level.',
            labels:['Leadership']}),
        BuildEntry({
            start:'Early 2016',
            title:'Employee Survey Action Team',
            text:'Support Program Executives by developing action plan to address Employee Survey concerns',
            extended:'Joined Boeing Defense, Space & Security Division executive leadership on interpreting and planning how to improve the company in response to the yearly Employee Survey. Worked directly with Houston Site level executives',
            labels:['Leadership','Process Improvement','Proposals','Conflict Resolution']}),
        BuildEntry({
            start:'Early 2016',
            title:'Software Process Lead',
            extended:'Led Software process activities for a 25 person software engineering team. Supported CMMI 3 appraisal effort. Integrated documentation automation into team process.',
            labels:['Leadership','Process Improvement']}),
        BuildEntry({
            start:'Late 2015',
            title:'Team Foundation Server (source control, issue tracking, continuous integration)',
            text:['15% total lifecycle cost reduction through programmatic document generation'],
            extended:'Identified, evaluated, configured and championed the use of Team Foundation Server as a central Application Lifecycle Management (ALM) tool. Generated document generation scripts to pull out living artifacts (requirements, design, test procedure) into documents that meet NASA requirements and style guides. These changes lead to a 50% reduction in testing/documentation efforts, and a 15% reduction in total lifecycle costs.',
            labels:['Leadership','Process Improvement','Proposals']}),
        BuildEntry({
            start:'Early 2015',
            stop:'Early 2016',
            title:'Boeing Houston Innovation Cell Board Member',
            extended:'Founding Board Member of Boeing’s Houston Innovation Cell. Led efforts to collect, fund, and respond to employee process improvement ideas. Pitched and successfully acquired funding for various process improvement efforts.',
            labels:['Leadership','Process Improvement']}),
        BuildEntry({
            start:'Late 2014',
            title:'Enterprise-wide Employee Involvement Lean Team',
            text:'Developing Cross-Enterprise Action Item Database',
            extended:'Participated in a team to drive total lifecycle cost reduction at the enterprise/program level. As part of this effort was a key contribution to requirements and design of the “Enterprise Action Item Database” with other members all across the Boeing International Space Station team. Built a common tool that met requirements across a diverse set of stakeholders to centralize and standardize software processes.',
            labels:['Leadership','Process Improvement','Proposals','Conflict Management']}),
        BuildEntry({
            start:'Late 2013',
            title:'Lead NASA Docking System Simulation Developer',
            text:['Simulate Docking Ring latches, sensors, actuators, and collision kinematics'
                 ],
            extended:'Designed and implemented the entirety of the Soft Capture System simulation for Boeing’s Nasa Docking System (NDS) Docking System Emulator (DSE). simulationed voltages, latch and actuator movement, 6dof soft capture system movements and collisions, and inverse kinematic calculations.',
            labels:['Language:Matlab','Technology:Simulink','Simulation','UI Design']}),
        BuildEntry({
            start:'Early 2013',
            stop:'Summer 2016',
            title:'Lead Sustaining engineer - RIM (Rig Operational Console)',
            extended:['Elevated to project leader due to retirement of current lead. Managed customer interaction, future release scoping, scheduling and project tracking, and project execution. Managed 1 or 2 developers/interns that worked on the project.'],
            labels:['Language:Java','Language:Javascript','Technology:MySQL','Leadership','UI Design']}),
        BuildEntry({
            start:'Late 2012',
            title:'Database scripting API - Programatic Code/DLL Generation',
            text:['Repeatable and automated test scripting through C# or IronPython interfacing with MSSQL Database'],
            extended:'Customer needed a scripting interface into our test automation software. Utilized c# code generation to build a c# scripting API DLL from a large MSSQL database schema of ~60 tables. This gave the customer self-documenting intellisense auto-completion during scripting activities to greatly increase discoverability and reduce errors while developing new automation scripts. Was essential for ensuring repeatable and automated tests. Also enabled developer flexibility to utilize C# or IronPython. Replaced an out of date manual legacy solution with 100k LOC.',
            labels:['Language:C#','Language:Python','Technology:MSSQL','Process Improvement']}),
        BuildEntry({
            start:'Early 2011',
            stop:'Summer 2016',
            title:'Lead Sustaining engineer - ROC (Rig Operational Console)',
            text:['• Java tool on Solaris (Unix) that manages power, configuration, startup for ISS avionics lab.',
                  '• Provides the interface that the Test Operation Engineer uses to bring all systems to a common simulation state. Automates what was an 18 hour manual task, into a 45 minute sequence.'],
            extended:'Became team’s lead sustaining engineer for the Rig Operational Console (maintained from 2011-2016). Tool was a cross-platform tool built in java, but run on a Solaris (Unix) platform. Tool was the primary interface and critical to the day by day operation of all of Boeing’s International Space Station Horizontal Verification Rigs inside of the Software Development Integration Lab (SDIL). The tool automated what was originally an 18 hour manual task to reconfigure and startup the simulation to be a single button 45 minute automated sequence.',
            labels:['Leadership','Language:Java','Infrastructure','UI Design','Hardware/Software Integration']}),
        BuildEntry({
            start:'Late 2010',
            title:'DDS (Data Distribution Service)',
            text:['• International Space Station - Network Monitoring Software',
                  '• Used Icinga with a Postgresql database to collect and display real time network data such as clients, services, bandwidth, and ping performance over time.'],
            extended:'Configured, Deployed, and Implemented monitoring scripts to leverage Icinga and DDS to monitor crew laptops and routers on the International Space Station Crew network. Continuously collected information on clients, services, bandwidth and network performance to enable preventative maintenance on vehicle systems. This was essential due to the potentially long delay between parts replacement and resupply',
            labels:['Technology:PostgreSQL','Infrastructure']}),
        BuildEntry({
            start:'Early 2010',
            title:'Configuration management Lead - StarTeam to Subversion Migration',
            text:['Migrated 50+ projects from old  SCM solution (StarTeam), to a free, open-source alternative.'],
            extended:'Became team’s Configuration Management Lead. Immediately migrated us from a $100k a year old SCM solution (StarTeam) to a fee open-source alternative (Subversion). Migrated and maintained over a decade of source control history utilizing open source tools (which required updates since StarTeam to SVN was poorly supported and broken). Created training documentation to get 25 developer team used to the checkout-merge method instead of lock-change-unlock. ',
            labels:['Leadership','Process Improvement','Proposals']}),
        BuildEntry({
            start:'Late 2009',
            title:'pyCrawl (Web Crawler)',
            text:['Automated the previously manual process of checking 30,000 links on a webserver'],
            extended:'Rapid Application Development paid for by process improvement funding.Previously a team was manually checking 30,000 links on the webserver managing International Space Station drawings, costing >600 hrs a year. Created a python webcrawler that supported html/pdf link parsing, and supported Boeing’s single sign on implementation based on Window’s NTLM authentication. With only a 2 week development investment, eliminated $60k yearly labor cost while also increasing scanning frequency from yearly to weekly. Over the years that followed, the webcrawler was leveraged by a dozen other teams in the company to eliminate similar manual link scanning efforts',
            labels:['Language:Python','Rapid Prototyping','Process Improvement','UI Design','Proposals']}),
        BuildEntry({
            image:'https://www.boeing.com/assets/images/logo.png',
            start:'Summer 2009',
            stop: 'Summer 2016',
            title:'Started at Boeing Defense, Space & Security',
            labels:['Employer'],
            classes:'entry-company'}),
        BuildEntry({
            image:'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Embry-Riddle_Aeronautical_University_seal.svg/800px-Embry-Riddle_Aeronautical_University_seal.svg.png',
            start: 'September 2004',
            stop: 'May 2009',
            title:'BS/MS in Software Engineering',
            text:"Graduated from accelerated Bachelors of Science and Masters of Science program in Software Engineering with Honors",
            labels:['Academic'],
            classes:'entry-company'}),
        BuildEntry({
            start:'Early 2009',
            title:'<a target="_blank" href="https://www.researchgate.net/publication/268570430_Autonomous_Navigation_and_Obstacle_Avoidance">Autonomous Navigation and Obstacle Avoidance</a>',
            text:'AIAA Infotech Conference Publication',
            extended:['Berger, Jesse & Carson, Cory & Towhidnejad, Massood & Stansbury, Richard. (2009).',
                    '“Autonomous Navigation and Obstacle Avoidance”',
                    '  Published to AIAA Infotech@Aerospace Conference 2009'],
            labels:['Technology:Machine Learning','Publication','Academic']}),
        BuildEntry({
            start:'Fall 2008',
            stop: 'Spring 2009',
            title:'Software Engineering – Graduate Project',
            text:['• Developed weather data (GRIB) parsing/filtering engine - NextGen Air Transportation System'],
            extended:'Final Graduate team project consisted of GRIB weather data parsing filtering engine for NextGen Air Transportation System. GRIB2 files are multi-GB files with many layers, parameters, and lat/long data. Created an algorithm to filter on parameters and a specific geographic region. Sped up the previous GRIB2 parsing engine by an order of magnitude. ',
            labels:['Language:Python','Academic']}),
        BuildEntry({
            start:'May 2008',
            stop: 'September 2008',
            title:'RIM (Rig Information Management) developer',
            text:['Rapidly came up to speed mid development for web-based integration management system. Joined team of 2 senior engineers. During internship, contributed 25% of features for that first release'],
            extended:'Started working on the Rig Information management (RIM) process automation tool used in International Space Station software test and verification. RIM replaced 2 dozen manual paper/office tool processes with a single database centric integrated web solution. The tool was architected on multiple open-source tools and frameworks. Enterprise full stack Java development, interchangeable Oracle/MySQL database, Hibernate Object Relational Mapping (ORM), original Tapestry Java web framework, migrated to Wicket. Developed on Windows, deployed on Linux. In 2013 became lead sustaining engineer.',
            labels:['Language:Java','Language:Javascript','Technology:Oracle','Technology:MySQL','UI Design']}),
        BuildEntry({
            image:'https://www.boeing.com/assets/images/logo.png',
            start:'May 2008',
            stop: 'September 2008',
            title:'Support Systems Intern at Boeing Integrated Defense Systems',
            labels:['Employer'],
            classes:'entry-company'}),
        BuildEntry({
            start:'Fall 2007',
            stop: 'Spring 2008',
            title:'Software Engineering - Senior Project',
            text:['• Developed the control system/obstacle avoidance algorithms for  Autonomous Ground Vehicle',
                  '• Integrated our system with an existing Autonomous Aircraft system'],
            extended:'Core software architect for Navigation control and obstacle avoidance system for a high speed Autonomous ground vehicle. Implemented Waypoint pathing and optimization strategies that adapted to continuously updating obstacle data read from ultrasonic sensors. Integrated with the existing Command and Control Autonomous Aircraft System from the previous Senior project.',
            labels:['Language:Python','Academic','Technology:Machine Learning']}),
        BuildEntry({
            start:'May 2007',
            stop: 'September 2007',
            title:'Loadable Software Developer',
            text:['Built Java displays to configure data loads for 787 Dreamliner'],
            extended:'Junior developer supporting software configuration loading software for the unreleased 787 Dreamliner. Participated in the 787 public unveiling ceremony',
            labels:['Language:Java','UI Design']}),
        BuildEntry({
            image:'https://www.boeing.com/assets/images/logo.png',
            start:'May 2007',
            stop: 'September 2007',
            title:'Loadable Software Intern at Boeing Commercial Airplanes',
            labels:['Employer'],
            classes:'entry-company'}),
        BuildEntry({
            image:'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Embry-Riddle_Aeronautical_University_seal.svg/800px-Embry-Riddle_Aeronautical_University_seal.svg.png',
            start:'Spring 2005',
            stop: 'Fall 2006',
            title:'Assistant Intranet Developer - Web Design',
            text:['Developed web applications for use by Embry-Riddle Aeronautical University Departments'],
            extended:'Intranet Web Developer. Designed and implemented full stack Java and Coldfusion web applications in support of various Embry-Riddle departments. Interfaced with Databases, and Application Portlet Architectures.',
            labels:['Language:ColdFusion','Language:Javascript','UI Design'],
            classes:'entry-company'}),

    ])
    this.filters = ko.pureComputed(function(){
        return this.alllabels().filter(label => label.active()).map(label => label.name())
    },this)
    this.experience_filtered = ko.pureComputed(function(){
        if (this.filters().length>0){
            return this.experience().filter(
                e => e.labels.filter(
                    label => this.filters().includes(label)).length>0
            )
        } else {
            return this.experience()
        }
    },this)
    this.alllabels = ko.pureComputed(function(){
        var merged = [].concat.apply([], this.experience().map((e) => e.labels));
        var labels = {}
        for (var label of merged){
            if (!(label in labels)){
                labels[label] = 0
            }
            labels[label]+=1
        }
        // var unique = merged.filter((v, i, a) => a.indexOf(v) === i);
        var items = Object.keys(labels).map(function(key) {
            return [key, labels[key]];
        });
        items.sort(function(first, second) {
            return second[1] - first[1];
        });
        
        return items.map(kvp => (new function(){
            let bgStyle = koModel.labelToBg(kvp[0]).replace('bg','btn')
            this.name = ko.observable(kvp[0])
            this.count = ko.observable(kvp[1])
            this.active = ko.observable(false)
            this.bgStyle = ko.pureComputed(() => bgStyle + (this.active()?" btn-toplevel-active":" btn-filter-inactive"))
            this.click = () => this.active(!this.active())
        }()))
    },this)

    this.sort_labels = function(label_names){
        var prios = this.labelpriorities();
        var labels = koModel.alllabels().filter(l => label_names.includes(l.name()))
        labels.sort((function(first, second) {
            return (prios[first.name()]==prios[second.name()]) ? second.count() - first.count() : prios[first.name()] - prios[second.name()];
        }));
        return labels.map(l => l.name());
    }
    
    this.alllabels_butlangandtech = ko.pureComputed(function(){
        return this.alllabels().filter(label => !(label.name().startsWith("Language") || label.name().startsWith("Technology")))
    },this)
    this.numLanguages = ko.pureComputed(function(){
        return this.alllabels().filter(label => label.name().startsWith("Language")).length
    }, this)
    this.numTechnologies = ko.pureComputed(function(){
        return this.alllabels().filter(label => label.name().startsWith("Technology")).length
    }, this)
    //Top level buttons
    this.numLanguagesAndTechnologies = ko.pureComputed(function(){
        return this.numLanguages() + this.numTechnologies()
    },this)
    this.technologyBtn = new function(){
        this.name= ko.observable("Technologies")
        this.count = koModel.numLanguagesAndTechnologies
        this.active = ko.observable(false)
        this.bgStyle = ko.pureComputed(() => "bg-danger" + (this.active()?" btn-toplevel-active":""))
        this.click = () => this.active(!this.active())
    }()
    this.technologies = ko.pureComputed(function(){
        return this.alllabels().filter(label => label.name().startsWith("Technology"));
    },this)
    this.TECHNOLOGY_LABELS = ko.pureComputed(function(){
        return this.technologies().map(l => l.name())
    },this)
    this.languages = ko.pureComputed(function(){
        return this.alllabels().filter(label => label.name().startsWith("Language"));
    },this)
    this.LANGUAGE_LABELS = ko.pureComputed(function(){
        return this.languages().map(l => l.name())
    },this)
    this.technologyBtn.active.subscribe(function(value){
        if (value==false){
            for(var label of this.technologies()){
                label.active(value)
            }
            for(var label of this.languages()){
                label.active(value)
            }
        }
    },this)
    this.ACCOMPLISHMENT_LABELS = ['Awards','Accomplishments','Publication']
    this.accomplishments = ko.pureComputed(function(){
        return this.alllabels().filter(label => this.ACCOMPLISHMENT_LABELS.includes(label.name()));
    },this)
    this.numAccomplishment = ko.pureComputed(function(){
        return this.accomplishments().reduce((num,label) => num+label.count(),0);
    },this)
    this.accomplishmentBtn = new function(){
        this.name= ko.observable("Accomplishments")
        this.count = koModel.numAccomplishment
        this.active = ko.observable(false)
        this.bgStyle = ko.pureComputed(() => "bg-warning text-dark" + (this.active()?" btn-toplevel-active":""))
        this.click = () => this.active(!this.active())
    }()
    this.accomplishmentBtn.active.subscribe(function(value){
        for(var label of this.accomplishments()){
            label.active(value)
        }
    },this)
    this.LEADERSHIP_LABELS = ['Process Improvement','Leadership','Team Building','Proposals','Conflict Resolution']
    this.leadership = ko.pureComputed(function(){
        return this.alllabels().filter(label => this.LEADERSHIP_LABELS.includes(label.name()));
    },this)
    this.numLeadership = ko.pureComputed(function(){
        return this.leadership().reduce((num,label) => num+label.count(),0);
    },this)
    this.leadershipBtn = new function(){
        this.name= ko.observable("Leadership")
        this.count = koModel.numLeadership
        this.active = ko.observable(false)
        this.bgStyle = ko.pureComputed(() => "bg-success" + (this.active()?" btn-toplevel-active":""))
        this.click = () => this.active(!this.active())
    }()
    this.leadershipBtn.active.subscribe(function(value){
        for(var label of this.leadership()){
            label.active(value)
        }
    },this)
    this.DESIGN_LABELS = ['Rapid Prototyping','UI Design','Virtual Reality','Augmented Reality','AR/VR']
    this.design = ko.pureComputed(function(){
        return this.alllabels().filter(label => this.DESIGN_LABELS.includes(label.name()))
    },this)
    this.numDesign = ko.pureComputed(function(){
        return this.design().reduce((num,label) => num+label.count(),0);
    },this)
    this.designBtn = new function(){
        this.name= ko.observable("Design")
        this.count = koModel.numDesign
        this.active = ko.observable(false)
        this.bgStyle = ko.pureComputed(() => "bg-info" + (this.active()?" btn-toplevel-active":""))
        this.click = () => this.active(!this.active())
    }()
    this.designBtn.active.subscribe(function(value){
        for(var label of this.design()){
            label.active(value)
        }
    },this)
    this.ROLE_LABELS = ['Current','Employer','Academic']
    this.roles = ko.pureComputed(function(){
        return this.alllabels().filter(label => this.ROLE_LABELS.includes(label.name()))
    },this)
    this.numRoles = ko.pureComputed(function(){
        return this.roles().reduce((num,label) => num+label.count(),0);
    },this)
    this.DOMAIN_LABELS = ['Simulation','Infrastructure','Risk Mitigation','Hardware/Software Integration']
    this.domains = ko.pureComputed(function(){
        return this.alllabels().filter(label => this.DOMAIN_LABELS.includes(label.name()))
    },this)
    this.numDomains = ko.pureComputed(function(){
        return this.domains().reduce((num,label) => num+label.count(),0);
    },this)
    this.domainBtn = new function(){
        this.name= ko.observable("Domains")
        this.count = koModel.numDomains
        this.active = ko.observable(false)
        this.bgStyle = ko.pureComputed(() => "bg-primary" + (this.active()?" btn-toplevel-active":""))
        this.click = () => this.active(!this.active())
    }()
    this.domainBtn.active.subscribe(function(value){
        for(var label of this.domains()){
            label.active(value)
        }
    },this)
    this.topButtons = ko.observableArray([
        this.leadershipBtn,
        this.designBtn,
        this.domainBtn,
        this.technologyBtn,
        this.accomplishmentBtn
    ])
    this.labelToBg = function(label){
        if (this.ACCOMPLISHMENT_LABELS.includes(label)){
            return "bg-warning text-dark"
        }
        if (label.startsWith("Language")){
            return "bg-danger"
        }
        if (label.startsWith("Technology")){
            return "bg-light text-dark"
        }
        if (this.LEADERSHIP_LABELS.includes(label)){
            return "bg-success"
        }
        if (this.DESIGN_LABELS.includes(label)){
            return "bg-info"
        }
        if (this.ROLE_LABELS.includes(label)){
            return "bg-secondary"
        }
        return "bg-primary"
    }
    this.labelgroups = ko.observableArray([
        this.LEADERSHIP_LABELS,
        this.DESIGN_LABELS,
        this.TECHNOLOGY_LABELS(),
        this.LANGUAGE_LABELS(),
        this.DOMAIN_LABELS,
        this.ACCOMPLISHMENT_LABELS
    ])
    this.labelpriorities = ko.pureComputed(function(){
        var groups_prios = {}
        for (var priority in this.labelgroups()){
            for(var label of this.labelgroups()[priority]){
                groups_prios[label] = priority
            }
        }
        return groups_prios
    },this)
    
    this.currentBtn = ko.pureComputed(function(){
        return koModel.alllabels().filter(l => l.name()=="Current")[0]
    },this)
}
loadData = function(){
    ko.options.deferUpdates = true
    koModel = new ResumeModel()
    ko.bindingHandlers.fadeVisible = {
        init: function(element, valueAccessor) {
            // Initially set the element to be instantly visible/hidden depending on the value
            var value = valueAccessor();
            $(element).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
        },
        update: function(element, valueAccessor) {
            // Whenever the value subsequently changes, slowly fade the element in or out
            var value = valueAccessor();
            ko.unwrap(value) ? $(element).fadeIn() : $(element).fadeOut();
        }
    };
    ko.applyBindings(koModel);
}
document.addEventListener("DOMContentLoaded", function(event) { 
    loadData()
});