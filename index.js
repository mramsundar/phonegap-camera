$(function ()
{
    $(document).on("click", "#btnMain", function ()
    {
        function onSuccess(imageURI)
        {
            var image = $("imgMain");
            image.src = imageURI;
        }
        
        function onFail(message)
        {
            alert('Failed because: ' + message);
        }


        navigator.camera.getPicture(onSuccess, onFail, 
        { 
            quality: 50, destinationType: Camera.DestinationType.FILE_URI
        }); 

    });
    
});