var rockets = []
var particles = []
const gravity = -0.00004
document.body.style.overflow = 'hidden'
function launchRocket(){
    var launchTime = performance.now()
    var startVelocityY = ((Math.random() * 0.03) - 0.015 ) + 0.07
    var startVelocityX = ((Math.random() * 0.02) - 0.01 )
    var startPositionX = (((Math.random() * 6) - 3 )+50)
    var spinSpeed = (Math.random() -0.5)
    var rocket = document.createElement('rocket')
    document.body.appendChild(rocket)
    // rocket.setAttribute('class', 'rocket')
    rocket.style.position='absolute'
    rocket.style.height = '50px'
    rocket.style.width= '50px'
    rocket.style.border = '1px solid black'
    rocket.style.backgroundColor="rgb(100,200,50)"
    var rocketMeta = {
        element : rocket,
        launchTime : launchTime,
        startVelocityY : startVelocityY,
        startVelocityX : startVelocityX,
        startPositionX : startPositionX,
        spinSpeed      : spinSpeed
    }
    rockets.push(rocketMeta)
}

function launchParticle(rm){
    var launchTime = performance.now()
    var startVelocityY = ((Math.random() * 0.03) - 0.015 ) + 0.04
    var startVelocityX = ((Math.random() * 0.02) - 0.01 )
    var startPositionX = parseFloat(rm.element.style.left)
    var startPositionY = parseFloat(rm.element.style.bottom)
    var particle = document.createElement('particle')
    var spinSpeed = (Math.random() -0.5)
    var borderRadius = Math.floor(Math.random()*15)

    document.body.appendChild(particle)
    // rocket.setAttribute('class', 'rocket')
    particle.style.position='absolute'
    particle.style.height = '20px'
    particle.style.width= '20px'
    particle.style.border = '1px dashed black'
    particle.style.borderRadius = borderRadius + 'px'
    var red = Math.floor(Math.random() * 255)
    var green = Math.floor(Math.random() * 255)
    var blue = Math.floor(Math.random() * 255)
    particle.style.backgroundColor=`rgb(${red}, ${green}, ${blue})`
    particle.style.transform = 'translateY(50%) translateX(-50%)'
    var particleMeta = {
        element : particle,
        launchTime : launchTime,
        startVelocityY : startVelocityY,
        startVelocityX : startVelocityX,
        startPositionX : startPositionX,
        startPositionY : startPositionY,
        spinSpeed      : spinSpeed
    }
    particles.push(particleMeta)
}

function setRocketPositions(){
    rockets.forEach(function(rm){ // RocketMeta
        var elapsedTime = performance.now() - rm.launchTime
        rm.element.style.bottom = ( rm.startVelocityY * elapsedTime ) + (( gravity * elapsedTime * elapsedTime )/2) + 'vh'
        rm.element.style.left = ( (rm.startVelocityX * elapsedTime) + rm.startPositionX ) + 'vw'
        rm.element.style.borderRadius = ((rm.startVelocityY + ( gravity*elapsedTime )) * 500 ) + 'px'
        var rotation = (elapsedTime * rm.spinSpeed)
        rm.element.style.transform = `rotateZ(${rotation}deg)`
    })
    rockets = rockets.filter(function(rm){ 
        var elapsedTime = performance.now() - rm.launchTime
        // console.log(rm.rocket.style.bottom[0] === '-')
        if ( (rm.startVelocityY + ( gravity*elapsedTime )) < 0 ) {
            rm.element.remove()
            var numParticles = Math.floor((Math.random()+1)*5)
            for ( var i = 0; i < numParticles; i++ ){
                launchParticle(rm)
            }
            return false
        }
        else { return true }
    })
}

function setParticlePositions(){
    particles.forEach(function(pm){ // ParticleMeta
        var elapsedTime = performance.now() - pm.launchTime
        pm.element.style.bottom = (( pm.startVelocityY * elapsedTime ) + pm.startPositionY ) + (( gravity * elapsedTime * elapsedTime )/2) + 'vh'
        pm.element.style.left = ( (pm.startVelocityX * elapsedTime) + pm.startPositionX ) + 'vw'
        var rotation = (elapsedTime * pm.spinSpeed)
        pm.element.style.transform = `rotateZ(${rotation}deg)`
    })
    particles = particles.filter(function(pm){ 
        var elapsedTime = performance.now() - pm.launchTime
        // console.log(rm.rocket.style.bottom[0] === '-')
        if ( pm.element.style.bottom[0] === '-' ) {
            pm.element.remove()
            return false
        }
        else { return true }
    })
}

function render(){
    setRocketPositions()
    setParticlePositions()
    requestAnimationFrame(render)
}
render()

document.addEventListener('keydown', function(event){
    if ( event.which === 32 ){
        launchRocket()
    }
})
