(function(global,$) {

  //creating a new object
  var Jokes= function(language){
    return new Jokes.init(language)
  }

  //languages that are supported on the page
  var supportedLangs = ['en','es','fn'];

  //the welcomes to the generator
  var intros = {
      en: 'Welcome to the Joke Compiler',
      es: 'Bienvenido a la Joke Compiler',
      fn: 'Bienvenue a la Joke Compiler'
  };

//instructions for how to use the generator
  var instructions = {
      en: 'Use the joke compiler form below to create your joke!',
      es: '¡Usa el forma del compilador de bromas crear tu broma!',
      fn: 'Utilisez le forme compilateur de blagues créer votre blague'
  }

  var setups = {
    en: 'Setup - Insert the setup to your joke below',
    es: 'Preparar - Inserta la configuración a tu broma a continuación',
    fn: 'Instaurer - Insérez la configuration à votre blague ci-dessous'
  }

  var climaxs = {
    en: 'Climax - Insert the climax to your joke below',
    es: 'El punto culminante - Inserta el clímax de tu broma a continuación',
    fn: 'Le point culminant - Insérez le point culminant de votre blague ci-dessous'
  }

  var punchlines = {
    en: 'Punchline - Insert the punchline that will get the biggest laugh!',
    es: 'La frase clave - ¡Inserta el punchline que causará la risa más grande!',
    fn: 'Le trait final - Insérez la punchline qui fera le plus rire!'
  }

  var jokeoutputs = {
    en: "Here is your joke!",
    es: "¡Aquí está tu chiste!",
    fn: 'Voici ta blague!'
  }

 Jokes.prototype = {
   validate: function() {
     if(supportedLangs.indexOf(this.language) === -1){
       throw "Invalid language";
     }
   },

   setLang: function(lang) {
      this.language = lang;
      this.validate();
      return this;
   },

   //pulling in the text for the intros
  intro: function() {
  return intros[this.language];
  },

  //pulling in the text for the instructions

  instruction: function() {
    return instructions[this.language];
  },

  setup: function() {
    return setups[this.language];
  },

  climax: function() {
    return climaxs[this.language];
  },

  punchline: function() {
    return punchlines[this.language];
  },

  jokeoutput: function(){
    return jokeoutputs[this.language];
  },

  HTMLIntro: function(selector, intro){
    if (!$) {
      throw 'jQuery not loaded'
    }

    if (!selector) {
      throw 'Missing jQuery selector';
    }


  //determines the intros
  var jokeintros;
  if (intro) {
    jokeintros = this.intro()
  }

  $(selector).html(jokeintros);
  return this;

  },

 HTMLInstructions: function(selector, instruction){
   if (!$){
     throw 'jQuery not loaded'
   }

   if (!selector) {
     throw 'Missing jQuery Selector'
   }


 var jokeinstructions;
  if (instruction) {
    jokeinstructions = this.instruction()
  }

  $(selector).html(jokeinstructions);
    return this;
  },

  HTMLSetup: function(selector, setup){

    if (!$){
      throw 'jQuery not loaded'
    }

    if (!selector) {
      throw 'Missing jQuery Selector'
    }

    var setupjoke;
    if (setup) {
      setupjoke =  this.setup()
    }

    $(selector).html(setupjoke);
    return this;
  },

  HTMLClimax: function(selector, climax){
    if (!$){
      throw 'jQuery not loaded'
    }

    if (!selector) {
      throw 'Missing jQuery Selector'
    }

    var climaxjoke;
     if (climax) {
       climaxjoke = this.climax()
     }

     $(selector).html(climaxjoke);
     return this;
  },

  HTMLPunchline: function(selector, punchline){
    if (!$){
      throw 'jQuery not loaded'
    }

    if (!selector) {
      throw 'Missing jQuery Selector'
    }

    var punchlinejoke;
    if (punchline){
      punchlinejoke = this.punchline()
    }

    $(selector).html(punchlinejoke);
    return this;
  },

  HTMLJokeOutput: function(selector, jokeoutput) {
    if (!$){
      throw 'jQuery not loaded'
    }

    if (!selector) {
      throw 'Missing jQuery Selector'
    }

    var jokeoutput;
    if (jokeoutput) {
      jokeoutput = this.jokeoutput();
    }

    $(selector).html(jokeoutput);
    return this

  }
};


Jokes.init = function(language) {
  var self = this;
  self.language = language || 'en';
  self.validate();
}

Jokes.init.prototype = Jokes.prototype;

global.Jokes = global.J$ = Jokes;

}(window,jQuery));
