FRONTEND
A simple HTML file that ran a scipt to upload a file in chunks
1) Learnt about the AddEventListener() and also that file.files[0] contained the file that was being uploaded.
2) Used the FileReader object and the onload method to display a success message when it was fully read by the object
3) Used the result property which is a read only value of the contents of the file and more specifically the readAsArrayBuffer() to ready the file as ArrayBuffer.
4) Split the ArrayBuffer as chunks of equal length and created a for loop to send the chunks
BACKEND
A simple https server using the http module in node.js
1) Created a http server  that listend to port 8000
2) Created a request method to listen to all incoming requests and if it matches the root path "/" then serve the frontend
3) If the request url when split contains the word /upload then recieve data as chunks and use the FileAppendSync() functionality to append the bytes and create the whole file


```
The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.
Usage : addEventListener(type, listener)
const file = document.getElementById("fileItem").files[0];
The FileReader interface lets web applications asynchronously read the contents of files
load event: Fired when a read has completed successfully.
```



This small script was inspired by https://blog.logrocket.com/how-to-build-file-upload-service-vanilla-javascript/
