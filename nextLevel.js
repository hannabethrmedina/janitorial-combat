var stateText;
var counter = 0;
var stateText;

demo.nextLevel = function(){};
demo.nextLevel.prototype = {
	preload: function(){
        game.load.audio('lvlComp', 'assets/audio/completetask.mp3');
        game.load.image('NextLevel', 'assets/NextLevelScreen.png');
	},
	create: function(){
        	
        var nextLevel = game.add.sprite(0, 0, 'NextLevel');		
		lvlComp = game.add.audio('lvlComp');
        lvlComp.play();
		
        
    	},
	update: function(){
        
        var N = game.input.keyboard.addKey(Phaser.Keyboard.N);
        
        N.onDown.add(function(){
            if (counter == 0){
                y = addLevel();
            }
            counter++;
        //if(game.input.keyboard.isDown(Phaser.Keyboard.N)){
            //addLevel();
            //var y = getCookie('level')
            game.state.start('level' + y);
        });
    }    
   
};

function addLevel(){
    var x = getCookie('level');
    x = Number(x);
    x++;
    x = x.toString();
    document.cookie = 'level = ' + x;
    console.log(x);
    return(x)
}

function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
}
