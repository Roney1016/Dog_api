var breedImage = $("#breed-image");
var dropdown = $("#dog-breeds");
var allowSubmit = true;
var breed;
$.ajax({
    url:"https://dog.ceo/api/breeds/list/all",
    success: function(data){
        let dogBreeds = data.message;
       for(let breed in dogBreeds){
        dropdown.append('<option value="'+ breed +'">'+ breed +'</option>')
       }
    }
});

dropdown.change(function(){
    allowSubmit = true;
})

$("form button").click(function(e){
    e.preventDefault();
    if(allowSubmit){
        breed = dropdown.val();
        console.log(breed)
        displayDog(breed);
        allowSubmit = false;
    }
})

$('#next a').click(function(e){
    e.preventDefault();
    if(breed !== undefined){
        displayDog(breed);
    }
})

function displayDog(breed){
    let url =" https://dog.ceo/api/breed/"+ breed +"/images/random"
     $('#breed-image img').remove();
    $.get(url,function(data){
        let imageUrl = data.message;
        breedImage.append('<img src="'+ imageUrl +'"alt="'+ breed +'">')
    });
}

