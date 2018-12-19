 var playerInstance = jwplayer("player");
        playerInstance.setup({
            sources: [
            {"type": "video/mp4", "label": "360px Akani", "file": video360},
            {"type": "video/mp4", "label": "480px Akani", "file": video480},
            {"type": "video/mp4", "label": "720px Akani", "file": video720}],
            image: "",
            autostart: false,
            controls: true,
            width: "100%",
            height: "100%",
            aspectratio: "16:9",
            abouttext: "JWPlayer By Akani",
            aboutlink: "//akani.me/",       
            tracks: [{ 
                file: "", 
                label: "Indonesia",
                    kind: "captions",
                    "default": true 
                },{
                    file: "", 
                    label: "English",
                    kind: "captions",
                    "default": true
                }],                     
                logo: {
                    file: gambar,       //watermark image path
                    link: '//akani.me',         //link url on watermark image
                    position: 'top-right'      //position of watermark on player
                },       
                captions: {
                            color: '#ffcc00',           
                            backgroundOpacity: '0',
                            edgeStyle: 'uniform'      
                    }

    });
