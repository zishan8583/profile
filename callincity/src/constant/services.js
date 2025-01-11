const services = [
        {
          id:1,
          title:"Appliance Repair & Service",
          type:'appliance',
          img: require('../constant/images/ac-repair.png'),
        },
        {
          id:2,
          title:"Pest Control",
          type:'pestControl',
          img: require('../constant/images/pest-control.png'),
        },
        {
          id:3,
          title:"Home / Office Services",
          type:'plumber',
          img: require('../constant/images/electrician.png'),
        },
        {
          id:3,
          title:"Painting",
          type:'painting',
          img: require('../constant/images/painting-contractor.png'),
        },
          
      ]
export default services;


export const appliance = [
  {title:'AC Service & Repairs',img: require('../constant/images/ac-repair.png'), type:'ac'},
  {title:'Chimney',img: require('../constant/images/chimney-repair.png'), type:'chimney'},
  {title:'Geyser',img: require('../constant/images/geyser-repair.png'), type:'geyser'},
  {title:'Refrigerator',img: require('../constant/images/fridge-repair.png'),type:'refrigerator'},
  {title:'TV',img: require('../constant/images/laptop-repair.png'),type:'tv'},
  {title:'Washing Maschine',img: require('../constant/images/washing-machine-repair.png'),type:'washingMaschine'},
  {title:'Water Purifier',img: require('../constant/images/water-purifier-repair.png'),type:'waterPurifier'},
]

export const plumber = [
  {title:'Electricians',img: require('../constant/images/electrician.png'), type:'electrician'},
  {title:'Plumber',img: require('../constant/images/plumber.png'), type:'plumber'},
  {title:'Carpenters',img: require('../constant/images/carpenter.png'), type:'carpenter'},
  {title:'Water Proofing',img: require('../constant/images/waterproofing.png'), type:'waterProofing'},
  {title:'Sofa Cleaning',img: require('../constant/images/sofa-cleaning.png'), type:'sofaCleaning'},
]

export const pestControl = [
  {title:'Cockroach, ant & Genereal',img: require('../constant/images/pest-control.png'), type:'cockroach'},
  {title:'Termite Control',img: require('../constant/images/pest-control.png'), type:'termite'},
  {title:'Bed Bugs Control', img: require('../constant/images/pest-control.png'), type:'bug'},
]

export const painting = [
  {title:'Painting',img: require('../constant/images/painting-contractor.png'), type:'painting'},
 
]



export const data = 
  {
    ac:{
      serviceTitle:'Air Conditionar',
      servicRating: 4.8,
      services:[
      {
        id:1,
        title:'Service',
        img: require('../constant/images/electrician.png'),
        serviceType:[
          {
            name:'Deep Clean AC service',
            rating: 4.84,
            price:500,
            info: ["Get 2x deeper dust removal with unique form jet Technology", 
              "Recomended for AC Serviced with more then 6 month ago"]
          },
          {
            name:'Deep Clean AC service (split)',
            rating: 4.9,
            price:500,
            info: ["Get optimum deeper dust removal with unique form jet Technology", 
              "Recomended for AC Serviced with more then 6 month ago"]
          },
        ]
      },
      {
        id:2,
        title:'Repair',
        img: require('../constant/images/electrician.png'),
        serviceType:[
          {
            name:'AC Repair',
            rating: 4,
            price:500,
            info: ["Get 2x deeper dust removal with unique form jet Technology", 
              "Recomended for AC Serviced with more then 6 month ago"]
          },
          {
            name:'Deep Clean AC service (split)',
            rating: 4.9,
            info: ["Get optimum deeper dust removal with unique form jet Technology", 
              "Recomended for AC Serviced with more then 6 month ago"]
          },
        ]
      },
    
    ],},
    chimney:{
      serviceTitle:'Chimney',
      servicRating: 4.73,
      services:[
      {
        id:3,
        title:'Basic/Wall Mounted Chimney',
        img: require('../constant/images/chimney-repair.png'),
        serviceType:[
          {
            name:'Repair',
            rating: 4.09,
            price:500,
            info: ["Visiting charges", 
              "complete diagnosis of chimney and repairing"]
          },
          {
            name:'Basic Cleaning',
            rating: 4.81,
            price:500,
            info: ["Get optimum deeper dust removal with unique form jet Technology", 
              "Recomended for AC Serviced with more then 6 month ago"]
          },
          {
            name:'Deep Cleaning',
            rating: 4.81,
            price:500,
            info: ["Get optimum deeper dust removal with unique form jet Technology", 
              "Recomended for AC Serviced with more then 6 month ago"]
          },
          {
            name:'Installation',
            rating: 4.81,
            price:500,
            info: ["Get optimum deeper dust removal with unique form jet Technology", 
              "Recomended for AC Serviced with more then 6 month ago"]
          },
          {
            name:'Dismantle',
            rating: 4.81,
            price:500,
            info: ["Get optimum deeper dust removal with unique form jet Technology", 
              "Recomended for AC Serviced with more then 6 month ago"]
          },
        ]
      },
      {
        title:'Island Chimney',
        img: require('../constant/images/chimney-repair.png'),
        serviceType:[
          {
            name:'Repair',
            rating: 4.09,
            price:500,
            info: ["Visiting charges", 
              "complete diagnosis of chimney and repairing"]
          },
          {
            name:'Basic Cleaning',
            rating: 4.81,
            price:500,
            info: ["Get optimum deeper dust removal with unique form jet Technology", 
              "Recomended for AC Serviced with more then 6 month ago"]
          },
          {
            name:'Deep Cleaning',
            rating: 4.81,
            price:500,
            info: ["Get optimum deeper dust removal with unique form jet Technology", 
              "Recomended for AC Serviced with more then 6 month ago"]
          },
          {
            name:'Installation',
            rating: 4.81,
            price:500,
            info: ["Get optimum deeper dust removal with unique form jet Technology", 
              "Recomended for AC Serviced with more then 6 month ago"]
          },
          {
            name:'Dismantle',
            rating: 4.81,
            price:500,
            info: ["Get optimum deeper dust removal with unique form jet Technology", 
              "Recomended for AC Serviced with more then 6 month ago"]
          },
        ]
      },
      
    ],},
    geyser:{
      serviceTitle:'Geyser',
      servicRating: 4.8,
      services:[
      {
        id:3,
        title:'Repair',
        img: require('../constant/images/geyser-repair.png'),
        serviceType:[
          {
            name:'Geyser Checkup',
            rating: 4.84,
            price:500,
            info: ["Get 2x deeper dust removal with unique form jet Technology", 
              "Recomended for AC Serviced with more then 6 month ago"]
          },
        ]
      },
      {
        id:5,
        title:'Servicing',
        img: require('../constant/images/geyser-repair.png'),
        serviceType:[
          {
            name:'Geyser Servicing',
            rating: 4,
            price:500,
            info: ["Get 2x deeper dust removal with unique form jet Technology", 
              "Recomended for AC Serviced with more then 6 month ago"]
          },
        ]
      },
      {
        id:5,
        title:'Installation & Uninstallation',
        img: require('../constant/images/geyser-repair.png'),
        serviceType:[
          {
            name:'Geyser Installation',
            rating: 4,
            price:500,
            info: ["Spare part rates applicable as per rate Card",] 
          },
          {
            name:'Geyser Uninstallation',
            rating: 4.9,
            info: ["Spare part rates applicable as per rate Card",] 
          },
        ]
      },
    
    ],},
  tv: {
    serviceTitle: "Franecki Inc",
    serviceRating: 1,
    services:[ {
      id: 4,
      title: "Profound client-server concept",
      img:require('../constant/images/ac-repair.png'),
      serviceType: [
        {
          s_id: 1,
          name: "Virtual attitude-oriented budgetary management",
          rating: 2,
          price: 147.28,
          info: [
            "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
            "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus."
          ]
        }
      ]
    }]
  }
, 
  washingMaschine: {
    serviceTitle: "McLaughlin Group",
    serviceRating: 5,
    services: [{
      id: 5,
      title: "Cloned multimedia model",
      img:require('../constant/images/ac-repair.png'),
      serviceType: [
        {
          s_id: 1,
          name: "Implemented multi-tasking encoding",
          rating: 5,
          price: 107.00,
          info: [
            "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
            "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
          ]
        },
        {
          s_id: 2,
          name: "Decentralized well-modulated analyzer",
          rating: 1,
          price: 496.44,
          info: [
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
            "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
          ]
        }
      ]
    }]
  }
, 
  waterPurifier: {
    serviceTitle: "McGlynn-Stokes",
    serviceRating: 3,
    services: [{
      id: 6,
      title: "Realigned global encoding",
      img:require('../constant/images/ac-repair.png'),
      serviceType: [
        {
          s_id: 1,
          name: "Re-engineered clear-thinking flexibility",
          rating: 3,
          price: 141.64,
          info: [
            "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
            "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
          ]
        },
        {
          s_id: 2,
          name: "De-engineered contextually-based database",
          "rating": 4,
          "price": 289.89,
          "info": [
            "Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
            "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci."
          ]
        },
        {
          "s_id": 3,
          "name": "Optimized solution-oriented instruction set",
          "rating": 4,
          "price": 482.04,
          "info": [
            "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
          ]
        },
        {
          "s_id": 4,
          "name": "Automated neutral middleware",
          "rating": 3,
          "price": 459.23,
          "info": [
            "Curabitur convallis.",
            "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum."
          ]
        }
      ]
    }]
  }
, 
  cockroach: {
    serviceTitle: "Stark-McClure",
    serviceRating: 2,
    services: [{
      id: 7,
      title: "Ameliorated asymmetric encoding",
      img:require('../constant/images/ac-repair.png'),
      serviceType: [
        {
          s_id: 1,
          name: "Multi-tiered content-based instruction set",
          rating: 5,
          price: 170.01,
          info: [
            "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
            "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum."
          ]
        },
        {
          s_id: 2,
          name: "Multi-channelled national instruction set",
          rating: 2,
          price: 146.92,
          info: [
            "Aenean sit amet justo. Morbi ut odio.",
            "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue."
          ]
        },
        {
          s_id: 3,
          name: "Horizontal fault-tolerant architecture",
          rating: 3,
          price: 411.00,
          info: [
            "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
            "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
          ]
        },
        {
          s_id: 4,
          name: "Enhanced national firmware",
          rating: 2,
          price: 180.98,
          info: [
           "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
            "Etiam justo."
          ]
        }
      ]
    }]
  }
, 
  termite: {
    serviceTitle: "Kris, Wolff and Mitchell",
    serviceRating: 1,
    services: [{
      id: 8,
      title: "Phased foreground system engine",
      img:require('../constant/images/ac-repair.png'),
      serviceType: [
        {
          s_id: 1,
          name: "Optimized incremental database",
          rating: 2,
          price: 223.54,
          info: [
            "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
            "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti."
          ]
        },
        {
          s_id: 2,
          name: "Programmable 4th generation standardization",
          rating: 5,
          price: 210.69,
          info: [
            "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
            "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus."
          ]
        },
        {
          s_id: 3,
          name: "User-friendly grid-enabled data-warehouse",
          rating: 1,
          price: 185.82,
          info: [
            "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi."
          ]
        },
        {
          s_id: 4,
          name: "Horizontal motivating access",
          rating: 2,
          price: 178.66,
          info: [
            "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
            "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam."
          ]
        },
        {
          s_id: 5,
          name: "Centralized 6th generation moderator",
          rating: 1,
          price: 452.96,
          info: [
            "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
            "Donec quis orci eget orci vehicula condimentum."
          ]
        }
      ]
    }]
  }
, 
  bug: {
    serviceTitle: "Weber-Buckridge",
    serviceRating: 2,
    services: [{
      id: 9,
      title: "Up-sized scalable archive",
      img:require('../constant/images/ac-repair.png'),
      serviceType: [
        {
          s_id: 1,
          name: "Team-oriented scalable infrastructure",
          rating: 5,
          price: 462.90,
          info: [
            "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
            "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus."
          ]
        },
        {
          s_id: 2,
          name: "Multi-channelled heuristic definition",
          rating: 4,
          price: 375.51,
          info: [
            "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
            "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem."
          ]
        }
      ]
    }]
  }
, 
  electrician: {
    serviceTitle: "Nienow LLC",
    serviceRating: 3,
    services: [{
      id: 10,
      title: "Advanced system-worthy policy",
      img:require('../constant/images/ac-repair.png'),
      serviceType: [
        {
          s_id: 1,
          name: "Innovative background secured line",
          rating: 2,
          price: 389.73,
          info: [
            "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
            "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla."
          ]
        },
        {
          s_id: 2,
          name: "Up-sized value-added framework",
          rating: 4,
          price: 277.30,
          info: [
            "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
            "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum."
          ]
        },
        {
          s_id: 3,
          name: "Implemented national benchmark",
          rating: 5,
          price: 444.90,
          info: [
            "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
            "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue."
          ]
        },
        {
          s_id: 4,
          name: "Object-based exuding paradigm",
          rating: 4,
          price: 196.47,
          info: [
            "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
            "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla."
          ]
        }
      ]
    }]
  }
, 
  carpenter: {
    serviceTitle: "Maggio, Herzog and Barrows",
    serviceRating: 4,
    services: [{
      id: 11,
      title: "Open-architected 5th generation analyzer",
      img:require('../constant/images/ac-repair.png'),
      serviceType: [
        {
          s_id: 1,
          name: "Sharable systemic synergy",
          rating: 5,
          price: 285.75,
          info: [
            "Nulla tellus.",
            "Nullam sit amet turpis elementum ligula vehicula consequat."
          ]
        },
        {
          s_id: 2,
          name: "Optimized dynamic capability",
          rating: 1,
          price: 239.21,
          info: [
            "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
            "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna."
          ]
        },
        {
          s_id: 3,
          name: "Monitored motivating process improvement",
          rating: 4,
          price: 150.20,
          info: [
            "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
            "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa."
          ]
        }
      ]
    }]
  }
, 
  plumber: {
    serviceTitle: "Shields LLC",
    serviceRating: 1,
    services: [{
      id: 12,
      title: "Balanced explicit open architecture",
      img:require('../constant/images/ac-repair.png'),
      serviceType: [
        {
          s_id: 1,
          name: "Seamless dynamic process improvement",
          rating: 5,
          price: 120.09,
          info: [
            "Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
            "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum."
          ]
        },
        {
          s_id: 2,
          name: "Face to face eco-centric alliance",
          rating: 2,
          price: 437.04,
          info: [
            "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
            "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
          ]
        }
      ]
    }]
  }
, 
  waterProofing: {
    serviceTitle: "Schaden Group",
    serviceRating: 2,
    services: [{
      id: 13,
      title: "Synergized system-worthy groupware",
      img:require('../constant/images/ac-repair.png'),
      serviceType: [
        {
          s_id: 1,
          name: "Seamless heuristic hardware",
          rating: 5,
          price: 162.33,
          info: [
            "Praesent lectus.",
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc."
          ]
        }
      ]
    }]
  }
, 
  sofaCleaning: {
    serviceTitle: "Bode-Sanford",
    serviceRating: 5,
    services: [{
      id: 14,
      title: "Inverse content-based encryption",
      img:require('../constant/images/ac-repair.png'),
      serviceType: [
        {
          s_id: 1,
          name: "Phased secondary approach",
          rating: 3,
          price: 169.98,
          info: [
            "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
            "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst."
          ]
        },
        {
          s_id: 2,
          name: "Switchable 24/7 access",
          rating: 1,
          price: 487.62,
          info: [
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
            "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus."
          ]
        },
        {
          s_id: 3,
          name: "Re-contextualized bottom-line utilisation",
          rating: 3,
          price: 121.98,
          info: [
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
            "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          ]
        },
        {
          s_id: 4,
          name: "Future-proofed background encoding",
          rating: 2,
          price: 214.82,
          info: [
            "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
            "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros."
          ]
        },
        {
          s_id: 5,
          name: "Enhanced cohesive data-warehouse",
          rating: 3,
          price: 176.58,
          info: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
            "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt."
          ]
        }
      ]
    }]
  }
, 
  painting: {
    serviceTitle: "Swift, Greenfelder and Bradtke",
    serviceRating: 2,
    services: [{
      id: 15,
      title: "Visionary zero defect pricing structure",
      img:require('../constant/images/ac-repair.png'),
      serviceType: [
        {
          s_id: 1,
          name: "Expanded composite circuit",
          rating: 3,
          price: 345.56,
          info: [
            "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
            "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla."
          ]
        },
        {
          s_id: 2,
          name: "Cloned hybrid challenge",
          rating: 1,
          price: 286.66,
          info: [
            "Pellentesque at nulla.",
            "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
          ]
        },
        {
          s_id: 3,
          name: "Profound needs-based artificial intelligence",
          rating: 2,
          price: 145.94,
          info: [
            "Nulla ut erat id mauris vulputate elementum.",
            "Morbi ut odio."
          ]
        },
        {
          s_id: 4,
          name: "Synchronised 6th generation interface",
          rating: 5,
          price: 209.22,
          info: [
            "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
            "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi."
          ]
        }
      ]
    }]
  }
, 
  refrigerator: {
    serviceTitle: "Becker LLC",
    serviceRating: 2,
    services: [{
      id: 16,
      title: "Assimilated clear-thinking encoding",
      img:require('../constant/images/ac-repair.png'),
      serviceType: [
        {
          s_id: 1,
          name: "Multi-tiered solution-oriented hub",
          rating: 1,
          price: 236.77,
          info: [
            "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
            "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis."
          ]
        },
        {
          s_id: 2,
          name: "Extended real-time capability",
          rating: 4,
          price: 401.94,
          info: [
            "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
            "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
          ]
        },
        {
          s_id: 3,
          name: "Pre-emptive transitional support",
          rating: 4,
          price: 318.90,
          info: [
            "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet."
          ]
        },
        {
          s_id: 4,
          name: "Proactive dedicated superstructure",
          rating: 5,
          price: 486.70,
          info: [
            "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
            "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
          ]
        }
      ]
    }]
  }

}
