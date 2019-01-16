var map = {}; // You could also use an array
var isDone = 0;

onkeydown = onkeyup = function(e) {
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keyup';
    /* insert conditional here */
    if (map[17] && map[13]) { // CTRL+SHIFT+A
        console.log('ctrlenter',isDone);
        if(isDone == 0){
            run();
            map = {};
        }
    }
}

function run(){
    
    var result = document.getElementById('queryResults').className;
    // If result exists before running a query, exit the funcion
    if (result == 'tab-pane active'){return;}
    // Else check if tab pane is active every second
    else {
        // Check every 1000 millisecond
        isDone = window.setInterval(checkIfTabPaneActive, 1000);
    }
}

function checkIfTabPaneActive(){
    try{
		var result = document.getElementById('queryResults').className;
        // console.log('result ',result);
        // console.log('isDone inside checktabpaneactive',isDone);
		if (result == 'tab-pane active'){
            // console.log('tab-pane active');
			chrome.runtime.sendMessage('trigger');
            window.clearTimeout(isDone);
            isDone = 0;
		}
	}
	catch(TypeError){
		console.log('Wrong Website');

	}

}

// chrome.runtime.onMessage.addListener(
//     function(respond, sender, sendResponse) {
//         console.log('content listener');
//         console.log(respond);
//         // alert('content listerner');
//         if (respond == "callmeback") {
//             chrome.runtime.sendMessage('clickedRN');
//         }
//     }
// );
