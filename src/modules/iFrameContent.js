export let mixin = (config = {}) => {
    
    let state = {
        currentHeight: null,
        frameId: null,
    }

    let module = {

        //determine height of framed content
        getContentHeight(){
            let allElements = document.querySelectorAll('*');
            if (!allElements.length) return;

            let heights = [...allElements].map(element => {
                return element.offsetTop + element.offsetHeight;
            });
            
            return Math.max(...heights);
        },

        //check if content height has changed
        heightHasChanged(newHeight){
            return state.currentHeight !== newHeight;
        },

        //on height change, send new height up to parent
        adjust(){
            if(!state.frameId) return;
            
            let contentHeight = this.getContentHeight();
            if(!this.heightHasChanged(contentHeight)) return;

            state.currentHeight = contentHeight;

            let message = {
                key: 'iframe-adjuster',
                id: state.frameId,
                height: state.currentHeight,
            };

            window.parent.postMessage(message, '*')
        },

        //save frame id
        setId(id){
            state.frameId = id;
        },

        //on message from parent frame
        onMessage(e){
            let data = e.data;
            if(data.key !== 'iframe-adjuster') return; 

            this.setId(data.id);
        },

        //check for changes
        loop(){
            requestAnimationFrame(()=>{
                this.adjust();
                this.loop();
            });
        },

        setEventBindings(){
            window.addEventListener('message', this.onMessage.bind(this));
        },
    
        init(){
            this.loop();
            this.setEventBindings();
        },
    }

    return module.init();
};

export default function init(config) {
    return mixin( config );
};