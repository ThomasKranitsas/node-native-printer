const fs = require('fs');

module.exports = function(){
	
	if(fs.existsSync(__dirname + "/../../electron-edge")){
		console.log("Found electron-edge!\n");
		makeEnv(true, 'electron-edge');
	}
	else if(fs.existsSync(__dirname + "/../../electron-edge-js")){
		console.log("Found electron-edge-js!\n");
		makeEnv(true, 'electron-edge-js');
	}
	else if(fs.existsSync(__dirname + "/../../edge")){
		console.log("Found edge.js!\n");
		makeEnv(true, 'edge');
	}
	else if(fs.existsSync(__dirname + "/../../edge-js")){
		console.log("Found edge.js!\n");
		makeEnv(true, 'edge-js');
	}
	else{
		console.error("edge not found\n");
		process.exit(1);
	}
}

function makeEnv(electron, edgeModuleName){
	const envContent = [
		electron ? "ELECTRON=true" : "ELECTRON=false",
		`EDGE_MODULE_NAME=${edgeModuleName}`
	].join('\n');
	fs.writeFileSync(fs.realpathSync(__dirname + '\\..') + "\\.env", envContent);
}
