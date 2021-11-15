var members = [
    "https://previews.123rf.com/images/yupiramos/yupiramos1803/yupiramos180310511/96946833-cartoon-beauty-cute-girl-daughter-vector-illustration.jpg",
  "https://us.123rf.com/450wm/kinokotagawa/kinokotagawa1712/kinokotagawa171200465/91961518-mom-wearing-short-sleeve-clothes-is-pointing.jpg?ver=6",
"https://image.shutterstock.com/image-vector/portrait-handsome-man-shirt-jeans-260nw-582282625.jpg",
"https://cdn3.vectorstock.com/i/1000x1000/41/22/cartoon-boy-kid-son-family-image-vector-15024122.jpg"

    ];

    var names = [
    "My Family-Book", 
    "Zia Sandhu", 
    "Daksh Sandhu", 
    "Monika Sandhu", 
    "Rocky Sandhu", 
    ];

    var count = 0;

    function nextslide () {

    document.getElementById("members").src = members[count];

    document.getElementById("names").innerHTML = names[count];
    
    count++;

    if (count == 6) {
    
    count = 0;

    }

    }