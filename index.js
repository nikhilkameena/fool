// first

// let controller = new ScrollMagic.Controller();
// let timeline = new TimelineMax();

// timeline.to(".mainBoxLeft", 3, { left: 0 });

// let scene = new ScrollMagic.Scene({async innerText(options) {
    return await this._frame.innerText(this._selector, {
            strict: true,
            ...options
    });
}Hello, world!
//   triggerElement: "#sec",
//   duration: "100%",
//   triggerHook: "onEnter",
// })
//   .setTween(timeline)
//   .addTo(controller);
