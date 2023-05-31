import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

Assets.add("MyDino", "./Dino.png");
Assets.add("clampy", "./clampy.png");

Assets.load(["MyDino","clampy"]).then(()=>{


	const clampy: Sprite = Sprite.from("clampy");
	console.log ("Hola mundo!", clampy.width, clampy.height);

	const Dino: Sprite = Sprite.from("MyDino");

	app.stage.addChild(clampy);
	app.stage.addChild(Dino);


});

const clampy: Sprite = Sprite.from("myDino");

console.log("Hola mundo");
//clampy.anchor.set(0);

clampy.x = 0;
clampy.y = 0;

app.stage.addChild(clampy);