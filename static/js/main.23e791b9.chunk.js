(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(45),o=a.n(r),s=(a(56),a(2)),l=a(3),c=a(5),m=a(4),u=a(6),p=(a(57),a(30)),d=a.n(p),h=a(46),f=(a(60),a(113)),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).FadeOut=function(){var e=Object(h.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,setTimeout(function(e){document.body.querySelector(".main_page_content_container").classList.add("fade-exit-active")},20);case 3:a.intervalId=e.sent,setTimeout(function(){window.location.assign("https://saraems.github.io/cv_creator/#/templates")},200);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.intervalId=setTimeout(function(){document.body.querySelector(".main_page_content_container").classList.add("fade-appear-active")},20)}},{key:"render",value:function(){return i.a.createElement("div",{className:"main_page_container"},i.a.createElement("div",{className:"main_page_content_container fade-enter"},i.a.createElement("header",null,i.a.createElement("h1",null,"Create your resume"),i.a.createElement("p",null,"Use our templates and create a beautiful resume in minutes. Make recruiter spot your Curriculum Vitae among the others.")),i.a.createElement("section",{className:"btns_container"},i.a.createElement(f.a,{to:"/templates",onClick:this.FadeOut},i.a.createElement("button",{className:"selection_btn choose_template"}," Choose a template")))))}}]),t}(n.Component),g=(a(63),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).chooseTemplate=function(e){localStorage.setItem("template",e)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.intervalId=setTimeout(function(){document.body.querySelector(".main_page_content_container").classList.add("fade-appear-active")},20)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"main_page_container"},i.a.createElement("div",{className:"main_page_content_container fade-enter"},i.a.createElement("header",null,i.a.createElement("h1",null,"Simplicity"),i.a.createElement("h2",null," is the ultimate sophistication..."),i.a.createElement("h3",null,"Choose yours resume template",i.a.createElement("br",null))),i.a.createElement("section",{className:"templates_container"},i.a.createElement(f.a,{to:"/data"},i.a.createElement("div",{onClick:function(){return e.chooseTemplate("sides")},className:"cv_template_container two_sides_template_icon"}," ")),i.a.createElement(f.a,{to:"/data"},i.a.createElement("div",{onClick:function(){return e.chooseTemplate("min")},className:"cv_template_container minimalistic_template_icon"}," ")),i.a.createElement(f.a,{to:"/data"},i.a.createElement("div",{onClick:function(){return e.chooseTemplate("class")},className:"cv_template_container classic_template_icon"}," ")))))}}]),t}(n.Component)),_=(a(64),a(47)),b=a.n(_),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).responseLinkedin=function(e){window.location.href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77k3xcm0gm759e&redirect_uri=https%3A%2F%2Fsaraems.github.io%2Fcv_creator&state=987654321&scope=r_basicprofile"},a.demoData=function(){localStorage.setItem("personData",JSON.stringify({id:1,firstName:"Alexander",lastName:"Dubois",headline:"Software Engineer",email:"alex.jaruga@republika.ru",phoneNumber:"782 897 980",summary:"I am a Java Developer. I specialise in programming e-commerce systems based on SAP Hybris. I have successfuly passed the SAP Hybris Commerce 6.2 Developer certification exam. I also have experience in working with legacy code. To deliver the best solution within the set time frame is what I strive for in my work.",positions:[{id:1,companyName:"EPAM Systems",description:"Currently I am participating in an e-commerce project based on SAP Hybris. My main responsibilities is to work with legacy code, extend existing features, create new features, fix bugs, write unit tests. Main skill used here is Java and related technologies. ",endMonthYear:"Present",location:"Krak\xf3w",startMonthYear:"September 2017",title:"SoftwereEngenieer"},{id:2,companyName:"Eclipse Group Solutions Ltd.",description:"I have participated in 3 e-commerce projects using agile methodologies based on SAP Hybris. I was working closely with business analysts and software testers. My main responsibilities were beyond development and testing to participate in the process of analysing business requirements as a developer. ",endMonthYear:"August 2017",location:"Wroc\u0142aw",startMonthYear:"Febuary 2016",title:"Junior Analyst / Developer"},{id:3,companyName:"Grupa Unity",description:"I was helping with the development of a online shop e-commerce system. Main skill used here is Java and related technologies",endMonthYear:"January 2016",location:"Wroc\u0142aw",startMonthYear:"April 2015",title:"Junior Java Developer"}],profilePicture:"url",vanityName:"alexander-dubois",languages:[{id:"1",language:"Polish",proficiency:"native-or-bilingual"},{id:"2",language:"German",proficiency:"full-professional"},{id:"3",language:"Russian",proficiency:"basic"}],skills:[{id:1,skill:"Java"},{id:2,skill:"Hybris"},{id:3,skill:"Spring"},{id:4,skill:"Hibernate"},{id:5,skill:"NoSQL"},{id:6,skill:"Java Enterprise Edition"},{id:7,skill:"Clean Code"},{id:8,skill:"Maven"},{id:9,skill:"Scala"},{id:10,skill:"Python"},{id:11,skill:"Spock Freamework"},{id:12,skill:"JUnit"}],certifications:[{id:1,name:"Java",number:"8734298"}],educations:[{id:1,schoolName:"AGH University of Science and Technology",fieldOfStudy:"Mechatronics, Robotics and Automation Engineering",startDate:2011,endDate:2015,degree:"Engineer's degree",activities:"",notes:""},{id:2,schoolName:"AGH University of Science and Technology",fieldOfStudy:"Mechatronics, Robotics and Automation Engineering",startDate:2015,endDate:2017,degree:"Master",activities:"",notes:""}],courses:[{id:1,name:"",authority:"",number:"",startDate:"",endDate:""}],volunteer:[{volunteerExperiences:"",id:1,organization:1,role:""}]}))},a.state={token:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalId=setTimeout(function(){document.body.querySelector(".main_page_content_container").classList.add("fade-appear-active")},20);var t=window.location.href;t=(t=t.replace("&state=987654321#/","")).replace("https://saraems.github.io/cv_creator/#/resume/?code=",""),console.log(t);var a={method:"POST",headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded",Host:"www.linkedin.com"},body:b.a.stringify({grant_type:"authorization_code",code:t,redirect_uri:"https://saraems.github.io/cv_creator",client_id:"77k3xcm0gm759e",client_secret:"rF7EW3ZgFJU48iGZ"})},n={method:"GET",headers:{"Access-Control-Allow-Origin":"https://saraems.github.io/cv_creator","Access-Control-Allow-Credentials":"true",Authorization:"Bearer"+this.state.token}};fetch("https://www.linkedin.com/oauth/v2/accessToken",a).then(function(e){return e.json()}).then(function(e){return e.access_token}).then(function(t){return e.setState({token:t})}).then(function(){return fetch("https://api.linkedin.com/v2/me?format=json",n).then(function(e){return e.json()}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})})}},{key:"render",value:function(){return i.a.createElement("div",{className:"main_page_container"},i.a.createElement("div",{className:"main_page_content_container fade-enter"},i.a.createElement("header",null,i.a.createElement("h1",null," Insert information"),i.a.createElement("p",null,"prepare information about your career path by yourself or use your LinkedIn account")),i.a.createElement("section",{className:"btns_container"},i.a.createElement(f.a,{to:"/form"},i.a.createElement("button",{className:"selection_btn btn_use_form",id:"use_your_own_data"},"Prepare your data")),i.a.createElement("button",{className:"selection_btn btn_use_LiIn",id:"use_linkedIn_data",onClick:this.responseLinkedin}," ",i.a.createElement("i",{className:"fab fa-linkedin linkedin"}," ")," Use your LinkedIn's data")),i.a.createElement("section",{className:"btn_container"},i.a.createElement(f.a,{to:"/resume"},i.a.createElement("button",{onClick:this.demoData,className:"selection_btn btn_use_LiIn",id:"use_your_own_data"},"Use demo data")))))}}]),t}(n.Component),v=a(10),N=(a(71),a(72),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"education form_single_block"},i.a.createElement("div",{className:"input_container"},i.a.createElement("label",{htmlFor:"schoolName_x"},"University"),i.a.createElement("input",{onChange:this.props.schoolName,name:"schoolName",type:"text",id:"schoolName_x"})),i.a.createElement("div",{className:"input_container"},i.a.createElement("label",{htmlFor:"fieldOfStudy_x"},"Field of study"),i.a.createElement("input",{onChange:this.props.fieldOfStudy,name:"fieldOfStudy_x",type:"text",id:"fieldOfStudy_x"})),i.a.createElement("div",{className:"input_container"},i.a.createElement("label",{htmlFor:"fieldOfStudy_x"},"Year of beginning"),i.a.createElement("input",{onChange:this.props.startDate,name:"startDate",type:"number",id:"startDate_x"})),i.a.createElement("div",{className:"input_container"},i.a.createElement("label",{htmlFor:"endDate"},"Graduation year"),i.a.createElement("input",{onChange:this.props.endDate,name:"endDate",type:"number",id:"endDate_x"})),i.a.createElement("div",{className:"input_container"},i.a.createElement("label",{htmlFor:"degree"},"Obtained degree"),i.a.createElement("input",{onChange:this.props.degree,name:"degree",type:"text",id:"degree_x"})))}}]),t}(n.Component)),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).addEdu=function(e){a.setState({educations:[].concat(Object(v.a)(a.state.educations),[1])})},a.state={educations:[1]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"educations form_single_block"},i.a.createElement("p",null,"Education"),this.state.educations.map(function(t,a){return i.a.createElement(N,{id:a+1,schoolName:e.props.schoolName,fieldOfStudy:e.props.fieldOfStudy,startDate:e.props.startDate,endDate:e.props.endDate,degree:e.props.degree})}),i.a.createElement("button",{onClick:function(){e.addEdu(),e.props.createEducationObj()},className:"add_resume_info",id:"add_new_education_field_x"}," Add next school"))}}]),t}(n.Component),j=(a(73),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"skills form_single_block"},i.a.createElement("p",null,"Skills"),i.a.createElement("p1",null,"please separate your skills with a coma"),i.a.createElement("div",{className:"input_container"},i.a.createElement("textarea",{onChange:this.props.skills,name:"skills",id:"skills_list",placeholder:"please, separate your skills with comas"}," ")))}}]),t}(n.Component)),k=(a(74),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"language input_container"},i.a.createElement("input",{onChange:this.props.language,name:"language",type:"text",id:"language".concat(this.props.id)}),i.a.createElement("select",{onChange:this.props.proficiency,id:"languageProficiency".concat(this.props.id)},i.a.createElement("option",null,"elementary"),i.a.createElement("option",null,"limited-working"),i.a.createElement("option",null,"professional-working"),i.a.createElement("option",null,"full-professional"),i.a.createElement("option",null,"native-or-bilingual")))}}]),t}(n.Component)),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).addLang=function(){a.setState({languages:[].concat(Object(v.a)(a.state.languages),[1])})},a.state={languages:[1]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"languages form_single_block"},i.a.createElement("p",null,"Languages"),this.state.languages.map(function(t,a){return i.a.createElement(k,{id:a+1,language:e.props.language,proficiency:e.props.proficiency})}),i.a.createElement("button",{onClick:function(){e.props.createLanguageObj(),e.addLang()},className:"add_resume_info",id:"add_new_language_field"}," Add next language "))}}]),t}(n.Component),S=(a(75),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"position",id:"position_".concat(this.props.id)},i.a.createElement("div",{className:"input_container"},i.a.createElement("label",{htmlFor:"company_name"}," Company name"),i.a.createElement("input",{onChange:this.props.companyName,name:"company_name",type:"text",id:"company_name_".concat(this.props.id)})),i.a.createElement("div",{className:"input_container"},i.a.createElement("label",{htmlFor:"startMonthYear"},"Beginning date"),i.a.createElement("input",{onChange:this.props.startMonthYear,name:"startMonthYear",type:"text",id:"startMonthYear_".concat(this.props.id),placeholder:"Month and year"})),i.a.createElement("div",{className:"input_container"},i.a.createElement("label",{htmlFor:"title"},"Your position at the company"),i.a.createElement("input",{onChange:this.props.title,name:"title",type:"text",id:"title_".concat(this.props.id)})),i.a.createElement("div",{className:"input_container"},i.a.createElement("label",{htmlFor:"position_location"},"Company location"),i.a.createElement("input",{onChange:this.props.positionLocation,name:"position_location",type:"text",id:"position_location_".concat(this.props.id)})),i.a.createElement("div",{className:"input_container"},i.a.createElement("label",{htmlFor:"endMonthYear"},"Finishing date"),i.a.createElement("input",{onChange:this.props.endMonthYear,name:"endMonthYear",type:"text",id:"endMonthYear_".concat(this.props.id),placeholder:"Month and year"})),i.a.createElement("div",{className:"input_container"},i.a.createElement("label",{htmlFor:"position_description"},"Description of your duties and success"),i.a.createElement("textarea",{onChange:this.props.positionDescription,name:"position_description",id:"position_description_".concat(this.props.id)}," ")))}}]),t}(n.Component)),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).addExperience=function(){a.setState({positions:[].concat(Object(v.a)(a.state.positions),[1])})},a.state={positions:[1]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"positions form_single_block"},i.a.createElement("p",null,"Work experience"),this.state.positions.map(function(t,a){return i.a.createElement(S,{id:a+1,companyName:e.props.companyName,startMonthYear:e.props.startMonthYear,title:e.props.title,positionLocation:e.props.positionLocation,endMonthYear:e.props.endMonthYear,positionDescription:e.props.positionDescription})}),i.a.createElement("button",{onClick:function(){e.addExperience(),e.props.createPositionObj()},className:"add_resume_info",id:"add_new_position_field"}," Add next work experience "))}}]),t}(n.Component),w=(a(76),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"general_data form_single_block"},i.a.createElement("p",null,"General information"),i.a.createElement("div",{className:"input_container"},i.a.createElement("label",{htmlFor:"name"},"First Name"),i.a.createElement("input",{onChange:this.props.name,name:"name",type:"text",id:"name"})),i.a.createElement("div",{className:"input_container"},i.a.createElement("label",{htmlFor:"surname"},"Surname"),i.a.createElement("input",{onChange:this.props.surname,name:"surname",type:"text",id:"surname"})),i.a.createElement("div",{className:"input_container"},i.a.createElement("label",{htmlFor:"current_position"},"Current position / professional title"),i.a.createElement("input",{onChange:this.props.currentPosition,name:"current_position",type:"text",id:"current_position"})),i.a.createElement("div",{className:"input_container"},i.a.createElement("label",{htmlFor:"phone"},"Phone number"),i.a.createElement("input",{onChange:this.props.phoneNumber,name:"phone",type:"number"})),i.a.createElement("div",{className:"input_container"},i.a.createElement("label",{htmlFor:"email"},"email"),i.a.createElement("input",{onChange:this.props.email,name:"email",type:"text"})),i.a.createElement("div",{className:"input_container"},i.a.createElement("label",{htmlFor:"summary"},"Summary / yours presentation"),i.a.createElement("textarea",{onChange:this.props.summary,name:"summary",id:"summary"}," ")))}}]),t}(n.Component)),M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).name=function(e){a.setState({name:e.target.value})},a.surname=function(e){a.setState({surname:e.target.value})},a.currentPosition=function(e){a.setState({position:e.target.value})},a.summary=function(e){a.setState({summary:e.target.value})},a.phoneNumber=function(e){a.setState({phoneNumber:e.target.value})},a.email=function(e){a.setState({email:e.target.value})},a.companyName=function(e){a.setState({companyName:e.target.value})},a.startMonthYear=function(e){a.setState({startMonthYear:e.target.value})},a.title=function(e){a.setState({title:e.target.value})},a.positionLocation=function(e){a.setState({location:e.target.value})},a.endMonthYear=function(e){a.setState({endMonthYear:e.target.value})},a.positionDescription=function(e){a.setState({description:e.target.value})},a.createPositionObj=function(){var e={companyName:a.state.companyName,startMonthYear:a.state.startMonthYear,title:a.state.title,location:a.state.location,endMonthYear:a.state.endMonthYear,description:a.state.description};a.state.languages===[]?a.setState({positions:[e]}):a.setState({positions:[].concat(Object(v.a)(a.state.positions),[e])})},a.skills=function(e){a.setState({skills:e.target.value}),console.log(e.target.value)},a.schoolName=function(e){a.setState({schoolName:e.target.value})},a.fieldOfStudy=function(e){a.setState({fieldOfStudy:e.target.value})},a.startDate=function(e){a.setState({startDate:e.target.value})},a.endDate=function(e){a.setState({endDate:e.target.value})},a.degree=function(e){a.setState({degree:e.target.value})},a.createEducationObj=function(){var e={schoolName:a.state.schoolName,fieldOfStudy:a.state.fieldOfStudy,startDate:a.state.startDate,endDate:a.state.endDate,degree:a.state.degree};a.state.languages===[]?a.setState({educations:[e]}):a.setState({educations:[].concat(Object(v.a)(a.state.educations),[e])})},a.language=function(e){a.setState({language:e.target.value})},a.proficiency=function(e){a.setState({proficiency:e.target.value})},a.createLanguageObj=function(){var e={language:a.state.language,proficiency:a.state.proficiency};a.state.languages===[]?a.setState({languages:[e]}):a.setState({languages:[].concat(Object(v.a)(a.state.languages),[e])})},a.submit=function(){for(var e=a.state.skills.split(", "),t=[],n=0;n<e.length;n++)t.push({skill:e[n]});a.createEducationObj();var i=[].concat(Object(v.a)(a.state.languages),[{language:a.state.language,proficiency:a.state.proficiency}]),r=[].concat(Object(v.a)(a.state.educations),[{schoolName:a.state.schoolName,fieldOfStudy:a.state.fieldOfStudy,startDate:a.state.startDate,endDate:a.state.endDate,degree:a.state.degree}]),o=[].concat(Object(v.a)(a.state.positions),[{companyName:a.state.companyName,startMonthYear:a.state.startMonthYear,title:a.state.title,location:a.state.location,endMonthYear:a.state.endMonthYear,description:a.state.description}]),s={firstName:a.state.name,lastName:a.state.surname,headline:a.state.position,summary:a.state.summary,skills:t,educations:r,positions:o,languages:i};localStorage.setItem("personData",JSON.stringify(s)),console.log(s)},a.state={name:"",surname:"",position:"",summary:"",phoneNumber:"",email:"",positions:[],companyName:"",startMonthYear:"",title:"",location:"",endMonthYear:"",description:"",educations:[],schoolName:"",fieldOfStudy:"",startDate:"",endDate:"",degree:"",skills:"",languages:[],language:"",proficiency:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.intervalId=setTimeout(function(){document.body.querySelector(".main_page_content_container").classList.add("fade-appear-active")},20)}},{key:"render",value:function(){return i.a.createElement("div",{className:"form_page_container"},i.a.createElement("div",{className:"main_page_content_container fade-enter"},i.a.createElement("div",{className:"form_header"},i.a.createElement("p",null,"Prepare information for your resume")),i.a.createElement("main",{className:"form_container"},i.a.createElement("div",{className:"form"},i.a.createElement(w,{name:this.name,surname:this.surname,currentPosition:this.currentPosition,summary:this.summary,phoneNumber:this.phoneNumber,email:this.email}),i.a.createElement(x,{companyName:this.companyName,startMonthYear:this.startMonthYear,title:this.title,positionLocation:this.positionLocation,endMonthYear:this.endMonthYear,positionDescription:this.positionDescription,createPositionObj:this.createPositionObj}),i.a.createElement(D,{proficiency:this.proficiency,language:this.language,createLanguageObj:this.createLanguageObj}),i.a.createElement(j,{skills:this.skills}),i.a.createElement(O,{schoolName:this.schoolName,fieldOfStudy:this.fieldOfStudy,startDate:this.startDate,endDate:this.endDate,degree:this.degree,createEducationObj:this.createEducationObj})),i.a.createElement(f.a,{to:"/resume"},i.a.createElement("button",{onClick:this.submit,type:"submit",className:"create_resume_btn"}," Create your Resume ")))))}}]),t}(n.Component),C=(a(77),a(78),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.props.personData),i.a.createElement("div",{className:"template_minimal",id:"myMm"},i.a.createElement("header",null,i.a.createElement("div",{className:"template_minimal_user_name"},this.props.personData.firstName," ",this.props.personData.lastName),i.a.createElement("div",{className:"template_minimal_user_position"},this.props.personData.headline),i.a.createElement("div",{className:"decoration_line"}," ")),i.a.createElement("main",{className:"main_page"},i.a.createElement("div",{className:"template_minimal_left_panel_container"},i.a.createElement("div",{className:"template_minimal_education"},i.a.createElement("h1",null,"Education"),this.props.personData.educations.map(function(e,t){return i.a.createElement("div",{key:t,className:"template_minimal_education_container"},i.a.createElement("h3",null," ",e.schoolName," "),i.a.createElement("p",{className:"left_panel"}," ",e.degree," in ",e.fieldOfStudy," "),i.a.createElement("h4",null," ",e.startDate," - ",e.endDate),i.a.createElement("br",null))})),i.a.createElement("div",{className:"template_minimal_expertise"},i.a.createElement("h1",null,"Expertise"),i.a.createElement("div",{className:"template_minimal_expertise_container"},i.a.createElement("h3",null,"Skills"),i.a.createElement("ul",null,this.props.personData.skills.map(function(e,t){return i.a.createElement("li",{key:t}," ",e.skill," / ")}))),i.a.createElement("div",{className:"template_minimal_expertise_container"},i.a.createElement("h3",null,"Languages"),i.a.createElement("ul",null,this.props.personData.languages.map(function(e,t){return i.a.createElement("li",{key:t},e.language,": ",e.proficiency)})))),i.a.createElement("div",{className:"template_minimal_contact"},i.a.createElement("h1",null,"Contact"),i.a.createElement("p",{className:"left_panel"},this.props.personData.phoneNumber),i.a.createElement("h4",null,this.props.personData.email))),i.a.createElement("div",{className:"template_minimal_right_panel_container"},i.a.createElement("div",{className:"template_minimal_profile"},i.a.createElement("h1",null,"Profile"),i.a.createElement("p",null," ",this.props.personData.summary," ")),i.a.createElement("div",{className:"template_minimal_experience"},i.a.createElement("h1",null,"Experience"),this.props.personData.positions.map(function(e,t){return i.a.createElement("div",{className:"template_minimal_experience_position_container"},i.a.createElement("h3",null," ",e.title," "),i.a.createElement("h4",null,i.a.createElement("span",{id:"experience_company_name"},"  ",e.companyName," ")," / ",i.a.createElement("span",{id:"experience_start_date"},e.startMonthYear)," - ",i.a.createElement("span",null,e.endMonthYear)),i.a.createElement("p",null," ",e.description," "))})))))}}]),t}(n.Component)),Y=a(48),P=a.n(Y),L=a(49),F=a.n(L),I=(a(108),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.props.personData),i.a.createElement("div",{className:"template_classic",id:"myMm"},i.a.createElement("header",null,i.a.createElement("h1",null," ",this.props.personData.firstName," ",this.props.personData.lastName," "),i.a.createElement("p",null," ",this.props.personData.headline," ")),i.a.createElement("main",null,i.a.createElement("div",{className:"left_panel"},i.a.createElement("div",{className:"template_classic_info_box contact"},i.a.createElement("h1",null,"Contact"),i.a.createElement("p",null,this.props.personData.phoneNumber),i.a.createElement("h4",null,this.props.personData.email)),i.a.createElement("div",{className:"template_classic_info_box education"},i.a.createElement("h1",null,"Education"),this.props.personData.educations.map(function(e,t){return i.a.createElement("div",{id:t,className:"template_classic_education_field"},i.a.createElement("h3",null," ",e.schoolName," "),i.a.createElement("p",null," ",e.degree," in ",e.fieldOfStudy," "),i.a.createElement("h4",null," ",e.startDate," - ",e.endDate))})),i.a.createElement("div",{className:"template_classic_info_box expertise"},i.a.createElement("h1",null,"Expertise"),i.a.createElement("div",{className:"template_classic_skills_container"},i.a.createElement("h3",null,"Skills"),this.props.personData.skills.map(function(e){return i.a.createElement("p",null," ",e.skill," / ")})),i.a.createElement("div",{className:"template_classic_languages_container"},i.a.createElement("h3",null,"Languages"),this.props.personData.languages.map(function(e){return i.a.createElement("p",null,i.a.createElement("span",null,e.language,":")," ",e.proficiency)})))),i.a.createElement("div",{className:"right_panel"},i.a.createElement("div",{className:"template_classic_profile"},i.a.createElement("h1",null,"Profile"),i.a.createElement("p",null," ",this.props.personData.summary," ")),i.a.createElement("div",{className:"template_minimal_experience"},i.a.createElement("h1",null,"Experience"),this.props.personData.positions.map(function(e,t){return i.a.createElement("div",{className:"template_classic_experience_position_container"},i.a.createElement("h3",null," ",e.title," "),i.a.createElement("h4",null,i.a.createElement("span",{id:"experience_company_name"},"  ",e.companyName," ")," / ",i.a.createElement("span",{id:"experience_start_date"},e.startMonthYear)," - ",i.a.createElement("span",null,e.endMonthYear)),i.a.createElement("p",null," ",e.description," "))})))))}}]),t}(n.Component)),A=(a(109),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.props.personData),i.a.createElement("div",{className:"template_sides",id:"myMm"},i.a.createElement("header",null,i.a.createElement("h1",null," ",this.props.personData.firstName," ",this.props.personData.lastName," "),i.a.createElement("h4",null," ",this.props.personData.headline,"  ")),i.a.createElement("main",{className:"main_page"},i.a.createElement("div",{className:"template_sides_left_panel"},i.a.createElement("div",{className:"panel_fields_container left"},i.a.createElement("div",{className:"right_panel"},i.a.createElement("div",{className:"template_sides_profile"},i.a.createElement("h1",null,"Profile"),i.a.createElement("p",null," ",this.props.personData.summary," ")),i.a.createElement("div",{className:"template_minimal_experience"},i.a.createElement("h1",null,"Experience"),this.props.personData.positions.map(function(e,t){return i.a.createElement("div",{className:"template_sides_experience_position_container"},i.a.createElement("h3",null," ",e.title," "),i.a.createElement("h4",null,i.a.createElement("span",{id:"experience_company_name"},"  ",e.companyName," ")," / ",i.a.createElement("span",{id:"experience_start_date"},e.startMonthYear)," - ",i.a.createElement("span",null,e.endMonthYear)),i.a.createElement("p",null," ",e.description," "))}))))),i.a.createElement("div",{className:"template_sides_right_panel"},i.a.createElement("div",{className:"panel_fields_container right"},i.a.createElement("div",{className:"contact"},i.a.createElement("h1",null,"Contact"),i.a.createElement("p",null,this.props.personData.phoneNumber),i.a.createElement("h4",null,this.props.personData.email)),i.a.createElement("div",{className:"education"},i.a.createElement("h1",null,"Education"),this.props.personData.educations.map(function(e,t){return i.a.createElement("div",{id:t,className:"template_classic_education_field"},i.a.createElement("h3",null," ",e.schoolName," "),i.a.createElement("p",null," ",e.degree," in ",e.fieldOfStudy," "),i.a.createElement("h4",null," ",e.startDate," - ",e.endDate))})),i.a.createElement("div",{className:"expertise"},i.a.createElement("h1",null,"Expertise"),i.a.createElement("div",{className:"template_sides_skills_container"},i.a.createElement("h3",null,"Skills"),this.props.personData.skills.map(function(e){return i.a.createElement("p",null," ",e.skill," / ")})),i.a.createElement("div",{className:"template_classic_languages_container"},i.a.createElement("h3",null,"Languages"),this.props.personData.languages.map(function(e){return i.a.createElement("p",null,i.a.createElement("span",null,e.language,":")," ",e.proficiency)})))))))}}]),t}(n.Component)),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).pxToMm=function(e){return Math.floor(e/document.getElementById("myMm").offsetHeight)},a.mmToPx=function(e){return document.getElementById("myMm").offsetHeight*e},a.range=function(e,t){return Array(t-e).join(0).split(0).map(function(t,a){return a+e})},a.print=function(){var e=document.getElementById("myMm"),t=a.pxToMm(e.offsetHeight),n=a.mmToPx(297),i=t<=297?1:Math.floor(t/297)+1;console.log({input:e,inputHeightMm:t,a4HeightMm:297,a4HeightPx:n,numPages:i,range:a.range(0,i),comp:t<=297,inputHeightPx:e.offsetHeight}),F()(e).then(function(e){var t=e.toDataURL("image/png"),a=new P.a;a.addImage(t,"PNG",0,0),a.save("myMm.pdf")})},a.state={personData:JSON.parse(localStorage.getItem("personData"))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return"class"===localStorage.template?i.a.createElement("div",{className:"cv_page"},i.a.createElement("section",{className:"cv_container",id:"capture"},i.a.createElement(I,{personData:this.state.personData})),i.a.createElement("button",{id:"singlePage",className:"selection_btn print_cv_btn",onClick:this.print},"Print")):"min"===localStorage.template?i.a.createElement("div",{className:"cv_page"},i.a.createElement("section",{className:"cv_container",id:"capture"},i.a.createElement(C,{personData:this.state.personData})),i.a.createElement("button",{id:"singlePage",className:"selection_btn print_cv_btn",onClick:this.print},"Print")):"sides"===localStorage.template?i.a.createElement("div",{className:"cv_page"},i.a.createElement("section",{className:"cv_container",id:"capture"},i.a.createElement(A,{personData:this.state.personData})),i.a.createElement("button",{id:"singlePage",className:"selection_btn print_cv_btn",onClick:this.print},"Download")):void 0}}]),t}(n.Component),H=(a(110),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"main_page_container"},i.a.createElement("header",null,i.a.createElement("h1",null,"Page not found")))}}]),t}(n.Component)),J=a(114),G=a(116),U=a(117),B=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(J.a,null,i.a.createElement(G.a,null,i.a.createElement(U.a,{exact:!0,path:"/",component:E}),i.a.createElement(U.a,{path:"/templates",component:g}),i.a.createElement(U.a,{path:"/data",component:y}),i.a.createElement(U.a,{path:"/form",component:M}),i.a.createElement(U.a,{path:"/resume",component:T}),i.a.createElement(U.a,{path:"*",component:H})))}}]),t}(n.Component),q=a(115);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(q.a,{basename:"/cv_creator"},i.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},51:function(e,t,a){e.exports=a(112)},56:function(e,t,a){},57:function(e,t,a){},60:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.23e791b9.chunk.js.map