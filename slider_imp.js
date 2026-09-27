    // 24: [function(t, e, a) {
    //     "use strict";
    //     var i = t("./state"),
    //         n = t("./signals");

    //     function Slider(t, e) {
    //         "string" == typeof t && (t = document.querySelector(t)), this.mousedown = this.mousedown.bind(this), this.mousemove = this.mousemove.bind(this), this.mouseup = this.mouseup.bind(this), this.element = t, this.stateKey = t.dataset.state, this.handle = t.querySelector("button"), this.gameScale = 1, this.scale = parseFloat(t.dataset.scale) || 1, this.minValue = parseFloat(t.dataset.min), this.maxValue = parseFloat(t.dataset.max), this.valuePrefix = t.dataset.prefix || "", this.valuePrecision = parseFloat(t.dataset.precision) || 0, this.valueRounding = parseFloat(t.dataset.rounding) || 10, this.valueMultiplier = parseFloat(t.dataset.stateMultiplier) || 1, this.displayValue = document.querySelector(t.dataset.display), this.dragStartX = 0, this.handle.addEventListener("mousedown", this.mousedown, {
    //             passive: !0
    //         }), this.handle.addEventListener("touchstart", this.mousedown, {
    //             passive: !0
    //         }), n.onResize(this.resize, this), this.onChange = e
    //     }
    //     Slider.prototype.resize = function(t) {
    //         this.gameScale = t
    //     }, Slider.prototype.mousedown = function(t) {
    //         t.touches ? this.dragStartX = t.touches[0].clientX - this.handle.offsetLeft * this.gameScale * this.scale : this.dragStartX = t.clientX - this.handle.offsetLeft * this.gameScale * this.scale, document.addEventListener("touchmove", this.mousemove, !0), document.addEventListener("touchend", this.mouseup, !0), document.addEventListener("mousemove", this.mousemove, !0), document.addEventListener("mouseup", this.mouseup, !0)
    //     }, Slider.prototype.mousemove = function(t) {
    //         if (t.touches) var e = Math.min(Math.max((t.touches[0].clientX - this.dragStartX) / (this.gameScale * this.scale), 0), 213);
    //         else e = Math.min(Math.max((t.clientX - this.dragStartX) / (this.gameScale * this.scale), 0), 213);
    //         var a = Math.round((e / 213 * (this.maxValue - this.minValue) + this.minValue) * this.valueRounding) / this.valueRounding;
    //         i.data[this.stateKey] = a * this.valueMultiplier, (a !== Math.round(a) || this.valuePrefix) && (a = a.toFixed(this.valuePrecision)), this.handle.style.left = e + "px", this.handle.textContent = this.valuePrefix + a, this.displayValue && (this.displayValue.textContent = this.valuePrefix + a), this.onChange && this.onChange()
    //     }, Slider.prototype.mouseup = function() {
    //         document.removeEventListener("touchmove", this.mousemove, !0), document.removeEventListener("touchend", this.mouseup, !0), document.removeEventListener("mousemove", this.mousemove, !0), document.removeEventListener("mouseup", this.mouseup, !0)
    //     }, Slider.prototype.setValue = function(t) {
    //         var e = ((t /= this.valueMultiplier) - this.minValue) / (this.maxValue - this.minValue),
    //             a = Math.min(Math.max(213 * e, 0), 213);
    //         this.handle.style.left = a + "px", (t !== Math.round(t) || this.valuePrefix) && (t = t.toFixed(this.valuePrecision)), this.handle.textContent = this.valuePrefix + t, this.displayValue && (this.displayValue.textContent = this.valuePrefix + t), this.onChange && this.onChange()
    //     }, e.exports = Slider
    // }, {
    //     "./signals": 22,
    //     "./state": 25
    // }],