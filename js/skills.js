const Texts = ['HTML', 'CSS', 'JAVASCRIPT', 'FLUTTER', 'DART', 'PYTHON', 'JAVA', 'PHP', 'UX/UI', 'ML', 'KOTLIN', 'SQL'];

var tagCloud = TagCloud('.skills', Texts, {

    // Sphere radius in px
    radius: 250,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',

    // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
    direction: 135,

    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
    keep: true

});

