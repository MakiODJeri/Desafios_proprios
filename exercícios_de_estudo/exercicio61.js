//Objeto literal
const Keyboard_1 = {
    color: 'Black and Pink',
    switches: 'Akko jelly purple',
    keycaps: 'Pbt dye-sub',
    mode: 'Wired',
    wired: true,
    wireless: true,
    typing: false,
    battery: 3000,
    rgb: true,
    rgbColors: 'rgb',
    setOnMode1: function() {
        if (this.wired == true) {
            this.mode = 'Wired'
        }
    },
    setOnMode2: function() {
        if (this.wireless == true) {
            this.mode = 'Bluetooth'
        }
    },
    setOnMode3: function() {
        if (this.wireless == true) {
            this.mode = '2.4 Ghz'
        }
    },
    toggleTyping: function() {
        if (!this.typing) {
            this.typing = true 
        } else {
            this.typing = false
        }
    },
    info: function() {
        console.log('Color: ' + this.color)
            console.log('Switches: ' + this.switches)
            console.log('Keycaps: ' + this.keycaps)
            console.log('Mode: ' + this.mode)
            console.log('Wired: ' + this.wired)
            console.log('Wireless: ' + this.wireless)
            console.log('Typing: ' + this.typing)
            console.log('Battery: ' + this.battery)
            console.log('Rgb: ' + this.rgb)
            console.log('Rgb Colors: ' + this.rgbColors)
            console.log('==============================')
    }
}
Keyboard_1.info()
//Factory
function CreateKeyboard(color='Black',switches='Gateron red',keycaps='Abs doubleshot',wired=true,wireless=false,battery=0,rgb=false,rgbColors=undefined) {
    return {
        color: color,
        switches: switches,
        keycaps: keycaps,
        mode: wired==true? 'Wired':'2.4 Ghz',
        wired: wired,
        wireless: wireless,
        typing: false,
        battery: wireless==true? battery:0,
        rgb: rgb,
        rgbColors: rgbColors,
        setOnMode1: function() {
            if (this.wired == true) {
                this.mode = 'Wired'
            }
        },
        setOnMode2: function() {
            if (this.wireless == true) {
                this.mode = 'Bluetooth'
            }
        },
        setOnMode3: function() {
            if (this.wireless == true) {
                this.mode = '2.4 Ghz'
            }
        },
        toggleTyping: function() {
            if (!this.typing) {
                this.typing = true 
            } else {
                this.typing = false
            }
        },
        info: function() {
            console.log('Color: ' + this.color)
            console.log('Switches: ' + this.switches)
            console.log('Keycaps: ' + this.keycaps)
            console.log('Mode: ' + this.mode)
            console.log('Wired: ' + this.wired)
            console.log('Wireless: ' + this.wireless)
            console.log('Typing: ' + this.typing)
            console.log('Battery: ' + this.battery)
            console.log('Rgb: ' + this.rgb)
            console.log('Rgb Colors: ' + this.rgbColors)
            console.log('==============================')
        }
    }
}
const Keyboard_2 = CreateKeyboard()
Keyboard_2.info()
//prototype
function Keyboard(color='Black'/*,switches='Gateron red',keycaps='Abs doubleshot',wired=true,wireless=false,battery=0,rgb=false,rgbColors=undefined*/) {
    this.color = color
    this.typing = false
}
Keyboard.prototype.toggleTyping = function() {
    if (!this.typing) {
        this.typing = true 
    } else {
        this.typing = false
    }
}
Keyboard.prototype.info = function() {
    console.log('Color: ' + this.color)
    console.log('Typing: ' + this.typing)
    console.log('==============================')
}
const Keyboard_3 = new Keyboard()
Keyboard_3.info()
//Class
class createKeyboard {
    constructor(color='Black',switches='Gateron red',keycaps='Abs doubleshot') {
        this.color = color
        this.switches = switches
        this.keycaps = keycaps
        this.typing = false
    }
    toggleTyping() {
        if (!this.typing) {
            this.typing = true 
        } else {
            this.typing = false
        }
    }
    info() {
        console.log('Color: ' + this.color)
        console.log('Switches: ' + this.switches)
        console.log('Keycaps: ' + this.keycaps)
        console.log('Typing: ' + this.typing)
        console.log('==============================')
    }
}
const Keyboard_4 = new createKeyboard()
Keyboard_4.info()