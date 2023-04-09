/* to randomize our appearence of the user's avatar*/
AFRAME.registerComponent("spawn-in-circle", {
  schema: {
    radius: { type: "number", default: 1 },
  },

  init: function () {
    var el = this.el;
    var center = el.getAttribute("position"); //origional posn

    var angleRad = this.getRandomAngleInRadians(); //for circle
    var circlePoint = this.randomPointOnCircle(this.data.radius, angleRad); //get random point
    var worldPoint = {
      x: circlePoint.x + center.x,
      y: center.y,
      z: circlePoint.y + center.z,
    };
    el.setAttribute("position", worldPoint);

    var angleDeg = (angleRad * 180) / Math.PI; //randomizing initial angle
    var angleToCenter = -1 * angleDeg + 90;
    angleRad = THREE.Math.degToRad(angleToCenter);
    el.object3D.rotation.set(0, angleRad, 0);
  },

  getRandomAngleInRadians: function () {
    return Math.random() * Math.PI * 2;
  },

  randomPointOnCircle: function (radius, angleRad) {
    var x = Math.cos(angleRad) * radius;
    var y = Math.sin(angleRad) * radius;
    return { x: x, y: y };
  },
});
