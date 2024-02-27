const KEY = "42562534-6abe2af4317b1372b4a8ab981";

export function getImages(request){
  let truthRequest = request;  
  if(request.includes(" ")){
    truthRequest = request.split(" ").join("+");
  }

    return fetch("https://pixabay.com/api/?key="+KEY+"&q="+truthRequest+"&image_type=photo&orientation=horizontal&safesearch=true")
              .then(res => {
                if(!res.ok){
                    throw new Error("Error image");
                }

                return res.json()})
              .catch(error => alert(error));
}