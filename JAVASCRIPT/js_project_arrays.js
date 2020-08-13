var roster = [];

function addNew(name){
	roster.push(name);
}

function remove(name){
	roster.splice(roster.indexOf(name),1);
}

function display(){
	console.log(roster);
}

var useWeb = prompt("Would you like to use the web app? (y/n)?");
var quit = false;

if(useWeb==='y'){
	while(!quit){
		var choice = prompt("Would you like to add, remove, display, or quit?");
		if(choice == 'add'){
			var name = prompt("What name would you like to add?");
			addNew(name);
		}else if(choice == 'remove'){
			var name = prompt("What name would you like to remove?");
			remove(name);
		}else if(choice == 'display'){
			display();
		}else{
			break;
		}
	}
}