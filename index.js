$(function ()
{
    $(document).on("click", "#btnMain", function ()
    {
        function onSuccess(imageURI)
        {
            var img_tag = "<img style=\"width:100px;height:100px;\"  src=\"" + imageURI + "\"/>";
            $("body").append(img_tag);
        }

        function onFail(message)
        {
            alert('Failed because: ' + message);
        }


        navigator.camera.getPicture(onSuccess, onFail,
        {
            quality: 50, sourceType: Camera.PictureSourceType.CAMERA, destinationType: Camera.DestinationType.FILE_URI
        });

    });

});