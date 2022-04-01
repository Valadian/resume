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
    if (def['labels'] == undefined){
        def.labels = []
    }
    if (def['text'] != undefined && !Array.isArray(def['text'])){
        def.text = [def.text]
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
            start:'Summer 2009',
            stop:'Summer 2016',
            title:'Boeing Defense, Space & Security',
            location:'Houston, TX',
            text:'Support Systems/Lab Engineering',
            classes:'entry-company'}),
        BuildEntry({
            image:'https://www.boeing.com/assets/images/logo.png',
            start:'Summer 2008',
            timespan: '3 months',
            title:'Boeing Integrated Defense Systems',
            location:'Houston, TX',
            text: 'Support Systems Intern',
            classes:'entry-company'}),
        BuildEntry({
            image:'https://www.boeing.com/assets/images/logo.png',
            start:'Summer 2007',
            timespan: '3 months',
            title:'Boeing Commercial Airplanes',
            location:'Everett, WA',
            text: 'Loadable Software Intern',
            classes:'entry-company'}),
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
            start:'Early 2022',
            title:'Johnson Space Center Individual Innovation Award',
            text:'Recognized for my Individual contributions as the chief Machine Learning architect for the RFID Logistics program on the International Space Station. Models are leveraged in real-time operations with Astronauts while performing cargo related duties to locate unexpected missing items required for cargo manifest and scientific experiments.',
            labels: ['Accomplishments','Technology:Machine Learning']}),
        // BuildEntry({
        //     start:'Late 2021',
        //     title:'Implementation of real-time GPS orbital model leveraging General/Special Relativity',
        //     text:'',
        //     extended: 'Needed to build a real-time GPS satellite simulation leveraging minimal external library dependencies for commercial agriculture vehicle simulation. Implemented orbital propagation model for real world observed parameters, and implemented Special and General Relativity Time dilation effects to correctly calculated frequency offsets required for GPS communication',
        //     labels: ['Language:Python','Language:Go','Simulation']}),
        BuildEntry({
            start:'Early 2021',
            stop:'Present',
            title:'Autonomous Algorithm utilized by Astrobee Robot onboard International Space Station to track RFID tag!',
            text:'Algorithm and autonomous control code that I had written in 2019 had its maiden flight on the International Space Station. Experiment was set up by Astronaut Shannon Walker, and successfully met all test objectives. Results of that test was utilized to improve algorithm leading to a highly successful test in early 2022 culminating to robot navigating and touching target across a module. More details below. ',
            labels: ['Accomplishments','Technology:Robotic Operating System','Language:C++','Language:Java']}),
        BuildEntry({
            start:'Early 2021',
            title:'IEEE Conference Publication',
            text:['J. Simonoff, J. Berger, A. Abdullali, O. Lerner, L. Rodriguez, P. Fink Ph.D',
                  '“<a target="_blank" href="https://ieeexplore.ieee.org/document/9444373">Intra-Spacecraft RFID Localization</a>”',
                  'Presented to IEEE International Conference on RFID, 2021'],
            labels: ['Publication','Technology:Machine Learning']}),
        BuildEntry({
            start:'Spring 2021',
            stop:'Summer 2021',
            title:'Rapid Application Development full stack development building Access Request tracking tool',
            text:['• Put in place for Johnson Space Center’s ER7 (Engineering) Branch',
                ' • Utilized for management and civil servant approval to get on-site at JSC',
                ' • Replace email based processes, reducing management burden by an order of magnitude'],
            labels:['Language:Javascript','Process Improvement','Rapid Prototyping','UI Design']}),
        BuildEntry({
            start:'Early 2021',
            stop:'Feb 2021',
            title:'Payroll Process Automation',
            text:'Lead R&D effort optimizing company payroll processes to scale with company growth',
            labels:['Language:Python','Process Improvement','Leadership','UI Design','Proposals']}),
        BuildEntry({
            start:'Late 2020',
            stop:'Present',
            title:'Lunar Gateway Contract Task Lead',
            text:['• Managing 5 Sr. developers doing:',
                '    - Test Orchestration Development & Integration',
                '    - Systems Engineer & Integration (SE&I) for Modeling & Simulation (M&S)',
                '    - Project planning support',
                '    - Commercial Partner Oversight',
                '    - NASA Demonstration support'],
            labels:['Current','Leadership','Simulation','UI Design']}),
        BuildEntry({
            start:'Early 2020',
            stop:'Late 2020',
            title:'NASA Exploration Systems Simulation Contract Task Lead',
            text:'• Managing 5 developers doing Core Flight System (cFS), mRest (web lab orchestration), Trick (simulation framework), Edge (3d engine) development',
            labels:['Leadership','Simulation']}),
        BuildEntry({
            start:'Early 2020',
            stop:'Present',
            title:'Lunar Gateway engineering integration - Lead User Interface and Lab Orchestration Developer',
            text:'• Working with NASA Lab Managers, Commercial Partners (Maxar, Northrop Grumman), and international partners (JAXA, ESA, CSA) to instrument simulations for use in a common orchestrated lab environment',
            labels:['Language:Javascript','Language:Php','Language:C++','Language:Go','Current','Leadership','Hardware/Software Integration','Simulation','Infrastructure','UI Design']}),
        BuildEntry({
            start:'Early 2020',
            stop:'Present',
            title:'Became REALM Chief Machine Learning Engineer and Algorithm Developer',
            text:'• Random Forest, XGBoost, Feature decomposition, pipeline generation for RFID localization',
            labels:['Technology:Machine Learning','Leadership','Language:Python','Technology:Machine Learning']}),
        BuildEntry({
            start:'Late 2019',
            title:'Recipient of Metecs’ “Empty Envelope” award',
            text:'Highest honor for cross-disciplinary technical achievement. Only 3 recipients in 15 years of the Company.',
            labels:['Accomplishments']}),
        BuildEntry({
            start:'Late 2019',
            stop:'Present',
            title:'Lead Monthly Metecs Board Game Nights',
            text:'• Make new employees feel more welcome',
            labels:['Team Building']}),
        BuildEntry({
            start:'Late 2019',
            stop:'Present',
            title:'Became REALM Ground Sofware Lead',
            text:['REALM = Radio Frequency Identification (RFID) Embedded Automated Logistics Management',
                  '• Managing 12 developers',
                  '• Interfacing with International Space Station (ISS) Inventory Stowage Officers (ISOs)',
                  '• REALM-1 transition from a science payload to an ISS operational system.'],
            labels:['Current','Leadership','UI Design','Technology:Machine Learning']}),
        BuildEntry({
            start:'Early 2019',
            title:'International Space Station - Unity Visualizer built for WebGL',
            text:'• Access databases through dotnet core restful api',
            labels:['Language:C#','Technology:Unity3d','Technology:rest','UI Design']}),
        BuildEntry({
            start:'Early 2019',
            title:'Astrobee REALM Homing Algorithm',
            text:'• Control free flying robot on international space station to find specific RFID tags',
            labels:['Language:C++','Technology:Robotic Operating System','Hardware/Software Integration','Simulation','Technology:Machine Learning']}),
        BuildEntry({
            start:'Late 2018',
            title:'Unity VR Full body Tracking with Inverse Kinematics',
            text:'• Armature bone rigging',
            labels:['Language:C#','Technology:Unity3d','Rapid Prototyping','Risk Mitigation','AR/VR']}),
        BuildEntry({
            start:'Late 2018',
            title:'Cutting Edge XR Hardware Prototype and Checkout',
            text:'• Worked with Varjo VR headset, Magic Leap AR headset',
            labels:['Language:C#','Technology:Unity3d','AR/VR']}),
        BuildEntry({
            start:'Late 2018',
            title:'Chief Technical Risk Mitigation Engineer for Next Generation agricultural hardware/software emulation platform',
            text:'• CAN bus, android emulation, performance optimization',
            labels:['Language:Java','Technology:Android','Risk Mitigation','Simulation']}),
        BuildEntry({
            start:'Early 2018',
            title:'Built various Augmented Reality demos for commercial customers',
            text:'• Image Target Recognition',
            labels:['Language:C#','Technology:Unity3d','AR/VR','Risk Mitigation','UI Design','Proposals']}),
        BuildEntry({
            start:'Early 2018',
            stop:'Present',
            title:'Became REALM Team’s Chief Technical Architect',
            text:['• cross compilation build process for class 1E flight software',
                  '• cross compilation build process for payload apk for Astrobee Free Flying robot running Android'],
            labels:['Language:C++','Language:Java','Technology:Android','Technology:Robotic Operating System','Technology:Machine Learning']}),
        BuildEntry({
            start:'Early 2018',
            stop:'Present',
            title:'Became a Metecs Recruiter and Primary Candidate Interviewer',
            text:['• Technical Interview of Candidates',
                  '• Lead Career Fair Booth, resume filtering, and follow up interviews'],
            labels:['Team Building']}),
        BuildEntry({
            start:'Early 2018',
            title:'Created first REALM RFID inferencing engine',
            text:'• utilizes Antenna Volumes and RSSI interpolation',
            labels:['Language:Python','Technology:PostgreSQL','Rapid Prototyping','Risk Mitigation','Technology:Machine Learning']}),
        BuildEntry({
            start:'Early 2018',
            title:'Offline Speech to Text and Natural Language Processing (NLP) interfaces for RFID Logistics',
            labels:['Language:Javascript','Language:Python','Technology:NLP','Rapid Prototyping','UI Design','Proposals','Technology:Machine Learning']}),
        BuildEntry({
            start:'Late 2017',
            title:'AIAA Forum and Exposition Publication',
            text:['Patrick W. Fink, Timothy F. Kennedy, Lazaro Rodriguez, James L. Broyan, Phong H. Ngo, Andrew Chu, Ami Yang, Donald M. Schmalholz, Robert W. Stonestreet, Robert C. Adams, Jesse Berger, Adam K. Merta, Frank J. Graffagnino, Prashant Shenoy, Emmanuel Cecchet and Jeremy Gummeson',
                  '“<a target="_blank" href="https://arc.aiaa.org/doi/abs/10.2514/6.2017-5256">Autonomous Logistics Management Systems for Exploration Missions</a>”',
                  '  Published to AIAA Forum and Exposition, 2017'],
            labels:['Publication','Technology:Machine Learning']}),
        BuildEntry({
            start:'Late 2017',
            title:'Wifi Localization - Extreme Rapid Prototype Development',
            text:'• Won crowd favorite at NASA technology fair',
            labels:['Language:Python','Language:C#','Technology:Unity3d','Rapid Prototyping','Technology:Machine Learning']}),
        BuildEntry({
            start:'Late 2017',
            stop: 'Present',
            title:'Became Company Chief Augmented Reality Research Engineer',
            labels:['AR/VR']}),
        BuildEntry({
            start:'Late 2017',
            stop: 'Early 2018',
            title:'Principle Investigator for Adaptive Augmented Reality Displays SBIR',
            text:['• Small Business Innovation Research Grant',
                  '• Proposed applying and lead proposal effort',
                  '• Lead team of 3 engineers',
                  '• “Augmented Virtual Reality” (Emulated future 180deg FOV)',
                  '• Augmented elements supported Procedural task execution',
                  '• Adapted to stress level and expertise of user'],
            labels:['Language:C#','Technology:Unity3d','Leadership','Proposals','AR/VR','UI Design','Technology:Machine Learning']}),
        BuildEntry({
            start:'Early 2017',
            title:'International Space Station Unity3d Visualizer for RFID Localization',
            labels:['Language:C#','Technology:Unity3d','Technology:rest','UI Design','Technology:Machine Learning']}),
        BuildEntry({
            start:'Early 2017',
            sotp:'Present',
            title:'Became REALM Chief Database Architect (RFID Enabled Autonomous Logistics Management)',
            labels:['Technology:PostgreSQL','Infrastructure','Technology:Machine Learning']}),
        BuildEntry({
            start:'Early 2017',
            sotp:'Present',
            title:'RFID automated database loading',
            text:'• Built pipeline to automomously load ~20 million rows of data generated by International Space Station into PostgreSQL every day',
            labels:['Language:Python','Technology:PostgreSQL','Infrastructure','Technology:Machine Learning']}),
        BuildEntry({
            start:'Early 2017',
            title:'Abstract state Localization Engine for RFID',
            text:['• Visualization on HoloLens',
                  '• Machine Learning graph building and auto-calibration'],
            labels:['Language:C#','Technology:Unity3d','AR/VR','Technology:rest','Rapid Prototyping','Technology:Machine Learning']}),
        BuildEntry({
            start:'Early 2017',
            title:'Agricultural Return on Investment Calculator',
            text:'• Rapid Application Development - Single page web calculator',
            labels:['Language:Javascript','Rapid Prototyping','UI Design','Proposals']}),
        BuildEntry({
            start:'Late 2016',
            title:'restful simulation interfaces SBIR',
            text:['• Small Business Innovation Research Grant',
                  '• Integrate restful web services into RS422/MIL-STD-1553 bus'],
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
            labels:['Leadership']}),
        BuildEntry({
            start:'Early 2016',
            title:'Employee Survey Action Team',
            text:'• Support Program Executives by developing action plan to address Employee Survey concerns',
            labels:['Leadership','Process Improvement','Proposals']}),
        BuildEntry({
            start:'Early 2016',
            title:'Became Team’s Process Lead',
            text:'• Supported CMMI Level 3 Appraisal',
            labels:['Leadership','Process Improvement']}),
        BuildEntry({
            start:'Late 2015',
            title:'Team Foundation Server (source control, issue tracking, continuous integration)',
            text:['• Championed use of Team Foundation Server',
                  '• Process Automation - Developed existing artifact migration and document generation tools',
                  '• Achieved 50% reduction in documentation/testing effort, 20% total life cycle cost reduction'],
            labels:['Process Improvement','Proposals']}),
        BuildEntry({
            start:'Early 2015',
            stop:'Early 2016',
            title:'Boeing Houston Innovation Cell Board Member',
            labels:['Process Improvement']}),
        BuildEntry({
            start:'Late 2014',
            title:'Enterprise-wide Employee Involvement Lean Team',
            text:'• Developing Enterprise Action Item Database',
            labels:['Process Improvement','Proposals']}),
        BuildEntry({
            start:'Late 2013',
            title:'Lead NASA Docking System Simulation Developer',
            text:['• NASA Docking System',
                  '• Simulate Docking Ring latches, sensors, actuators, and collision kinematics'
                 ],
            labels:['Language:Matlab','Technology:Simulink','Simulation','UI Design']}),
        BuildEntry({
            start:'Early 2013',
            stop:'Summer 2016',
            title:'Lead Sustaining engineer - RIM (Rig Operational Console)',
            text:['• Lead Sustaining engineer'],
            labels:['Language:Java','Language:Javascript','Technology:MySQL','Leadership','UI Design']}),
        BuildEntry({
            start:'Late 2012',
            title:'Database scripting API - Programatic Code/DLL Generation',
            text:['• Generates a .NET DLL from an ORU/Command structure defined in a MSSQL database.',
                  '• Allows repeatable and automated test scripting through C# or IronPython'],
            labels:['Language:C#','Language:Python','Technology:MSSQL']}),
        BuildEntry({
            start:'Early 2011',
            title:'Lead Sustaining engineer - ROC (Rig Operational Console)',
            text:['• Lead Sustaining engineer',
                  '• Java tool on Solaris (Unix) that manages power, configuration, startup for ISS avionics lab.',
                  '• Provides the interface that the Test Operation Engineer uses to bring all systems to a common simulation state. Automates what was an 18 hour manual task, into a 45 minute sequence.'],
            labels:['Language:Java','Infrastructure','UI Design']}),
        BuildEntry({
            start:'Late 2010',
            title:'DDS (Data Distribution Service)',
            text:['• International Space Station - Network Monitoring Software',
                  '• Used Icinga with a Postgresql database to collect and display real time network data such as clients, services, bandwidth, and ping performance over time.'],
            labels:['Technology:PostgreSQL','Infrastructure']}),
        BuildEntry({
            start:'Early 2010',
            title:'StarTeam to Subversion Migration',
            text:['• Project Lead, Configuration Management Lead',
                  '• Migrated 50+ projects from old  SCM solution (StarTeam), to a free, open-source alternative.'],
            labels:['Leadership','Process Improvement','Proposals']}),
        BuildEntry({
            start:'Late 2009',
            title:'pyCrawl (Web Crawler)',
            text:['• Automated the previously manual process of checking 30,000 links on a webserver'],
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
            title:'AIAA Infotech Conference Publication',
            text:['Berger, Jesse & Carson, Cory & Towhidnejad, Massood & Stansbury, Richard. (2009).',
                    '“<a target="_blank" href="https://www.researchgate.net/publication/268570430_Autonomous_Navigation_and_Obstacle_Avoidance">Autonomous Navigation and Obstacle Avoidance</a>”',
                    '  Published to AIAA Infotech@Aerospace Conference 2009'],
            labels:['Publication','Academic']}),
        BuildEntry({
            start:'Fall 2008',
            stop: 'Spring 2009',
            title:'Software Engineering – Graduate Project',
            text:['• Developed weather data (GRIB) parsing/filtering engine - NextGen Air Transportation System'],
            labels:['Language:Python','Academic']}),
        BuildEntry({
            image:'https://www.boeing.com/assets/images/logo.png',
            start:'May 2008',
            stop: 'September 2008',
            title:'Support Systems Intern at Boeing Integrated Defense Systems',
            text:['• RIM (Rig Information Management)',
                  '• Database centric, web-based integration management system hosted in Linux',
                  '• Framework integrates multiple open-source technology solutions',
                  '    - Originally Tapestry, upgrading to Wicket, Hibernate database layer'],
            labels:['Employer','Language:Java','Language:Javascript','Technology:Oracle','Technology:MySQL','UI Design'],
            classes:'entry-company'}),
        BuildEntry({
            start:'Fall 2007',
            stop: 'Spring 2008',
            title:'Software Engineering - Senior Project',
            text:['• Developed the control system/obstacle avoidance algorithms for  Autonomous Ground Vehicle',
                  '• Integrated our system with an existing Autonomous Aircraft system'],
            labels:['Language:Python','Academic']}),
        BuildEntry({
            image:'https://www.boeing.com/assets/images/logo.png',
            start:'May 2007',
            stop: 'September 2007',
            title:'Loadable Software Intern at Boeing Commercial Airplanes',
            text:['• Built Java displays to configure data loads for 787 Dreamliner'],
            labels:['Employer','Language:Java','UI Design'],
            classes:'entry-company'}),
        BuildEntry({
            image:'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Embry-Riddle_Aeronautical_University_seal.svg/800px-Embry-Riddle_Aeronautical_University_seal.svg.png',
            start:'Spring 2005',
            stop: 'Fall 2006',
            title:'Assistant Intranet Developer - Web Design',
            text:['• Developed web applications for use by Embry-Riddle Aeronautical University Departments'],
            labels:['Language:ColdFusion','Language:Javascript'],
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
    this.LEADERSHIP_LABELS = ['Process Improvement','Leadership','Team Building','Proposals']
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
        this.technologyBtn,
        this.domainBtn,
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
}
loadData = function(){
    ko.options.deferUpdates = true
    koModel = new ResumeModel()
    ko.applyBindings(koModel);
}
document.addEventListener("DOMContentLoaded", function(event) { 
    loadData()
});