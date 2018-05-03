import {Observable} from "rxjs"
import lodash from "lodash"

const {debounce} = lodash

const source = Observable.create((observer)=>{
    observer.next(window.innerWidth)
    const onResize = debounce(()=>{
        observer.next(window.innerWidth)
    })
    window.addEventListener('resize', onResize, true)
})

source.subscribe();

export const ViewStream = source;
