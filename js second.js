var x = function(){
    alert("Eating ice cream, yo!");
    };
var y = function(){
        alert("Crying in the corner.");
    };

var person = {
    name : "Trey",
    distance_travelled : 0,
    say_name : function() {
        alert("Trey");
    },
    say_something : function(arg){
		alert(this.name + " says: '" + arg + "'");
	},
    walk : function() {
		alert(person.name + " is walking.");
		this.distance_travelled += 3;
	},
    run : function() {
		alert(person.name + " is running.");
		this.distance_travelled += 5;
	},
    crawl : function() {
		alert(person.name + " is crawling.");
		this.distance_travelled += 1;
	},
    doSomething : function(){
        random = Math.random();
        if(random < 0.33)
        { 
            return person.walk;
        }
        else if(random < 0.66)
        {
            return person.run;
        }
        else
        {
            return person.crawl;
        }
    },
    fly : function(x, y){
        randomed = Math.random();
        if(randomed <= 0.3)
        {
            alert("Flyingggggg!!!!");
            return x();
        }
        else
        {
            alert("Failed to fly... Ow!");
            return y();
        }
    }      
};

        
var returned_function = person.doSomething();

returned_function();

person.fly(x, y);
