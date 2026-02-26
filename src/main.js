import iFrameContent from '@/modules/iFrameContent';
import iFrameParent from '@/modules/iFrameParent';

function init(){

    //if inside iFrame, run the Content script
    if(window.self !== window.top){
        iFrameContent();
    }

    const iFrameAdjuster = () => {
        const adjuster = iFrameParent();
        adjuster.init();
    }

    //create window object
    window.iFrameAdjuster = iFrameAdjuster;
}


(()=>{
    if(document.readyState == 'interactive') return init();
    document.addEventListener('DOMContentLoaded',  init);
})();