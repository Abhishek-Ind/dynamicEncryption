function readFile(evt) 
{
	// alert("into function test().");
	// var fileInput = document.getElementById('fileInput');
	// console.log(fileInput);
	// var fileDisplayArea = document.getElementById('fileDisplayArea');
	// console.log(fileDisplayArea);
	var f = evt.target.files[0]; 
	if (f) 
	{
		var r = new FileReader();
		r.onload = function(e) 
		{
			
			// document.getElementById("fileContent").innerHTML = e.target.result;  
			var contents = e.target.result;
			var output = "";
			// output.value = "";
			for (i=0; i < contents.length; i++) 
			{
				output +=contents[i].charCodeAt(0).toString(2) + " ";
		    }
			// console.log(output);
			alert( "Got the file.\n" 
				  +"name: " + f.name + "\n"
				  +"type: " + f.type + "\n"
				  +"size: " + f.size + " bytes"+"\n"
				  +"contents of file: " + contents + "\n"
				  +"binary conversion: " + output + "\n"
				);  
			}
			r.readAsText(f);
		} 
		else 
		{ 
		  alert("Failed to load file");
		}
}
document.getElementById('fileInput').addEventListener('change', readFile, false);
