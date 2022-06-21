export function useReplace(value,name){
    let url = new URL(window.location.href)
    url.searchParams.set(name,value)
    if(!value){
        url.searchParams.delete(name)
    }
    return url.search
}
export default useReplace