import {useRef, useState, useEffect} from 'react';




function Index(){

	const canvasRef = useRef(null); // 캔버스 useRef 사용
	const ctxRef = useRef(null); // 드로잉 context에 useRef 사용
	
	const [context, setContext] = useState(); // 드로잉 context의 state
	const [canvasTag, setCanvasTag] = useState([]); // 캔버스의 state
	

	
	useEffect(()=> {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");

		canvas.resize = function(){
			canvas.width = window.innerWidth*0.9;
			canvas.height = window.innerHeight;
		}
		canvas.resize();
			
		window.addEventListener("resize", function(){
			canvas.resize();
			init();

		})
		
		
		function Circle(x,y,vx,vy,radius){
			this.x = x;
			this.y = y;
			this.vx = vx;
			this.vy = vy
			this.radius = radius;

			this.draw = function(){
				ctx.beginPath();
				ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
				// ctx.arc(x,y,radius,0,Math.PI*2,false);
				var rgba = "rgba("+this.vx+","+this.y+","+this.x+",255)";
				ctx.strokeStyle = rgba;
				ctx.stroke();
				// ctx.fillStyle = "rgba("+this.y+","+this.y+","+this.x+",0.1)"
				// ctx.fill();

			}
			this.update = function(){


				// console.log("x" + (x));
				// console.log("y" + y);

				// console.log(innerWidth)
				if(this.x + this.radius > canvas.width || this.x - this.radius < 0){
					this.vx = -this.vx;
				}
				if(this.y + this.radius > canvas.height || this.y - this.radius < 0 ){
					this.vy = -this.vy;
				}
				this.x += this.vx;
				this.y += this.vy;

				this.draw();
			}
		}
		
		let circleArr = [];
		
		for(var i=0; i < 150; i++){
			var radius = Math.floor(Math.random()* 30 );
			var x = Math.floor(Math.random() * (canvas.width-radius*2));
			var y = Math.floor(Math.random() * (canvas.height-radius*2));

			var vx = (Math.random(2,30) - 0.5) * 2;
			var vy = (Math.random(2,30) - 0.5) * 2;

			circleArr.push(new Circle(x,y,vx,vy,radius));
		};
		
		function init(){
			circleArr = [];
			
			for(var i=0; i < 150; i++){
				var radius = Math.floor(Math.random()* 30 );
				var x = Math.floor(Math.random() * (canvas.width-radius*2));
				var y = Math.floor(Math.random() * (canvas.height-radius*2));

				var vx = (Math.random(2,30) - 0.5) * 2;
				var vy = (Math.random(2,30) - 0.5) * 2;

				circleArr.push(new Circle(x,y,vx,vy,radius));
			};
		}
		
		function drawing(){
			requestAnimationFrame(drawing);
			ctx.clearRect(canvas.width/4,canvas.offsetTop-50,canvas.width/2,canvas.offsetTop+300);
			ctx.storkeStyle= "red";
			ctx.lineWidth = 2.5;
			for(var i=0; i < circleArr.length; i++){
				circleArr[i].update();	
	
			}
			
			// ctx.fillStyle = "rgba(0,0,0,0.2)";
			// ctx.fill();
			// ctx.fillRect(canvas.width/4,canvas.offsetTop-50,canvas.width/2,canvas.offsetTop+300)
			
			ctx.fillStyle = "white"
			ctx.textAlign = "center"
			
			ctx.font = "bold 36px Arial";
			ctx.fillText("Welcome", canvas.width/2,canvas.offsetTop);    

			ctx.font = "bold 20px Arial";
			ctx.fillText("환영합니다.", canvas.width/2,canvas.offsetTop+150);    

			ctx.fillText("다양한 작품을 준비중입니다.",canvas.width/2,canvas.offsetTop+200); 

			ctxRef.current = ctx;			
		}
		drawing();
		
		
		
		setContext(ctxRef.current);
		setCanvasTag(canvas);

	}, []);
	
	return (
		<>
		<canvas ref = {canvasRef} id="canvas">
		</canvas>

		</>
	);
}

export default Index;