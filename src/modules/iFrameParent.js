export default function iFrameParent() {
    
    let state = {
        frames: document.querySelectorAll('[data-iframe-adjust]'),
    }
    
    let module = {
        
        setupFrames(){
            [...state.frames].map((frame, index) =>{ 

                let frameId = `frame-${index + 1}`;
                let message = {
                    key: 'iframe-adjuster',
                    id: frameId,
                };

                frame.setAttribute('data-iframe-id', frameId);
                frame.contentWindow.postMessage(message, '*');
            });
        },

        getFrameById(id){
            return document.querySelector(`[data-iframe-adjust][data-iframe-id="${id}"]`);
        },

        onMessage(e){
            let data = e.data;
            if(data.key !== 'iframe-adjuster') return; 

            let frame = this.getFrameById(data.id);
            if(!frame) return;

            requestAnimationFrame(() => {
                frame.style.height = `${data.height}px`;
            });
        },

        setEventBindings(){
            window.addEventListener('message', this.onMessage.bind(this));

            [...state.frames].map(frame => {
                frame.addEventListener('load', this.setupFrames.bind(this));
            });
        },

        init(){
            if(!state.frames.length) return;
            this.setupFrames();
            this.setEventBindings();            
        },
    }

    return module;
};