
using System.IO;
//  writing to a file /
string writetext = "this is a string"; // create a text string
file.WriteAllText("filename.txt", writeText); // write the string to a file 

// reading from a file //
string readText = file.readAllText("filename.txt"); // read the contents of the file 
Console.WriteLine(readText); // print the contents of the file to the console