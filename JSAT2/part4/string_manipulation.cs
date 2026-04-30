using System.IO;  // include the System.IO namespace

string writeText = "this is a string";  // Create a text string
File.WriteAllText("filename.txt", writeText);  // Create a file and write the content of writeText to it

string readText = File.ReadAllText("filename.txt");  // Read the contents of the file
Console.WriteLine(readText);  // Output the content

// seperate file 
string writeText2 = "AnotherString";  // Read the contents of the file
File.WriteAllText("AnotherString.txt", writeText2);  // Create a file and write the content of writeText2 to it
string readText2 = File.ReadAllText("AnotherString.txt");  // Read the contents of the file
Console.WriteLine(readText2);  // Output the content
