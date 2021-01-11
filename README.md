# Minecraft Skin Viewer - JS Version

Minecraft Skin WebViewer is an opensource tool developed in Javascript, to display your any Minecraft Skin on a web page, with a basic input zone. This tool is created in order to work with any HTML/PHP page, and can be used everywhere in self-hosted version, or with a ready to use JS file.

![screenshot-region-pingability](https://www.zupimages.net/up/20/18/kv35.png)

If you're looking to host this app, or many other, you can look at [Scaleway](https://scaleway.com).

> Please note that if Minotar API is down, this script will not work.


## Different skins views 

This tool is based on an Minecraft Skin non-official API, called [Minotar](https://scaleway.com). As this API is offering different views, this script also allow you to see any skin on 7 views:


| ID | Type  | Preview | Mintotar API URL |
| -------------| ------------- | ------------- | ------------- |
| 1 | Basic head | ![basic-head](https://minotar.net/avatar/Tejy/50.png)  |```https://minotar.net/avatar/user/100``` | 
| 2 | Head with Helm | ![head-helm](https://minotar.net/helm/Tejy/50.png) |```https://minotar.net/helm/user/100.png``` | 
| 3 | Isometric Head | ![isometric-head](https://minotar.net/cube/Tejy/50.png) |```https://minotar.net/cube/user/100.png``` | 
| 4 | Body | ![body](https://minotar.net/body/Tejy/50.png) |```https://minotar.net/body/user/100.png``` | 
| 5| Body with armor | ![body-armor](https://minotar.net/armor/body/Tejy/50.png) |```https://minotar.net/armor/body/user/100.png``` | 
| 6| Bust | ![bust](https://minotar.net/bust/Tejy/50.png) |```https://minotar.net/bust/user/100.png``` | 
| 7| Full skin | ![skin](https://minotar.net/skin/Tejy.png) |```https://minotar.net/skin/user``` | 

## Different skin sizes

For each size skin view (exept full skin, ID=7), you can define a width in pixels.
By default, this value is set to 100px. You can easily modify it to any other value.

## Prequisites

In order to make this script working, you will have to put 2 elements on your HTML/PHP page.

-Please create an input with the id ```user-ID```  and add an image with the id ```img-ID```.
> Please replace the ID by the wished view. 
Eg. ```user-3``` for the third view.

## CDN Version - Recommended for new users

You can use this version to avoid hosting the script, and save some minutes.

-Github CDN: ```https://raw.githubusercontent.com/imtomjorge/Minecraft-Skin-WebViewer/master/minecraft-skin-viewer-latest.js```

## Self Hosted Version - Recommended for advanced users

As this tool is created in JavaScript, you will need to host this file on your server, to use it, by just uploading it.
Don't forget to add the JavaScript file reference to your web page.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License 
[MIT](https://choosealicense.com/licenses/mit/)

