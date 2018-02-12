const dataList = [
    {
      "job_no": 12024,
      "name": "Home Of Cycling - Amenities",
      "address": "-37.8896326,175.4339056",
      "job_floor_area": 3000,
      "steel_detailing": "Yes",
      "total_weight": 200,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "Yes",
      "image": "https://www.dropbox.com/s/x2rtkaqvsvaab76/P1010065.JPG?dl=0"
    },
    {
      "job_no": 12037,
      "name": "Pongakawa Action Centre",
      "address": "-37.8375063,176.4747275",
      "job_floor_area": 600,
      "steel_detailing": "Yes",
      "total_weight": 25,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/enzp6xp51l5ye74/P1000893.JPG?dl=0"
    },
    {
      "job_no": 12080,
      "name": "Tuapeka Aquatic Centre",
      "address": "-45.921850, 169.688409",
      "job_floor_area": 880,
      "steel_detailing": "No",
      "total_weight": 16,
      "precast_detailing": "No",
      "panel_quantity": 25,
      "structural_drafting": "Yes",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/me5dshtpcic7n2m/2015-10-09%2012.08.30.jpg?dl=0"
    },
    {
      "job_no": 13019,
      "name": "Te Wairoa School",
      "address": "-39.0414559,177.4176526",
      "job_floor_area": 1400,
      "steel_detailing": "Yes",
      "total_weight": 38,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/ep63favm5t2sip0/IMG_8600.JPG?dl=0"
    },
    {
      "job_no": 13020,
      "name": "Bunnings New Lynn",
      "address": "-36.909742, 174.677840",
      "job_floor_area": 12000,
      "steel_detailing": "Yes",
      "total_weight": 345,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/w1uxhri4g1xsnfe/P1020367.JPG?dl=0"
    },
    {
      "job_no": 13022,
      "name": "Racecourse Rd - Block A",
      "address": "-43.538379, 172.547404",
      "job_floor_area": 5000,
      "steel_detailing": "Yes",
      "total_weight": 60,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/sh59z7zosm09frl/P1020189.JPG?dl=0"
    },
    {
      "job_no": 13046,
      "name": "APL - Hamilton",
      "address": "-37.748441, 175.238546",
      "job_floor_area": 6000,
      "steel_detailing": "Yes",
      "total_weight": 216,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/0c3rf8zxpfdksfn/APL%20Hamilton%201.PNG?dl=0"
    },
    {
      "job_no": 14000,
      "name": "254 Montreal Street Christchurch",
      "address": "-43.533448, 172.630762",
      "job_floor_area": 3800,
      "steel_detailing": "Yes",
      "total_weight": 215,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/ma3dubxjhrhj8o6/Stand%20up%20corner.JPG?dl=0"
    },
    {
      "job_no": 15018,
      "name": "Pellet Tower",
      "address": "-44.4507735,171.0937536",
      "job_floor_area": 380,
      "steel_detailing": "Yes",
      "total_weight": 27,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/2w9muxtczhemfhu/Model%203d.PNG?dl=0"
    },
    {
      "job_no": 15024,
      "name": "11 Maurice WIlson Ave",
      "address": "-36.9901295,174.7782366",
      "job_floor_area": 12000,
      "steel_detailing": "Yes",
      "total_weight": 432,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/0znegh35ea33jv2/2015-10-08%2011.37.08.jpg?dl=0"
    },
    {
      "job_no": 15034,
      "name": "Tegal",
      "address": "-39.0555364,174.2077624",
      "job_floor_area": 1620,
      "steel_detailing": "Yes",
      "total_weight": 61.5,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/9k55isk90mg0zdw/Capture.PNG?dl=0"
    },
    {
      "job_no": 15040,
      "name": "Project 56 Lift & Stairs",
      "address": "-41.2807985,174.7752168",
      "job_floor_area": 100,
      "steel_detailing": "Yes",
      "total_weight": 3.7,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/n5f67n8ahk8pem5/56%20The%20Terrace.jpg?dl=0"
    },
    {
      "job_no": 15055,
      "name": "Omokoroa - Freshchoice",
      "address": "-37.6418275,176.0362281",
      "job_floor_area": 1936,
      "steel_detailing": "Yes",
      "total_weight": 57,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/a7q1ktv7ujn0098/Freshchoice%20OMO.jpg?dl=0"
    },
    {
      "job_no": 15061,
      "name": "338 Stafford Street",
      "address": "-44.3931156,171.2472691",
      "job_floor_area": 1250,
      "steel_detailing": "Yes",
      "total_weight": 12.1,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/suttp7cpasmo9ey/P1020133.JPG?dl=0"
    },
    {
      "job_no": 15065,
      "name": "Bledisloe Sports Pavillion",
      "address": "-37.2076318,174.898491",
      "job_floor_area": 500,
      "steel_detailing": "Yes",
      "total_weight": 20,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/obv1qggzrxjdubd/P1020399.JPG?dl=0"
    },
    {
      "job_no": 15067,
      "name": "Asmuss Warehouse",
      "address": "-39.039071,174.1615944",
      "job_floor_area": 1413,
      "steel_detailing": "Yes",
      "total_weight": 65,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/stk957gx0hnlmfk/3D%20Model.PNG?dl=0"
    },
    {
      "job_no": 15069,
      "name": "209 Marine Parade",
      "address": "-37.653950, 176.207101",
      "job_floor_area": 1200,
      "steel_detailing": "Yes",
      "total_weight": 25,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/akohsmz2gwg912c/P1010110.JPG?dl=0"
    },
    {
      "job_no": 15077,
      "name": "St Johns College",
      "address": "-39.6409197,176.8550582",
      "job_floor_area": 1023,
      "steel_detailing": "Yes",
      "total_weight": 31.4,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/khz9z8p33tmlb99/IMG_0251.JPG?dl=0"
    },
    {
      "job_no": 15078,
      "name": "18 St Martin Lane",
      "address": "-36.8584136,174.7631106",
      "job_floor_area": 1600,
      "steel_detailing": "Yes",
      "total_weight": 70,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "Yes",
      "consulting": "Yes",
      "image": "https://www.dropbox.com/s/sr0ra6xbmldjaed/P1020392.JPG?dl=0"
    },
    {
      "job_no": 15083,
      "name": "Coombes BMW",
      "address": "-37.7585412,175.2439379",
      "job_floor_area": 3250,
      "steel_detailing": "Yes",
      "total_weight": 52,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/2m72203vlgddnn7/Site%20Pic%201.PNG?dl=0"
    },
    {
      "job_no": 15090,
      "name": "St Josephs School",
      "address": "-38.002473, 177.285689",
      "job_floor_area": 730,
      "steel_detailing": "Yes",
      "total_weight": 8.5,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/hmdi11e266fec8e/Model%203D.PNG?dl=0"
    },
    {
      "job_no": 15095,
      "name": "Bethlehem School",
      "address": "-37.690473,176.105877",
      "job_floor_area": 750,
      "steel_detailing": "Yes",
      "total_weight": 16,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/abpekalowvjluvg/3d%20Model.PNG?dl=0"
    },
    {
      "job_no": 15101,
      "name": "Apata Coolstore",
      "address": "-37.6522005,175.9832892",
      "job_floor_area": 7000,
      "steel_detailing": "Yes",
      "total_weight": 214,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/d9kvrtg1ohynu5l/20160309_133622.jpg?dl=0"
    },
    {
      "job_no": 15102,
      "name": "Papamoa Plaza",
      "address": "-37.6988311,176.2809586",
      "job_floor_area": 2700,
      "steel_detailing": "Yes",
      "total_weight": 121,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/emjvqliqe6wanc7/2017-01-18%2014.23.48.jpg?dl=0"
    },
    {
      "job_no": 16000,
      "name": "Maketu Hauora",
      "address": "-37.7589015,176.4500527",
      "job_floor_area": 408.3,
      "steel_detailing": "Yes",
      "total_weight": 5.5,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/u8p490egc5q59ai/Maketu2.png?dl=0"
    },
    {
      "job_no": 16004,
      "name": "Lake Hayes Residential",
      "address": "-44.9900217,168.8130544",
      "job_floor_area": 1100,
      "steel_detailing": "Yes",
      "total_weight": 23.8,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/2jussynzpdiu5ws/2017-03-21%2019.30.36%20HDR.jpg?dl=0"
    },
    {
      "job_no": 16012,
      "name": "Kennards Hire Te Rapa",
      "address": "-37.7544115,175.2393135",
      "job_floor_area": 520,
      "steel_detailing": "Yes",
      "total_weight": 20,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/n1fj9dew9jufase/Kennards%20Hire1.jpg?dl=0"
    },
    {
      "job_no": 16015,
      "name": "Lakes Boulevard",
      "address": "-37.7504796,176.104847517",
      "job_floor_area": 1000,
      "steel_detailing": "Yes",
      "total_weight": 28,
      "precast_detailing": "Yes",
      "panel_quantity": 32,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/dnii2xfcqb3fkyf/DSC05686.JPG?dl=0"
    },
    {
      "job_no": 16027,
      "name": "Countdown Aotea",
      "address": "-41.1217829,174.8579875",
      "job_floor_area": 3135,
      "steel_detailing": "Yes",
      "total_weight": 124,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/bhda957gerhyog8/3d%20From%20Sketchup.PNG?dl=0"
    },
    {
      "job_no": 16030,
      "name": "Countdown Mosgiel",
      "address": "-45.880446, 170.351851",
      "job_floor_area": 4300,
      "steel_detailing": "Yes",
      "total_weight": 120,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/21vh5h2010uqbbz/2017-10-05%2010.54.31.jpg?dl=0"
    },
    {
      "job_no": 16031,
      "name": "Tauranga Intermediate",
      "address": "-37.7121319,176.1536352",
      "job_floor_area": 1500,
      "steel_detailing": "Yes",
      "total_weight": 26,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/ojpd77lagbven7o/Capture.PNG?dl=0"
    },
    {
      "job_no": 16032,
      "name": "Northbridge Apartments",
      "address": "-36.796742, 174.754044",
      "job_floor_area": 7488,
      "steel_detailing": "Yes",
      "total_weight": 38.6,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/ii43f40d0k6qhc6/Capture.PNG?dl=0"
    },
    {
      "job_no": 16033,
      "name": "Rakaia Seeds",
      "address": "-43.674081, 171.851686",
      "job_floor_area": 1000,
      "steel_detailing": "Yes",
      "total_weight": 18,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/x4jn6zf6297xf8w/16033.PNG?dl=0"
    },
    {
      "job_no": 16034,
      "name": "Kiwi Bus Builders",
      "address": "-37.7444882,176.0947835",
      "job_floor_area": 2265,
      "steel_detailing": "Yes",
      "total_weight": 68,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/l1pd9ntkjb7snri/DSC05715.JPG?dl=0"
    },
    {
      "job_no": 16038,
      "name": "Vulcan Steel Invercargill",
      "address": "-46.416416, 168.340409",
      "job_floor_area": 1200,
      "steel_detailing": "Yes",
      "total_weight": 42,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/z2py6j6ie39w28h/Capture.PNG?dl=0"
    },
    {
      "job_no": 16039,
      "name": "Mount Central",
      "address": "-37.639957, 176.184452",
      "job_floor_area": 1380,
      "steel_detailing": "Yes",
      "total_weight": 70,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/phagrfzfvcc4wsh/IMG_6346.JPG?dl=0"
    },
    {
      "job_no": 16040,
      "name": "Port A Shed Extension",
      "address": "-45.8149509,170.6206233",
      "job_floor_area": 1444,
      "steel_detailing": "Yes",
      "total_weight": 24,
      "precast_detailing": "Yes",
      "panel_quantity": 34,
      "structural_drafting": "Yes",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/v34wxow9fxrsxcw/3D%20Cover%20Sheet.PNG?dl=0"
    },
    {
      "job_no": 16042,
      "name": "1343 Cameron Rd",
      "address": "-37.7266818,176.1299681",
      "job_floor_area": 400,
      "steel_detailing": "Yes",
      "total_weight": 6.9,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/ew1dmpwa66xvkz6/Capture.PNG?dl=0"
    },
    {
      "job_no": 16043,
      "name": "Redmond Shed",
      "address": "-43.9121648,171.951746",
      "job_floor_area": 1000,
      "steel_detailing": "Yes",
      "total_weight": 20,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/kw3lu8342qwio1n/Capture.PNG?dl=0"
    },
    {
      "job_no": 16044,
      "name": "Pan Pac",
      "address": "-46.075876, 170.004486",
      "job_floor_area": 4800,
      "steel_detailing": "Yes",
      "total_weight": 100,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/qsew0k2kbkvpjmn/2017-10-06%2012.47.19.jpg?dl=0"
    },
    {
      "job_no": 16046,
      "name": "Swim School Aquatic Centre",
      "address": "-37.7705388,176.0953012",
      "job_floor_area": 1155,
      "steel_detailing": "Yes",
      "total_weight": 13.8,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/e47l18x9ob9yh74/Capture.PNG?dl=0"
    },
    {
      "job_no": 16049,
      "name": "Certified Builders Office",
      "address": "-37.6747653,176.1657718",
      "job_floor_area": 1300,
      "steel_detailing": "Yes",
      "total_weight": 20,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/4x9jjgsqzlkjf3r/Model%20Snap.PNG?dl=0"
    },
    {
      "job_no": 16052,
      "name": "Coolpak Rolleston",
      "address": "-43.5845382,172.2547357",
      "job_floor_area": 10878,
      "steel_detailing": "Yes",
      "total_weight": 350,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/5rmb6b2vp8peoou/IMG_0151.JPG?dl=0"
    },
    {
      "job_no": 16056,
      "name": "Tauriko Trade Units",
      "address": "-37.7345618,176.0809773",
      "job_floor_area": 2000,
      "steel_detailing": "Yes",
      "total_weight": 45,
      "precast_detailing": "Yes",
      "panel_quantity": 93,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/lm0pkydqfcbz33n/Capture.PNG?dl=0"
    },
    {
      "job_no": 16062,
      "name": "Otumoetai College",
      "address": "-37.6798611,176.1272519",
      "job_floor_area": 1200,
      "steel_detailing": "Yes",
      "total_weight": 8,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/ues1ram9h8sm0ig/Capture.PNG?dl=0"
    },
    {
      "job_no": 16064,
      "name": "Hamilton City Reservoir",
      "address": "-37.7111209,175.256478",
      "job_floor_area": 3800,
      "steel_detailing": "No",
      "total_weight": 0,
      "precast_detailing": "Yes",
      "panel_quantity": 116,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/9za5hs3wspmy7uf/Capture.PNG?dl=0"
    },
    {
      "job_no": 16066,
      "name": "Port Nelson",
      "address": "-41.263171, 173.277822",
      "job_floor_area": 16000,
      "steel_detailing": "Yes",
      "total_weight": 494,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "Yes",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/no86ff0htas40xe/2018-01-10%2012.10.53.jpg?dl=0"
    },
    {
      "job_no": 16069,
      "name": "Marina Villas",
      "address": "-37.0005327,175.8498939",
      "job_floor_area": 1100,
      "steel_detailing": "Yes",
      "total_weight": 13.75,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/imsyr6iw9b7qaog/Capture.PNG?dl=0"
    },
    {
      "job_no": 16070,
      "name": "McFall Residence",
      "address": "-38.1104986,175.3500083",
      "job_floor_area": 400,
      "steel_detailing": "Yes",
      "total_weight": 2,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/qisvqkshe7a0g9o/Model%203D.PNG?dl=0"
    },
    {
      "job_no": 16072,
      "name": "90 Whakakake Street",
      "address": "-37.7425838,176.0953605",
      "job_floor_area": 2000,
      "steel_detailing": "Yes",
      "total_weight": 16.77,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/tcol1wr3w6j2rc6/Capture.PNG?dl=0"
    },
    {
      "job_no": 16074,
      "name": "202 Hastings Street",
      "address": "-39.491572, 176.918600",
      "job_floor_area": 2000,
      "steel_detailing": "Yes",
      "total_weight": 86,
      "precast_detailing": "Yes",
      "panel_quantity": 49,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/2xu98zpq0ol96u2/IMG_7817.jpg?dl=0"
    },
    {
      "job_no": 16075,
      "name": "Bombay Fuel Canopy",
      "address": "-37.0878193,174.9376282",
      "job_floor_area": 312,
      "steel_detailing": "Yes",
      "total_weight": 9.8,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "Yes",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/t7w93xutit8jclu/Capture.PNG?dl=0"
    },
    {
      "job_no": 16076,
      "name": "94 Bryce St Precast",
      "address": "-37.7865346,175.2742873",
      "job_floor_area": 3000,
      "steel_detailing": "No",
      "total_weight": 147,
      "precast_detailing": "Yes",
      "panel_quantity": 29,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/brs4bwhth0pvdsc/Capture.PNG?dl=0"
    },
    {
      "job_no": 16079,
      "name": "5 Rathbone Street",
      "address": "-35.724715, 174.320507",
      "job_floor_area": 810,
      "steel_detailing": "Yes",
      "total_weight": 28,
      "precast_detailing": "Yes",
      "panel_quantity": 30,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/7syxwg2e7ao7wh9/Capture.PNG?dl=0"
    },
    {
      "job_no": 16080,
      "name": "39 Aerodrome Road",
      "address": "-37.6662342,176.2012262",
      "job_floor_area": 430,
      "steel_detailing": "Yes",
      "total_weight": 8.1,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/7hb5kfer9emiqn2/Capture.PNG?dl=0"
    },
    {
      "job_no": 16081,
      "name": "Opac Coolstores",
      "address": "-38.024947,177.2874013",
      "job_floor_area": 7800,
      "steel_detailing": "Yes",
      "total_weight": 60,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/rovtp0bby61enlv/Capture.PNG?dl=0"
    },
    {
      "job_no": 16084,
      "name": "Tekapo Four Square",
      "address": "-44.0414093,170.4331509",
      "job_floor_area": 1232,
      "steel_detailing": "Yes",
      "total_weight": 25,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/2ol7hqyespk2957/Capture.PNG?dl=0"
    },
    {
      "job_no": 16085,
      "name": "Riverhead Development",
      "address": "-36.7564496,174.5897563",
      "job_floor_area": 600,
      "steel_detailing": "Yes",
      "total_weight": 25.5,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/4x60d7zejprbifd/Capture.PNG?dl=0"
    },
    {
      "job_no": 16088,
      "name": "Allenton Medical Centre",
      "address": "-43.8891108,171.7359253",
      "job_floor_area": 962,
      "steel_detailing": "Yes",
      "total_weight": 19.34,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/0y48p1melkzq2t1/Capture.PNG?dl=0"
    },
    {
      "job_no": 16090,
      "name": "Stokes Valley CC",
      "address": "-41.173634, 174.981694",
      "job_floor_area": 982,
      "steel_detailing": "Yes",
      "total_weight": 54,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/v992jpn07abekfb/Capture.PNG?dl=0"
    },
    {
      "job_no": 16098,
      "name": "Niagara 34m Span",
      "address": "-43.8897107,171.7322407",
      "job_floor_area": 5500,
      "steel_detailing": "Yes",
      "total_weight": 110.85,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/wov2zxdvr96wak1/IMG_20170429_154211.jpg?dl=0"
    },
    {
      "job_no": 16099,
      "name": "St Johns Tauranga",
      "address": "-37.705708, 176.149405",
      "job_floor_area": 1680,
      "steel_detailing": "Yes",
      "total_weight": 50,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/ssv53y2uakwb011/Capture.PNG?dl=0"
    },
    {
      "job_no": 16102,
      "name": "Egmont Seeds",
      "address": "-39.098341,174.0566332",
      "job_floor_area": 360,
      "steel_detailing": "Yes",
      "total_weight": 11,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/pw3u89jmh0he2nh/Capture.PNG?dl=0"
    },
    {
      "job_no": 16104,
      "name": "Parkwood Tavern",
      "address": "-37.7492015,175.2919057",
      "job_floor_area": 450,
      "steel_detailing": "No",
      "total_weight": 36.9,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/d2izjxfo0afvkht/Capture.JPG?dl=0"
    },
    {
      "job_no": 16105,
      "name": "24-26 Racecourse Parade",
      "address": "-36.8964853,174.6925869",
      "job_floor_area": 3000,
      "steel_detailing": "Yes",
      "total_weight": 56,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/vpo5zyz0j22tq21/Capture.PNG?dl=0"
    },
    {
      "job_no": 16106,
      "name": "Northgate Business Park Stage 1",
      "address": "-37.7029544,175.2029689",
      "job_floor_area": 2800,
      "steel_detailing": "Yes",
      "total_weight": 104,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/kf388k5wklkjncj/Capture.PNG?dl=0"
    },
    {
      "job_no": 17002,
      "name": "Van Assalt",
      "address": "-37.9527911,176.9628708",
      "job_floor_area": 540,
      "steel_detailing": "Yes",
      "total_weight": 5.32,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/vpo5zyz0j22tq21/Capture.PNG?dl=0"
    },
    {
      "job_no": 17003,
      "name": "Pilot Bay Apartments",
      "address": "-37.636067, 176.179313",
      "job_floor_area": 2000,
      "steel_detailing": "Yes",
      "total_weight": 26.84,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/su7v1h6mh0b8lve/2017-07-19%2016.15.58.jpg?dl=0"
    },
    {
      "job_no": 17005,
      "name": "Pukaki Airfield",
      "address": "-44.2341003,170.1148993",
      "job_floor_area": 420,
      "steel_detailing": "Yes",
      "total_weight": 16.69,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/bdv5h1sr9e7ude2/Capture.JPG?dl=0"
    },
    {
      "job_no": 17006,
      "name": "Meteor Theatre",
      "address": "-37.7922088,175.2851954",
      "job_floor_area": 1400,
      "steel_detailing": "Yes",
      "total_weight": 12.65,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/c8k2y35sjrf4qah/Capture.JPG?dl=0"
    },
    {
      "job_no": 17008,
      "name": "Mainland Coachworks",
      "address": "-43.8808322,171.792978",
      "job_floor_area": 930,
      "steel_detailing": "Yes",
      "total_weight": 21.9,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/6ypb6dw8b2xivb8/Capture.JPG?dl=0"
    },
    {
      "job_no": 17011,
      "name": "Gisborne District Council",
      "address": "-38.6658444,178.0281554",
      "job_floor_area": 4000,
      "steel_detailing": "Yes",
      "total_weight": 157,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/r77fx0tqoedcjs6/Coversheet.PNG?dl=0"
    },
    {
      "job_no": 17013,
      "name": "Port Nelson Stage 2",
      "address": "-41.264115, 173.277184",
      "job_floor_area": 11000,
      "steel_detailing": "Yes",
      "total_weight": 381,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "Yes",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/rln61e3ea2xsi2w/2018-01-10%2012.22.20.jpg?dl=0"
    },
    {
      "job_no": 17014,
      "name": "Bloom Childcare",
      "address": "-37.7166042,176.3060166",
      "job_floor_area": 900,
      "steel_detailing": "Yes",
      "total_weight": 25,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/230gamh1js8and1/2.jpg?dl=0"
    },
    {
      "job_no": 17015,
      "name": "Truman Trade Units",
      "address": "-37.688699,176.235639",
      "job_floor_area": 2000,
      "steel_detailing": "Yes",
      "total_weight": 28.4,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/gl6zbm0gjugspkv/Capture.PNG?dl=0"
    },
    {
      "job_no": 17016,
      "name": "ASB Hamilton",
      "address": "-37.7856725,175.2776072",
      "job_floor_area": 1420,
      "steel_detailing": "Yes",
      "total_weight": 88,
      "precast_detailing": "Yes",
      "panel_quantity": 41,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/coimzb5ia29zyp6/Capture.PNG?dl=0"
    },
    {
      "job_no": 17017,
      "name": "Truck Tyre Centre",
      "address": "-20.378251, 118.597768",
      "job_floor_area": 722,
      "steel_detailing": "Yes",
      "total_weight": 37,
      "precast_detailing": "Yes",
      "panel_quantity": 10,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/2yr14aluo1cq6as/Capture.JPG?dl=0"
    },
    {
      "job_no": 17020,
      "name": "Fontera Hautapu",
      "address": "-37.8584896,175.4512293",
      "job_floor_area": 186,
      "steel_detailing": "Yes",
      "total_weight": 4.9,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/c5op3pu319zbzf5/Capture.PNG?dl=0"
    },
    {
      "job_no": 17025,
      "name": "Armourguard Hamilton",
      "address": "-37.862496, 175.338569",
      "job_floor_area": 1000,
      "steel_detailing": "Yes",
      "total_weight": 32,
      "precast_detailing": "Yes",
      "panel_quantity": 84,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/gbcid8w3agdsv8i/Capture.PNG?dl=0"
    },
    {
      "job_no": 17027,
      "name": "Ravensdown Melter Store",
      "address": "-45.869007,170.541889",
      "job_floor_area": 1800,
      "steel_detailing": "Yes",
      "total_weight": 101,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/2bo2yree40blzfs/2017-10-05%2014.11.42.jpg?dl=0"
    },
    {
      "job_no": 17028,
      "name": "GDC Workshop",
      "address": "-43.8144278,171.508057",
      "job_floor_area": 880,
      "steel_detailing": "Yes",
      "total_weight": 23.9,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/brjzmg4cp7qthgm/Capture.PNG?dl=0"
    },
    {
      "job_no": 17034,
      "name": "15th Ave",
      "address": "-37.709576,176.163862",
      "job_floor_area": 2000,
      "steel_detailing": "Yes",
      "total_weight": 60,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/1ky5sxksoxzc8m9/Capture.PNG?dl=0"
    },
    {
      "job_no": 17043,
      "name": "Tyre Changing Bay",
      "address": "-20.378251, 118.597768",
      "job_floor_area": 500,
      "steel_detailing": "Yes",
      "total_weight": 20,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/s841snyl59hpo5u/17043%20-%20Tyre%20Changing%20Bay.PNG?dl=0"
    },
    {
      "job_no": 17044,
      "name": "560 Te Rapa Road",
      "address": "560 Te Rapa Road Hamilton New Zealand",
      "job_floor_area": 1430,
      "steel_detailing": "Yes",
      "total_weight": 47,
      "precast_detailing": "Yes",
      "panel_quantity": 74,
      "structural_drafting": "Yes",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/hz3p0dka4vjwy8q/Capture.PNG?dl=0"
    },
    {
      "job_no": 17045,
      "name": "JPNZ Coldstore",
      "address": "-44.355894,171.2491606",
      "job_floor_area": 1200,
      "steel_detailing": "Yes",
      "total_weight": 18.7,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/evcge9uojxbign4/Capture.PNG?dl=0"
    },
    {
      "job_no": 17046,
      "name": "Tank Stair 424",
      "address": "-37.668164, 176.203149",
      "job_floor_area": 1000,
      "steel_detailing": "No",
      "total_weight": 2.2,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/6whmlozmdsbyw53/Capture.PNG?dl=0"
    },
    {
      "job_no": 17049,
      "name": "Precinct 71",
      "address": "-37.712850, 176.318209",
      "job_floor_area": 1500,
      "steel_detailing": "Yes",
      "total_weight": 50,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/xvi3vpdsafgna5x/Capture.PNG?dl=0"
    },
    {
      "job_no": 17050,
      "name": "Kerikeri River Estate",
      "address": "-37.7431311,176.0954756",
      "job_floor_area": 2000,
      "steel_detailing": "Yes",
      "total_weight": 40,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/s8pbp4jhb7dhpqa/Capture.PNG?dl=0"
    },
    {
      "job_no": 17051,
      "name": "Kennedy Rd",
      "address": "-37.7540022,176.1076204",
      "job_floor_area": 1500,
      "steel_detailing": "Yes",
      "total_weight": 61,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/frktfkdvxlsibr6/Capture.PNG?dl=0"
    },
    {
      "job_no": 17052,
      "name": "64 Portside Drive",
      "address": "-37.6594054,176.1926794",
      "job_floor_area": 131,
      "steel_detailing": "Yes",
      "total_weight": 2.2,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/zqw5qenfzkwau50/Capture.PNG?dl=0"
    },
    {
      "job_no": 17055,
      "name": "Ballantyne Rd",
      "address": "-44.7181584,169.1794373",
      "job_floor_area": 2600,
      "steel_detailing": "No",
      "total_weight": 83,
      "precast_detailing": "No",
      "panel_quantity": 30,
      "structural_drafting": "Yes",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/miidctddakaw0wd/Capture.PNG?dl=0"
    },
    {
      "job_no": 17056,
      "name": "ACG Primary School",
      "address": "-37.7739163,176.1115547",
      "job_floor_area": 500,
      "steel_detailing": "Yes",
      "total_weight": 9.6,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/iw779adwxz2bpkg/Capture.PNG?dl=0"
    },
    {
      "job_no": 17057,
      "name": "Melrose Stage 1",
      "address": "-37.696011, 176.142899",
      "job_floor_area": 7300,
      "steel_detailing": "Yes",
      "total_weight": 71,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": ""
    },
    {
      "job_no": 17061,
      "name": "Phoenix Steel Workshop",
      "address": "-44.3519467,171.2449073",
      "job_floor_area": 4400,
      "steel_detailing": "Yes",
      "total_weight": 211,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/54fg2jeoo9195q3/Capture.PNG?dl=0"
    },
    {
      "job_no": 17064,
      "name": "Murdoch Hangar",
      "address": "-44.2340964,170.1149046",
      "job_floor_area": 800,
      "steel_detailing": "Yes",
      "total_weight": 42.2,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/77b501cxye0o57x/21%20Dec.jpg?dl=0"
    },
    {
      "job_no": 17065,
      "name": "16 Ashley Place",
      "address": "-37.714691,176.316616",
      "job_floor_area": 2500,
      "steel_detailing": "Yes",
      "total_weight": 47.9,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/y504u7kpdwrr8ch/Capture.PNG?dl=0"
    },
    {
      "job_no": 17073,
      "name": "Shadbolt Hanger",
      "address": "-44.2341003,170.1149046",
      "job_floor_area": 480,
      "steel_detailing": "Yes",
      "total_weight": 26,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/6dqyr0phydgp6p2/Model%203d.png?dl=0"
    },
    {
      "job_no": 17078,
      "name": "Almax Industries",
      "address": "-45.0536623,171.0073732",
      "job_floor_area": 2350,
      "steel_detailing": "Yes",
      "total_weight": 40,
      "precast_detailing": "No",
      "panel_quantity": 0,
      "structural_drafting": "No",
      "consulting": "No",
      "image": "https://www.dropbox.com/s/cfjancsysya1qys/Capture.PNG?dl=0"
    }
  ]
  
const gmarkers1 = [];
const categoryRef = [];
const infowindow = new google.maps.InfoWindow({
    content: ''
});

// Generate markers based on dataList.js
// Separated in order to assist migration to externally hosted dataList
const markerCount = dataList.length

// Function to init map
const initMap = () => {
    const center = new google.maps.LatLng(-41.279957302831725, 174.77508519021308);
    const mapOptions = {
        zoom: 6,
        center: center,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    for (let i = 0; i < markerCount; i++) {
        addMarker(dataList[i]);
    }

    markerCluster = new MarkerClusterer(map, gmarkers1,
        {imagePath: 'img/m',
        gridSize: 25,
        maxZoom: 14
    });
}


// function to push an array of category(s) into the original dataList for filtering purposes 
const categoryPush = () => {
    for(let i = 0; i < dataList.length; i++){
        dataList[i].category = [];
        
        if(dataList[i].consulting === "Yes"){
        //    dataList[i].category = ["consuilting"];
        dataList[i].category.push("Consulting");
        }

        if(dataList[i].steel_detailing === "Yes"){
            dataList[i].category.push("Steel Detailing");
        }

        if(dataList[i].structural_drafting === "Yes"){
            dataList[i].category.push("Structural Drafting");
        }

        if(dataList[i].precast_detailing === "Yes"){
            dataList[i].category.push("Precast Detailing");
        }
    }
};

categoryPush();

// Function to add markers to the map
// Additional logic built in so that dataList can remain unedited (client requirement to use direct WorkflowMax export)
const addMarker = (marker) => {
        const category = marker.category;
        const title = marker.name;
        const coords = marker.address.toString().split(",");
        const pos = new google.maps.LatLng(coords[0], coords[1]);
        // const dropAnn = marker.setAnnimation(google.maps.Animation.DROP);
        
        
        //a separate 'precast' constant as they infowindow needs to also display panel quantity when precast has been done as part of the job.  
        const precastTooltip = 
        '<h3 class="info-title">' + marker.name + '</h3>' +
        '<p class="info-sub"><img id="dc-logo" src="./img/dc-logo.png"><strong>Panel Quantity:</strong> ' + marker.panel_quantity + '</p>' + 
        '<p class="info-sub"><img id="dc-logo" src="./img/dc-logo.png"><strong>Total Weight:</strong> ' + marker.total_weight + ' (T)</p>' + 
        '<p class="info-sub"><img id="dc-logo" src="./img/dc-logo.png"><strong>Job Floor Area:</strong> ' + marker.job_floor_area + ' (&#x33a1)</p>' +
        '<p class="info-sub"><img id="dc-logo" src="./img/dc-logo.png"><strong>Services:</strong> ' + marker.category.toString().split(",").join(", ") + '</p>' + 
        // image url provided in the data is taken directly from dropbox. The end of the URL string needs to be updated in order for the image to display externally from dropbox
        '<img id="info-img" src=' + marker.image.split("dl=0").join("raw=1") + '>';

        const nonPrecastTooltip = 
        '<h3 class="info-title">' + marker.name + '</h3>' + 
        '<p class="info-sub"><img id="dc-logo" src="./img/dc-logo.png"><strong>Total Weight:</strong> ' + marker.total_weight + ' (T)</p>' +  
        '<p class="info-sub"><img id="dc-logo" src="./img/dc-logo.png"><strong>Job Floor Area:</strong> ' + marker.job_floor_area + ' (&#x33a1)</p>' +
        '<p class="info-sub"><img id="dc-logo" src="./img/dc-logo.png"><strong>Services:</strong> ' + marker.category.toString().split(",").join(", ") + '</p>' + 
        '<img id="info-img" src=' + marker.image.split("dl=0").join("raw=1") + '>';

        // const markerImg = (marker.image === "string") ? marker.image: no-image;
        const content = (marker.precast_detailing === "Yes") ? precastTooltip: nonPrecastTooltip;

        marker1 = new google.maps.Marker({
            title: title,
            position: pos,
            category: category,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: "./img/blue-fat-marker.png",
        });

        gmarkers1.push(marker1);

        // Marker click listener
        google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
            return function () {
                infowindow.setContent(content);
                infowindow.open(map, marker1);
            }
        })(marker1, content));

        // Close active infowindow when the user clicks on the underlying map.
        google.maps.event.addListener(map, "click", function(event) {
            infowindow.close();
        });
    
}

// function to manage checkbox filtering in relation to job type. Filters are designed to handle multiple criteria.
const updateView = (element) => {	
    const newmarkers = [];
    if (element) {
        //Get array with names of the checked boxes
        checkedBoxes = ([...document.querySelectorAll('input[type=checkbox]:checked')]).map(function(o) {return o.id;});
        console.log(checkedBoxes);
        for (i = 0; i < markerCount; i++) {
            
                marker = gmarkers1[i];

                // close any active infowindows when any filter is toggled
                infowindow.close();
                
                //Filter to show any markers containing ALL of the selected options
        		if(checkedBoxes.every(function (o) {
                    return (marker.category).indexOf(o) >= 0;})){
                    marker.setVisible(true);
                    newmarkers.push(marker);
        		}
                else {
                    marker.setVisible(false);
                    // marker.setMap(null);
                }
                markerCluster.clearMarkers();
                markerCluster.addMarkers(newmarkers);
        }
      }

  	else {
   		 console.log('No param given');
		}
}

document.querySelector('#filters').addEventListener("click", function(){
  updateView(this);
});

// functioon to handle filter reset
const resetBtn = () => {
    document.getElementById("reset-btn").addEventListener("click", function(){
        location.reload();
    });
}

resetBtn();

// Init map
initMap();
